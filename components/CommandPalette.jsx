"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Copy, CornerDownLeft, Download, FileText, Search, Trophy, User } from "lucide-react";
import { nav, profile } from "@/lib/site";
import { caseStudies } from "@/lib/work";
import { hackathons } from "@/lib/hackathons";
import { lockScroll, unlockScroll } from "./fx/scroller";

// Quick search over the whole site. Opens with Cmd+K or Ctrl+K.
export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [note, setNote] = useState("");
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const opener = useRef(null);

  const items = useMemo(
    () => [
      { group: "Pages", label: "Home", href: "/", icon: User },
      ...nav.map((item) => ({ group: "Pages", label: item.label, href: item.href, icon: FileText })),
      { group: "Pages", label: "Contact", href: "/contact", icon: FileText },
      ...caseStudies.map((study) => ({ group: "Case studies", label: study.shortTitle, hint: study.area, href: `/work/${study.slug}`, icon: FileText })),
      ...hackathons.map((hack) => ({ group: "Hackathons", label: hack.project, hint: hack.event, href: `/hackathons#${hack.id}`, icon: Trophy })),
      { group: "Actions", label: "Copy email address", hint: profile.email, action: "copy", icon: Copy },
      { group: "Actions", label: "Download resume", hint: "PDF", action: "resume", icon: Download },
      { group: "Actions", label: "Open GitHub", external: profile.github, icon: ArrowUpRight },
      { group: "Actions", label: "Open LinkedIn", external: profile.linkedin, icon: ArrowUpRight },
    ],
    []
  );

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return items;
    return items.filter((item) => `${item.label} ${item.hint ?? ""} ${item.group}`.toLowerCase().includes(needle));
  }, [items, query]);

  const close = useCallback(() => {
    setOpen(false);
    opener.current?.focus?.();
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        opener.current = document.activeElement;
        setOpen((value) => !value);
      }
    };
    const onOpen = () => {
      opener.current = document.activeElement;
      setOpen(true);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("palette:open", onOpen);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("palette:open", onOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActive(0);
    setNote("");
    lockScroll();
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      cancelAnimationFrame(id);
      unlockScroll();
    };
  }, [open]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: "nearest" });
  }, [active]);

  async function run(item) {
    if (!item) return;
    if (item.action === "copy") {
      try {
        await navigator.clipboard.writeText(profile.email);
        setNote("Email address copied.");
      } catch {
        setNote(`Copy did not work. The address is ${profile.email}.`);
      }
      return;
    }
    if (item.action === "resume") {
      const link = document.createElement("a");
      link.href = profile.resume;
      link.download = "";
      link.click();
    } else if (item.external) {
      window.open(item.external, "_blank", "noopener,noreferrer");
    } else {
      router.push(item.href);
    }
    setOpen(false);
  }

  function onKeyDown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((value) => (results.length ? (value + 1) % results.length : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((value) => (results.length ? (value - 1 + results.length) % results.length : 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      run(results[active]);
    } else if (event.key === "Tab") {
      // keep focus in the search field while the palette is open
      event.preventDefault();
    }
  }

  let lastGroup = "";

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="palette-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} onMouseDown={close}>
          <motion.div
            className="palette"
            role="dialog"
            aria-modal="true"
            aria-label="Quick search"
            initial={{ opacity: 0, y: -14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onMouseDown={(event) => event.stopPropagation()}
            onKeyDown={onKeyDown}
          >
            <div className="palette-input">
              <Search size={18} aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                role="combobox"
                aria-expanded="true"
                aria-controls="palette-list"
                aria-activedescendant={results[active] ? `palette-item-${active}` : undefined}
                aria-label="Search pages, projects, and actions"
                placeholder="Search pages, projects, and actions"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                autoComplete="off"
                spellCheck="false"
              />
              <kbd>Esc</kbd>
            </div>

            <ul id="palette-list" ref={listRef} role="listbox" aria-label="Results" className="palette-list">
              {results.length === 0 && <li className="palette-empty">Nothing matches &ldquo;{query}&rdquo;. Try a project name or a page.</li>}
              {results.map((item, i) => {
                const heading = item.group !== lastGroup ? item.group : null;
                lastGroup = item.group;
                const Icon = item.icon;
                return (
                  <li key={`${item.group}-${item.label}`} role="presentation">
                    {heading && <div className="palette-group">{heading}</div>}
                    <div
                      id={`palette-item-${i}`}
                      role="option"
                      aria-selected={i === active}
                      className="palette-item"
                      onMouseEnter={() => setActive(i)}
                      onClick={() => run(item)}
                    >
                      <Icon size={16} aria-hidden="true" />
                      <span>{item.label}</span>
                      {item.hint && <small>{item.hint}</small>}
                      <CornerDownLeft className="palette-enter" size={14} aria-hidden="true" />
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="palette-foot" role="status">
              {note || "Use the arrow keys to move, Enter to open."}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

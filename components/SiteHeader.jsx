"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Command, Download } from "lucide-react";
import { nav, profile } from "@/lib/site";
import BrandMark from "./BrandMark";
import { lockScroll, unlockScroll } from "./fx/scroller";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    lockScroll();
    return () => {
      document.removeEventListener("keydown", onKey);
      unlockScroll();
    };
  }, [open]);

  const current = (href) => (pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined);
  const links = [...nav, { href: "/contact", label: "Contact" }];

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="nav-bar">
          <Link href="/" className="brand" aria-label={`${profile.shortName}, home`}>
            <BrandMark />
            <span>{profile.shortName}</span>
          </Link>

          <nav className="main-nav" aria-label="Main">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} aria-current={current(item.href)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <button type="button" className="kbd-button" onClick={() => window.dispatchEvent(new Event("palette:open"))} aria-label="Open quick search">
              <Command size={13} aria-hidden="true" />K
            </button>
            <Link className="btn btn--sm btn--light" href="/contact">
              Get in touch
            </Link>
            <button
              type="button"
              className={`menu-toggle${open ? " is-open" : ""}`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
            >
              <i />
              <i />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={item.href} aria-current={current(item.href)} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <a className="btn btn--glass" href={profile.resume} download>
              <Download size={16} aria-hidden="true" /> Download resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function PortfolioNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const close = (event) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <Link className="wordmark" href="/" aria-label="Abhishek Sairam Gaduputi, home">abhi<span>.</span><span className="wordmark-note">ML / AI ENGINEER</span></Link>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav" aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X /> : <Menu />}</button>
        <nav id="main-nav" className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          <Link href="/#work" onClick={() => setOpen(false)}>Selected work</Link>
          <Link href="/#experience" onClick={() => setOpen(false)}>Experience</Link>
          <Link href="/resume" aria-current={pathname === "/resume" ? "page" : undefined} onClick={() => setOpen(false)}>Resume</Link>
          <Link className="nav-contact" href="/#contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={16} /></Link>
        </nav>
      </div>
    </header>
  );
}

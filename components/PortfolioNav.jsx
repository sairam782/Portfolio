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
    const close = event => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const links = [
    { href: "/#work", label: "Work" },
    { href: "/#hackathons", label: "Hackathons" },
    { href: "/#experience", label: "Experience" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <header className="site-header"><div className="shell nav-inner">
      <Link className="wordmark" href="/" aria-label="Abhishek Sairam Gaduputi, home"><span className="brand-mark">a<span>g</span></span><span className="brand-name">abhishek<span> / AI</span></span></Link>
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav" aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X /> : <Menu />}</button>
      <nav id="main-nav" className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
        {links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <Link className="nav-contact" href="/#contact" onClick={() => setOpen(false)}>Let’s connect <ArrowUpRight size={15} /></Link>
      </nav>
    </div></header>
  );
}

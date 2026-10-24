"use client";

import { createContext, useContext, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MotionConfig, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Github, Linkedin, Pause, Play, Download } from "lucide-react";
import { profile } from "@/lib/portfolio";

const MotionSettings = createContext(true);
export const useStudioMotion = () => useContext(MotionSettings);
const links = [{ href: "/", label: "Overview", count: "01" }, { href: "/resume", label: "Experience", count: "04" }, { href: "/works", label: "Projects", count: "04" }, { href: "/hackathons", label: "Hackathons", count: "07" }, { href: "/contact", label: "About & contact", count: "↗" }];

export default function StudioShell({ children }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const NameHeading = pathname === "/" ? "h2" : "h1";
  const [paused, setPaused] = useState(false);
  const animated = !reduced && !paused;
  return <MotionSettings.Provider value={animated}><MotionConfig reducedMotion={animated ? "user" : "always"}>
    <div className="studio" data-motion={animated ? "on" : "off"}>
      <a className="skip-link" href="#main">Skip to content</a>
      <aside className="identity-panel">
        <div className="identity-top"><Link href="/" className="wordmark" aria-label="Abhishek, home">abhishek<span className="name-dot" /></Link><span className="identity-location">NJ, USA</span></div>
        <div className="identity-intro"><p className="overline">Machine learning engineer</p><NameHeading className="identity-name">Abhishek <span>Sairam <br/>Gaduputi.</span></NameHeading><p className="bio">Engineer. Researcher. Always building.<br/>Turning curiosity into AI systems that work in the real world.</p><p className="identity-study">MS Artificial Intelligence <span>↗</span> NJIT</p></div>
        <div className="identity-cta"><a className="pill-button primary" href={`mailto:${profile.email}`}>Let’s talk <ArrowUpRight size={17} /></a><a className="resume-link" href={profile.resume} download>Resume <Download size={15}/></a></div>
        <nav className="studio-nav" aria-label="Portfolio sections">{links.map(link => <Link key={link.href} href={`${link.href}#main`} aria-current={pathname === link.href ? "page" : undefined}><span>{link.label}</span><span className="nav-count">{link.count}</span><ArrowRight className="nav-arrow" size={15}/></Link>)}</nav>
        <div className="company-strip"><p className="overline">Where I’ve built & learned</p><div><span className="company-njit">NJIT</span><span className="company-montra">MONTRA<span> ELECTRIC</span></span><span className="company-froker">froker.</span></div></div>
        <div className="identity-footer"><span className="availability"><i/> Open to roles · May 2027</span><div className="social-controls"><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={17}/></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><button type="button" aria-label={reduced ? "Reduced motion enabled by your device" : paused ? "Enable animations" : "Pause animations"} title={reduced ? "Your device prefers reduced motion" : paused ? "Enable animations" : "Pause animations"} disabled={Boolean(reduced)} onClick={() => setPaused(!paused)}>{animated ? <Pause size={15}/> : <Play size={15}/>}</button></div></div>
      </aside>
      <main id="main" className="studio-main" tabIndex={-1}>{children}<footer className="studio-footer"><span>Abhishek Sairam Gaduputi © 2026</span><a href="#main">Back to top ↑</a></footer></main>
    </div>
  </MotionConfig></MotionSettings.Provider>;
}

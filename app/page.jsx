import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { ContactSection, Education, Experience, SectionHeading, Skills } from "@/components/PortfolioSections";
import ProjectGallery from "@/components/ProjectGallery";
import { profile } from "@/lib/portfolio";

export default function Home() {
  return <>
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-kicker"><span className="eyebrow">Abhishek Sairam Gaduputi</span><span className="location"><MapPin size={13} /> New Jersey, US</span></div>
      <div className="hero-grid">
        <div className="hero-copy"><p className="hero-role">MACHINE LEARNING & AI ENGINEER</p><h1 id="hero-title">Intelligence,<br />built for the<br /><em>real world.</em><span className="red-period" aria-hidden="true">*</span></h1><p className="hero-description">I turn models into things people use. From recommendation engines to autonomous tractors, I build AI that makes a measurable difference.</p><div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={19} /></a><a className="text-link" href={profile.resume} download>Download resume <ArrowDown size={16} /></a></div></div>
        <div className="hero-aside"><div className="portrait-frame"><Image src="/assets/portrait.jpg" alt="Abhishek Sairam Gaduputi" width={1374} height={1539} priority sizes="(max-width: 700px) 85vw, 360px" /><span className="portrait-index">ASG — 01</span><span className="portrait-caption">ENGINEER. RESEARCHER. BUILDER.</span><div className="portrait-stamp" aria-hidden="true">Ideas<br /><span>→ impact.</span></div></div><div className="hero-now"><span className="status-dot" /><div><strong>Currently at NJIT</strong><p>MS in Artificial Intelligence · Teaching Assistant</p><span>Seeking full-time ML / AI roles from May 2027</span></div></div></div>
      </div>
      <div className="hero-foot"><span>3+ years turning models into shipped products</span><span>SCROLL TO EXPLORE <ArrowDown size={13} /></span></div>
    </section>
    <section className="impact-band" aria-label="Selected results"><div className="shell impact-grid"><div className="impact-intro"><span className="eyebrow">Beyond the model</span><p>Real systems.<br /><em>Measurable impact.</em></p></div><div className="impact-stat"><strong>+37<span>%</span></strong><p>User engagement</p><span>Recommendation engine · Froker</span></div><div className="impact-stat"><strong>15–21<span>%</span></strong><p>Lower system cost</p><span>Autonomous spraying · Montra</span></div><div className="impact-stat"><strong>82<span>→</span>88<span>%</span></strong><p>Tumor detection accuracy</p><span>Synthetic MRI · Research project</span></div></div></section>
    <section className="section shell" id="work"><SectionHeading number="01" label="Selected work" title={<>A few things<br />I’ve <em>put into the world.</em></>}>Agentic systems, applied computer vision, and generative models. Built around a problem, evaluated against a purpose.</SectionHeading><ProjectGallery /><a className="all-github text-link" href={profile.github} target="_blank" rel="noopener noreferrer">More on GitHub <ArrowUpRight size={17} /></a></section>
    <div className="experience-surface"><Experience /></div>
    <section className="section shell about-section" id="about"><div className="about-intro"><p className="eyebrow">03 / Always learning</p><h2>An engineer’s mind.<br /><em>A curious person.</em></h2><p>I’m pursuing an MS in Artificial Intelligence at NJIT, focused on agentic systems and generative models. My path started with embedded robotics, moved into production machine learning, and now connects research with practical AI systems.</p><p>Outside the work, you’ll find me at NYC and New Jersey hackathons—or with a guitar in hand.</p><Link className="text-link" href="/resume">The full story <ArrowUpRight size={17} /></Link><div className="personal-note"><span>OFF THE CLOCK</span><p>Guitar strings & hackathon weekends.</p></div></div><div><Education /></div></section>
    <section className="shell toolkit-section" id="toolkit"><div className="toolkit-title"><p className="eyebrow">04 / The toolkit</p><h2>Tools of<br /><em>the trade.</em></h2></div><Skills /></section>
    <ContactSection />
  </>;
}

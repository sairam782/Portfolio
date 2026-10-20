import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { ContactSection, Education, Experience, SectionHeading, Skills } from "@/components/PortfolioSections";
import ProjectGallery from "@/components/ProjectGallery";
import NeuralLab from "@/components/NeuralLab";
import Hackathons from "@/components/Hackathons";
import { profile } from "@/lib/portfolio";

export default function Home() {
  return (
    <>
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-role"><span className="status-dot" />MACHINE LEARNING & AI ENGINEER</p>
            <h1 id="hero-title">Building AI.<br />Beyond the<br /><em>prototype.</em></h1>
            <p className="hero-description">I’m Abhishek. I build intelligent systems that move from an idea to the real world—across agents, computer vision, and production machine learning.</p>
            <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <ArrowUpRight size={18} /></a><a className="button button-outline" href={profile.resume} download>Get my resume <ArrowDown size={17} /></a></div>
            <div className="hero-identity"><Image src="/assets/portrait.jpg" alt="Abhishek Sairam Gaduputi" width={52} height={52} priority /><div><strong>Abhishek Sairam Gaduputi</strong><span>MS AI & Teaching Assistant @ NJIT</span></div><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Abhishek on GitHub"><Github size={20} /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Abhishek on LinkedIn"><Linkedin size={19} /></a></div>
          </div>
          <div className="hero-aside"><NeuralLab /><div className="hero-location"><span><MapPin size={13} />New Jersey, US</span><span>Open to full-time roles · May 2027</span></div></div>
        </div>
        <div className="hero-foot"><span>FROM MODELS TO MEASURABLE IMPACT</span><a href="#work">Scroll to explore <ArrowDown size={14} /></a></div>
      </section>
      <section className="impact-band" aria-label="Selected results"><div className="shell impact-grid">
        <div className="impact-stat"><strong>3<span>+</span></strong><p>Years building ML products</p><span>Research to production</span></div>
        <div className="impact-stat"><strong>37<span>%</span></strong><p>More user engagement</p><span>Recommendations at Froker</span></div>
        <div className="impact-stat"><strong>15–21<span>%</span></strong><p>Lower system cost</p><span>Autonomous spraying at Montra</span></div>
        <div className="impact-stat"><strong>4.0<span>/4.0</span></strong><p>MS Artificial Intelligence GPA</p><span>New Jersey Institute of Technology</span></div>
      </div></section>
      <section className="section shell" id="work"><SectionHeading number="01" label="Selected projects" title={<>Ideas are good.<br /><em>Working systems are better.</em></>}>A selection of agents, vision systems, and generative models. Explore the engineering behind each one.</SectionHeading><ProjectGallery /><a className="all-github text-link" href={profile.github} target="_blank" rel="noopener noreferrer">Explore my GitHub <ArrowUpRight size={17} /></a></section>
      <div className="hackathon-surface"><Hackathons /></div>
      <Experience />
      <div className="about-surface"><section className="section shell about-section" id="about">
        <div className="about-intro"><p className="eyebrow">04 / A little about me</p><h2>Curiosity is<br /><em>the common thread.</em></h2><p>My path started with embedded robotics, moved into recommendation systems and autonomous tractors, and now connects research with practical AI at NJIT.</p><p>I’m pursuing an MS in Artificial Intelligence, focused on agentic systems and generative models. I also help students build their foundations in computing as a Teaching Assistant.</p><div className="personal-note"><span>WHEN THE LAPTOP CLOSES</span><p>Guitar strings. New ideas. The next hackathon.</p></div><Link className="text-link" href="/resume">More about my background <ArrowUpRight size={16} /></Link></div>
        <div className="education-panel"><p className="eyebrow">Education</p><Education /></div>
      </section></div>
      <section className="section shell toolkit-section" id="toolkit"><div className="toolkit-title"><p className="eyebrow">05 / Technical stack</p><h2>Built with<br /><em>the right tools.</em></h2><p>The tools I use to experiment, evaluate, and ship.</p></div><Skills /></section>
      <ContactSection />
    </>
  );
}

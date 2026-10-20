import Link from "next/link";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { education, experience, profile, skills } from "@/lib/portfolio";

export function SectionHeading({ number, label, title, children }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{number}</span> / {label}</p><h2>{title}</h2></div>{children && <p className="section-intro">{children}</p>}</div>;
}

export function Experience({ full = false }) {
  return <section className="section shell" id="experience">
    <SectionHeading number="03" label="Experience" title={<>Different domains.<br /><em>The same drive to build.</em></>}>From consumer products to autonomous tractors. Now, helping the next generation build their foundations in computing.</SectionHeading>
    <div className="experience-list">{experience.map((job, index) => <article className="experience-row" key={job.company}>
      <div className="experience-meta"><span className="index">0{index + 1}</span><p>{job.dates}</p><span>{job.location}</span>{job.current && <span className="current-label"><i /> Current role</span>}</div>
      <div className="experience-body"><h3>{job.role}</h3><p className="company">{job.company}</p><p className="team">{job.team}</p>
        <ul>{(full ? job.points : job.points.slice(0, 2)).map(point => <li key={point}>{point}</li>)}</ul>
        <div className="tags">{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        {!full && job.points.length > 2 && <Link href="/resume#experience" className="text-link">Full experience <ArrowUpRight size={15} /></Link>}
      </div>
    </article>)}</div>
  </section>;
}

export function Education() {
  return <div className="education-list">{education.map(item => <article className="education-item" key={item.school}><p className="eyebrow">{item.dates}</p><h3>{item.degree}</h3><p>{item.school}</p><div className="education-bottom"><span>{item.note}</span><strong>{item.grade}</strong></div></article>)}</div>;
}

export function Skills() {
  return <div className="skills-list">{skills.map(group => <div className="skill-group" key={group.title}><h3>{group.title}</h3><div className="tags">{group.items.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div>;
}

export function ContactSection() {
  return <section className="contact-section" id="contact"><div className="shell">
    <div className="contact-top"><p className="eyebrow">Have something in mind?</p><span className="availability"><i /> Full-time opportunities · May 2027</span></div>
    <h2>Let’s build<br /><em>what’s next.</em><ArrowUpRight className="contact-arrow" aria-hidden="true" /></h2>
    <div className="contact-bottom"><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={25} /></a><div className="contact-socials"><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a><a href={profile.resume} download>Resume <ArrowDown size={16} /></a></div></div>
  </div></section>;
}

export function Footer() {
  return <footer className="site-footer shell"><Link href="/" className="footer-name">Abhishek Sairam Gaduputi<span>Machine learning engineer. Curious by default.</span></Link><span>New Jersey, US</span><a href="#main">Back to top ↑</a></footer>;
}

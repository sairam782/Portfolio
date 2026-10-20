import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ContactSection, Education, Experience, Skills } from "@/components/PortfolioSections";
import { profile, projects } from "@/lib/portfolio";
export const metadata = { title: "Resume" };

export default function Resume() {
  return <>
    <section className="shell resume-hero"><p className="eyebrow">The experience behind the work</p><div className="resume-heading"><h1>Abhishek Sairam<br /><em>Gaduputi.</em></h1><a className="button button-dark" href={profile.resume} download>Download PDF <ArrowDown size={18} /></a></div><p className="resume-summary">Machine learning engineer with 3+ years of turning models into shipped products, from recommendation systems at a consumer startup to vision-guided autonomous tractors. Pursuing an MS in AI at NJIT, focused on agentic systems and generative models.</p><div className="resume-contact"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href="tel:+19083569089">{profile.phone}</a><span>New Jersey, United States</span><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div><p className="resume-availability"><span className="status-dot" />Seeking full-time ML / AI Engineer roles starting May 2027.</p></section>
    <div className="experience-surface"><Experience full /></div>
    <section className="section shell resume-education"><div><p className="eyebrow">Academic foundation</p><h2>Education</h2><Education /></div><div><p className="eyebrow">Technical breadth</p><h2>Skills</h2><Skills /></div></section>
    <section className="section shell resume-projects"><p className="eyebrow">Research & engineering</p><h2>Selected projects</h2>{projects.map(project => <article key={project.id}><div><p className="eyebrow">{project.category}</p><h3>{project.title}</h3>{project.href && <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} /></a>}</div><div><p>{project.description} {project.detail}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</section><ContactSection />
  </>;
}

"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, Activity, GitBranch, ShieldCheck, Terminal } from "lucide-react";
import { projects } from "@/lib/portfolio";

function ProjectVisual({ id }) {
  if (id === "trinetra") return <div className="project-visual agent-visual" aria-label="Illustration of the Trinetra agent workflow">
    <div className="visual-caption"><span><i /> SYSTEM ARCHITECTURE</span><span>TRINETRA / 01</span></div>
    <div className="agent-sources"><span>Alerts</span><span>Logs</span><span>Metrics</span><span>Traces</span></div>
    <div className="diagram-line" /><div className="commander"><GitBranch size={18} /><span>Commander agent</span><span className="node-dot" /></div><div className="diagram-line" />
    <div className="agent-workers"><span><Activity size={16} />Telemetry</span><span><Terminal size={16} />Triage</span><span><ShieldCheck size={16} />Runbook</span></div>
    <div className="visual-bottom"><span>CONTEXT → REASONING → ACTION</span><span>DRY-RUN FIRST ↗</span></div>
  </div>;
  if (id === "gymcom") return <div className="project-visual pose-visual" aria-label="Illustration of pose tracking for workout form analysis">
    <div className="visual-caption"><span><i /> MOVEMENT INTELLIGENCE</span><span>GYMCOM / 02</span></div>
    <svg className="pose-diagram" viewBox="0 0 460 210" role="img" aria-label="Joint tracking illustration"><g stroke="currentColor" fill="none"><path className="pose-grid" d="M40 50H420M40 100H420M40 150H420M90 20V190M160 20V190M230 20V190M300 20V190M370 20V190" /><path className="pose-frame" d="M150 50V25H175M285 25H310V50M150 155V180H175M285 180H310V155" /><circle cx="230" cy="45" r="16" strokeWidth="2" /><path d="M230 62L230 112M195 80L230 72L265 80M195 80L173 115L147 92M265 80L287 115L313 92M230 112L196 140L172 178M230 112L264 140L288 178" strokeWidth="3" strokeLinecap="round" /><path d="M187 129Q210 125 209 148" strokeDasharray="3 3" /></g>{[[230,72],[195,80],[265,80],[173,115],[287,115],[147,92],[313,92],[230,112],[196,140],[264,140],[172,178],[288,178]].map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy} r="4" fill="currentColor" />)}<text x="92" y="62">POSE</text><text x="322" y="150">FORM</text></svg>
    <div className="visual-bottom"><span>TRACK → ANALYZE → COACH</span><span>POSE STUDY / ILLUSTRATION</span></div>
  </div>;
  return null;
}

export default function ProjectGallery() {
  const [filter, setFilter] = useState("All work");
  const visible = projects.filter(project => filter === "All work" || project.category === filter);
  return <>
    <div className="project-toolbar"><div className="project-filters" role="group" aria-label="Filter projects">{["All work", "Agentic AI", "Applied AI", "Computer vision"].map(item => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div><span className="project-count" aria-live="polite">{String(visible.length).padStart(2, "0")} {visible.length === 1 ? "project" : "projects"}</span></div>
    <div className="project-grid">{visible.map(project => <article className={`project-card ${project.id === "mri" || project.id === "deepfake" ? "research-card" : ""}`} key={project.id}>
      <ProjectVisual id={project.id} />
      <div className="project-content"><div className="project-meta"><span>{project.number} / {project.category}</span>{project.href ? <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight size={23} /></a> : <span className="research-label">Research project</span>}</div>
        <h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <details className="project-details"><summary>Explore the approach <ChevronDown size={16} /></summary><p>{project.detail}</p>{project.href && <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">View repository <ArrowUpRight size={15} /></a>}</details>
        <div className="project-takeaway">{project.takeaway}</div>
      </div>
    </article>)}</div>
  </>;
}

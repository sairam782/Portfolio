"use client";

import { useState } from "react";
import { motion, useSpring } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, ArrowUpRight, X, Github } from "lucide-react";
import { projects } from "@/lib/portfolio";
import ProjectArtwork from "./ProjectArtwork";
import { useStudioMotion } from "./StudioShell";

function ProjectCard({ project }) {
  const animated = useStudioMotion();
  const x = useSpring(0, { stiffness: 110, damping: 28 });
  const y = useSpring(0, { stiffness: 110, damping: 28 });
  function move(event) {
    if (!animated || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width - .5) * 22);
    y.set(((event.clientY - rect.top) / rect.height - .5) * 16);
  }
  return <motion.article className={`project-panel project-${project.id}`} initial={false} whileInView={{ opacity: 1 }} onPointerMove={move} onPointerLeave={() => {x.set(0);y.set(0);}}>
    <motion.div className="artwork-wrap" style={{ x: animated ? x : 0, y: animated ? y : 0 }}><ProjectArtwork kind={project.id}/></motion.div>
    <div className="project-top"><div className="glass-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><span className="project-index">{project.number} / 04</span></div>
    <div className="project-bottom"><div><p className="project-category">{project.category}</p><h2>{project.title}</h2><p>{project.subtitle}</p></div><Dialog.Root><Dialog.Trigger asChild><button className="pill-button case-button" aria-label={`Explore ${project.title}`}>Explore project <ArrowUpRight size={16}/></button></Dialog.Trigger><Dialog.Portal><Dialog.Overlay className="dialog-overlay"/><Dialog.Content className="project-dialog"><Dialog.Close className="dialog-close" aria-label="Close project details"><X size={21}/></Dialog.Close><p className="overline">{project.category} / {project.number}</p><Dialog.Title>{project.title}</Dialog.Title><Dialog.Description className="dialog-intro">{project.description}</Dialog.Description><div className="dialog-detail"><h3>The approach</h3><p>{project.detail}</p></div><div className="takeaway"><ArrowRight size={20}/><span>{project.takeaway}</span></div><div className="plain-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>{project.href ? <a href={project.href} target="_blank" rel="noopener noreferrer" className="pill-button primary"><Github size={17}/> View on GitHub <ArrowUpRight size={16}/></a> : <p className="research-note">Academic research project · Results from project evaluation.</p>}</Dialog.Content></Dialog.Portal></Dialog.Root></div>
  </motion.article>;
}

export default function WorkGallery() {
  const [category,setCategory] = useState("All work");
  const selected = projects.filter(project=>category === "All work" || project.category === category);
  return <><header className="feed-header"><span className="overline"><span className="tiny-star">✳</span> Selected work</span><span className="feed-meta">Research → real world</span></header><div className="work-stack">{selected.map(project=><ProjectCard key={project.id} project={project}/>)}</div><section className="work-index" aria-label="Browse projects"><div><p className="overline">A closer look</p><h2>Different problems.<br/>Same curiosity.</h2></div><div className="work-filters" role="group" aria-label="Filter projects">{["All work","Agentic AI","Applied AI","Computer vision"].map(item=><button key={item} type="button" aria-pressed={category === item} onClick={()=>{setCategory(item);document.getElementById('main')?.scrollIntoView({behavior:'instant'});}}>{item}<ArrowUpRight size={14}/></button>)}</div></section><a className="next-section" href="/hackathons"><span>Built under pressure. Built together.<strong>Explore the hackathons</strong></span><ArrowRight size={28}/></a></>;
}

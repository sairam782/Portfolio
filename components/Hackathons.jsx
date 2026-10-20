import { ArrowUpRight, ChevronDown, Code2, MapPin, Terminal } from "lucide-react";
import { hackathons } from "@/lib/hackathons";
import { profile } from "@/lib/portfolio";

export default function Hackathons() {
  return (
    <section className="section shell hackathons-section" id="hackathons">
      <div className="section-heading">
        <div><p className="eyebrow"><span>02</span> / Hackathons</p><h2>Short deadlines.<br /><em>Long-lasting ideas.</em></h2></div>
        <div className="hackathon-summary"><span className="hackathon-total">{String(hackathons.length).padStart(2, "0")}</span><div><strong>Project submissions</strong><p>NYC, NJIT & global build weeks</p></div></div>
      </div>
      <p className="hackathon-intro">A record of building with other curious people. From the first idea to a working demo, here’s what we shipped.</p>
      <div className="hackathon-list">
        {hackathons.map(hack => (
          <article className="hackathon-card" key={hack.id}>
            <div className="hackathon-date" aria-hidden="true"><span>{hack.month}</span><strong>{hack.day}</strong></div>
            <div className="hackathon-body">
              <div className="hackathon-meta"><span>{hack.date}</span><span><MapPin size={12} />{hack.location}</span></div>
              <div className="hackathon-title"><h3>{hack.event}</h3><span className="submission-badge"><Code2 size={12} />Project submitted</span></div>
              <p className="hackathon-project"><Terminal size={17} />{hack.project}<span>{hack.category}</span></p>
              <p className="hackathon-description">{hack.description}</p>
              <div className="tags">{hack.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <details className="hackathon-details"><summary>Inside the build <ChevronDown size={15} /></summary><p>{hack.detail}</p><a href={hack.eventUrl} target="_blank" rel="noopener noreferrer" className="text-link">{hack.fullEvent} <ArrowUpRight size={14} /></a></details>
            </div>
            <div className="hackathon-links">
              <a href={hack.source} target="_blank" rel="noopener noreferrer" aria-label={`${hack.project} submission on Devpost`}>View submission <ArrowUpRight size={16} /></a>
              {hack.demo && <a href={hack.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${hack.project} demo`}>Live demo <ArrowUpRight size={14} /></a>}
              {hack.code && <a href={hack.code} target="_blank" rel="noopener noreferrer" aria-label={`${hack.project} source code`}>Source code <ArrowUpRight size={14} /></a>}
            </div>
          </article>
        ))}
      </div>
      <div className="hackathon-footer"><p>More building notes, demos, and lessons along the way.</p><a className="text-link" href={`${profile.linkedin}recent-activity/all/`} target="_blank" rel="noopener noreferrer">Follow the journey on LinkedIn <ArrowUpRight size={16} /></a></div>
    </section>
  );
}

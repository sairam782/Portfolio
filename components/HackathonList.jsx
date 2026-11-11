"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Search, Trophy } from "lucide-react";

const filters = ["All builds", "Live demos", "Recognition"];

export default function HackathonList({ hackathons }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState(filters[0]);

  const needle = query.trim().toLowerCase();
  const visible = hackathons.filter((hack) => {
    const text = [hack.project, hack.event, hack.fullEvent, hack.category, hack.description, ...hack.tags].join(" ").toLowerCase();
    if (needle && !text.includes(needle)) return false;
    if (filter === "Live demos" && !hack.demo) return false;
    if (filter === "Recognition" && !hack.award) return false;
    return true;
  });

  const reset = () => {
    setQuery("");
    setFilter(filters[0]);
  };

  return (
    <>
      <div className="toolbar">
        <div className="search">
          <Search size={18} aria-hidden="true" />
          <input
            type="search"
            aria-label="Search hackathon builds"
            placeholder="Search by project, event, or technology"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="filters" role="group" aria-label="Filter builds">
          {filters.map((item) => (
            <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)}>
              {filter === item && <motion.span layoutId="filter-pill" className="filter-pill" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
              <span>{item}</span>
            </button>
          ))}
        </div>
        <span className="count tnum" role="status">
          Showing {visible.length} of {hackathons.length}
        </span>
      </div>

      {visible.length > 0 ? (
        <ol className="builds">
          <AnimatePresence initial={false} mode="popLayout">
            {visible.map((hack) => (
              <motion.li
                key={hack.id}
                id={hack.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="timeline-when">
                  <strong className="tnum">{hack.date}</strong>
                  <span>{hack.location}</span>
                </div>
                <article>
                  <div className="build-title">
                    <h2>{hack.project}</h2>
                    {hack.award && (
                      <span className="award">
                        <Trophy size={13} aria-hidden="true" /> {hack.award}
                      </span>
                    )}
                  </div>
                  <p className="build-event">
                    {hack.fullEvent}. {hack.category}.
                  </p>
                  <p className="build-desc">{hack.description}</p>
                  <ul className="tags" aria-label="Technologies">
                    {hack.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <details>
                    <summary>
                      How it was built <ChevronDown size={16} aria-hidden="true" />
                    </summary>
                    <p>{hack.detail}</p>
                  </details>
                  <div className="link-row">
                    <a className="text-link ext" href={hack.source} target="_blank" rel="noopener noreferrer">
                      {hack.sourcePlatform === "LinkedIn" ? "LinkedIn post" : "Devpost submission"}
                      <span className="sr-only"> for {hack.project}</span>
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                    {hack.demo && (
                      <a className="text-link ext" href={hack.demo} target="_blank" rel="noopener noreferrer">
                        Live demo<span className="sr-only"> of {hack.project}</span>
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    )}
                    {hack.code && (
                      <a className="text-link ext" href={hack.code} target="_blank" rel="noopener noreferrer">
                        Source code<span className="sr-only"> for {hack.project}</span>
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    )}
                    <a className="text-link ext" href={hack.eventUrl} target="_blank" rel="noopener noreferrer">
                      Event page<span className="sr-only"> for {hack.event}</span>
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </ol>
      ) : (
        <div className="empty">
          <h2>No builds match</h2>
          <p>Try a different technology, or clear the search and filters.</p>
          <button type="button" className="btn btn--light" onClick={reset}>
            Show all builds
          </button>
        </div>
      )}
    </>
  );
}

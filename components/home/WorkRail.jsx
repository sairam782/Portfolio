"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import CaseVisual from "@/components/CaseVisual";
import Spotlight from "@/components/fx/Spotlight";

// Case studies on a horizontal rail. On desktop the section pins and vertical
// scrolling drives the rail sideways. On touch screens and for reduced-motion
// users it is a normal swipeable row.
export default function WorkRail({ studies }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [shift, setShift] = useState(0);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const measure = () => {
      const pinned = window.matchMedia("(min-width: 960px) and (prefers-reduced-motion: no-preference)").matches;
      const track = trackRef.current;
      setShift(pinned && track ? Math.max(0, track.scrollWidth - window.innerWidth) : 0);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(document.documentElement);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, (value) => -value * shift);
  const bar = useTransform(scrollYProgress, [0, 1], [0.08, 1]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setIndex(Math.min(studies.length, Math.floor(value * studies.length) + 1));
  });

  return (
    <section ref={sectionRef} className="rail" style={{ "--count": studies.length }} aria-labelledby="work-heading">
      <div className="rail-sticky">
        <div className="wrap rail-head">
          <div>
            <h2 id="work-heading">Systems I have built</h2>
            <p>Six case studies. Each shows the problem, the architecture, and the result.</p>
          </div>
          <div className="rail-meta">
            <span className="rail-count tnum" aria-hidden="true">
              {String(index).padStart(2, "0")} / {String(studies.length).padStart(2, "0")}
            </span>
            <span className="rail-bar" aria-hidden="true">
              <motion.i style={{ scaleX: bar }} />
            </span>
            <Link className="btn btn--glass btn--sm" href="/work">
              All case studies
            </Link>
          </div>
        </div>

        <motion.ul ref={trackRef} className="rail-track" style={{ x }}>
          {studies.map((study) => (
            <li key={study.slug}>
              <Spotlight as="article" className="rail-card">
                <div className="rail-art">
                  <CaseVisual slug={study.slug} />
                </div>
                <div className="rail-body">
                  <p className="tile-label">
                    {study.area} / {study.kind === "professional" ? study.organization.split(" (")[0] : study.organization}
                  </p>
                  <h3>
                    <Link href={`/work/${study.slug}`}>{study.title}</Link>
                  </h3>
                  <p className="rail-summary">{study.summary}</p>
                  <div className="rail-stats">
                    {study.metrics ? (
                      study.metrics.map((metric) => (
                        <div key={metric.label}>
                          <b className="grad">{metric.value}</b>
                          <span>{metric.label}</span>
                        </div>
                      ))
                    ) : (
                      <p>{study.highlight}</p>
                    )}
                  </div>
                  <span className="rail-open" aria-hidden="true">
                    Read the case study <ArrowUpRight size={16} />
                  </span>
                </div>
              </Spotlight>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

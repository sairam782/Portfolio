"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import CaseVisual from "@/components/CaseVisual";
import useStill from "@/components/fx/useStill";

const art = ["trinetra", "montra-autonomous-spraying", "froker-recommendation-engine", "gymcom"];

function Card({ cap, index, total, progress, still }) {
  // Earlier cards shrink and darken slightly as later ones slide over them.
  const start = index / total;
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - 1 - index) * 0.045]);
  const dim = useTransform(progress, [start, 1], [1, 1 - (total - 1 - index) * 0.28]);
  const filter = useTransform(dim, (value) => `brightness(${value})`);

  return (
    <motion.article className="stack-card" style={still ? { "--i": index } : { scale, filter, "--i": index }}>
      <div className="stack-copy">
        <p className="stack-index tnum" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3>{cap.title}</h3>
        <p>{cap.body}</p>
        <ul className="chips">
          {cap.evidence.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="stack-art">
        <CaseVisual slug={art[index]} />
      </div>
    </motion.article>
  );
}

// Technical capabilities as cards that stack while you scroll.
export default function Capabilities({ capabilities }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.2", "end 0.9"] });
  const still = useStill();

  return (
    <div ref={ref} className="stack">
      {capabilities.map((cap, i) => (
        <Card key={cap.title} cap={cap} index={i} total={capabilities.length} progress={scrollYProgress} still={still} />
      ))}
    </div>
  );
}

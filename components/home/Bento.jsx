"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Counter from "@/components/fx/Counter";
import Spotlight from "@/components/fx/Spotlight";
import { Reveal } from "@/components/fx/Reveal";

const view = { once: true, margin: "0px 0px -12% 0px" };
const ease = [0.22, 1, 0.36, 1];

function Tile({ href, className = "", delay = 0, children }) {
  return (
    <Reveal className={`bento-cell ${className}`} delay={delay}>
      <Spotlight as={Link} href={href} className="tile" tilt>
        {children}
        <ArrowUpRight className="tile-arrow" size={20} aria-hidden="true" />
      </Spotlight>
    </Reveal>
  );
}

// Measured results as a grid of live tiles. Every number is from the resume.
export default function Bento({ hackathonCount }) {
  return (
    <div className="bento">
      <Tile href="/work/froker-recommendation-engine" className="bento-cell--hero">
        <p className="tile-label">Froker, recommendation engine</p>
        <p className="tile-number tile-number--xl grad">
          <Counter to={37} prefix="+" suffix="%" />
        </p>
        <p className="tile-text">more user engagement from a recommendation engine I built end to end. Orders rose 11%.</p>
        <svg className="tile-chart" viewBox="0 0 600 220" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="bento-line" x1="0" x2="1">
              <stop offset="0" stopColor="#3d80ff" />
              <stop offset="0.5" stopColor="#9461ff" />
              <stop offset="0.8" stopColor="#ff5ca8" />
              <stop offset="1" stopColor="#ffa852" />
            </linearGradient>
            <linearGradient id="bento-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#9461ff" stopOpacity="0.35" />
              <stop offset="1" stopColor="#9461ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 190 C80 186 120 176 180 168 S290 150 340 118 S450 70 500 48 S570 22 600 14 V220 H0 Z"
            fill="url(#bento-area)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={view}
            transition={{ duration: 1.2, delay: 0.9 }}
          />
          <motion.path
            d="M0 190 C80 186 120 176 180 168 S290 150 340 118 S450 70 500 48 S570 22 600 14"
            fill="none"
            stroke="url(#bento-line)"
            strokeWidth="3"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={view}
            transition={{ duration: 2, ease }}
          />
        </svg>
      </Tile>

      <Tile href="/work/montra-autonomous-spraying" delay={0.08}>
        <p className="tile-label">Montra Electric, autonomous spraying</p>
        <p className="tile-number">
          <Counter to={15} />
          <span className="tile-to"> to </span>
          <Counter to={21} suffix="%" />
        </p>
        <p className="tile-text">lower system cost. YOLOv11 and MiDaS replaced heavy sensor hardware.</p>
      </Tile>

      <Tile href="/work/montra-autonomous-spraying" delay={0.12}>
        <p className="tile-label">Montra Electric, battery system</p>
        <p className="tile-number">
          <Counter to={23} suffix=" min" />
        </p>
        <p className="tile-text">faster 0 to 80% charge, from battery management system design and testing.</p>
        <div className="battery" aria-hidden="true">
          <motion.i initial={{ width: "8%" }} whileInView={{ width: "80%" }} viewport={view} transition={{ duration: 2.2, ease, delay: 0.3 }} />
        </div>
      </Tile>

      <Tile href="/work/synthetic-mri-generation" delay={0.16}>
        <p className="tile-label">Research, synthetic MRI</p>
        <p className="tile-number">
          82<span className="tile-to"> to </span>
          <Counter from={82} to={88} suffix="%" />
        </p>
        <p className="tile-text">tumor detection accuracy, lifted by training on diffusion-generated MRI.</p>
        <div className="bars" aria-hidden="true">
          <motion.i initial={{ scaleY: 0 }} whileInView={{ scaleY: 0.82 }} viewport={view} transition={{ duration: 1.2, ease }} />
          <motion.i initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={view} transition={{ duration: 1.5, ease, delay: 0.25 }} />
        </div>
      </Tile>

      <Tile href="/work/deepfake-detection" delay={0.2}>
        <p className="tile-label">Research, deepfake detection</p>
        <p className="tile-number">
          <Counter to={86} suffix="%" />
        </p>
        <p className="tile-text">deepfake detection accuracy on Celeb-DF v2, with a hybrid ResNet and ViT.</p>
        <svg className="ring" viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
          <motion.circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="url(#bento-line)"
            strokeWidth="8"
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 0.86 }}
            viewport={view}
            transition={{ duration: 1.8, ease, delay: 0.2 }}
          />
        </svg>
      </Tile>

      <Tile href="/experience#education" delay={0.24}>
        <p className="tile-label">NJIT, graduate school</p>
        <p className="tile-number">
          <Counter to={4} decimals={1} />
        </p>
        <p className="tile-text">GPA in the MS in Artificial Intelligence. Graduating May 2027.</p>
      </Tile>

      <Tile href="/hackathons" className="bento-cell--wide" delay={0.28}>
        <p className="tile-label">Hackathons, 2026</p>
        <p className="tile-number">
          <Counter to={hackathonCount} />
        </p>
        <p className="tile-text">working AI prototypes built at hackathons this year, across healthcare, fintech, and developer tools. One Honourable Mention.</p>
      </Tile>
    </div>
  );
}

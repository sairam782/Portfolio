import Image from "next/image";
import Link from "next/link";
import { Trophy } from "lucide-react";
import Hero from "@/components/home/Hero";
import Bento from "@/components/home/Bento";
import WorkRail from "@/components/home/WorkRail";
import Capabilities from "@/components/home/Capabilities";
import ContactBand from "@/components/ContactBand";
import SectionHead from "@/components/SectionHead";
import ScrollText from "@/components/fx/ScrollText";
import Marquee from "@/components/fx/Marquee";
import Parallax from "@/components/fx/Parallax";
import { Reveal } from "@/components/fx/Reveal";
import { profile } from "@/lib/site";
import { caseStudies, capabilities } from "@/lib/work";
import { skills } from "@/lib/experience";
import { hackathons } from "@/lib/hackathons";
import { numberWord } from "@/lib/format";

const story =
  "For three years I took models from experiment to production. A recommendation engine that lifted engagement by 37 percent. Vision models that let an electric tractor spray on its own. Today I build agent systems with guardrails, and study artificial intelligence at NJIT.";

export default function Home() {
  const awarded = hackathons.find((item) => item.award);
  const count = numberWord(hackathons.length);
  const tools = skills.flatMap((group) => group.items);
  const half = Math.ceil(tools.length / 2);

  return (
    <>
      <Hero />

      <section id="story" className="section story" aria-label="Summary">
        <div className="wrap">
          <ScrollText text={story} />
        </div>
      </section>

      <section className="section" aria-labelledby="results-heading">
        <div className="wrap">
          <SectionHead id="results-heading" title="Results with a number on them" lead="Each tile opens the work behind it." />
          <Bento hackathonCount={hackathons.length} />
        </div>
      </section>

      <WorkRail studies={caseStudies} />

      <section className="section" aria-labelledby="caps-heading">
        <div className="wrap">
          <SectionHead id="caps-heading" title="What I work on" lead="Three areas, each with shipped or published work behind it." />
          <Capabilities capabilities={capabilities} />
        </div>
        <div className="tools" aria-label="Tools I work with">
          <Marquee items={tools.slice(0, half)} speed={70} />
          <Marquee items={tools.slice(half)} speed={80} reverse />
        </div>
      </section>

      <section className="section" aria-labelledby="hack-heading">
        <div className="wrap">
          <SectionHead
            id="hack-heading"
            title={`${count} hackathon builds in 2026`}
            lead="Healthcare, fintech, productivity, and developer tools. Each was built in a day, a weekend, or a build week."
          >
            <Link className="btn btn--glass" href="/hackathons">
              All hackathon builds
            </Link>
          </SectionHead>
        </div>
        <Reveal>
          <Marquee
            className="hack-marquee"
            speed={60}
            items={hackathons}
            renderItem={(hack, hidden) => (
              <Link className={`hack-card${hack.award ? " hack-card--award" : ""}`} href={`/hackathons#${hack.id}`} tabIndex={hidden ? -1 : undefined}>
                <span className="hack-date">{hack.date}</span>
                <strong>{hack.project}</strong>
                <span className="hack-event">
                  {hack.event}, {hack.location}
                </span>
                <span className="hack-cat">{hack.category}</span>
                {hack.award && (
                  <span className="award">
                    <Trophy size={13} aria-hidden="true" /> {hack.award}
                  </span>
                )}
              </Link>
            )}
          />
        </Reveal>
        {awarded && (
          <div className="wrap">
            <Reveal>
              <p className="hack-note">
                <Trophy size={16} aria-hidden="true" />
                <span>
                  {awarded.award} at {awarded.event} for {awarded.project}, where I was team lead, full-stack developer, and AI/ML
                  engineer.
                </span>
              </p>
            </Reveal>
          </div>
        )}
      </section>

      <section className="section" aria-labelledby="about-heading">
        <div className="wrap about-teaser">
          <Reveal className="portrait">
            <Parallax amount={28}>
              <Image src="/assets/portrait.jpg" alt={`Portrait of ${profile.name}`} width={687} height={770} sizes="(max-width: 860px) 70vw, 420px" />
            </Parallax>
          </Reveal>
          <div>
            <Reveal as="h2" id="about-heading">
              Engineer first, researcher close behind.
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                I am pursuing an MS in Artificial Intelligence at NJIT with a 4.0 GPA, and I help teach computing
                fundamentals there as a teaching assistant. My first degree is in electronics and instrumentation, so I
                tend to measure before I claim.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>I like problems where an idea has to hold up in the real world, with real users and real constraints.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="actions">
                <Link className="btn btn--light" href="/about">
                  About me
                </Link>
                <Link className="btn btn--glass" href="/experience">
                  Full experience
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}

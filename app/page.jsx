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
import PortraitStage from "@/components/PortraitStage";
import Spotlight from "@/components/fx/Spotlight";
import { Reveal } from "@/components/fx/Reveal";
import { profile } from "@/lib/site";
import { caseStudies, capabilities, principles } from "@/lib/work";
import { skills } from "@/lib/experience";
import { hackathons } from "@/lib/hackathons";
import { numberWord } from "@/lib/format";

const story =
  "A recommendation engine that lifted engagement 37 percent. Vision models that cut system cost by up to 21 percent on an autonomous tractor. AI agents that fix incidents, but only through a safety gate and an audit trail. I build machine learning that holds up with real users, real hardware, and real budgets.";

const chips = [
  { value: "3+ years", label: "shipping ML in industry" },
  { value: "4.0 GPA", label: "MS in AI, NJIT" },
  { value: "May 2027", label: "open to full-time roles" },
];

export default function Home() {
  const awarded = hackathons.find((item) => item.award);
  const count = numberWord(hackathons.length);
  const tools = skills.flatMap((group) => group.items);
  const half = Math.ceil(tools.length / 2);
  const demos = numberWord(hackathons.filter((item) => item.demo).length);

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
          <SectionHead id="results-heading" title="Impact, in numbers" lead="Every figure comes from shipped work or a documented evaluation. Each tile opens the story behind it." />
          <Bento hackathonCount={hackathons.length} />
        </div>
      </section>

      <WorkRail studies={caseStudies} />

      <section className="section" aria-labelledby="caps-heading">
        <div className="wrap">
          <SectionHead id="caps-heading" title="Technical capabilities" lead="Four areas where I have shipped or published work. The proof is linked on each card." />
          <Capabilities capabilities={capabilities} />
        </div>
        <div className="tools" aria-label="Tools I work with">
          <Marquee items={tools.slice(0, half)} speed={70} />
          <Marquee items={tools.slice(half)} speed={80} reverse />
        </div>
      </section>

      <section className="section" aria-labelledby="how-heading">
        <div className="wrap">
          <SectionHead id="how-heading" title="How I build" lead="Three habits that show up in every project." />
          <div className="principles">
            {principles.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <Spotlight as="article" className="principle">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <Link className="text-link" href={item.link.href}>
                    See it in {item.link.label}
                  </Link>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="hack-heading">
        <div className="wrap">
          <SectionHead
            id="hack-heading"
            title={`${count} AI prototypes in one year`}
            lead={`Built with teams at hackathons, in a day, a weekend, or a build week. Healthcare, fintech, productivity, and developer tools. ${demos} have live demos.`}
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
          <Reveal>
            <PortraitStage chips={chips} />
          </Reveal>
          <div>
            <Reveal as="h2" id="about-heading">
              From circuit boards to agent systems.
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                I started in electronics and instrumentation, building robots and battery systems. Then I spent three
                years shipping machine learning at a consumer startup and an electric vehicle maker.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Now I am pursuing an MS in Artificial Intelligence at NJIT with a 4.0 GPA, and I help teach two
                computing courses there. That path taught me to measure first and claim second.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="actions">
                <Link className="btn btn--light" href="/about">
                  More about me
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

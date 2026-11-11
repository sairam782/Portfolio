import Image from "next/image";
import Link from "next/link";
import ContactBand from "@/components/ContactBand";
import PageHead from "@/components/PageHead";
import Parallax from "@/components/fx/Parallax";
import ScrollText from "@/components/fx/ScrollText";
import { Reveal } from "@/components/fx/Reveal";
import { education } from "@/lib/experience";
import { profile } from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "About Abhishek Sairam Gaduputi: machine learning engineer, MS Artificial Intelligence student and teaching assistant at NJIT, based in New Jersey.",
  alternates: { canonical: "/about" },
};

// Work in progress. Edit or remove items as they ship.
const now = [
  {
    title: "Reinforcement learning for EV security",
    body: "Training DQN and PPO agents to defend an electric vehicle's CAN bus and vehicle control unit against spoofing, injection, replay, and denial-of-service attacks in a simulated environment.",
  },
  {
    title: "Swarm robotics for power delivery",
    body: "Robots that chain power cables into a tree from a source to battery-powered sinks, keeping the sinks charged with as little cable and as few robots as possible.",
  },
  {
    title: "Chain-of-thought faithfulness",
    body: "Replicating the hint-verbalization evaluation from Anthropic's paper \"Reasoning Models Don't Always Say What They Think\" on models running locally.",
  },
];

const facts = [
  ["Based in", profile.location],
  ["Studying", "MS in Artificial Intelligence, NJIT"],
  ["Teaching", "Teaching Assistant, Ying Wu College of Computing"],
  ["Open to", "Full-time ML and AI engineering roles from May 2027"],
];

export default function AboutPage() {
  return (
    <>
      <PageHead title="About" lead="Machine learning engineer, graduate student, and teaching assistant in New Jersey." />

      <section className="section section--flush">
        <div className="wrap about-grid">
          <aside className="about-side">
            <Reveal className="portrait">
              <Parallax amount={20}>
                <Image src="/assets/portrait.jpg" alt={`Portrait of ${profile.name}`} width={687} height={770} sizes="(max-width: 860px) 70vw, 380px" priority />
              </Parallax>
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="fact-list">
                {facts.map(([term, value]) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </aside>

          <div className="prose">
            <ScrollText className="scroll-text--sm" text="I am Abhishek. I like the space between an interesting idea and a system someone can actually use." />
            <Reveal>
              <p>
                That has taken me from recommender systems at Froker to computer vision for autonomous electric tractors
                at Montra. Today I am exploring agent systems and generative models while I study for an MS in Artificial
                Intelligence at NJIT, and I support computing students there as a teaching assistant.
              </p>
            </Reveal>
            <Reveal>
              <p>
                My first degree is in electronics and instrumentation, with a minor in data science. I have designed and
                tested a battery management system and soldered my share of boards, and that background still shapes how
                I work on models: measure first, then claim.
              </p>
            </Reveal>

            <Reveal as="h2">What I am working on now</Reveal>
            <ul className="now-list">
              {now.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 0.06}>
                  <strong>{item.title}</strong>
                  <span>{item.body}</span>
                </Reveal>
              ))}
            </ul>

            <Reveal as="h2">Education</Reveal>
            <ul className="now-list">
              {education.map((item, i) => (
                <Reveal as="li" key={item.school} delay={i * 0.06}>
                  <strong>{item.degree}</strong>
                  <span>
                    {item.school}. {item.start} to {item.end}. {item.grade}.
                  </span>
                </Reveal>
              ))}
            </ul>

            <Reveal as="h2">Outside of work</Reveal>
            <Reveal>
              <p>
                Guitar, a new idea, and probably the next hackathon. I build at hackathons around New York and New Jersey
                most months.{" "}
                <Link className="text-link" href="/hackathons">
                  See the builds
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}

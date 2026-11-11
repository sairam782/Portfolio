import Link from "next/link";
import ContactBand from "@/components/ContactBand";
import PageHead from "@/components/PageHead";
import PortraitStage from "@/components/PortraitStage";
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
      <PageHead title="About" lead="ML and AI engineer, graduate researcher, and teaching assistant, based in New Jersey." />

      <section className="section section--flush">
        <div className="wrap about-grid">
          <aside className="about-side">
            <Reveal>
              <PortraitStage priority sizes="(max-width: 860px) 86vw, 380px" />
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
            <ScrollText className="scroll-text--sm" text="I like the space between an interesting idea and a system someone can actually use. Most of my work lives there." />
            <Reveal>
              <p>
                At Froker I built the recommendation engine behind the feed, along with the data pipelines and
                dashboards around it. At Montra Electric I fine-tuned detection and depth models for an autonomous
                tractor and worked on its battery system.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Today I build multi-agent LLM systems and study generative models in the MS in Artificial Intelligence
                program at NJIT, where I am also a teaching assistant.
              </p>
            </Reveal>
            <Reveal>
              <p>
                My first degree is in electronics and instrumentation, with a minor in data science. I have designed and
                tested a battery management system and soldered my share of boards. That background still shapes how I
                work on models: measure first, then claim.
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

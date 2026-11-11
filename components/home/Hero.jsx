import Link from "next/link";
import { ArrowDown, Download } from "lucide-react";
import Aurora from "@/components/fx/Aurora";
import Magnetic from "@/components/fx/Magnetic";
import { Line, Reveal, Words } from "@/components/fx/Reveal";
import { profile } from "@/lib/site";

const orgs = ["Froker", "Montra Electric Tractor", "NJIT", "Manipal Institute of Technology"];

export default function Hero() {
  const video = profile.heroVideo;

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-bg" aria-hidden="true">
        {video ? (
          <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={video.poster}>
            {video.webm && <source src={video.webm} type="video/webm" />}
            <source src={video.mp4} type="video/mp4" />
          </video>
        ) : (
          <Aurora />
        )}
        <div className="hero-shade" />
      </div>

      <div className="wrap hero-inner">
        <Reveal y={12}>
          <p className="pill">
            <i aria-hidden="true" /> {profile.availability}
          </p>
        </Reveal>

        <h1 id="hero-heading">
          <Words text="Machine learning" delay={0.1} />
          <br />
          <Line text="that ships." delay={0.35} className="grad" />
        </h1>

        <Reveal delay={0.55}>
          <p className="hero-lead">
            I am {profile.firstName}. I spent three years taking models from experiment to production: a recommendation
            engine at Froker, vision for autonomous electric tractors at Montra, and now agent systems with
            guardrails.
          </p>
        </Reveal>

        <Reveal delay={0.7}>
          <div className="actions actions--center">
            <Magnetic>
              <Link className="btn btn--light btn--lg" href="/work">
                See the work
              </Link>
            </Magnetic>
            <Magnetic>
              <a className="btn btn--glass btn--lg" href={profile.resume} download>
                <Download size={17} aria-hidden="true" /> Download resume
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>

      <Reveal className="hero-foot" delay={0.95} y={0}>
        <div className="wrap">
          <p>Experience at</p>
          <ul>
            {orgs.map((org) => (
              <li key={org}>{org}</li>
            ))}
          </ul>
          <a className="scroll-cue" href="#story" aria-label="Scroll to the story">
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

import Link from "next/link";
import { ArrowDown, Download } from "lucide-react";
import Aurora from "@/components/fx/Aurora";
import Magnetic from "@/components/fx/Magnetic";
import { Intro, IntroLine, IntroWords } from "@/components/fx/Intro";
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
        <Intro>
          <p className="pill">
            <i aria-hidden="true" /> {profile.availability}
          </p>
        </Intro>

        <h1 id="hero-heading">
          <IntroWords text="I build AI systems" delay={0.05} />
          <br />
          <IntroLine text="that ship." delay={0.3} className="grad" />
        </h1>

        <Intro delay={0.2}>
          <p className="hero-lead">
            I am {profile.firstName}, an ML and AI engineer. I build recommendation engines, computer vision models, and
            LLM agent systems, and I own them from data pipeline to deployment. 3+ years in industry.
          </p>
        </Intro>

        <Intro delay={0.45}>
          <div className="actions actions--center">
            <Magnetic>
              <Link className="btn btn--light btn--lg" href="/work">
                See what I have built
              </Link>
            </Magnetic>
            <Magnetic>
              <a className="btn btn--glass btn--lg" href={profile.resume} download>
                <Download size={17} aria-hidden="true" /> Download resume
              </a>
            </Magnetic>
          </div>
        </Intro>
      </div>

      <Intro className="hero-foot" delay={0.7}>
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
      </Intro>
    </section>
  );
}

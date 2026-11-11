import { Download, Mail } from "lucide-react";
import Magnetic from "./fx/Magnetic";
import { Line, Reveal, Words } from "./fx/Reveal";
import { profile } from "@/lib/site";

// Closing call to action, shared by every page except Contact.
export default function ContactBand() {
  return (
    <section className="cta" aria-labelledby="cta-heading">
      <div className="cta-glow" aria-hidden="true" />
      <div className="wrap">
        <h2 id="cta-heading">
          <Words text="Need an engineer who ships AI?" />
          <br />
          <Line text="Let's talk." className="grad" delay={0.25} />
        </h2>
        <Reveal delay={0.4}>
          <p>I am open to full-time ML and AI engineering roles from May 2027. Email is the fastest way to reach me.</p>
        </Reveal>
        <Reveal delay={0.5}>
          <div className="actions actions--center">
            <Magnetic>
              <a className="btn btn--light btn--lg" href={`mailto:${profile.email}`}>
                <Mail size={17} aria-hidden="true" /> {profile.email}
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn--glass btn--lg" href={profile.resume} download>
                <Download size={17} aria-hidden="true" /> Download resume
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

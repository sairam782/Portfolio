import { ArrowUpRight, Download } from "lucide-react";
import CopyEmail from "@/components/CopyEmail";
import PageHead from "@/components/PageHead";
import Spotlight from "@/components/fx/Spotlight";
import { Reveal } from "@/components/fx/Reveal";
import { profile } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Abhishek Sairam Gaduputi about full-time ML and AI engineering roles starting May 2027.",
  alternates: { canonical: "/contact" },
};

const looking = [
  ["Role", "Machine Learning Engineer or AI Engineer, full-time"],
  ["Start date", "May 2027"],
  ["Based in", profile.location],
  ["Interests", "Agent systems, generative models, computer vision"],
];

const links = [
  { label: "LinkedIn", note: "abhishek-sairam-gaduputi", href: profile.linkedin },
  { label: "GitHub", note: "sairam782", href: profile.github },
  { label: "Devpost", note: "Hackathon submissions", href: profile.devpost },
];

export default function ContactPage() {
  return (
    <>
      <PageHead title="Get in touch" lead="Hiring for ML or AI engineering, or have a hard problem that needs a model in production? I would like to hear about it." />

      <section className="section section--flush">
        <div className="wrap">
          <Reveal>
            <Spotlight className="email-box">
              <div className="cta-glow" aria-hidden="true" />
              <p className="tile-label">Email</p>
              <a className="email-address grad" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <p className="email-note">The fastest way to reach me. It helps if you mention the role, the team, and your timeline.</p>
              <CopyEmail email={profile.email} />
            </Spotlight>
          </Reveal>

          <div className="contact-grid">
            <Reveal>
              <h2>What I am looking for</h2>
              <dl className="fact-list">
                {looking.map(([term, value]) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.1}>
              <h2>Find me elsewhere</h2>
              <ul className="link-list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <strong>{link.label}</strong>
                      <small>{link.note}</small>
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  </li>
                ))}
                <li>
                  <a href={profile.resume} download>
                    <strong>Resume</strong>
                    <small>PDF</small>
                    <Download size={18} aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

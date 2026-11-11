import Link from "next/link";
import { Download } from "lucide-react";
import ContactBand from "@/components/ContactBand";
import PageHead from "@/components/PageHead";
import SectionHead from "@/components/SectionHead";
import ProgressLine from "@/components/fx/ProgressLine";
import Spotlight from "@/components/fx/Spotlight";
import { Reveal } from "@/components/fx/Reveal";
import { experience, education, skills } from "@/lib/experience";
import { profile } from "@/lib/site";

export const metadata = {
  title: "Experience",
  description:
    "Work history, education, and skills: Machine Learning Engineer at Froker, R&D at Montra Electric Tractor, Teaching Assistant and MS in Artificial Intelligence at NJIT.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHead
        title="Experience"
        lead="Three years building machine learning products in industry, then graduate study in AI. The same facts are in the resume if you prefer one page."
      >
        <div className="actions">
          <a className="btn btn--light" href={profile.resume} download>
            <Download size={17} aria-hidden="true" /> Download resume (PDF)
          </a>
        </div>
      </PageHead>

      <section className="section section--flush" aria-labelledby="work-history">
        <div className="wrap">
          <SectionHead id="work-history" title="Work history" />
          <ProgressLine>
            <ol className="timeline">
              {experience.map((job) => (
                <Reveal as="li" key={job.id} id={job.id}>
                  <div className="timeline-when">
                    <strong className="tnum">
                      {job.start} to {job.end}
                    </strong>
                    <span>{job.location}</span>
                    {job.current && <span className="badge">Current</span>}
                  </div>
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline-org">
                      {job.company}
                      {job.team && job.team !== "Embedded Systems" ? `, ${job.team}` : ""}
                    </p>
                    <ul className="bullets">
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <ul className="tags" aria-label="Topics">
                      {job.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    {job.caseStudy && (
                      <Link className="text-link" href={`/work/${job.caseStudy}`}>
                        Read the case study
                      </Link>
                    )}
                  </div>
                </Reveal>
              ))}
            </ol>
          </ProgressLine>
        </div>
      </section>

      <section className="section" id="education" aria-labelledby="education-heading">
        <div className="wrap">
          <SectionHead id="education-heading" title="Education" />
          <div className="edu-grid">
            {education.map((item, i) => (
              <Reveal key={item.school} delay={i * 0.08}>
                <Spotlight as="article" className="edu-card">
                  <p className="tile-label">
                    {item.start} to {item.end}
                  </p>
                  <h3>{item.degree}</h3>
                  <p>{item.school}</p>
                  <p className="muted">
                    {item.detail ? `${item.detail}. ` : ""}
                    {item.location}.
                  </p>
                  <span className="grade grad tnum">{item.grade}</span>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--flush" id="skills" aria-labelledby="skills-heading">
        <div className="wrap">
          <SectionHead id="skills-heading" title="Skills" />
          <dl className="skills">
            {skills.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.06}>
                <dt>{group.title}</dt>
                <dd>
                  <ul className="tags">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <ContactBand />
    </>
  );
}

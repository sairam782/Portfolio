import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Flow from "@/components/Flow";
import CaseVisual from "@/components/CaseVisual";
import ContactBand from "@/components/ContactBand";
import Spotlight from "@/components/fx/Spotlight";
import { Reveal, Words } from "@/components/fx/Reveal";
import { caseStudies, getCaseStudy } from "@/lib/work";
import { profile, siteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.shortTitle,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: { type: "article", title: study.title, description: study.summary, url: `/work/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.indexOf(study);
  const next = caseStudies[(index + 1) % caseStudies.length];

  const facts = [
    ["Role", study.role],
    [study.kind === "professional" ? "Company" : "Type", study.organization],
    study.period && ["When", study.period],
    study.location && ["Where", study.location],
    ["Area", study.area],
  ].filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    description: study.summary,
    url: `${siteUrl}/work/${study.slug}`,
    author: { "@type": "Person", name: profile.name, url: siteUrl },
    keywords: study.stack.join(", "),
  };

  return (
    <>
      <header className="page-head case-head">
        <div className="page-glow" aria-hidden="true" />
        <div className="wrap case-head-grid">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/work">Work</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{study.shortTitle}</span>
            </nav>
            <h1>
              <Words text={study.title} stagger={0.04} />
            </h1>
            <Reveal delay={0.3}>
              <p className="lead">{study.summary}</p>
            </Reveal>
          </div>
          <Reveal className="case-art" delay={0.2}>
            <CaseVisual slug={study.slug} />
          </Reveal>
        </div>
        <div className="wrap">
          <Reveal delay={0.35}>
            <dl className="facts">
              {facts.map(([term, value]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </header>

      <section className="section section--tight" aria-label="Key results">
        <div className="wrap">
          <div className="metric-row">
            {study.metrics ? (
              study.metrics.map((metric, i) => (
                <Reveal key={metric.label} delay={i * 0.08}>
                  <Spotlight className="metric">
                    <b className="grad">{metric.value}</b>
                    <span>{metric.label}</span>
                  </Spotlight>
                </Reveal>
              ))
            ) : (
              <Reveal>
                <Spotlight className="metric metric--text">
                  <b>{study.highlight}</b>
                </Spotlight>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <div className="wrap study-wrap">
        <Reveal as="section" className="study" aria-labelledby="context">
          <h2 id="context">The problem</h2>
          <div>
            {study.context.map((text) => (
              <p className="study-lede" key={text}>
                {text}
              </p>
            ))}
          </div>
        </Reveal>

        {study.insight && (
          <Reveal as="section" className="study" aria-labelledby="insight">
            <h2 id="insight">Why it is interesting</h2>
            <p className="study-quote">{study.insight}</p>
          </Reveal>
        )}

        <Reveal as="section" className="study" aria-labelledby="built">
          <h2 id="built">What I built</h2>
          <ul className="bullets">
            {study.built.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="section" className="study" aria-labelledby="system">
          <h2 id="system">How it fits together</h2>
          <Flow stages={study.flow} label={`${study.shortTitle} system, in order`} />
        </Reveal>

        <Reveal as="section" className="study" aria-labelledby="outcome">
          <h2 id="outcome">Outcome</h2>
          <div>
            {study.outcome.map((text) => (
              <p key={text}>{text}</p>
            ))}
            {study.note && <p className="note">{study.note}</p>}
          </div>
        </Reveal>

        <Reveal as="section" className="study" aria-labelledby="stack">
          <h2 id="stack">Stack</h2>
          <div>
            <ul className="tags">
              {study.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {study.links.length > 0 && (
              <div className="link-row">
                {study.links.map((link) => (
                  <a className="btn btn--glass btn--sm" key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label} <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>

      <section className="section section--tight" aria-label="Next case study">
        <div className="wrap">
          <Reveal>
            <Spotlight as={Link} href={`/work/${next.slug}`} className="next-study">
              <span>
                <small>Next case study</small>
                <strong>{next.title}</strong>
              </span>
              <span className="next-art">
                <CaseVisual slug={next.slug} />
              </span>
            </Spotlight>
          </Reveal>
        </div>
      </section>

      <ContactBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}

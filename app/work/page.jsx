import WorkCard from "@/components/WorkCard";
import ContactBand from "@/components/ContactBand";
import PageHead from "@/components/PageHead";
import { Reveal } from "@/components/fx/Reveal";
import { caseStudies } from "@/lib/work";

export const metadata = {
  title: "Work",
  description:
    "Case studies in recommender systems, computer vision, and LLM agent systems, from industry work at Froker and Montra Electric to personal projects and research.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const groups = [
    { title: "Industry", items: caseStudies.filter((item) => item.kind === "professional") },
    { title: "Projects and research", items: caseStudies.filter((item) => item.kind === "project") },
  ];

  return (
    <>
      <PageHead title="Work" lead="Six case studies. Each one covers the problem, what I built, how the system fits together, and what came out of it." />

      <section className="section section--flush">
        <div className="wrap">
          {groups.map((group) => (
            <div className="work-group" key={group.title}>
              <Reveal as="h2" className="group-title">
                {group.title}
              </Reveal>
              <div className="work-grid">
                {group.items.map((study, i) => (
                  <Reveal key={study.slug} delay={(i % 2) * 0.08}>
                    <WorkCard study={study} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactBand />
    </>
  );
}

import WorkCard from "@/components/WorkCard";
import ContactBand from "@/components/ContactBand";
import PageHead from "@/components/PageHead";
import { Reveal } from "@/components/fx/Reveal";
import { caseStudies } from "@/lib/work";

export const metadata = {
  title: "Work",
  description:
    "Six ML and AI case studies: a recommendation engine that lifted engagement 37%, vision models for an autonomous tractor, a multi-agent incident response system, and research in diffusion models and deepfake detection.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const groups = [
    { title: "Industry", items: caseStudies.filter((item) => item.kind === "professional") },
    { title: "Projects and research", items: caseStudies.filter((item) => item.kind === "project") },
  ];

  return (
    <>
      <PageHead title="Work" lead="Six systems, from production recommenders to research models. Each case study shows the problem, the architecture, and the measured result." />

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

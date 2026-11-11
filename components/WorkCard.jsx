import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CaseVisual from "./CaseVisual";
import Spotlight from "./fx/Spotlight";

export default function WorkCard({ study }) {
  return (
    <Spotlight as="article" className="work-card" tilt>
      <div className="work-art">
        <CaseVisual slug={study.slug} />
      </div>
      <div className="work-body">
        <p className="tile-label">
          {study.area} / {study.kind === "professional" ? study.organization.split(" (")[0] : study.organization}
        </p>
        <h3>
          <Link href={`/work/${study.slug}`}>{study.title}</Link>
        </h3>
        <p className="work-summary">{study.summary}</p>
        <div className="rail-stats">
          {study.metrics ? (
            study.metrics.map((metric) => (
              <div key={metric.label}>
                <b className="grad">{metric.value}</b>
                <span>{metric.label}</span>
              </div>
            ))
          ) : (
            <p>{study.highlight}</p>
          )}
        </div>
      </div>
      <ArrowUpRight className="tile-arrow" size={20} aria-hidden="true" />
    </Spotlight>
  );
}

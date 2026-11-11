import { Reveal } from "./fx/Reveal";

export default function SectionHead({ id, title, lead, children, center = false }) {
  return (
    <div className={`section-head${center ? " section-head--center" : ""}`}>
      <div>
        <Reveal as="h2" id={id}>
          {title}
        </Reveal>
        {lead && (
          <Reveal as="p" delay={0.1}>
            {lead}
          </Reveal>
        )}
      </div>
      {children && <Reveal delay={0.15}>{children}</Reveal>}
    </div>
  );
}

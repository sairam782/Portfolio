import { Reveal, Words } from "./fx/Reveal";

// Title block for inner pages, with the same light as the home page behind it.
export default function PageHead({ title, lead, crumbs, children }) {
  return (
    <header className="page-head">
      <div className="page-glow" aria-hidden="true" />
      <div className="wrap">
        {crumbs}
        <h1>
          <Words text={title} stagger={0.05} />
        </h1>
        {lead && (
          <Reveal delay={0.25}>
            <p className="lead">{lead}</p>
          </Reveal>
        )}
        {children && <Reveal delay={0.35}>{children}</Reveal>}
      </div>
    </header>
  );
}

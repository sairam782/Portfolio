import { Intro, IntroWords } from "./fx/Intro";

// Title block for inner pages, with the same light as the home page behind it.
export default function PageHead({ title, lead, crumbs, children }) {
  return (
    <header className="page-head">
      <div className="page-glow" aria-hidden="true" />
      <div className="wrap">
        {crumbs}
        <h1>
          <IntroWords text={title} stagger={0.05} />
        </h1>
        {lead && (
          <Intro delay={0.12}>
            <p className="lead">{lead}</p>
          </Intro>
        )}
        {children && <Intro delay={0.28}>{children}</Intro>}
      </div>
    </header>
  );
}

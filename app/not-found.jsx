import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="page-glow" aria-hidden="true" />
      <div className="wrap">
        <p className="notfound-code grad" aria-hidden="true">
          404
        </p>
        <h1>This page does not exist.</h1>
        <p className="lead">The link may be old, or the address may have a typo. The work and the resume are still here.</p>
        <div className="actions actions--center">
          <Link className="btn btn--light" href="/">
            Go to the home page
          </Link>
          <Link className="btn btn--glass" href="/work">
            See the work
          </Link>
        </div>
      </div>
    </section>
  );
}

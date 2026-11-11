import Link from "next/link";
import { nav, profile } from "@/lib/site";
import { caseStudies } from "@/lib/work";
import BrandMark from "./BrandMark";
import LocalTime from "./LocalTime";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div className="footer-brand">
          <Link href="/" className="brand">
            <BrandMark />
            <span>{profile.shortName}</span>
          </Link>
          <p>
            {profile.role}. {profile.availability}.
          </p>
          <p className="footer-time">
            <i aria-hidden="true" /> New Jersey, <LocalTime />
          </p>
        </div>

        <nav aria-labelledby="footer-site">
          <h2 id="footer-site">Site</h2>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <nav aria-labelledby="footer-work">
          <h2 id="footer-work">Case studies</h2>
          <ul>
            {caseStudies.map((item) => (
              <li key={item.slug}>
                <Link href={`/work/${item.slug}`}>{item.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-elsewhere">
          <h2 id="footer-elsewhere">Elsewhere</h2>
          <ul>
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <a href={profile.devpost} target="_blank" rel="noopener noreferrer">Devpost</a>
            </li>
            <li>
              <a href={profile.resume} download>Resume (PDF)</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer-wordmark" aria-hidden="true">
        {profile.firstName}
      </div>

      <div className="wrap footer-bottom">
        <div>
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>
            Built with Next.js.{" "}
            <a href={profile.repo} target="_blank" rel="noopener noreferrer">
              View the source
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

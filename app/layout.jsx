import localFont from "next/font/local";
import "lenis/dist/lenis.css";
import "./globals.css";
import Providers from "@/components/Providers";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { profile, siteUrl } from "@/lib/site";

// Geist and Geist Mono, self-hosted (SIL Open Font License).
const sans = localFont({ src: "./fonts/Geist-latin.woff2", variable: "--font-sans", weight: "100 900", display: "swap" });
const mono = localFont({ src: "./fonts/GeistMono-latin.woff2", variable: "--font-mono", weight: "100 900", display: "swap" });

const title = `${profile.name} | ${profile.role}`;
const description =
  "ML and AI engineer with 3+ years shipping models into products: a recommendation engine that lifted engagement 37%, computer vision for an autonomous tractor, and multi-agent LLM systems. MS in AI at NJIT. Open to full-time roles from May 2027.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${profile.name}` },
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: ["Machine learning engineer", "AI engineer", "LLM agents", "Agentic AI", "Model evaluation", "Computer vision", "Recommender systems", "PyTorch", "MLOps", "NJIT", profile.name],
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: siteUrl, siteName: profile.name, title, description, locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}/assets/portrait.jpg`,
  email: `mailto:${profile.email}`,
  jobTitle: profile.role,
  description: profile.summary,
  address: { "@type": "PostalAddress", addressRegion: "NJ", addressCountry: "US" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "New Jersey Institute of Technology" },
    { "@type": "CollegeOrUniversity", name: "Manipal Institute of Technology" },
  ],
  knowsAbout: ["Machine learning", "Agentic AI", "LLM agents", "Computer vision", "Recommender systems", "Diffusion models", "Model evaluation", "MLOps"],
  sameAs: [profile.github, profile.linkedin, profile.devpost],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        {/* Without JavaScript, nothing waits for a reveal animation. */}
        <noscript>
          <style>{`.rv{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Providers>
          <SiteHeader />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter />
        </Providers>
        <div className="grain" aria-hidden="true" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </body>
    </html>
  );
}

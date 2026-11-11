import { siteUrl } from "@/lib/site";
import { caseStudies } from "@/lib/work";

export default function sitemap() {
  const pages = ["", "/work", "/experience", "/hackathons", "/about", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: "monthly", priority: path === "" ? 1 : 0.8 })),
    ...caseStudies.map((study) => ({ url: `${siteUrl}/work/${study.slug}`, changeFrequency: "yearly", priority: 0.7 })),
  ];
}

import { ContactSection } from "@/components/PortfolioSections";
import { profile } from "@/lib/portfolio";
export const metadata = { title: "Contact" };
export default function Contact() {
  return <><section className="shell section contact-page-intro"><p className="eyebrow">Start a conversation</p><h1>Good work starts<br />with a <em>hello.</em></h1><p className="page-intro">I’m interested in full-time ML and AI engineering roles starting May 2027, research collaborations, and thoughtful conversations about building useful AI.</p><p className="contact-location">Based in New Jersey, United States · <a href="tel:+19083569089">{profile.phone}</a></p></section><ContactSection /></>;
}

import HackathonList from "@/components/HackathonList";
import ContactBand from "@/components/ContactBand";
import PageHead from "@/components/PageHead";
import { hackathons } from "@/lib/hackathons";
import { numberWord } from "@/lib/format";

export const metadata = {
  title: "Hackathons",
  description:
    "Hackathon builds from 2026 across healthcare, fintech, productivity, and developer tools, including an Honourable Mention at Rutgers Health Hack.",
  alternates: { canonical: "/hackathons" },
};

export default function HackathonsPage() {
  return (
    <>
      <PageHead
        title="Hackathons"
        lead={`${numberWord(hackathons.length)} working AI prototypes in 2026, built with teams under deadline in New York, New Jersey, and online. Every entry links to its public submission or post.`}
      />

      <section className="section section--flush">
        <div className="wrap">
          <HackathonList hackathons={hackathons} />
        </div>
      </section>

      <ContactBand />
    </>
  );
}

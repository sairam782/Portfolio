import Image from "next/image";
import Spotlight from "./fx/Spotlight";
import { profile } from "@/lib/site";

// The portrait as a lit stage: the cut-out photo stands in front of the site's
// light, and the layers shift a little with the cursor. Chips carry three facts.
export default function PortraitStage({ chips = [], priority = false, sizes = "(max-width: 860px) 86vw, 460px" }) {
  return (
    <Spotlight as="figure" className="stage" tilt>
      <span className="stage-glow" aria-hidden="true" />
      <span className="stage-rings" aria-hidden="true" />
      <span className="stage-photo">
        <Image src="/assets/portrait-cutout.webp" alt={`Portrait of ${profile.name}`} width={1100} height={1213} sizes={sizes} priority={priority} />
      </span>
      {chips.map((chip, i) => (
        <span className={`stage-chip stage-chip--${i + 1}`} key={chip.label}>
          <b>{chip.value}</b>
          {chip.label}
        </span>
      ))}
      <figcaption className="stage-name">
        <strong>{profile.name}</strong>
        <span>{profile.role}</span>
      </figcaption>
    </Spotlight>
  );
}

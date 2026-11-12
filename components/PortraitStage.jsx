import Image from "next/image";
import Spotlight from "./fx/Spotlight";
import { profile } from "@/lib/site";

// A studio-style portrait: the cut-out photo on a neutral dark backdrop,
// monochrome at rest and in colour on hover. The caption sits under the frame.
export default function PortraitStage({ priority = false, sizes = "(max-width: 860px) 86vw, 420px" }) {
  return (
    <figure className="portrait">
      <Spotlight className="portrait-frame">
        <Image
          className="portrait-img"
          src="/assets/portrait-cutout.webp"
          alt={`Portrait of ${profile.name}`}
          width={1200}
          height={1320}
          sizes={sizes}
          priority={priority}
        />
        <span className="portrait-shade" aria-hidden="true" />
      </Spotlight>
      <figcaption>
        <strong>{profile.name}</strong>
        <span>
          {profile.role}, {profile.location.split(",")[0]}
        </span>
      </figcaption>
    </figure>
  );
}

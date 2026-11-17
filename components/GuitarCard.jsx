import Link from "next/link";
import Spotlight from "./fx/Spotlight";

// "Outside of work", with an acoustic guitar drawn behind the text.
// The strings ring every few seconds, and again when the card is hovered.

const strings = [0, 1, 2, 3, 4, 5];
const frets = [365, 388, 409, 428, 446, 462, 477, 491, 504, 516, 527, 537];

export default function GuitarCard() {
  return (
    <Spotlight as="section" className="guitar-card" aria-labelledby="outside-heading">
      <svg className="guitar" viewBox="0 0 620 300" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="guitar-light" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" style={{ stopColor: "var(--c1)" }} />
            <stop offset="0.45" style={{ stopColor: "var(--c2)" }} />
            <stop offset="0.75" style={{ stopColor: "var(--c3)" }} />
            <stop offset="1" style={{ stopColor: "var(--c4)" }} />
          </linearGradient>
          <radialGradient id="guitar-glow">
            <stop offset="0" style={{ stopColor: "var(--c2)" }} stopOpacity="0.55" />
            <stop offset="1" style={{ stopColor: "var(--c2)" }} stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="215" cy="150" r="146" fill="url(#guitar-glow)" opacity="0.55" />

        {/* body */}
        <path
          d="M40 150 C40 85 95 55 140 58 C175 60 190 82 215 84 C245 86 262 78 290 80 C330 84 345 118 345 150 C345 182 330 216 290 220 C262 222 245 214 215 216 C190 218 175 240 140 242 C95 245 40 215 40 150 Z"
          fill="rgba(255,255,255,0.03)"
          stroke="url(#guitar-light)"
          strokeWidth="2.2"
        />
        <path
          d="M52 150 C52 94 100 68 140 70 C172 72 186 94 215 96 C245 98 262 90 288 92 C320 95 333 122 333 150 C333 178 320 205 288 208 C262 210 245 202 215 204 C186 206 172 228 140 230 C100 232 52 206 52 150 Z"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
        />

        {/* sound hole and rosette */}
        <circle cx="245" cy="150" r="39" fill="none" stroke="rgba(255,255,255,0.16)" />
        <circle cx="245" cy="150" r="34" fill="none" stroke="url(#guitar-light)" strokeWidth="1.4" />
        <circle className="guitar-hole" cx="245" cy="150" r="29" fill="#050507" stroke="rgba(255,255,255,0.3)" />

        {/* bridge */}
        <rect x="100" y="124" width="16" height="52" rx="4" fill="#0b0b0e" stroke="rgba(255,255,255,0.4)" />
        <path d="M112 129 V171" stroke="url(#guitar-light)" strokeWidth="2" />

        {/* neck, frets, head */}
        <path d="M345 133 L545 139 L545 161 L345 167 Z" fill="#0b0b0e" stroke="rgba(255,255,255,0.35)" />
        <g stroke="rgba(255,255,255,0.22)">
          {frets.map((x) => (
            <path key={x} d={`M${x} ${133.6 + (x - 345) * 0.03} V${166.4 - (x - 345) * 0.03}`} />
          ))}
        </g>
        <g fill="rgba(255,255,255,0.4)">
          <circle cx="409" cy="150" r="2" />
          <circle cx="446" cy="150" r="2" />
          <circle cx="477" cy="150" r="2" />
        </g>
        <path d="M545 137 L596 127 Q608 150 596 173 L545 163 Z" fill="#0b0b0e" stroke="url(#guitar-light)" strokeWidth="1.8" />
        <g fill="#0b0b0e" stroke="rgba(255,255,255,0.45)">
          {[558, 573, 588].map((x, i) => (
            <g key={x}>
              <circle cx={x} cy={127 - i * 2.4} r="4" />
              <circle cx={x} cy={173 + i * 2.4} r="4" />
            </g>
          ))}
        </g>

        {/* strings */}
        <g className="guitar-strings" fill="none" strokeLinecap="round">
          {strings.map((i) => (
            <path
              key={i}
              className="guitar-string"
              d={`M112 ${133 + i * 6.8} L545 ${141 + i * 3.6} L${560 + (i % 3) * 14} ${i < 3 ? 133 + i * 1.5 : 167 - (5 - i) * 1.5}`}
              stroke={i < 3 ? "rgba(255,255,255,0.85)" : "url(#guitar-light)"}
              strokeWidth={0.9 + (5 - i) * 0.16}
              style={{ "--i": i }}
            />
          ))}
        </g>
      </svg>

      <div className="guitar-copy">
        <h2 id="outside-heading">Outside of work</h2>
        <p>
          Guitarist off the clock. When I am not building, I am usually playing, chasing a new idea, or at the next
          hackathon around New York and New Jersey.
        </p>
        <Link className="text-link" href="/hackathons">
          See the hackathon builds
        </Link>
      </div>
    </Spotlight>
  );
}

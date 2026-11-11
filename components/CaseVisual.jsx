"use client";

import { useId } from "react";
import useStill from "./fx/useStill";

// One animated illustration per case study. These are drawings of how each
// system works, not product screenshots. All motion stops for reduced-motion users.

const line = "rgba(255,255,255,0.16)";
const soft = "rgba(255,255,255,0.07)";

function Defs({ id }) {
  return (
    <defs>
      <linearGradient id={`${id}-g`} x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stopColor="#3d80ff" />
        <stop offset="0.45" stopColor="#9461ff" />
        <stop offset="0.75" stopColor="#ff5ca8" />
        <stop offset="1" stopColor="#ffa852" />
      </linearGradient>
      <radialGradient id={`${id}-glow`}>
        <stop offset="0" stopColor="#9461ff" stopOpacity="0.5" />
        <stop offset="1" stopColor="#9461ff" stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

/* Froker: a ranked feed. The best match climbs to the top. */
function Recommender({ id }) {
  const rows = [0, 1, 2, 3, 4];
  const widths = [150, 118, 176, 96, 132];
  return (
    <>
      <circle cx="200" cy="150" r="170" fill={`url(#${id}-glow)`} opacity="0.5" />
      {rows.map((row) => (
        <g key={row} className={`cv-rank cv-rank--${row}`}>
          <rect x="60" y={34 + row * 48} width="280" height="38" rx="11" fill={row === 2 ? "rgba(148,97,255,0.16)" : soft} stroke={row === 2 ? `url(#${id}-g)` : line} strokeWidth={row === 2 ? 1.6 : 1} />
          <rect x="70" y={42 + row * 48} width="22" height="22" rx="6" fill={row === 2 ? `url(#${id}-g)` : line} />
          <rect x="104" y={45 + row * 48} width={widths[row] * 0.55} height="5" rx="2.5" fill="rgba(255,255,255,0.4)" />
          <rect x="104" y={56 + row * 48} width={widths[row] * 0.35} height="4" rx="2" fill={line} />
          <rect x="250" y={50 + row * 48} width="76" height="6" rx="3" fill={soft} />
          <rect className="cv-score" x="250" y={50 + row * 48} width={[38, 30, 70, 22, 46][row]} height="6" rx="3" fill={`url(#${id}-g)`} style={{ "--d": `${row * 0.12}s` }} />
        </g>
      ))}
    </>
  );
}

/* Montra: camera view down crop rows, with detections and a depth scale. */
function Vision({ id }) {
  const boxes = [
    { x: 92, y: 150, w: 54, h: 70 },
    { x: 182, y: 124, w: 40, h: 52 },
    { x: 252, y: 162, w: 60, h: 78 },
  ];
  return (
    <>
      <rect x="40" y="36" width="290" height="228" rx="14" fill={soft} stroke={line} />
      <g stroke={line} strokeWidth="1">
        {[-3, -2, -1, 0, 1, 2, 3].map((n) => (
          <path key={n} d={`M185 96 L${185 + n * 62} 264`} />
        ))}
        <path d="M40 96 H330" />
      </g>
      <rect className="cv-scan" x="40" y="96" width="290" height="2" fill={`url(#${id}-g)`} />
      {boxes.map((box, i) => (
        <g key={i} className="cv-box" style={{ "--d": `${i * 0.5}s` }}>
          <rect x={box.x} y={box.y} width={box.w} height={box.h} rx="5" fill="rgba(61,128,255,0.08)" stroke={`url(#${id}-g)`} strokeWidth="1.6" />
          <rect x={box.x} y={box.y - 13} width="30" height="9" rx="4.5" fill={`url(#${id}-g)`} />
        </g>
      ))}
      <rect x="346" y="60" width="10" height="180" rx="5" fill={`url(#${id}-g)`} opacity="0.85" />
      <g stroke="rgba(255,255,255,0.35)" strokeWidth="1">
        {[0, 1, 2, 3, 4].map((n) => (
          <path key={n} d={`M360 ${64 + n * 43} h7`} />
        ))}
      </g>
      <circle className="cv-depth" cx="351" cy="70" r="7" fill="#000" stroke="#fff" strokeWidth="2" />
    </>
  );
}

/* Trinetra: signals pass through the agent tiers to a gated executor. */
function Agents({ id, still }) {
  const nodes = [
    { x: 150, y: 150, label: "T" },
    { x: 215, y: 150, label: "A" },
    { x: 280, y: 150, label: "C" },
  ];
  const inputs = [70, 123, 177, 230];
  const paths = inputs.map((y) => `M52 ${y} C100 ${y} 100 150 138 150 H330`);
  return (
    <>
      <circle cx="215" cy="150" r="150" fill={`url(#${id}-glow)`} opacity="0.45" />
      {paths.map((d, i) => (
        <path key={i} d={d} fill="none" stroke={line} strokeWidth="1.2" />
      ))}
      {inputs.map((y) => (
        <circle key={y} cx="46" cy={y} r="6" fill="#000" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
      ))}
      {!still &&
        paths.map((d, i) => (
          <circle key={i} r="3.4" fill="#fff">
            <animateMotion dur="3.6s" begin={`${i * 0.9}s`} repeatCount="indefinite" path={d} keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="3.6s" begin={`${i * 0.9}s`} repeatCount="indefinite" />
          </circle>
        ))}
      {nodes.map((node, i) => (
        <g key={node.label} className="cv-node" style={{ "--d": `${i * 0.45}s` }}>
          <circle cx={node.x} cy={node.y} r="21" fill="#0b0b0e" stroke={`url(#${id}-g)`} strokeWidth="1.8" />
          <circle cx={node.x} cy={node.y} r="5" fill={`url(#${id}-g)`} />
        </g>
      ))}
      {/* the gate in front of the executor */}
      <rect x="318" y="118" width="46" height="64" rx="12" fill="#0b0b0e" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      <path className="cv-gate" d="M331 150 l8 8 l14 -17" fill="none" stroke={`url(#${id}-g)`} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      {/* audit trail */}
      <g className="cv-audit">
        {[0, 1, 2, 3, 4, 5].map((n) => (
          <rect key={n} x={130 + n * 40} y="232" width="30" height="6" rx="3" fill={line} style={{ "--d": `${n * 0.3}s` }} />
        ))}
      </g>
    </>
  );
}

/* GymCom: a tracked skeleton moving through a squat. */
function Pose({ id, still }) {
  const stand = { head: [200, 62], sh: [200, 96], hip: [200, 170], knee: [202, 222], ankle: [200, 270], elbow: [222, 124], wrist: [252, 132] };
  const squat = { head: [176, 112], sh: [182, 144], hip: [160, 206], knee: [224, 212], ankle: [204, 270], elbow: [214, 160], wrist: [248, 150] };
  const d = (p) => `M${p.sh} L${p.hip} L${p.knee} L${p.ankle} M${p.sh} L${p.elbow} L${p.wrist} M${p.sh} L${p.head}`;
  const dur = "3.4s";
  const joints = ["sh", "hip", "knee", "ankle", "elbow", "wrist"];
  return (
    <>
      <circle cx="200" cy="170" r="150" fill={`url(#${id}-glow)`} opacity="0.45" />
      <rect x="92" y="34" width="216" height="244" rx="14" fill="none" stroke={line} strokeDasharray="4 7" />
      <path d="M70 270 H330" stroke={line} />
      <path d={d(still ? squat : stand)} fill="none" stroke={`url(#${id}-g)`} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        {!still && <animate attributeName="d" values={`${d(stand)};${d(squat)};${d(stand)}`} dur={dur} repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />}
      </path>
      <circle cx={(still ? squat : stand).head[0]} cy={(still ? squat : stand).head[1]} r="15" fill="#0b0b0e" stroke={`url(#${id}-g)`} strokeWidth="4">
        {!still && (
          <>
            <animate attributeName="cx" values={`${stand.head[0]};${squat.head[0]};${stand.head[0]}`} dur={dur} repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
            <animate attributeName="cy" values={`${stand.head[1]};${squat.head[1]};${stand.head[1]}`} dur={dur} repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
          </>
        )}
      </circle>
      {joints.map((joint) => (
        <circle key={joint} cx={(still ? squat : stand)[joint][0]} cy={(still ? squat : stand)[joint][1]} r="5.5" fill="#fff" stroke="#0b0b0e" strokeWidth="2">
          {!still && (
            <>
              <animate attributeName="cx" values={`${stand[joint][0]};${squat[joint][0]};${stand[joint][0]}`} dur={dur} repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
              <animate attributeName="cy" values={`${stand[joint][1]};${squat[joint][1]};${stand[joint][1]}`} dur={dur} repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
            </>
          )}
        </circle>
      ))}
      {/* form score meter */}
      <rect x="326" y="70" width="8" height="170" rx="4" fill={soft} />
      <rect className="cv-meter" x="326" y="70" width="8" height="170" rx="4" fill={`url(#${id}-g)`} />
    </>
  );
}

/* Synthetic MRI: a slice emerges from noise, step by step. */
function Diffusion({ id }) {
  return (
    <>
      <defs>
        <filter id={`${id}-noise`} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" />
          <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1.6 -0.55" />
        </filter>
        <clipPath id={`${id}-clip`}>
          <circle cx="200" cy="138" r="96" />
        </clipPath>
      </defs>
      <circle cx="200" cy="138" r="140" fill={`url(#${id}-glow)`} opacity="0.5" />
      <circle cx="200" cy="138" r="96" fill="#0b0b0e" stroke={line} />
      <g clipPath={`url(#${id}-clip)`}>
        <g className="cv-slice" fill="none" stroke={`url(#${id}-g)`} strokeWidth="2">
          <ellipse cx="200" cy="140" rx="66" ry="78" />
          <ellipse cx="200" cy="140" rx="52" ry="64" opacity="0.7" />
          <path d="M200 66 V214" opacity="0.6" />
          <path d="M168 104 q16 18 0 40 q-14 20 4 42 M232 104 q-16 18 0 40 q14 20 -4 42" opacity="0.8" />
          <ellipse cx="222" cy="120" rx="13" ry="10" fill="rgba(255,92,168,0.35)" stroke="#ff5ca8" />
        </g>
        <rect className="cv-noise" x="100" y="38" width="200" height="200" filter={`url(#${id}-noise)`} />
      </g>
      {/* denoising steps */}
      <path d="M96 268 H304" stroke={line} />
      {[0, 1, 2, 3, 4, 5].map((n) => (
        <circle key={n} className="cv-step" cx={96 + n * 41.6} cy="268" r="5" fill="#0b0b0e" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" style={{ "--d": `${n * 0.55}s` }} />
      ))}
    </>
  );
}

/* Deepfake detection: local patches on one side, global attention on the other. */
function Face({ id }) {
  const patches = [
    [142, 96], [160, 126], [136, 150], [158, 176], [146, 206], [172, 150],
  ];
  const points = [
    [228, 92], [258, 128], [232, 160], [262, 190], [236, 222],
  ];
  return (
    <>
      <circle cx="200" cy="150" r="150" fill={`url(#${id}-glow)`} opacity="0.4" />
      <g fill="none" stroke={line}>
        <ellipse cx="200" cy="152" rx="84" ry="112" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" />
        {[18, 38, 60].map((rx) => (
          <ellipse key={rx} cx="200" cy="152" rx={rx} ry="112" />
        ))}
        {[-70, -35, 0, 35, 70].map((dy) => (
          <path key={dy} d={`M${200 - Math.sqrt(1 - (dy / 112) ** 2) * 84} ${152 + dy} H${200 + Math.sqrt(1 - (dy / 112) ** 2) * 84}`} />
        ))}
      </g>
      {patches.map(([x, y], i) => (
        <rect key={i} className="cv-patch" x={x} y={y} width="18" height="18" rx="4" fill="rgba(61,128,255,0.25)" stroke="#3d80ff" strokeWidth="1.4" style={{ "--d": `${i * 0.35}s` }} />
      ))}
      <g fill="none" stroke={`url(#${id}-g)`} strokeWidth="1.5" className="cv-attn">
        <path d="M228 92 Q290 110 258 128" />
        <path d="M228 92 Q200 130 232 160" />
        <path d="M258 128 Q300 160 262 190" />
        <path d="M232 160 Q210 195 236 222" />
        <path d="M258 128 Q236 140 232 160" />
        <path d="M262 190 Q256 212 236 222" />
      </g>
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4.5" fill="#fff" />
      ))}
      <path d="M200 30 V274" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" strokeDasharray="3 6" />
      <rect className="cv-sweep" x="110" y="38" width="180" height="2.5" rx="1.25" fill={`url(#${id}-g)`} />
    </>
  );
}

const visuals = {
  "froker-recommendation-engine": Recommender,
  "montra-autonomous-spraying": Vision,
  trinetra: Agents,
  gymcom: Pose,
  "synthetic-mri-generation": Diffusion,
  "deepfake-detection": Face,
};

export default function CaseVisual({ slug, className = "" }) {
  const id = useId().replaceAll(":", "");
  const still = useStill();
  const Visual = visuals[slug];
  if (!Visual) return null;
  return (
    <svg className={`case-visual ${className}`} viewBox="0 0 400 300" aria-hidden="true" focusable="false">
      <Defs id={id} />
      <Visual id={id} still={still} />
    </svg>
  );
}

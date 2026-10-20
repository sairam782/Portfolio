"use client";

import { useState } from "react";
import { ArrowUpRight, Play, RotateCcw } from "lucide-react";

const modes = {
  Agents: { input: "Incident signals", layers: [4, 5, 3, 1], output: "A plan of action", note: "Bring signals together. Reason over context. Keep actions reviewable." },
  Vision: { input: "Visual features", layers: [6, 5, 3, 2], output: "Scene understanding", note: "Turn pixels into features, patterns, and useful predictions." },
  Ranking: { input: "User + item signals", layers: [5, 6, 4, 3], output: "Relevant recommendations", note: "Connect behavior and content to make discovery more personal." },
};

export default function NeuralLab() {
  const [mode, setMode] = useState("Agents");
  const [pulse, setPulse] = useState(0);
  const [active, setActive] = useState(false);
  const config = modes[mode];
  const layers = config.layers.map((count, layer) => Array.from({ length: count }, (_, i) => ({
    x: 48 + layer * 112,
    y: 135 + (i - (count - 1) / 2) * 35,
    key: `${layer}-${i}`,
  })));

  function chooseMode(nextMode) {
    setMode(nextMode);
    setActive(false);
  }

  return (
    <div className="neural-lab">
      <div className="lab-top"><span className="lab-dots"><i /><i /><i /></span><span>neural_playground</span><span className="lab-version">v.01</span></div>
      <div className="lab-controls" role="group" aria-label="Explore AI concepts">
        {Object.keys(modes).map(item => <button type="button" key={item} aria-pressed={mode === item} onClick={() => chooseMode(item)}>{item}</button>)}
      </div>
      <div className="lab-labels"><span>{config.input}</span><ArrowUpRight size={14} /><span>{config.output}</span></div>
      <svg key={`${mode}-${pulse}`} viewBox="0 0 440 270" className={`neural-diagram ${active ? "signal-running" : ""}`} role="img" aria-label={`${mode} concept: ${config.input} flows through connected nodes to ${config.output.toLowerCase()}.`}>
        <defs><pattern id="lab-grid" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".7" fill="currentColor" opacity=".2" /></pattern></defs>
        <rect width="440" height="270" fill="url(#lab-grid)" />
        {layers.slice(0, -1).flatMap((layer, li) => layer.flatMap((node, ni) => layers[li + 1].map((next, nj) => (
          <line className={`neural-edge ${(ni + nj) % 3 === 0 ? "signal-edge" : ""}`} key={`${node.key}-${next.key}`} x1={node.x} y1={node.y} x2={next.x} y2={next.y} style={{ animationDelay: `${li * .3}s` }} />
        ))))}
        {layers.flatMap((layer, li) => layer.map((node, ni) => <g key={node.key} style={{ animationDelay: `${li * .3}s` }} className="neural-node"><circle cx={node.x} cy={node.y} r="10" className="node-halo" /><circle cx={node.x} cy={node.y} r="3.5" className={li === 3 || ni === 2 ? "node-bright" : "node-normal"} /></g>))}
        <text x="48" y="250">INPUT</text><text x="190" y="250">REASONING</text><text x="367" y="250">OUTPUT</text>
      </svg>
      <div className="lab-bottom"><div><span className="eyebrow">Interactive concept</span><p aria-live="polite">{active ? "Signal path illuminated" : "Explore how the connections change"}</p></div><button type="button" className="signal-button" onClick={() => { setPulse(value => value + 1); setActive(true); }} aria-label={active ? "Replay signal" : "Run signal"}>{active ? <RotateCcw size={16} /> : <Play size={16} />}<span>{active ? "Replay" : "Run signal"}</span></button></div>
      <p className="lab-note">{config.note}</p>
    </div>
  );
}

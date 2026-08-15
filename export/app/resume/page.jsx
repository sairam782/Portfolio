"use client";

import { useEffect, useRef } from "react";
import "../portfolio.css";

export default function Resume() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll("[data-reveal]"));
    if (!els.length) return;
    const show = (el) => { el.style.animation = "rise 700ms cubic-bezier(.2,.75,.2,1) both"; };
    if (!("IntersectionObserver" in window)) { els.forEach(show); return; }
    els.forEach((el) => { el.style.opacity = "0"; });
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => { if (en.isIntersecting) { show(en.target); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="asg-resume" ref={rootRef} style={{ background: "#F2F0EA", color: "#12100E", fontFamily: "'Space Grotesk', system-ui, sans-serif", overflowX: "hidden" }}>
        <header style={{ position: "sticky", top: "0", zIndex: "500", background: "rgba(242,240,234,0.9)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(18,16,14,0.12)" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "15px 44px", display: "flex", alignItems: "center", gap: "30px" }}>
            <a href="/" style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "21px", letterSpacing: "-0.03em", color: "#12100E", textDecoration: "none" }}>
              A.S.G
              <span style={{ color: "#C1121F" }}>/</span>
            </a>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(18,16,14,0.55)" }}>Full resume</span>
            <div style={{ marginLeft: "auto", display: "flex", gap: "12px", alignItems: "center" }}>
              <a className="hv18" href="/" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#12100E", textDecoration: "none" }}>Back to work</a>
              <a className="hv19" href="mailto:ag2936@njit.edu" style={{ background: "#12100E", color: "#F2F0EA", textDecoration: "none", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "12px 22px", transition: "background 200ms ease" }}>Email me</a>
            </div>
          </div>
        </header>
        <section style={{ maxWidth: "1080px", margin: "0 auto", padding: "72px 44px 48px" }}>
          <div style={{ height: "6px", background: "#C1121F", width: "120px", marginBottom: "30px" }}></div>
          <h1 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "82px", lineHeight: "0.9", letterSpacing: "-0.045em", margin: "0 0 26px", textTransform: "uppercase" }}>
            Abhishek
            <br />
            Sairam
            <br />
            Gaduputi
          </h1>
          <p style={{ fontSize: "20px", lineHeight: "1.5", color: "rgba(18,16,14,0.78)", maxWidth: "62ch", margin: "0 0 30px", textWrap: "pretty" }}>Graduate researcher with production ML behind me. I work across generative modeling, computer vision and multi agent systems, and I have shipped recommendation, perception and analytics systems that carried real traffic. I move between research experimentation and end to end deployment without handing anything over a wall.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "26px", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(18,16,14,0.6)" }}>
            <span>Newark, New Jersey</span>
            <a href="mailto:ag2936@njit.edu" style={{ textDecoration: "none" }}>ag2936@njit.edu</a>
            <a href="tel:+19083569089" style={{ textDecoration: "none" }}>+1 908 356 9089</a>
            <a href="https://github.com/sairam782" style={{ textDecoration: "none" }}>github.com/sairam782</a>
            <a href="https://linkedin.com/in/abhishek-sairam-gaduputi" style={{ textDecoration: "none" }}>LinkedIn</a>
          </div>
        </section>
        <section style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 44px 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "2px solid #12100E", borderBottom: "2px solid #12100E" }}>
            <div style={{ padding: "26px 20px 26px 0", borderRight: "1px solid rgba(18,16,14,0.15)" }}>
              <div style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "46px", lineHeight: "1", letterSpacing: "-0.04em", color: "#C1121F" }}>3 yrs</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(18,16,14,0.6)", marginTop: "10px" }}>Production ML experience</div>
            </div>
            <div style={{ padding: "26px 20px", borderRight: "1px solid rgba(18,16,14,0.15)" }}>
              <div style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "46px", lineHeight: "1", letterSpacing: "-0.04em", color: "#C1121F" }}>4.0</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(18,16,14,0.6)", marginTop: "10px" }}>MS AI GPA at NJIT</div>
            </div>
            <div style={{ padding: "26px 20px", borderRight: "1px solid rgba(18,16,14,0.15)" }}>
              <div style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "46px", lineHeight: "1", letterSpacing: "-0.04em", color: "#C1121F" }}>6</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(18,16,14,0.6)", marginTop: "10px" }}>Systems shipped or published</div>
            </div>
            <div style={{ padding: "26px 0 26px 20px" }}>
              <div style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "46px", lineHeight: "1", letterSpacing: "-0.04em", color: "#C1121F" }}>2027</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(18,16,14,0.6)", marginTop: "10px" }}>Available!!</div>
            </div>
          </div>
        </section>
        <section style={{ maxWidth: "1080px", margin: "0 auto", padding: "48px 44px 0" }}>
          <h2 data-reveal="" style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "56px", lineHeight: "0.95", letterSpacing: "-0.04em", margin: "0 0 34px", textTransform: "uppercase" }}>Experience</h2>
          <article data-reveal="" style={{ borderTop: "2px solid #12100E", padding: "34px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "20px", marginBottom: "8px" }}>
              <h3 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "34px", letterSpacing: "-0.03em", margin: "0", textTransform: "uppercase" }}>Senior Executive, R&D</h3>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", letterSpacing: "0.08em", color: "rgba(18,16,14,0.55)", whiteSpace: "nowrap" }}>NOV 2024 / JUL 2025</span>
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", letterSpacing: "0.06em", color: "#C1121F", textTransform: "uppercase", marginBottom: "20px" }}>Montra Electric Tractor, TI Clean Mobility, Murugappa Group. Chennai, India</div>
            <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "34px" }}>
              <p style={{ fontSize: "16px", lineHeight: "1.6", color: "rgba(18,16,14,0.78)", margin: "0" }}>An electric tractor has to work in fields where sensors get dirty, the grid is unreliable and every rupee of bill of materials is contested. My job was to make perception and power systems survive that.</p>
              <ul style={{ margin: "0", paddingLeft: "20px", fontSize: "15.5px", lineHeight: "1.6", color: "rgba(18,16,14,0.78)", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li>Fine tuned and optimised YOLOv11 and MiDaS for an autonomous fertilizer spraying solution, reducing reliance on heavy sensor hardware and lowering system cost by 15 to 21%.</li>
                <li>Designed and tested the battery management system, optimising charging strategy to cut 0 to 80% charge time by 23 minutes against standard benchmarks.</li>
                <li>Proposed and integrated a 3 kW onboard charger compatible with standard residential power, enabling reliable EV charging in low grid regions with no external transformer.</li>
              </ul>
            </div>
          </article>
          <article data-reveal="" style={{ borderTop: "2px solid #12100E", padding: "34px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "20px", marginBottom: "8px" }}>
              <h3 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "34px", letterSpacing: "-0.03em", margin: "0", textTransform: "uppercase" }}>Machine Learning Engineer</h3>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", letterSpacing: "0.08em", color: "rgba(18,16,14,0.55)", whiteSpace: "nowrap" }}>MAY 2022 / OCT 2024</span>
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", letterSpacing: "0.06em", color: "#C1121F", textTransform: "uppercase", marginBottom: "20px" }}>Froker, Arroz Technologies. Bangalore, India</div>
            <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "34px" }}>
              <p style={{ fontSize: "16px", lineHeight: "1.6", color: "rgba(18,16,14,0.78)", margin: "0" }}>I joined when recommendations were a heuristic and analytics was a spreadsheet. I left with a production engine serving three content types and a data platform the whole company reported on.</p>
              <ul style={{ margin: "0", paddingLeft: "20px", fontSize: "15.5px", lineHeight: "1.6", color: "rgba(18,16,14,0.78)", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li>Built and deployed an end to end recommendation engine for food, short videos and prompts, increasing user engagement by 37% and orders by 11% through iterative algorithm optimisation.</li>
                <li>Built and optimised MongoDB data pipelines to power that engine and enable large scale analysis, scaling early internal tooling into full production infrastructure.</li>
                <li>Designed and deployed a multimodal content scoring pipeline using Microsoft AI Foundry APIs, evaluating multiple foundation models and tuning hyperparameters to meet platform evaluation requirements.</li>
                <li>Designed interactive analytics dashboards in Retool, Mixpanel and Google Analytics 4, from exploratory analysis through to company wide reporting.</li>
              </ul>
            </div>
          </article>
          <article data-reveal="" style={{ borderTop: "2px solid #12100E", borderBottom: "2px solid #12100E", padding: "34px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "20px", marginBottom: "8px" }}>
              <h3 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "34px", letterSpacing: "-0.03em", margin: "0", textTransform: "uppercase" }}>Undergraduate Research Assistant</h3>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", letterSpacing: "0.08em", color: "rgba(18,16,14,0.55)", whiteSpace: "nowrap" }}>SEP 2021 / FEB 2022</span>
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", letterSpacing: "0.06em", color: "#C1121F", textTransform: "uppercase", marginBottom: "20px" }}>Embedded Systems, Manipal Institute of Technology. Manipal, India</div>
            <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "34px" }}>
              <p style={{ fontSize: "16px", lineHeight: "1.6", color: "rgba(18,16,14,0.78)", margin: "0" }}>Control theory on real hardware, where a tuning error shows up as a robot in a wall. This is where the habit of measuring before optimising started.</p>
              <ul style={{ margin: "0", paddingLeft: "20px", fontSize: "15.5px", lineHeight: "1.6", color: "rgba(18,16,14,0.78)", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li>Designed and built an autonomous line following and obstacle avoiding robot on a microcontroller platform, implementing closed loop PID control over an IR sensor array to hold path tracking accuracy at varying speeds.</li>
                <li>Integrated ultrasonic distance sensing for real time obstacle detection and dynamic path rerouting, tuning motor driver control logic to improve turn stability and reduce path deviation on curved segments.</li>
              </ul>
            </div>
          </article>
        </section>
        <section style={{ background: "#12100E", color: "#F2F0EA", marginTop: "72px", padding: "80px 0" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 44px" }}>
            <h2 data-reveal="" style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "56px", lineHeight: "0.95", letterSpacing: "-0.04em", margin: "0 0 12px", textTransform: "uppercase" }}>
              Projects, in
              <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: "400", textTransform: "none", color: "#C1121F" }}>detail</span>
            </h2>
            <p style={{ fontSize: "16px", color: "rgba(242,240,234,0.6)", margin: "0 0 44px", maxWidth: "56ch" }}>Longer than the PDF version. Each one states the problem, the approach and what came out of it.</p>
            <article data-reveal="" style={{ borderTop: "1px solid rgba(242,240,234,0.25)", padding: "34px 0", display: "grid", gridTemplateColumns: "0.35fr 1fr", gap: "34px" }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C1121F", marginBottom: "10px" }}>01 / Multi agent</div>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "34px", lineHeight: "0.98", letterSpacing: "-0.03em", margin: "0", textTransform: "uppercase" }}>Trinetra</h3>
              </div>
              <div>
                <p style={{ fontSize: "16px", lineHeight: "1.62", color: "rgba(242,240,234,0.8)", margin: "0 0 14px" }}>
                  <strong style={{ color: "#F2F0EA" }}>Problem.</strong>
                  On call engineers lose the first twenty minutes of every incident to context gathering. The signal is spread across alerts, logs, metrics and traces, and nobody reads all four under pressure.
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.62", color: "rgba(242,240,234,0.8)", margin: "0 0 14px" }}>
                  <strong style={{ color: "#F2F0EA" }}>Approach.</strong>
                  A tiered agent architecture. A commander agent coordinates, a telemetry agent gathers across all four signal types, a triage and adjudication agent reasons over the assembled context and selects an approved remediation runbook, and a documentation agent writes the record. Tools are integrated over MCP.
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.62", color: "rgba(242,240,234,0.8)", margin: "0" }}>
                  <strong style={{ color: "#C1121F" }}>Outcome.</strong>
                  A dry run first executor with a gated approval step and a structured audit trail, so automated recovery stays verifiable rather than mysterious.
                </p>
              </div>
            </article>
            <article data-reveal="" style={{ borderTop: "1px solid rgba(242,240,234,0.25)", padding: "34px 0", display: "grid", gridTemplateColumns: "0.35fr 1fr", gap: "34px" }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C1121F", marginBottom: "10px" }}>02 / Computer vision</div>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "34px", lineHeight: "0.98", letterSpacing: "-0.03em", margin: "0", textTransform: "uppercase" }}>GymCom</h3>
              </div>
              <div>
                <p style={{ fontSize: "16px", lineHeight: "1.62", color: "rgba(242,240,234,0.8)", margin: "0 0 14px" }}>
                  <strong style={{ color: "#F2F0EA" }}>Problem.</strong>
                  Form coaching is the part of training that does not scale. Video review is slow and generic apps count reps without judging them.
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.62", color: "rgba(242,240,234,0.8)", margin: "0 0 14px" }}>
                  <strong style={{ color: "#F2F0EA" }}>Approach.</strong>
                  Pose tracking runs browser side, a FastAPI backend handles analysis and Claude writes the coaching report. Exercise specific joint angle thresholds drive live rep counting, form scoring and posture and symmetry feedback. Browser side frame sampling keeps video payloads small enough to deploy on Vercel and Render.
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.62", color: "rgba(242,240,234,0.8)", margin: "0" }}>
                  <strong style={{ color: "#C1121F" }}>Outcome.</strong>
                  A full stack app with both a live real time mode and an uploaded video analyzer, running without a GPU.
                </p>
              </div>
            </article>
            <article data-reveal="" style={{ borderTop: "1px solid rgba(242,240,234,0.25)", padding: "34px 0", display: "grid", gridTemplateColumns: "0.35fr 1fr", gap: "34px" }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C1121F", marginBottom: "10px" }}>03 / Deep learning</div>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "34px", lineHeight: "0.98", letterSpacing: "-0.03em", margin: "0", textTransform: "uppercase" }}>ResNet ViT deepfake detection</h3>
              </div>
              <div>
                <p style={{ fontSize: "16px", lineHeight: "1.62", color: "rgba(242,240,234,0.8)", margin: "0 0 14px" }}>
                  <strong style={{ color: "#F2F0EA" }}>Problem.</strong>
                  Convolutional detectors read local artefacts and miss global inconsistency. Transformers read the whole face and miss the fine forgery texture.
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.62", color: "rgba(242,240,234,0.8)", margin: "0 0 14px" }}>
                  <strong style={{ color: "#F2F0EA" }}>Approach.</strong>
                  A hybrid residual network and vision transformer framework that captures local forgery artefacts and global semantics in facial images in a single classifier.
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.62", color: "rgba(242,240,234,0.8)", margin: "0" }}>
                  <strong style={{ color: "#C1121F" }}>Outcome.</strong>
                  Up to 86% prediction accuracy on benchmark datasets including Celeb DFv2.
                </p>
              </div>
            </article>
            <article data-reveal="" style={{ borderTop: "1px solid rgba(242,240,234,0.25)", padding: "34px 0", display: "grid", gridTemplateColumns: "0.35fr 1fr", gap: "34px" }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C1121F", marginBottom: "10px" }}>04 / Generative</div>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "34px", lineHeight: "0.98", letterSpacing: "-0.03em", margin: "0", textTransform: "uppercase" }}>Synthetic MRI generation</h3>
              </div>
              <div>
                <p style={{ fontSize: "16px", lineHeight: "1.62", color: "rgba(242,240,234,0.8)", margin: "0 0 14px" }}>
                  <strong style={{ color: "#F2F0EA" }}>Problem.</strong>
                  Pediatric brain tumor data is scarce by definition. A classifier trained on what exists fails on exactly the rare cases that matter most.
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.62", color: "rgba(242,240,234,0.8)", margin: "0 0 14px" }}>
                  <strong style={{ color: "#F2F0EA" }}>Approach.</strong>
                  A 2D denoising diffusion model built in MONAI, generating synthetic axial FLAIR slices from the BraTS PED dataset, then folded back into a ResNet18 classification pipeline as training data.
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.62", color: "rgba(242,240,234,0.8)", margin: "0" }}>
                  <strong style={{ color: "#C1121F" }}>Outcome.</strong>
                  Tumor detection accuracy improved from 82% to 88%.
                </p>
              </div>
            </article>
            <article data-reveal="" style={{ borderTop: "1px solid rgba(242,240,234,0.25)", borderBottom: "1px solid rgba(242,240,234,0.25)", padding: "34px 0", display: "grid", gridTemplateColumns: "0.35fr 1fr", gap: "34px" }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C1121F", marginBottom: "10px" }}>05 / IoT</div>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "34px", lineHeight: "0.98", letterSpacing: "-0.03em", margin: "0", textTransform: "uppercase" }}>Precision farm management</h3>
              </div>
              <div>
                <p style={{ fontSize: "16px", lineHeight: "1.62", color: "rgba(242,240,234,0.8)", margin: "0 0 14px" }}>
                  <strong style={{ color: "#F2F0EA" }}>Approach.</strong>
                  A real time IoT farm monitoring system using soil, temperature and humidity sensors to automate irrigation, with MongoDB Atlas behind it for logging and visualisation.
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.62", color: "rgba(242,240,234,0.8)", margin: "0" }}>
                  <strong style={{ color: "#C1121F" }}>Outcome.</strong>
                  Simulated optimisation achieved a 14% crop yield increase.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section style={{ maxWidth: "1080px", margin: "0 auto", padding: "80px 44px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px" }}>
          <div>
            <h2 data-reveal="" style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "44px", lineHeight: "0.95", letterSpacing: "-0.04em", margin: "0 0 28px", textTransform: "uppercase" }}>Education</h2>
            <div data-reveal="" style={{ borderTop: "2px solid #12100E", padding: "24px 0" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C1121F", marginBottom: "10px" }}>Sept 2025 to May 2027</div>
              <h3 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "26px", lineHeight: "1", letterSpacing: "-0.02em", margin: "0 0 8px", textTransform: "uppercase" }}>MS, Artificial Intelligence</h3>
              <div style={{ fontSize: "15.5px", color: "rgba(18,16,14,0.72)" }}>New Jersey Institute of Technology. GPA 4.0 out of 4.0.</div>
            </div>
            <div data-reveal="" style={{ borderTop: "2px solid #12100E", borderBottom: "2px solid #12100E", padding: "24px 0" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C1121F", marginBottom: "10px" }}>Sept 2020 to June 2024</div>
              <h3 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "26px", lineHeight: "1", letterSpacing: "-0.02em", margin: "0 0 8px", textTransform: "uppercase" }}>BTech, Electronics and Instrumentation</h3>
              <div style={{ fontSize: "15.5px", color: "rgba(18,16,14,0.72)" }}>Manipal Institute of Technology. Minor in Data Science. CGPA 8.08 out of 10.</div>
            </div>
          </div>
          <div>
            <h2 data-reveal="" style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "44px", lineHeight: "0.95", letterSpacing: "-0.04em", margin: "0 0 28px", textTransform: "uppercase" }}>Skills</h2>
            <div data-reveal="" style={{ borderTop: "2px solid #12100E", padding: "22px 0" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C1121F", marginBottom: "12px" }}>Languages</div>
              <div style={{ fontSize: "16px", lineHeight: "1.6", color: "rgba(18,16,14,0.8)" }}>Python, C, C++, SQL, NoSQL, Cypher</div>
            </div>
            <div data-reveal="" style={{ borderTop: "1px solid rgba(18,16,14,0.2)", padding: "22px 0" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C1121F", marginBottom: "12px" }}>Frameworks and libraries</div>
              <div style={{ fontSize: "16px", lineHeight: "1.6", color: "rgba(18,16,14,0.8)" }}>TensorFlow, PyTorch, Scikit learn, Pandas, NumPy, Matplotlib, MONAI</div>
            </div>
            <div data-reveal="" style={{ borderTop: "1px solid rgba(18,16,14,0.2)", borderBottom: "2px solid #12100E", padding: "22px 0" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C1121F", marginBottom: "12px" }}>Cloud and tools</div>
              <div style={{ fontSize: "16px", lineHeight: "1.6", color: "rgba(18,16,14,0.8)" }}>Azure AI Foundry, AWS EC2, PySpark, MapReduce, Git, GitHub, CI/CD, Neo4j, Tableau, Retool, Mixpanel, Google Analytics 4</div>
            </div>
          </div>
        </section>
        <section style={{ background: "#C1121F", color: "#F2F0EA", padding: "76px 0" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 44px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "40px", flexWrap: "wrap" }}>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "52px", lineHeight: "0.95", letterSpacing: "-0.04em", margin: "0", textTransform: "uppercase" }}>
              Available!!
              <span style={{ color: "#12100E" }}>.</span>
            </h2>
            <a className="hv20" href="mailto:ag2936@njit.edu" style={{ background: "#12100E", color: "#F2F0EA", textDecoration: "none", fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "20px 34px", transition: "background 200ms ease, color 200ms ease" }}>ag2936@njit.edu</a>
          </div>
        </section>
      </div>
    </>
  );
}

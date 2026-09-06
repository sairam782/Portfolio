"use client";

import { useEffect, useRef } from "react";
import "./portfolio.css";

/**
 * Homepage. Motion is self contained: custom cursor, scroll reveals with a
 * scramble on the metrics, magnetic buttons, 3D tilt on the work cards, a
 * scroll driven horizontal track, and a live forward pass canvas.
 */
export default function Home({ customCursor = true, motion = "full" }) {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const netRef = useRef(null);
  const netWrapRef = useRef(null);
  const netStatRef = useRef(null);
  const hScrollRef = useRef(null);
  const trackRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const q = (sel) => Array.from(root.querySelectorAll(sel));
    const offs = [];
    const on = (el, ev, fn, opt) => { el.addEventListener(ev, fn, opt); offs.push(() => el.removeEventListener(ev, fn, opt)); };
    const full = motion === "full";
    const wantCursor = customCursor && window.matchMedia("(min-width: 901px)").matches && window.matchMedia("(pointer: fine)").matches;
    if (!wantCursor) root.classList.add("asg-cursor-default");

    // Custom cursor
    if (wantCursor) {
      const ring = ringRef.current, dot = dotRef.current;
      let x = 0, y = 0, rx = 0, ry = 0, rafC = 0;
      on(document, "pointermove", (e) => {
        x = e.clientX; y = e.clientY;
        ring.style.opacity = "1"; dot.style.opacity = "1";
        dot.style.transform = "translate3d(" + x + "px," + y + "px,0)";
        const near = e.target && e.target.closest && e.target.closest("a,button,[data-magnet],[data-tilt],input,textarea");
        const big = !!near;
        ring.style.width = big ? "64px" : "38px";
        ring.style.height = big ? "64px" : "38px";
        ring.style.margin = big ? "-32px 0 0 -32px" : "-19px 0 0 -19px";
        ring.style.background = big ? "rgba(193,18,31,0.14)" : "transparent";
      });
      on(document, "pointerleave", () => { ring.style.opacity = "0"; dot.style.opacity = "0"; });
      const follow = () => {
        rx += (x - rx) * 0.16; ry += (y - ry) * 0.16;
        ring.style.transform = "translate3d(" + rx + "px," + ry + "px,0)";
        rafC = requestAnimationFrame(follow);
      };
      rafC = requestAnimationFrame(follow);
      offs.push(() => cancelAnimationFrame(rafC));
    }

    // Scramble + reveal
    const scramble = (el) => {
      const finalText = el.textContent;
      const chars = "01#%$&*ABCDEF/";
      let f = 0;
      const total = 26;
      const tick = () => {
        f++;
        const keep = Math.floor((f / total) * finalText.length);
        let out = "";
        for (let i = 0; i < finalText.length; i++) {
          out += i < keep ? finalText[i] : (finalText[i] === " " ? " " : chars[Math.floor(Math.random() * chars.length)]);
        }
        el.textContent = out;
        if (f < total) setTimeout(tick, 34); else el.textContent = finalText;
      };
      tick();
    };
    const els = q("[data-reveal],[data-wipe],[data-scramble]");
    const show = (el) => {
      if (el.hasAttribute("data-wipe")) {
        if (el.dataset.shown) return;
        el.dataset.shown = "1";
        el.style.opacity = "1";
        el.style.animation = "wipe 620ms cubic-bezier(.76,0,.24,1) both";
        return;
      }
      el.dataset.shown = "1";
      if (el.hasAttribute("data-scramble")) { el.style.opacity = "1"; if (full) scramble(el); return; }
      el.style.animation = "rise 760ms cubic-bezier(.2,.75,.2,1) both";
    };
    let io = null, safety = 0;
    if (els.length) {
      if (!("IntersectionObserver" in window)) { els.forEach(show); }
      else {
        els.forEach((el) => {
          if (!el.hasAttribute("data-scramble")) el.style.opacity = "0";
          if (el.hasAttribute("data-wipe")) el.style.transform = "scaleX(0)";
        });
        io = new IntersectionObserver((ents) => {
          ents.forEach((en) => { if (en.isIntersecting) { show(en.target); io.unobserve(en.target); } });
        }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
        els.forEach((el) => io.observe(el));
        safety = setInterval(() => {
          let pending = 0;
          els.forEach((el) => {
            if (el.dataset.shown || el.style.opacity !== "0") return;
            if (el.getBoundingClientRect().top < window.innerHeight * 0.95) { show(el); io.unobserve(el); } else pending++;
          });
          if (!pending) clearInterval(safety);
        }, 400);
      }
    }
    offs.push(() => { if (io) io.disconnect(); if (safety) clearInterval(safety); });

    // Magnetic buttons
    if (full) {
      q("[data-magnet]").forEach((el) => {
        el.style.willChange = "transform";
        on(el, "pointermove", (e) => {
          const r = el.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width / 2)) * 0.28;
          const dy = (e.clientY - (r.top + r.height / 2)) * 0.34;
          el.style.transform = "translate3d(" + dx + "px," + dy + "px,0)";
        });
        on(el, "pointerleave", () => {
          el.style.transition = "transform 420ms cubic-bezier(.2,1.2,.3,1)";
          el.style.transform = "translate3d(0,0,0)";
          setTimeout(() => { el.style.transition = ""; }, 440);
        });
      });
      q("[data-tilt]").forEach((el) => {
        el.style.transformStyle = "preserve-3d";
        on(el, "pointermove", (e) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          el.style.transform = "perspective(900px) rotateY(" + px * 9 + "deg) rotateX(" + -py * 9 + "deg) translateZ(14px)";
        });
        on(el, "pointerleave", () => { el.style.transform = "perspective(900px) rotateY(0) rotateX(0)"; });
      });
    }

    // Horizontal work scroller
    const sec = hScrollRef.current, track = trackRef.current;
    let rafH = 0;
    if (sec && track) {
      let target = 0, cur = 0;
      const compute = () => {
        const r = sec.getBoundingClientRect();
        const total = sec.offsetHeight - window.innerHeight;
        const p = Math.min(1, Math.max(0, -r.top / (total || 1)));
        const dist = Math.max(0, track.scrollWidth - window.innerWidth + 88);
        target = -p * dist;
      };
      on(window, "scroll", compute, { passive: true });
      on(window, "resize", compute);
      compute();
      const anim = () => {
        cur += (target - cur) * 0.12;
        track.style.transform = "translate3d(" + cur.toFixed(2) + "px,0,0)";
        rafH = requestAnimationFrame(anim);
      };
      rafH = requestAnimationFrame(anim);
      offs.push(() => cancelAnimationFrame(rafH));
    }

    // Live neural network
    const c = netRef.current, wrap = netWrapRef.current;
    let rafN = 0;
    if (c && wrap) {
      let W = 0, H = 0, dpr = 1;
      const layers = [6, 9, 9, 5];
      let nodes = [], edges = [], sigs = [];
      const build = () => {
        nodes = []; edges = [];
        const padX = W * 0.13;
        layers.forEach((count, li) => {
          const x = padX + (W - padX * 2) * (li / (layers.length - 1));
          for (let i = 0; i < count; i++) {
            const y = H * 0.16 + H * 0.68 * (count === 1 ? 0.5 : i / (count - 1));
            nodes.push({ x: x, y: y, li: li, a: 0, out: [] });
          }
        });
        nodes.forEach((n, i) => {
          nodes.forEach((m, j) => {
            if (m.li === n.li + 1) {
              n.out.push(edges.length);
              edges.push({ a: i, b: j, w: Math.random() * 0.8 + 0.2 });
            }
          });
        });
      };
      const fit = () => {
        const r = c.getBoundingClientRect();
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = r.width; H = r.height;
        c.width = Math.round(W * dpr); c.height = Math.round(H * dpr);
        build();
      };
      fit();
      on(window, "resize", fit);
      let mx = -999, my = -999;
      on(wrap, "pointermove", (e) => {
        const r = c.getBoundingClientRect();
        mx = e.clientX - r.left; my = e.clientY - r.top;
      });
      on(wrap, "pointerleave", () => { mx = -999; my = -999; });
      const fire = (ni, power) => {
        const n = nodes[ni];
        if (!n) return;
        n.a = Math.min(1, n.a + power);
        if (power < 0.18 || sigs.length > 420) return;
        n.out.forEach((ei) => {
          if (Math.random() > 0.55) return;
          sigs.push({ e: ei, t: 0, p: power * edges[ei].w * 0.92 });
        });
      };
      let last = performance.now(), spawn = 0;
      const frame = (now) => {
        const dt = Math.min(50, now - last); last = now;
        spawn += dt;
        if (spawn > 420) { spawn = 0; fire(Math.floor(Math.random() * layers[0]), 1); }
        if (mx > -100) {
          nodes.forEach((n, i) => {
            const d = Math.hypot(n.x - mx, n.y - my);
            if (d < 92 && n.a < 0.55 && Math.random() > 0.72) fire(i, 0.9 * (1 - d / 92));
          });
        }
        const ctx = c.getContext("2d");
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.fillStyle = "#12100E";
        ctx.fillRect(0, 0, W, H);
        ctx.lineWidth = 0.6;
        edges.forEach((e) => {
          const a = nodes[e.a], b = nodes[e.b];
          ctx.strokeStyle = "rgba(217,212,199,0.09)";
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        });
        const next = [];
        sigs.forEach((s) => {
          const e = edges[s.e], a = nodes[e.a], b = nodes[e.b];
          s.t += dt / 520;
          if (s.t >= 1) { fire(e.b, s.p * 0.85); return; }
          next.push(s);
          const x = a.x + (b.x - a.x) * s.t, y = a.y + (b.y - a.y) * s.t;
          const tail = Math.max(0, s.t - 0.16);
          const tx = a.x + (b.x - a.x) * tail, ty = a.y + (b.y - a.y) * tail;
          const g = ctx.createLinearGradient(tx, ty, x, y);
          g.addColorStop(0, "rgba(193,18,31,0)");
          g.addColorStop(1, "rgba(255,90,70," + (0.25 + s.p * 0.7) + ")");
          ctx.strokeStyle = g; ctx.lineWidth = 1.6;
          ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(x, y); ctx.stroke();
          ctx.fillStyle = "rgba(255,120,90," + (0.4 + s.p * 0.6) + ")";
          ctx.beginPath(); ctx.arc(x, y, 2 + s.p * 1.6, 0, Math.PI * 2); ctx.fill();
        });
        sigs = next;
        nodes.forEach((n) => {
          n.a *= 0.955;
          const r = 3.4 + n.a * 7;
          if (n.a > 0.04) {
            ctx.fillStyle = "rgba(193,18,31," + n.a * 0.22 + ")";
            ctx.beginPath(); ctx.arc(n.x, n.y, r + 16 * n.a, 0, Math.PI * 2); ctx.fill();
          }
          ctx.fillStyle = n.a > 0.08 ? "rgba(255,110,80," + (0.5 + n.a * 0.5) + ")" : "rgba(217,212,199,0.42)";
          ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, Math.PI * 2); ctx.fill();
        });
        if (netStatRef.current) netStatRef.current.textContent = "signals " + sigs.length;
        rafN = requestAnimationFrame(frame);
      };
      rafN = requestAnimationFrame(frame);
      offs.push(() => cancelAnimationFrame(rafN));
    }

    return () => offs.forEach((f) => f());
  }, [customCursor, motion]);

  const onSubmit = (e) => {
    e.preventDefault();
    const f = formRef.current;
    if (!f) return;
    const d = new FormData(f);
    window.location.href =
      "mailto:ag2936@njit.edu?subject=" +
      encodeURIComponent("Portfolio enquiry from " + (d.get("name") || "")) +
      "&body=" +
      encodeURIComponent((d.get("message") || "") + "\n\n" + (d.get("email") || ""));
  };

  return (
    <>
      <div className="asg-home" ref={rootRef} style={{ background: "#F2F0EA", color: "#12100E", fontFamily: "'Space Grotesk', system-ui, sans-serif", overflowX: "clip", position: "relative" }}>
        <div style={{ position: "fixed", inset: "0", zIndex: "999", background: "#C1121F", pointerEvents: "none", animation: "curtain 1.5s cubic-bezier(.76,0,.24,1) forwards", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ animation: "curtainText 1.5s ease forwards", fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "60px", letterSpacing: "-0.04em", color: "#F2F0EA", textAlign: "center", lineHeight: "1" }}>
            ABHISHEK
            <br />
            <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: "400", fontSize: "44px" }}>sairam gaduputi</span>
          </div>
        </div>
        <div ref={ringRef} style={{ position: "fixed", top: "0", left: "0", width: "38px", height: "38px", margin: "-19px 0 0 -19px", border: "1.5px solid #C1121F", borderRadius: "999px", pointerEvents: "none", zIndex: "900", transition: "width 220ms ease, height 220ms ease, margin 220ms ease, background 220ms ease, opacity 200ms ease", opacity: "0" }}></div>
        <div ref={dotRef} style={{ position: "fixed", top: "0", left: "0", width: "6px", height: "6px", margin: "-3px 0 0 -3px", background: "#12100E", borderRadius: "999px", pointerEvents: "none", zIndex: "901", opacity: "0" }}></div>
        <header style={{ position: "sticky", top: "0", zIndex: "500", background: "rgba(242,240,234,0.86)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(18,16,14,0.12)" }}>
          <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "15px 44px", display: "flex", alignItems: "center", gap: "34px" }}>
            <a href="#top" data-magnet="" style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "21px", letterSpacing: "-0.03em", color: "#12100E", textDecoration: "none" }}>
              abhi.ai
              <span style={{ color: "#C1121F" }}>/</span>
            </a>
            <nav style={{ display: "flex", gap: "26px", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {/* <a className="hv1" href="#network" data-magnet="" style={{ color: "#12100E", textDecoration: "none" }}></a> */}
              <a className="hv2" href="#work" data-magnet="" style={{ color: "#12100E", textDecoration: "none" }}>Work</a>
              <a className="hv3" href="#experience" data-magnet="" style={{ color: "#12100E", textDecoration: "none" }}>Experience</a>
              <a className="hv4" href="/resume" data-magnet="" style={{ color: "#12100E", textDecoration: "none" }}>Resume</a>
            </nav>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.08em", color: "rgba(18,16,14,0.6)", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "7px", height: "7px", background: "#12c13e", borderRadius: "999px", animation: "blink 1.8s ease-in-out infinite" }}></span>
                Avaiable
              </span>
              <a className="hv5" href="#contact" data-magnet="" style={{ background: "#12100E", color: "#F2F0EA", textDecoration: "none", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "12px 22px", transition: "background 200ms ease" }}>Hire me</a>
            </div>
          </div>
        </header>
        <section id="top" ref={heroRef} style={{ position: "relative", maxWidth: "1320px", margin: "0 auto", padding: "66px 44px 40px" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#C1121F", marginBottom: "30px", display: "flex", gap: "14px", alignItems: "center" }}>
            <span style={{ width: "46px", height: "1px", background: "#C1121F", display: "block" }}></span>
            Three years shipping production ML. Then the masters.
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.55fr 0.75fr", gap: "44px", alignItems: "end" }}>
            <div>
              <h1 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "104px", lineHeight: "0.9", letterSpacing: "-0.045em", margin: "0 0 30px", textTransform: "uppercase" }}>
                Research
                <span style={{ color: "#C1121F" }}>.</span>
                <br />
                grade models,
                <br />
                <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: "400", textTransform: "none", letterSpacing: "-0.01em", fontSize: "108px" }}>shipped</span>
                into
                <br />
                production
                <span style={{ color: "#C1121F" }}>.</span>
              </h1>
              <p style={{ fontSize: "18px", lineHeight: "1.55", color: "rgba(18,16,14,0.75)", maxWidth: "54ch", margin: "0 0 30px", textWrap: "pretty" }}>I am Abhishek Sairam Gaduputi. I build across generative modeling, computer vision and multi agent systems, and I have put recommendation, perception and analytics systems in front of real users at scale.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center" }}>
                <a className="hv6" href="#network" data-magnet="" style={{ background: "#C1121F", color: "#F2F0EA", textDecoration: "none", fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "18px 30px", transition: "background 200ms ease, transform 200ms ease" }}>Watch a network think</a>
                <a className="hv7" href="#work" data-magnet="" style={{ border: "1.5px solid #12100E", color: "#12100E", textDecoration: "none", fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "18px 30px", transition: "background 200ms ease, color 200ms ease" }}>Four projects</a>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: "-14px -14px 26px 20px", background: "#C1121F" }}></div>
              <div style={{ position: "relative", background: "#12100E", overflow: "hidden" }}>
                <img src="/assets/portrait.jpg" alt="Abhishek Sairam Gaduputi" style={{ width: "100%", display: "block", filter: "grayscale(1) contrast(1.35) brightness(1.05)", mixBlendMode: "screen", opacity: "0.92" }} />
              </div>
              <div style={{ position: "relative", marginTop: "14px", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.1em", color: "rgba(18,16,14,0.55)", textTransform: "uppercase" }}>
                Newark, New Jersey
                <br />
                ag2936@njit.edu
              </div>
            </div>
          </div>
        </section>
        <div style={{ background: "#12100E", color: "#F2F0EA", padding: "16px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
          <div style={{ display: "inline-flex", animation: "slide 26s linear infinite", fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.02em", textTransform: "uppercase" }}>
            <span style={{ display: "inline-flex", gap: "26px", paddingRight: "26px" }}>
              <span>Machine Learning Engineer</span>
              <span style={{ color: "#C1121F" }}>/</span>
              <span>Applied Scientist</span>
              <span style={{ color: "#C1121F" }}>/</span>
              <span>GenAI Engineer</span>
              <span style={{ color: "#C1121F" }}>/</span>
              <span>Data Scientist</span>
              <span style={{ color: "#C1121F" }}>/</span>
            </span>
            <span style={{ display: "inline-flex", gap: "26px", paddingRight: "26px" }}>
              <span>Machine Learning Engineer</span>
              <span style={{ color: "#C1121F" }}>/</span>
              <span>Applied Scientist</span>
              <span style={{ color: "#C1121F" }}>/</span>
              <span>GenAI Engineer</span>
              <span style={{ color: "#C1121F" }}>/</span>
              <span>Data Scientist</span>
              <span style={{ color: "#C1121F" }}>/</span>
            </span>
          </div>
        </div>
        <section style={{ maxWidth: "1320px", margin: "0 auto", padding: "76px 44px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", borderTop: "2px solid #12100E" }}>
            <div data-reveal="" style={{ padding: "30px 26px 30px 0", borderRight: "1px solid rgba(18,16,14,0.15)" }}>
              <div data-scramble="" style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "62px", lineHeight: "1", letterSpacing: "-0.04em", color: "#C1121F" }}>+37%</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", letterSpacing: "0.06em", lineHeight: "1.6", color: "rgba(18,16,14,0.65)", marginTop: "12px", textTransform: "uppercase" }}>User engagement from the recommendation engine I shipped at Froker</div>
            </div>
            <div data-reveal="" style={{ padding: "30px 26px", borderRight: "1px solid rgba(18,16,14,0.15)" }}>
              <div data-scramble="" style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "62px", lineHeight: "1", letterSpacing: "-0.04em", color: "#C1121F" }}>21%</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", letterSpacing: "0.06em", lineHeight: "1.6", color: "rgba(18,16,14,0.65)", marginTop: "12px", textTransform: "uppercase" }}>System cost removed from an autonomous sprayer by replacing sensors with vision</div>
            </div>
            <div data-reveal="" style={{ padding: "30px 26px", borderRight: "1px solid rgba(18,16,14,0.15)" }}>
              <div data-scramble="" style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "62px", lineHeight: "1", letterSpacing: "-0.04em", color: "#C1121F" }}>88%</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", letterSpacing: "0.06em", lineHeight: "1.6", color: "rgba(18,16,14,0.65)", marginTop: "12px", textTransform: "uppercase" }}>Tumor detection accuracy, up from 82, using synthetic MRI I generated</div>
            </div>
            <div data-reveal="" style={{ padding: "30px 0 30px 26px" }}>
              <div data-scramble="" style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "62px", lineHeight: "1", letterSpacing: "-0.04em", color: "#C1121F" }}>4.0</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", letterSpacing: "0.06em", lineHeight: "1.6", color: "rgba(18,16,14,0.65)", marginTop: "12px", textTransform: "uppercase" }}>GPA in the MS Artificial Intelligence at NJIT, class of 2027</div>
            </div>
          </div>
        </section>
        <section id="network" style={{ padding: "96px 0 0" }}>
          <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 44px 34px", display: "grid", gridTemplateColumns: "1fr 0.9fr", gap: "44px", alignItems: "end" }}>
            <div>
              <div data-wipe="" style={{ height: "6px", background: "#C1121F", transformOrigin: "left", marginBottom: "26px", width: "120px" }}></div>
              <h2 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "76px", lineHeight: "0.92", letterSpacing: "-0.04em", margin: "0", textTransform: "uppercase" }}>
                Watch it
                <br />
                <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: "400", textTransform: "none", color: "#C1121F" }}>think</span>
              </h2>
            </div>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "rgba(18,16,14,0.72)", margin: "0 0 8px", maxWidth: "46ch" }}>Move your cursor across the layers. Neurons within reach fire, activation propagates forward along the weights, and the signal decays as it travels. It is a real forward pass, drawn one frame at a time, running entirely in your browser.</p>
          </div>
          <div ref={netWrapRef} style={{ position: "relative", background: "#12100E", borderTop: "2px solid #12100E", borderBottom: "2px solid #12100E" }}>
            <canvas ref={netRef} style={{ display: "block", width: "100%", height: "520px" }}></canvas>
            <div style={{ position: "absolute", left: "44px", top: "26px", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", color: "rgba(242,240,234,0.5)", textTransform: "uppercase", pointerEvents: "none" }}>forward pass / 4 layers / live</div>
            <div ref={netStatRef} style={{ position: "absolute", right: "44px", bottom: "26px", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", color: "rgba(242,240,234,0.5)", textTransform: "uppercase", pointerEvents: "none" }}>signals 0</div>
          </div>
        </section>
        <section id="work" ref={hScrollRef} style={{ position: "relative", height: "420vh" }}>
          <div style={{ position: "sticky", top: "0", height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 44px 30px", width: "100%", boxSizing: "border-box", display: "flex", alignItems: "end", justifyContent: "space-between", gap: "30px" }}>
              <h2 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "64px", lineHeight: "0.92", letterSpacing: "-0.04em", margin: "0", textTransform: "uppercase" }}>
                Selected
                <br />
                <span style={{ color: "#C1121F" }}>work</span>
              </h2>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(18,16,14,0.5)", paddingBottom: "8px" }}>Scroll to move sideways</div>
            </div>
            <div ref={trackRef} style={{ display: "flex", gap: "26px", paddingLeft: "44px", willChange: "transform" }}>
              <article data-tilt="" style={{ flex: "0 0 520px", background: "#12100E", color: "#F2F0EA", padding: "40px", display: "flex", flexDirection: "column", gap: "16px", minHeight: "460px", transition: "transform 180ms ease" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(242,240,234,0.55)" }}>
                  <span>01</span>
                  <span>Multi agent systems</span>
                </div>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "46px", lineHeight: "0.95", letterSpacing: "-0.03em", margin: "8px 0 0", textTransform: "uppercase" }}>Trinetra</h3>
                <p style={{ fontSize: "15.5px", lineHeight: "1.6", color: "rgba(242,240,234,0.78)", margin: "0" }}>An autonomous incident response system. It watches a live web application across alerts, logs, metrics and traces, reasons over the whole incident, and selects an approved remediation runbook.</p>
                <p style={{ fontSize: "15.5px", lineHeight: "1.6", color: "rgba(242,240,234,0.78)", margin: "0" }}>Commander, telemetry, triage and documentation agents sit in tiers behind a dry run first executor, with a structured audit trail and MCP tool integration.</p>
                <div style={{ marginTop: "auto", paddingTop: "18px", borderTop: "1px solid rgba(242,240,234,0.2)", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#F2F0EA" }}>
                  <span style={{ color: "#C1121F" }}>Result /</span>
                  gated, verifiable automated recovery
                </div>
              </article>
              <article data-tilt="" style={{ flex: "0 0 520px", background: "#C1121F", color: "#F2F0EA", padding: "40px", display: "flex", flexDirection: "column", gap: "16px", minHeight: "460px", transition: "transform 180ms ease" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(242,240,234,0.7)" }}>
                  <span>02</span>
                  <span>Computer vision</span>
                </div>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "46px", lineHeight: "0.95", letterSpacing: "-0.03em", margin: "8px 0 0", textTransform: "uppercase" }}>GymCom</h3>
                <p style={{ fontSize: "15.5px", lineHeight: "1.6", color: "rgba(242,240,234,0.85)", margin: "0" }}>A live workout form coach. Pose tracking runs in the browser, a FastAPI backend handles analysis, and Claude writes the coaching report, in both real time and uploaded video modes.</p>
                <p style={{ fontSize: "15.5px", lineHeight: "1.6", color: "rgba(242,240,234,0.85)", margin: "0" }}>Exercise specific joint angle thresholds drive rep counting, form scoring and symmetry feedback. Frame sampling keeps payloads light enough to deploy on Vercel and Render.</p>
                <div style={{ marginTop: "auto", paddingTop: "18px", borderTop: "1px solid rgba(242,240,234,0.3)", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  <span style={{ color: "#12100E" }}>Result /</span>
                  real time inference, no GPU
                </div>
              </article>
              <article data-tilt="" style={{ flex: "0 0 520px", background: "#F2F0EA", color: "#12100E", border: "2px solid #12100E", padding: "40px", display: "flex", flexDirection: "column", gap: "16px", minHeight: "460px", transition: "transform 180ms ease" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(18,16,14,0.55)" }}>
                  <span>03</span>
                  <span>Deep learning</span>
                </div>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "46px", lineHeight: "0.95", letterSpacing: "-0.03em", margin: "8px 0 0", textTransform: "uppercase" }}>
                  ResNet ViT
                  <br />
                  deepfake
                  <br />
                  detection
                </h3>
                <p style={{ fontSize: "15.5px", lineHeight: "1.6", color: "rgba(18,16,14,0.75)", margin: "0" }}>A hybrid residual network and vision transformer that reads local forgery artefacts and global facial semantics in one pass, so the classifier holds up on compressed, in the wild footage.</p>
                <div style={{ marginTop: "auto", paddingTop: "18px", borderTop: "1px solid rgba(18,16,14,0.2)", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  <span style={{ color: "#C1121F" }}>Result /</span>
                  86% on Celeb DFv2
                </div>
              </article>
              <article data-tilt="" style={{ flex: "0 0 520px", background: "#12100E", color: "#F2F0EA", padding: "40px", display: "flex", flexDirection: "column", gap: "16px", minHeight: "460px", transition: "transform 180ms ease" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(242,240,234,0.55)" }}>
                  <span>04</span>
                  <span>Generative modeling</span>
                </div>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "46px", lineHeight: "0.95", letterSpacing: "-0.03em", margin: "8px 0 0", textTransform: "uppercase" }}>
                  Synthetic
                  <br />
                  MRI
                </h3>
                <p style={{ fontSize: "15.5px", lineHeight: "1.6", color: "rgba(242,240,234,0.78)", margin: "0" }}>A 2D denoising diffusion model in MONAI generating axial FLAIR slices from BraTS PED, built to fill the gap where rare pediatric tumor data simply does not exist.</p>
                <p style={{ fontSize: "15.5px", lineHeight: "1.6", color: "rgba(242,240,234,0.78)", margin: "0" }}>The synthetic slices went back into a ResNet18 classification pipeline as training data.</p>
                <div style={{ marginTop: "auto", paddingTop: "18px", borderTop: "1px solid rgba(242,240,234,0.2)", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  <span style={{ color: "#C1121F" }}>Result /</span>
                  accuracy 82% to 88%
                </div>
              </article>
              <article style={{ flex: "0 0 420px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px", paddingRight: "44px" }}>
                <div style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "40px", lineHeight: "0.95", letterSpacing: "-0.03em", textTransform: "uppercase" }}>
                  More on
                  <br />
                  GitHub
                </div>
                <a className="hv8" href="https://github.com/sairam782" data-magnet="" style={{ alignSelf: "start", background: "#12100E", color: "#F2F0EA", textDecoration: "none", fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "18px 30px" }}>github.com/sairam782</a>
              </article>
            </div>
          </div>
        </section>
        <section id="experience" style={{ maxWidth: "1320px", margin: "0 auto", padding: "40px 44px 96px", display: "grid", gridTemplateColumns: "0.5fr 1.5fr", gap: "56px", alignItems: "start" }}>
          <div style={{ position: "sticky", top: "120px" }}>
            <div data-wipe="" style={{ height: "6px", background: "#C1121F", transformOrigin: "left", marginBottom: "24px", width: "100px" }}></div>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "58px", lineHeight: "0.92", letterSpacing: "-0.04em", margin: "0 0 18px", textTransform: "uppercase" }}>
              Where the
              <br />
              models
              <br />
              <span style={{ color: "#C1121F" }}>went</span>
            </h2>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", letterSpacing: "0.08em", lineHeight: "1.7", color: "rgba(18,16,14,0.55)", textTransform: "uppercase" }}>Three roles. Mobility, consumer apps, embedded research.</p>
          </div>
          <div>
            <div data-reveal="" style={{ padding: "34px 0", borderTop: "2px solid #12100E" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "20px", marginBottom: "14px" }}>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "34px", letterSpacing: "-0.03em", margin: "0", textTransform: "uppercase" }}>Senior Executive, R&D</h3>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", letterSpacing: "0.08em", color: "rgba(18,16,14,0.55)", whiteSpace: "nowrap" }}>NOV 2024 / JUL 2025</span>
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", letterSpacing: "0.06em", color: "#C1121F", textTransform: "uppercase", marginBottom: "16px" }}>Montra Electric Tractor, TI Clean Mobility, Murugappa Group</div>
              <ul style={{ margin: "0", paddingLeft: "20px", fontSize: "15.5px", lineHeight: "1.62", color: "rgba(18,16,14,0.78)", display: "flex", flexDirection: "column", gap: "9px" }}>
                <li>Fine tuned and optimised YOLOv11 and MiDaS for an autonomous fertilizer spraying solution, cutting dependence on heavy sensor hardware and taking 15 to 21% out of system cost.</li>
                <li>Designed and tested the battery management system, reworking charging strategy to bring 0 to 80% charge time down by 23 minutes against benchmark.</li>
                <li>Proposed and integrated a 3 kW onboard charger compatible with standard residential supply, enabling reliable EV charging in low grid regions with no external transformer.</li>
              </ul>
            </div>
            <div data-reveal="" style={{ padding: "34px 0", borderTop: "2px solid #12100E" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "20px", marginBottom: "14px" }}>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "34px", letterSpacing: "-0.03em", margin: "0", textTransform: "uppercase" }}>Machine Learning Engineer</h3>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", letterSpacing: "0.08em", color: "rgba(18,16,14,0.55)", whiteSpace: "nowrap" }}>MAY 2022 / OCT 2024</span>
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", letterSpacing: "0.06em", color: "#C1121F", textTransform: "uppercase", marginBottom: "16px" }}>Froker, Arroz Technologies</div>
              <ul style={{ margin: "0", paddingLeft: "20px", fontSize: "15.5px", lineHeight: "1.62", color: "rgba(18,16,14,0.78)", display: "flex", flexDirection: "column", gap: "9px" }}>
                <li>Built and deployed an end to end recommendation engine across food, short video and prompts, lifting user engagement 37% and orders 11% through iterative algorithm work.</li>
                <li>Grew MongoDB pipelines from early stage internal analytics tooling into the full production infrastructure the engine ran on.</li>
                <li>Designed and deployed a multimodal content scoring pipeline on Microsoft AI Foundry, evaluating foundation models and tuning hyperparameters against platform requirements.</li>
                <li>Built the analytics layer in Retool, Mixpanel and GA4 that company wide reporting depended on.</li>
              </ul>
            </div>
            <div data-reveal="" style={{ padding: "34px 0", borderTop: "2px solid #12100E", borderBottom: "2px solid #12100E" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "20px", marginBottom: "14px" }}>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "34px", letterSpacing: "-0.03em", margin: "0", textTransform: "uppercase" }}>Undergraduate Research Assistant</h3>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", letterSpacing: "0.08em", color: "rgba(18,16,14,0.55)", whiteSpace: "nowrap" }}>SEP 2021 / FEB 2022</span>
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", letterSpacing: "0.06em", color: "#C1121F", textTransform: "uppercase", marginBottom: "16px" }}>Embedded Systems, Manipal Institute of Technology</div>
              <ul style={{ margin: "0", paddingLeft: "20px", fontSize: "15.5px", lineHeight: "1.62", color: "rgba(18,16,14,0.78)", display: "flex", flexDirection: "column", gap: "9px" }}>
                <li>Built an autonomous line following and obstacle avoiding robot, implementing closed loop PID control over an IR sensor array to hold tracking accuracy across speeds.</li>
                <li>Integrated ultrasonic distance sensing for real time obstacle detection and dynamic rerouting, tuning motor driver logic to cut path deviation on curved segments.</li>
              </ul>
            </div>
          </div>
        </section>
        <section style={{ background: "#12100E", color: "#F2F0EA", padding: "96px 0" }}>
          <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 44px" }}>
            <div data-wipe="" style={{ height: "6px", background: "#C1121F", transformOrigin: "left", marginBottom: "26px", width: "120px" }}></div>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "64px", lineHeight: "0.92", letterSpacing: "-0.04em", margin: "0 0 54px", textTransform: "uppercase" }}>
              How I
              <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: "400", textTransform: "none", color: "#C1121F" }}>work</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
              <div data-reveal="">
                <div style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "84px", lineHeight: "0.8", letterSpacing: "-0.05em", color: "#C1121F", marginBottom: "22px" }}>01</div>
                <p style={{ fontSize: "21px", lineHeight: "1.42", margin: "0", maxWidth: "26ch" }}>The baseline ships first. Everything after it has to beat a number.</p>
              </div>
              <div data-reveal="">
                <div style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "84px", lineHeight: "0.8", letterSpacing: "-0.05em", color: "#C1121F", marginBottom: "22px" }}>02</div>
                <p style={{ fontSize: "21px", lineHeight: "1.42", margin: "0", maxWidth: "26ch" }}>Generate the data you cannot collect. Rare cases are where models fail.</p>
              </div>
              <div data-reveal="">
                <div style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "84px", lineHeight: "0.8", letterSpacing: "-0.05em", color: "#C1121F", marginBottom: "22px" }}>03</div>
                <p style={{ fontSize: "21px", lineHeight: "1.42", margin: "0", maxWidth: "26ch" }}>A model nobody can audit is not in production, it is just running.</p>
              </div>
            </div>
          </div>
        </section>
        <div style={{ background: "#F2F0EA", color: "#12100E", padding: "20px 0", overflow: "hidden", whiteSpace: "nowrap", borderBottom: "2px solid #12100E" }}>
          <div style={{ display: "inline-flex", animation: "slide 34s linear infinite reverse", fontFamily: "'JetBrains Mono', monospace", fontSize: "15px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            <span style={{ display: "inline-flex", gap: "20px", paddingRight: "20px" }}>
              <span>Python</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>PyTorch</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>TensorFlow</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>Scikit learn</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>C / C++</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>SQL / NoSQL / Cypher</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>Azure AI Foundry</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>AWS EC2</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>PySpark</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>Neo4j</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>CI/CD</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>Tableau</span>
              <span style={{ color: "#C1121F" }}>*</span>
            </span>
            <span style={{ display: "inline-flex", gap: "20px", paddingRight: "20px" }}>
              <span>Python</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>PyTorch</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>TensorFlow</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>Scikit learn</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>C / C++</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>SQL / NoSQL / Cypher</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>Azure AI Foundry</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>AWS EC2</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>PySpark</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>Neo4j</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>CI/CD</span>
              <span style={{ color: "#C1121F" }}>*</span>
              <span>Tableau</span>
              <span style={{ color: "#C1121F" }}>*</span>
            </span>
          </div>
        </div>
        <section style={{ maxWidth: "1320px", margin: "0 auto", padding: "88px 44px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "26px" }}>
          <div data-reveal="" style={{ border: "2px solid #12100E", padding: "36px" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C1121F", marginBottom: "18px" }}>Sept 2025 to May 2027</div>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "36px", lineHeight: "0.98", letterSpacing: "-0.03em", margin: "0 0 10px", textTransform: "uppercase" }}>MS, Artificial Intelligence</h3>
            <div style={{ fontSize: "16px", color: "rgba(18,16,14,0.72)" }}>New Jersey Institute of Technology. GPA 4.0 </div>
          </div>
          <div data-reveal="" style={{ border: "2px solid #12100E", padding: "36px" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C1121F", marginBottom: "18px" }}>Sept 2020 to June 2024</div>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "36px", lineHeight: "0.98", letterSpacing: "-0.03em", margin: "0 0 10px", textTransform: "uppercase" }}>BTech, Electronics and Instrumentation</h3>
            <div style={{ fontSize: "16px", color: "rgba(18,16,14,0.72)" }}>Manipal Institute of Technology. Minor in Data Science. CGPA 8.08.</div>
          </div>
        </section>
        <section id="contact" style={{ background: "#C1121F", color: "#F2F0EA", padding: "96px 0 40px" }}>
          <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 44px" }}>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "92px", lineHeight: "0.9", letterSpacing: "-0.045em", margin: "0 0 40px", textTransform: "uppercase" }}>
              Let us build
              <br />
              something that
              <br />
              <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: "400", textTransform: "none", color: "#12100E" }}>actually ships</span>
            </h2>
            <a className="hv9" href="mailto:ag2936@njit.edu" data-magnet="" style={{ display: "inline-block", fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "54px", letterSpacing: "-0.03em", color: "#F2F0EA", textDecoration: "none", borderBottom: "5px solid #12100E", paddingBottom: "8px", marginBottom: "56px", transition: "color 200ms ease" }}>ag2936@njit.edu</a>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "start", borderTop: "2px solid rgba(242,240,234,0.3)", paddingTop: "44px" }}>
              <form ref={formRef} onsubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(242,240,234,0.75)" }}>Or write it here</div>
                <input className="hv10" name="name" required placeholder="Your name" style={{ background: "transparent", border: "0", borderBottom: "2px solid rgba(242,240,234,0.45)", color: "#F2F0EA", fontFamily: "'Space Grotesk', sans-serif", fontSize: "17px", padding: "12px 0", outline: "none" }} />
                <input className="hv11" name="email" type="email" required placeholder="Your email" style={{ background: "transparent", border: "0", borderBottom: "2px solid rgba(242,240,234,0.45)", color: "#F2F0EA", fontFamily: "'Space Grotesk', sans-serif", fontSize: "17px", padding: "12px 0", outline: "none" }} />
                <textarea className="hv12" name="message" rows="3" required placeholder="The role, or what you are building" style={{ background: "transparent", border: "0", borderBottom: "2px solid rgba(242,240,234,0.45)", color: "#F2F0EA", fontFamily: "'Space Grotesk', sans-serif", fontSize: "17px", padding: "12px 0", outline: "none", resize: "none" }}></textarea>
                <button className="hv13" type="submit" data-magnet="" style={{ alignSelf: "start", background: "#12100E", color: "#F2F0EA", border: "0", fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "18px 32px", cursor: "none", transition: "background 200ms ease" }}>Send it</button>
              </form>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <a className="hv14" href="https://github.com/sairam782" data-magnet="" style={{ color: "#F2F0EA", textDecoration: "none", fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "30px", letterSpacing: "-0.02em", textTransform: "uppercase", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(242,240,234,0.3)", paddingBottom: "12px", transition: "color 200ms ease" }}>
                  GitHub
                  <span>→</span>
                </a>
                <a className="hv15" href="https://linkedin.com/in/abhishek-sairam-gaduputi" data-magnet="" style={{ color: "#F2F0EA", textDecoration: "none", fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "30px", letterSpacing: "-0.02em", textTransform: "uppercase", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(242,240,234,0.3)", paddingBottom: "12px", transition: "color 200ms ease" }}>
                  LinkedIn
                  <span>→</span>
                </a>
                <a className="hv16" href="/resume" data-magnet="" style={{ color: "#F2F0EA", textDecoration: "none", fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "30px", letterSpacing: "-0.02em", textTransform: "uppercase", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(242,240,234,0.3)", paddingBottom: "12px", transition: "color 200ms ease" }}>
                  Full resume
                  <span>→</span>
                </a>
                <a className="hv17" href="tel:+19083569089" data-magnet="" style={{ color: "#F2F0EA", textDecoration: "none", fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", fontWeight: "800", fontSize: "30px", letterSpacing: "-0.02em", textTransform: "uppercase", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(242,240,234,0.3)", paddingBottom: "12px", transition: "color 200ms ease" }}>
                  +1 908 356 9089
                  <span>→</span>
                </a>
              </div>
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(242,240,234,0.6)", paddingTop: "44px" }}>Open to Summer 2026 internships and full time roles from May 2027</div>
          </div>
        </section>
      </div>
    </>
  );
}

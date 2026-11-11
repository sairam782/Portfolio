"use client";

import { useEffect, useRef } from "react";

// Live background: slow ribbons of light, drawn by a fragment shader.
// It leans toward the cursor, pauses when off screen, and holds one still frame
// for visitors who prefer reduced motion.

const vertex = `attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }`;

const fragment = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;

vec3 mod289(vec3 x){ return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x){ return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x){ return mod289(((x * 34.0) + 1.0) * x); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m; m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float fbm(vec2 p){
  float f = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) { f += a * snoise(p); p = p * 2.02 + 11.3; a *= 0.5; }
  return f;
}

// one ribbon: a soft band of light following a warped curve
float ribbon(vec2 p, float offset, float width, float t){
  float curve = offset
    + 0.22 * sin(p.x * 1.15 + t * 1.3 + offset * 6.0)
    + 0.15 * snoise(vec2(p.x * 0.55 - t * 0.6, offset * 3.0 + t * 0.35));
  float d = abs(p.y - curve);
  float core = smoothstep(width, 0.0, d);
  float halo = exp(-d * 5.5) * 0.55;
  return core * core + halo;
}

void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float t = uTime * 0.11;

  // the whole field bends a little toward the cursor
  vec2 m = uMouse * vec2(uRes.x / uRes.y, 1.0) * 0.5;
  p += (m - p) * 0.06 * exp(-1.2 * length(p - m));

  vec3 blue = vec3(0.24, 0.50, 1.00);
  vec3 violet = vec3(0.58, 0.38, 1.00);
  vec3 pink = vec3(1.00, 0.36, 0.66);
  vec3 amber = vec3(1.00, 0.66, 0.32);

  float flow = fbm(p * 0.9 + vec2(t * 0.5, -t * 0.3));
  vec2 q = p + 0.12 * vec2(flow, fbm(p * 1.3 - t * 0.4));

  vec3 col = vec3(0.0);
  col += blue   * ribbon(q, -0.34, 0.20, t)        * 0.85;
  col += violet * ribbon(q, -0.20, 0.16, t * 1.2)  * 0.80;
  col += pink   * ribbon(q, -0.08, 0.11, t * 0.9)  * 0.55;
  col += amber  * ribbon(q, -0.44, 0.09, t * 1.4)  * 0.40;

  // slow, soft variation inside the light, like folds in silk
  col *= 0.86 + 0.22 * snoise(q * 1.5 + vec2(t * 1.2, t * 0.4));

  // keep the top of the frame dark so text stays readable
  float mask = smoothstep(0.98, 0.18, uv.y);
  col *= mask;

  // gentle light under the cursor
  col += violet * 0.09 * exp(-5.0 * length(p - m));

  // soft tone curve and vignette
  col = 1.0 - exp(-col * 1.35);
  col *= smoothstep(1.45, 0.25, length(p * vec2(0.62, 1.0)));

  // dither to avoid banding
  float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  col += (n - 0.5) / 255.0 * 2.0;

  gl_FragColor = vec4(col, 1.0);
}`;

export default function Aurora({ className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const gl = canvas?.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" });
    if (!gl) {
      canvas?.classList.add("aurora--fallback");
      return;
    }

    const compile = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };
    const program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertex));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragment));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      canvas.classList.add("aurora--fallback");
      return;
    }
    gl.useProgram(program);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "uRes");
    const uTime = gl.getUniformLocation(program, "uTime");
    const uMouse = gl.getUniformLocation(program, "uMouse");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: 0, y: -0.3, tx: 0, ty: -0.3 };
    let frame = 0;
    let visible = true;
    const start = performance.now();

    const resize = () => {
      // Render below native resolution: the image is soft by design, so this is free quality-wise.
      const scale = Math.min(window.devicePixelRatio || 1, 1.5) * 0.6;
      const width = Math.max(1, Math.floor(canvas.clientWidth * scale));
      const height = Math.max(1, Math.floor(canvas.clientHeight * scale));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
      gl.uniform2f(uRes, width, height);
    };

    const draw = (now) => {
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      gl.uniform1f(uTime, reduce ? 14 : 14 + (now - start) / 1000);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      canvas.dataset.ready = "true";
      frame = !reduce && visible && !document.hidden ? requestAnimationFrame(draw) : 0;
    };

    const wake = () => {
      if (!frame && visible && !document.hidden) frame = requestAnimationFrame(draw);
    };

    const onMove = (event) => {
      const box = canvas.getBoundingClientRect();
      mouse.tx = ((event.clientX - box.left) / box.width) * 2 - 1;
      mouse.ty = -(((event.clientY - box.top) / box.height) * 2 - 1);
    };

    const sizeObserver = new ResizeObserver(() => {
      resize();
      if (reduce) requestAnimationFrame(draw);
    });
    sizeObserver.observe(canvas);

    const viewObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      wake();
    });
    viewObserver.observe(canvas);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", wake);
    resize();
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      sizeObserver.disconnect();
      viewObserver.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", wake);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return <canvas ref={ref} className={`aurora ${className}`} aria-hidden="true" />;
}

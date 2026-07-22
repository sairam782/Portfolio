"use client";

import { useEffect, useRef } from "react";

const AmbientBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let frame = 0;

    const handlePointerMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = `${(event.clientX / window.innerWidth) * 100}%`;
        const y = `${(event.clientY / window.innerHeight) * 100}%`;
        document.documentElement.style.setProperty("--pointer-x", x);
        document.documentElement.style.setProperty("--pointer-y", y);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    const mouse = { x: null, y: null };
    const nodes = [];
    const nodeCount = 58;
    const connectionDistance = 150;

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      nodes.length = 0;

      for (let index = 0; index < nodeCount; index += 1) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.55,
          vy: (Math.random() - 0.5) * 0.55,
          radius: 1.4 + Math.random() * 2.2,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const handlePointerMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handlePointerLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(3, 3, 8, 0.18)";
      context.fillRect(0, 0, width, height);

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const distance = Math.hypot(dx, dy);

          if (distance > 0 && distance < 230) {
            const force = (230 - distance) / 230;
            node.x += (dx / distance) * force * 1.8;
            node.y += (dy / distance) * force * 1.8;
          }
        }

        if (node.x < -20 || node.x > width + 20) node.vx *= -1;
        if (node.y < -20 || node.y > height + 20) node.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const first = nodes[i];
          const second = nodes[j];
          const distance = Math.hypot(first.x - second.x, first.y - second.y);

          if (distance < connectionDistance) {
            const alpha = (1 - distance / connectionDistance) * 0.26;
            const gradient = context.createLinearGradient(first.x, first.y, second.x, second.y);
            gradient.addColorStop(0, `rgba(0, 240, 255, ${alpha})`);
            gradient.addColorStop(1, `rgba(188, 19, 254, ${alpha * 0.72})`);
            context.beginPath();
            context.moveTo(first.x, first.y);
            context.lineTo(second.x, second.y);
            context.strokeStyle = gradient;
            context.lineWidth = 0.8;
            context.stroke();
          }
        }
      }

      const time = Date.now() * 0.003;
      nodes.forEach((node) => {
        const pulse = Math.sin(time + node.phase) * 0.45;
        context.beginPath();
        context.arc(node.x, node.y, node.radius + pulse, 0, Math.PI * 2);
        context.fillStyle = "rgba(0, 240, 255, 0.78)";
        context.shadowColor = "#00f0ff";
        context.shadowBlur = 12;
        context.fill();
        context.shadowBlur = 0;
      });

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div className="ambient-stage" aria-hidden="true">
      <canvas ref={canvasRef} className="network-canvas" />
      <div className="ambient-gradient" />
      <div className="ambient-grid" />
      <div className="ambient-beam ambient-beam-one" />
      <div className="ambient-beam ambient-beam-two" />
      <div className="ambient-cursor" />
      <div className="ambient-noise" />
    </div>
  );
};

export default AmbientBackground;

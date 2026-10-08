import React, { useEffect, useRef } from 'react';

interface FlowingWaveBackgroundProps {
  className?: string;
  lineCount?: number;
  speed?: number;
  opacity?: number;
  spreadScale?: number;
}

export const FlowingWaveBackground: React.FC<FlowingWaveBackgroundProps> = ({
  className = '',
  lineCount = 44,
  speed = 0.85,
  opacity = 0.95,
  spreadScale = 1.0,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number | null = null;
    let isVisible = true;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);
    let dpr = window.devicePixelRatio || 1;

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let isHovering = false;

    const handleResize = () => {
      if (!canvas) return;
      dpr = window.devicePixelRatio || 1;
      width = canvas.width = canvas.offsetWidth * dpr;
      height = canvas.height = canvas.offsetHeight * dpr;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left) * dpr;
      targetMouseY = (e.clientY - rect.top) * dpr;
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Pause rendering when Hero canvas is not visible to free 100% CPU/GPU for lower sections
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && animId === null) {
          startTime = performance.now() - pausedOffset;
          animId = requestAnimationFrame(render);
        } else if (!isVisible && animId !== null) {
          cancelAnimationFrame(animId);
          animId = null;
        }
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    let startTime = performance.now();
    let pausedOffset = 0;

    const render = (timeNow: number) => {
      if (!isVisible) {
        animId = null;
        return;
      }

      const elapsed = (timeNow - startTime) * 0.001 * speed;
      pausedOffset = elapsed;

      // Smooth lerp mouse coordinates
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const count = lineCount;
      const stepX = Math.max(8, Math.floor(width / 100)); // Optimized step size
      const centerY = height * 0.50;
      const baseAmplitude = Math.min(height * 0.25, 175 * dpr);
      const totalSpread = (115 * dpr) * spreadScale;

      // Create horizontal gradient for stroke styling (matches Figma sky-blue tones)
      const strokeGrad = ctx.createLinearGradient(0, 0, width, 0);
      strokeGrad.addColorStop(0, 'rgba(186, 230, 253, 0.12)');
      strokeGrad.addColorStop(0.18, 'rgba(125, 211, 252, 0.65)');
      strokeGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.8)');
      strokeGrad.addColorStop(0.82, 'rgba(125, 211, 252, 0.65)');
      strokeGrad.addColorStop(1, 'rgba(186, 230, 253, 0.12)');

      ctx.lineWidth = 1.15 * dpr;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      for (let i = 0; i < count; i++) {
        const progress = i / (count - 1); // 0 to 1
        const offsetProg = progress - 0.5; // -0.5 to +0.5

        // Phase offset per strand for harmonic ribbon undulation
        const strandPhase = i * 0.065;
        const lineTime = elapsed + strandPhase;

        // Alpha modulation per strand (graduated depth)
        const strandAlpha = (0.2 + Math.sin(progress * Math.PI) * 0.6) * opacity;

        ctx.beginPath();

        let prevX = 0;
        let prevY = centerY;

        for (let x = 0; x <= width + stepX; x += stepX) {
          const nx = x / width; // 0 to 1 across screen width

          // 1. Broad sweeping S-curve matching Figma bluewave anatomy
          const sCurve =
            Math.sin(nx * Math.PI * 1.5 - 0.35) * baseAmplitude * 0.85 +
            Math.cos(nx * Math.PI * 2.6 + 0.4) * (baseAmplitude * 0.3);

          // 2. Harmonic flowing oscillation
          const wave1 = Math.sin(nx * 3.2 + lineTime * 1.2) * (baseAmplitude * 0.22);
          const wave2 = Math.cos(nx * 4.8 - lineTime * 0.85 + strandPhase) * (baseAmplitude * 0.14);
          const wave3 = Math.sin(nx * 1.8 + lineTime * 0.55) * (baseAmplitude * 0.16);

          // 3. Balanced medium vertical ribbon fan spread
          const spreadFactor = 1.0 + Math.sin(nx * Math.PI * 1.4 + 0.2) * 0.35;
          const dynamicWaveOffset = Math.sin(nx * Math.PI * 2.2 + lineTime * 0.8) * (18 * dpr);
          const ribbonFan = offsetProg * (totalSpread * spreadFactor + dynamicWaveOffset);

          // 4. Interactive mouse ripple influence
          let mouseInfluence = 0;
          if (isHovering) {
            const dx = x - mouseX;
            const dy = centerY - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const radius = 260 * dpr;
            if (dist < radius) {
              const factor = Math.cos((dist / radius) * (Math.PI / 2));
              mouseInfluence = Math.sin(dist * 0.025 - elapsed * 3.5) * (factor * 22 * dpr);
            }
          }

          // Combined Y position
          const y = centerY + sCurve + wave1 + wave2 + wave3 + ribbonFan + mouseInfluence;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            const midX = (prevX + x) / 2;
            const midY = (prevY + y) / 2;
            ctx.quadraticCurveTo(prevX, prevY, midX, midY);
          }

          prevX = x;
          prevY = y;
        }

        ctx.strokeStyle = strokeGrad;
        ctx.globalAlpha = strandAlpha;
        ctx.stroke();
      }

      ctx.globalAlpha = 1.0;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      if (animId !== null) cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [lineCount, speed, opacity, spreadScale]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full block pointer-events-none select-none ${className}`}
    />
  );
};

export default FlowingWaveBackground;

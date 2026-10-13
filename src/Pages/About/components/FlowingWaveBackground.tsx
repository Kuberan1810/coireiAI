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

    // Cap DPR to 1.25 for buttery-smooth rasterization without losing anti-aliased curve clarity
    let dpr = Math.min(window.devicePixelRatio || 1, 1.25);
    let width = 0;
    let height = 0;
    let strokeGrad: CanvasGradient | null = null;

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let isHovering = false;

    // Cache the bounding rectangle to avoid DOM layout recalculation on every mousemove
    let cachedRect: DOMRect | null = null;
    const updateRect = () => {
      if (canvas) cachedRect = canvas.getBoundingClientRect();
    };

    // Precomputed control points for smooth quadratic Bézier interpolation
    const SAMPLE_COUNT = 40;
    const xPoints: number[] = new Array(SAMPLE_COUNT + 1);
    const nxPoints: number[] = new Array(SAMPLE_COUNT + 1);
    const sCurveBase: number[] = new Array(SAMPLE_COUNT + 1);
    const spreadFactorBase: number[] = new Array(SAMPLE_COUNT + 1);

    const updateDimensionsAndPrecomputations = () => {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      cachedRect = canvas.getBoundingClientRect();
      width = canvas.width = Math.round(cachedRect.width * dpr);
      height = canvas.height = Math.round(cachedRect.height * dpr);

      if (width <= 0 || height <= 0) return;

      mouseX = targetMouseX = width / 2;
      mouseY = targetMouseY = height / 2;

      // Cache horizontal linear gradient matching Figma sky-blue tones
      strokeGrad = ctx.createLinearGradient(0, 0, width, 0);
      strokeGrad.addColorStop(0, 'rgba(186, 230, 253, 0.12)');
      strokeGrad.addColorStop(0.18, 'rgba(125, 211, 252, 0.65)');
      strokeGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.8)');
      strokeGrad.addColorStop(0.82, 'rgba(125, 211, 252, 0.65)');
      strokeGrad.addColorStop(1, 'rgba(186, 230, 253, 0.12)');

      const baseAmp = Math.min(height * 0.25, 175 * dpr);
      for (let j = 0; j <= SAMPLE_COUNT; j++) {
        const nx = j / SAMPLE_COUNT;
        xPoints[j] = nx * width;
        nxPoints[j] = nx;
        // Static geometry that only depends on nx
        sCurveBase[j] =
          Math.sin(nx * Math.PI * 1.5 - 0.35) * baseAmp * 0.85 +
          Math.cos(nx * Math.PI * 2.6 + 0.4) * (baseAmp * 0.3);
        spreadFactorBase[j] = 1.0 + Math.sin(nx * Math.PI * 1.4 + 0.2) * 0.35;
      }
    };

    updateDimensionsAndPrecomputations();

    const handleResize = () => {
      updateDimensionsAndPrecomputations();
    };

    const handleScroll = () => {
      updateRect();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!cachedRect) updateRect();
      if (!cachedRect) return;
      targetMouseX = (e.clientX - cachedRect.left) * dpr;
      targetMouseY = (e.clientY - cachedRect.top) * dpr;
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Pause rendering when Hero is scrolled out of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && animId === null) {
          startTime = performance.now() - pausedOffset;
          lastFrameTime = performance.now();
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
    let lastFrameTime = performance.now();
    const frameInterval = 1000 / 60; // Smooth 60 FPS cap to prevent 120Hz/144Hz screen overload

    const count = lineCount; // Full count (44 strands) exactly as desired
    const radius = 260 * dpr;
    const radiusSq = radius * radius;

    const render = (timeNow: number) => {
      if (!isVisible || width <= 0 || height <= 0) {
        animId = null;
        return;
      }

      // 60 FPS frame rate throttle
      const timeDelta = timeNow - lastFrameTime;
      if (timeDelta < frameInterval) {
        animId = requestAnimationFrame(render);
        return;
      }
      lastFrameTime = timeNow - (timeDelta % frameInterval);

      const elapsed = (timeNow - startTime) * 0.001 * speed;
      pausedOffset = elapsed;

      // Mouse coordinate lerping
      if (isHovering) {
        mouseX += (targetMouseX - mouseX) * 0.08;
        mouseY += (targetMouseY - mouseY) * 0.08;
      }

      ctx.clearRect(0, 0, width, height);

      const centerY = height * 0.50;
      const baseAmplitude = Math.min(height * 0.25, 175 * dpr);
      const totalSpread = (115 * dpr) * spreadScale;
      const dynOffsetMultiplier = 18 * dpr;

      ctx.lineWidth = 1.15 * dpr;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      if (strokeGrad) {
        ctx.strokeStyle = strokeGrad;
      }

      for (let i = 0; i < count; i++) {
        const progress = i / (count - 1);
        const offsetProg = progress - 0.5;

        const strandPhase = i * 0.065;
        const lineTime = elapsed + strandPhase;
        const strandAlpha = (0.2 + Math.sin(progress * Math.PI) * 0.6) * opacity;

        ctx.globalAlpha = strandAlpha;
        ctx.beginPath();

        let prevX = 0;
        let prevY = centerY;

        for (let j = 0; j <= SAMPLE_COUNT; j++) {
          const x = xPoints[j];
          const nx = nxPoints[j];

          // Use precomputed static sCurve
          const sCurve = sCurveBase[j];

          // Harmonic waves
          const wave1 = Math.sin(nx * 3.2 + lineTime * 1.2) * (baseAmplitude * 0.22);
          const wave2 = Math.cos(nx * 4.8 - lineTime * 0.85 + strandPhase) * (baseAmplitude * 0.14);
          const wave3 = Math.sin(nx * 1.8 + lineTime * 0.55) * (baseAmplitude * 0.16);

          // Ribbon spread
          const dynamicWaveOffset = Math.sin(nx * Math.PI * 2.2 + lineTime * 0.8) * dynOffsetMultiplier;
          const ribbonFan = offsetProg * (totalSpread * spreadFactorBase[j] + dynamicWaveOffset);

          // Fast mouse interaction check
          let mouseInfluence = 0;
          if (isHovering) {
            const dx = x - mouseX;
            const dy = centerY - mouseY;
            const distSq = dx * dx + dy * dy;
            if (distSq < radiusSq) {
              const dist = Math.sqrt(distSq);
              const factor = Math.cos((dist / radius) * (Math.PI / 2));
              mouseInfluence = Math.sin(dist * 0.025 - elapsed * 3.5) * (factor * 22 * dpr);
            }
          }

          const y = centerY + sCurve + wave1 + wave2 + wave3 + ribbonFan + mouseInfluence;

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            const midX = (prevX + x) * 0.5;
            const midY = (prevY + y) * 0.5;
            ctx.quadraticCurveTo(prevX, prevY, midX, midY);
          }

          prevX = x;
          prevY = y;
        }

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
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [lineCount, speed, opacity, spreadScale]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full block pointer-events-none select-none [transform:translateZ(0)] ${className}`}
    />
  );
};

export default FlowingWaveBackground;

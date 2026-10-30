import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import spamPhoneSvg from '../../assets/engage/spamPhone.svg';
import Manifesto from './manifesto-animation/Manifesto';
import UnderstandLeadsSection from './components/UnderstandLeadsSection';
import PersonalizationSection from './components/PersonalizationSection';

gsap.registerPlugin(ScrollTrigger);

// -------------------------------------------------------------
// WebGL Shaders matching card-zoom-animation / Guillaume Zhu
// -------------------------------------------------------------
const vertexShaderSource = `
  attribute vec2 aPosition;
  varying vec2 vUv;
  void main() {
    vUv = (aPosition + 1.0) * 0.5;
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  #ifdef GL_OES_standard_derivatives
  #extension GL_OES_standard_derivatives : enable
  #endif

  precision highp float;

  uniform float uProgress;
  uniform float uTime;
  uniform vec3 uCreamColor;
  uniform float uNoiseScale;
  uniform float uNoiseStrength;
  uniform float uNoiseSpeedX;
  uniform float uNoiseSpeedY;

  varying vec2 vUv;

  float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }

  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float n000 = hash(i + vec3(0.0, 0.0, 0.0));
    float n100 = hash(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash(i + vec3(1.0, 1.0, 1.0));

    float nx00 = mix(n000, n100, f.x);
    float nx10 = mix(n010, n110, f.x);
    float nx01 = mix(n001, n101, f.x);
    float nx11 = mix(n011, n111, f.x);

    float nxy0 = mix(nx00, nx10, f.y);
    float nxy1 = mix(nx01, nx11, f.y);

    return mix(nxy0, nxy1, f.z);
  }

  void main() {
    float pi = 3.14159265;
    float frontStart = -0.08;
    float frontEnd = 1.08;

    float frontPosition = mix(frontStart, frontEnd, uProgress);
    float horizontalOffset = uTime * uNoiseSpeedX;
    float verticalVariation = uTime * uNoiseSpeedY;

    float noiseValue = noise(
      vec3(
        vUv.x * uNoiseScale - horizontalOffset,
        verticalVariation,
        0.0
      )
    );

    float centeredNoise = noiseValue - 0.5;
    float noiseEnvelope = sin(uProgress * pi);

    float noisyFront = frontPosition + centeredNoise * uNoiseStrength * noiseEnvelope;
    float signedDistance = vUv.y - noisyFront;
    
    #ifdef GL_OES_standard_derivatives
      float antiAliasWidth = fwidth(signedDistance);
    #else
      float antiAliasWidth = 0.005;
    #endif

    float reveal = 1.0 - smoothstep(
      -antiAliasWidth,
      antiAliasWidth,
      signedDistance
    );

    gl_FragColor = vec4(uCreamColor, reveal);
  }
`;

export const LeadNurturing: React.FC = () => {
  const pinHeightRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const phoneMockupRef = useRef<HTMLImageElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // WebGL references
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const uniformsRef = useRef<{
    uProgress: WebGLUniformLocation | null;
    uTime: WebGLUniformLocation | null;
    uCreamColor: WebGLUniformLocation | null;
    uNoiseScale: WebGLUniformLocation | null;
    uNoiseStrength: WebGLUniformLocation | null;
    uNoiseSpeedX: WebGLUniformLocation | null;
    uNoiseSpeedY: WebGLUniformLocation | null;
  } | null>(null);

  const currentProgressRef = useRef(0);

  // -------------------------------------------------------------
  // 1. WebGL Initialization (matching card-zoom-animation shader)
  // -------------------------------------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext('webgl', { alpha: true, antialias: true }) ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);

    if (!gl) return;
    glRef.current = gl;

    gl.getExtension('OES_standard_derivatives');

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Full-screen Quad Buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    );

    const aPosition = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    uniformsRef.current = {
      uProgress: gl.getUniformLocation(program, 'uProgress'),
      uTime: gl.getUniformLocation(program, 'uTime'),
      uCreamColor: gl.getUniformLocation(program, 'uCreamColor'),
      uNoiseScale: gl.getUniformLocation(program, 'uNoiseScale'),
      uNoiseStrength: gl.getUniformLocation(program, 'uNoiseStrength'),
      uNoiseSpeedX: gl.getUniformLocation(program, 'uNoiseSpeedX'),
      uNoiseSpeedY: gl.getUniformLocation(program, 'uNoiseSpeedY'),
    };

    // White liquid parameters
    gl.uniform3f(uniformsRef.current.uCreamColor, 1.0, 1.0, 1.0);
    gl.uniform1f(uniformsRef.current.uNoiseScale, 2.0);
    gl.uniform1f(uniformsRef.current.uNoiseStrength, 0.16);
    gl.uniform1f(uniformsRef.current.uNoiseSpeedX, 0.45);
    gl.uniform1f(uniformsRef.current.uNoiseSpeedY, 0.35);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const handleResize = () => {
      if (!canvas) return;
      const w = Math.max(canvas.clientWidth, 1);
      const h = Math.max(canvas.clientHeight, 1);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      gl.deleteProgram(program);
      gl.deleteShader(vertShader);
      gl.deleteShader(fragShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  // -------------------------------------------------------------
  // 2. Continuous WebGL Time Loop
  // -------------------------------------------------------------
  useEffect(() => {
    let animId: number;
    const startTime = performance.now();

    const tick = () => {
      const gl = glRef.current;
      const uniforms = uniformsRef.current;
      if (gl && uniforms) {
        const elapsed = (performance.now() - startTime) * 0.001;
        const p = currentProgressRef.current;

        // Wave fill: 0.0 -> 0.55
        const waveProgress = Math.min(Math.max(p / 0.55, 0), 1.0);

        gl.uniform1f(uniforms.uProgress, waveProgress);
        gl.uniform1f(uniforms.uTime, elapsed);

        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animId);
  }, []);

  // -------------------------------------------------------------
  // 3. GSAP ScrollTrigger: Phone Wave Fill + Fullscreen Card Zoom
  // -------------------------------------------------------------
  useEffect(() => {
    const pinHeight = pinHeightRef.current;
    const container = containerRef.current;
    const card = cardRef.current;
    const content = contentRef.current;
    const phoneImg = phoneMockupRef.current;
    const canvas = canvasRef.current;

    if (!pinHeight || !container || !card || !content || !phoneImg || !canvas) return;

    // Reset strictly to default null state on mount
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    currentProgressRef.current = 0;

    gsap.set(card, { scale: 1, backgroundColor: 'transparent', zIndex: 2 });
    gsap.set(phoneImg, { opacity: 1 });
    gsap.set(content, { opacity: 1, scale: 1 });
    gsap.set(canvas, { opacity: 0 });

    const calculateMaxScale = () => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const maxW = Math.max(cx, window.innerWidth - cx) * 2;
      const maxH = Math.max(cy, window.innerHeight - cy) * 2;
      const cw = Math.max(card.offsetWidth, 1);
      const ch = Math.max(card.offsetHeight, 1);
      return Math.max(maxW / cw, maxH / ch) * 1.35;
    };

    const st = ScrollTrigger.create({
      trigger: pinHeight,
      start: 'top top',
      end: 'bottom top',
      pin: container,
      scrub: 0.4,
      onLeaveBack: () => {
        currentProgressRef.current = 0;
        gsap.set(card, { scale: 1, backgroundColor: 'transparent', zIndex: 2 });
        gsap.set(phoneImg, { opacity: 1 });
        gsap.set(content, { opacity: 1, scale: 1 });
        gsap.set(canvas, { opacity: 0 });
      },
      onUpdate: (self) => {
        const p = self.progress;
        currentProgressRef.current = p;

        // Guaranteed default null state at the top
        if (p <= 0.02) {
          canvas.style.opacity = '0';
          gsap.set(card, {
            scale: 1,
            zIndex: 2,
            backgroundColor: 'transparent',
          });
          gsap.set(phoneImg, { opacity: 1 });
          gsap.set(content, { opacity: 1, scale: 1 });
          return;
        }

        canvas.style.opacity = '1';

        // Phase 1: Wave fill inside phone (0.0 -> 0.55)
        const WAVE_END = 0.55;

        // Phase 2: Card zoom & fullscreen expansion (0.55 -> 1.0)
        if (p <= WAVE_END) {
          gsap.set(card, {
            scale: 1,
            zIndex: 2,
            backgroundColor: 'transparent',
          });
          gsap.set(phoneImg, { opacity: 1 });
          gsap.set(content, { opacity: 1, scale: 1 });
        } else {
          const zoomProgress = (p - WAVE_END) / (1 - WAVE_END);
          const zoomEased = zoomProgress * zoomProgress * zoomProgress; // cubic power3.in
          const maxScale = calculateMaxScale();
          const currentScale = 1 + (maxScale - 1) * zoomEased;

          gsap.set(card, {
            scale: currentScale,
            zIndex: 40,
            backgroundColor: '#ffffff',
          });
          gsap.set(phoneImg, { opacity: Math.max(0, 1 - zoomProgress * 3.5) });
          gsap.set(content, {
            opacity: Math.max(0, 1 - zoomProgress * 2.5),
            scale: 1 - zoomProgress * 0.04,
          });
        }
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <div className="relative w-full bg-white text-[#0B0F19] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* SECTION 1: Phone Liquid Wave Fill + Card Fullscreen Zoom Pin Area */}
      <div ref={pinHeightRef} className="relative w-full h-[250vh]">
        <div
          ref={containerRef}
          className="w-full h-screen overflow-hidden flex flex-col justify-center items-center select-none bg-white px-6 sm:px-10 lg:px-14"
        >
          <div
            ref={contentRef}
            className="relative w-full max-w-[1280px] mx-auto flex flex-col justify-center will-change-transform"
          >
            {/* Row 1: Line 1 & Line 2 of Headline */}
            <div className="text-left w-full">
              <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[clamp(32px,4.6vw,78px)] text-[#0B1329] leading-[1.08] tracking-[0px]">
                Reach Every Lead.
                <br />
                Never Their Spam
              </h1>
            </div>

            {/* Row 2: "Folder." on Left, Phone Mockup in Center, Quote on Right */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 sm:gap-6 mt-1 sm:mt-2">
              {/* Left Column: "Folder." */}
              <div className="md:col-span-4 text-left self-start pt-0 sm:pt-1">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[clamp(32px,4.6vw,78px)] text-[#0B1329] leading-[1.08] tracking-[0px] inline-block">
                  Folder.
                </span>
              </div>

              {/* Center Column: Phone Mockup Container */}
              <div className="md:col-span-4 flex justify-center items-center">
                <div className="relative h-[min(380px,48vh)] aspect-[231/392] shrink-0 flex items-center justify-center select-none">
                  {/* Phone Mockup Frame */}
                  <img
                    ref={phoneMockupRef}
                    src={spamPhoneSvg}
                    alt="Spam Risk Call Screen"
                    className="w-full h-full object-contain select-none pointer-events-none will-change-opacity block"
                    style={{ opacity: 1 }}
                    loading="eager"
                  />

                  {/* The EXACT iPhone Display Screen (Inside Bezels: top 5.5%, bottom 5.6%, left 14.1%, right 14.1%) */}
                  <div
                    ref={cardRef}
                    className="absolute overflow-hidden pointer-events-none will-change-transform"
                    style={{
                      top: '5.5%',
                      bottom: '5.6%',
                      left: '14.1%',
                      right: '14.1%',
                      borderRadius: '28px',
                      transformOrigin: '50% 50%',
                      transform: 'scale(1)',
                      backgroundColor: 'transparent',
                      zIndex: 2,
                    }}
                  >
                    <canvas
                      ref={canvasRef}
                      className="w-full h-full block pointer-events-none"
                      style={{ opacity: 0 }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Quote */}
              <div className="md:col-span-4 flex justify-start md:justify-end items-center text-left">
                <div className="max-w-[300px] lg:max-w-[320px]">
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px] text-[#64748B]">
                    “Coirei personalizes every message based on lead intent, controls outreach frequency, and optimizes send times across channels to reduce spam risk and improve deliverability.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: THE EXACT MANIFESTO ANIMATION DIRECTLY ON THE WHITE PAGE */}
      <Manifesto />

      {/* SECTION 3: UNDERSTAND EVERY LEAD BEFORE YOU REACH OUT */}
      <UnderstandLeadsSection />

      {/* SECTION 4: PERSONALIZATION */}
      <PersonalizationSection />
    </div>
  );
};

export default LeadNurturing;
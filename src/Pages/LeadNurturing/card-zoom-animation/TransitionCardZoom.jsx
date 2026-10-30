import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import spamPhoneSvg from "../../../assets/engage/spamPhone.svg";
import "./TransitionCardZoom.css";

gsap.registerPlugin(ScrollTrigger);

// Vertex Shader
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

// Fragment Shader with Organic Noise Liquid Cream Reveal
const fragmentShader = `
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
    float antiAliasWidth = fwidth(signedDistance);

    float reveal = 1.0 - smoothstep(
      -antiAliasWidth,
      antiAliasWidth,
      signedDistance
    );

    gl_FragColor = vec4(uCreamColor, reveal);
  }
`;

export default function TransitionCardZoom() {
  const containerRef = useRef(null);
  const pinHeightRef = useRef(null);
  const cardRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const canvas = canvasRef.current;
    const pinHeight = pinHeightRef.current;
    const container = containerRef.current;
    if (!card || !canvas || !pinHeight || !container) return;

    // -------------------------------------------------------------
    // Three.js Shader Setup for Cream Reveal Wave
    // -------------------------------------------------------------
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();

    const uniforms = {
      uProgress: { value: 0.0 },
      uTime: { value: 0.0 },
      uCreamColor: { value: new THREE.Color("#f5e7df") },
      uNoiseScale: { value: 2.0 },
      uNoiseStrength: { value: 0.15 },
      uNoiseSpeedX: { value: 0.45 },
      uNoiseSpeedY: { value: 0.35 },
    };

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);

    const handleResize = () => {
      const w = Math.max(canvas.clientWidth, 1);
      const h = Math.max(canvas.clientHeight, 1);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h, false);
      renderer.render(scene, camera);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Animation Loop for noise variation
    let animId = null;
    let isRunning = false;
    const clock = new THREE.Clock();

    const tick = () => {
      if (isRunning) {
        uniforms.uTime.value = clock.getElapsedTime();
        renderer.render(scene, camera);
        animId = requestAnimationFrame(tick);
      }
    };

    const setProgress = (progress) => {
      const p = Math.max(0, Math.min(1, progress));
      uniforms.uProgress.value = p;
      canvas.style.opacity = p > 0 ? "1" : "0";

      if (p > 0 && p < 1) {
        if (!isRunning) {
          isRunning = true;
          animId = requestAnimationFrame(tick);
        }
      } else {
        isRunning = false;
        if (animId) {
          cancelAnimationFrame(animId);
          animId = null;
        }
        renderer.render(scene, camera);
      }
    };

    // Calculate dynamic scale to cover entire viewport
    const calculateMaxScale = () => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const maxW = Math.max(cx, window.innerWidth - cx) * 2;
      const maxH = Math.max(cy, window.innerHeight - cy) * 2;
      const cw = Math.max(card.offsetWidth, 1);
      const ch = Math.max(card.offsetHeight, 1);
      return Math.max(maxW / cw, maxH / ch) * 1.25;
    };

    // -------------------------------------------------------------
    // GSAP ScrollTrigger: Wave Fill (0 -> 0.6) then Zoom (0.6 -> 1.0)
    // -------------------------------------------------------------
    const easePower3In = gsap.parseEase("power3.in");

    const st = ScrollTrigger.create({
      trigger: pinHeight,
      start: "top top",
      end: "bottom top",
      pin: container,
      scrub: true,
      onLeaveBack: () => {
        setProgress(0);
        gsap.set(card, { scale: 1 });
      },
      onUpdate: (self) => {
        const p = self.progress;

        // 1. Cream liquid wave fills the card (0.0 -> 0.65)
        const WAVE_END = 0.65;
        const waveProgress = Math.max(0, Math.min(1, p / WAVE_END));
        setProgress(waveProgress);

        // 2. Card scales up to fill the whole screen (0.65 -> 1.0)
        if (p <= WAVE_END) {
          gsap.set(card, { scale: 1 });
        } else {
          const zoomProgress = (p - WAVE_END) / (1 - WAVE_END);
          const eased = easePower3In(zoomProgress);
          const maxScale = calculateMaxScale();
          const currentScale = gsap.utils.interpolate(1, maxScale, eased);
          gsap.set(card, { scale: currentScale });
        }
      },
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animId) cancelAnimationFrame(animId);
      st.kill();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="transition-animation-wrapper">
      <div ref={pinHeightRef} className="transition-pin-height">
        <div ref={containerRef} className="transition-container">
          {/* Header */}
          <div className="transition-header">
            <h2 className="transition-title">Toolkit</h2>
            <h3 className="transition-subtitle">Art Direction</h3>
          </div>

          {/* Transition Card with Phone SVG */}
          <div className="transition-card-center">
            <div ref={cardRef} className="transition-card">
              <img
                className="transition-card__bg"
                src={spamPhoneSvg}
                alt="Spam Risk Call"
              />
              <canvas
                ref={canvasRef}
                className="transition-card__reveal-canvas"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


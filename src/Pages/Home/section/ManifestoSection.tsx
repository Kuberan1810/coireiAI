import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import extFirstMeetImg from "../../../assets/startups/ext_firstmeetimg.jpg";
import "./ManifestoSection.css";

gsap.registerPlugin(ScrollTrigger);

export const ManifestoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLSpanElement>(null);
  const imageBoxRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const rightTextRef = useRef<HTMLSpanElement>(null);
  const showcaseContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;
    const leftText = leftTextRef.current;
    const imageBox = imageBoxRef.current;
    const imageEl = imageRef.current;
    const rightText = rightTextRef.current;
    const showcaseContent = showcaseContentRef.current;

    if (
      !container ||
      !textEl ||
      !leftText ||
      !imageBox ||
      !imageEl ||
      !rightText ||
      !showcaseContent
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Calculate horizontal scroll distance so image lands in center
      const imgCenter = imageBox.offsetLeft + imageBox.offsetWidth / 2;
      const targetScrollX = Math.max(imgCenter - window.innerWidth / 2, 0);

      // 2. Calculate scaling & leftward shift to keep photo close to the right content
      const isDesktop = window.innerWidth >= 768;
      const maxContentWidth = Math.min(window.innerWidth - 64, 1020);
      const gap = 48;
      const colWidth = isDesktop ? (maxContentWidth - gap) / 2 : maxContentWidth;

      const currentThumbWidth = imageEl.offsetWidth || 150;
      const targetPhotoWidth = Math.min(colWidth, 480);
      const targetScale = Math.max(targetPhotoWidth / currentThumbWidth, 2.0);

      // Shift photo left so it lands snug against the right content (gap = 48px)
      const shiftX = isDesktop ? gap / 2 + colWidth / 2 : 0;
      const shiftY = isDesktop ? 0 : -130;

      // Initial styles
      gsap.set(textEl, { x: 0 });
      gsap.set(leftText, { opacity: 1 });
      gsap.set(rightText, { opacity: 1 });
      gsap.set(imageEl, {
        scale: 1,
        x: 0,
        y: 0,
        transformOrigin: "center center",
      });
      gsap.set(showcaseContent, {
        opacity: 0,
        x: isDesktop ? 30 : 0,
        y: isDesktop ? 0 : 30,
        pointerEvents: "none",
      });

      // 3. ScrollTrigger timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=2400",
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Step 1: Scroll text track horizontally until the image is centered
      tl.to(textEl, {
        x: -targetScrollX,
        ease: "none",
        duration: 3.5,
      });

      // Step 2: The image ZOOMS in place at the center, text disappears
      tl.to(
        [leftText, rightText],
        {
          opacity: 0,
          ease: "power2.inOut",
          duration: 1.4,
        },
        "zoom"
      );

      tl.to(
        imageEl,
        {
          scale: targetScale,
          boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.15)",
          ease: "power2.out",
          duration: 2.0,
        },
        "zoom"
      );

      // Step 3: THEN it moves to the left snug against the right content
      tl.to(
        imageEl,
        {
          x: -shiftX,
          y: shiftY,
          ease: "power2.inOut",
          duration: 2.0,
        },
        "moveToLeft"
      );

      tl.to(
        showcaseContent,
        {
          opacity: 1,
          x: 0,
          y: 0,
          pointerEvents: "auto",
          ease: "power2.out",
          duration: 1.6,
        },
        "moveToLeft+=0.3"
      );

      // Step 4: Settle hold so user can read before unpinning
      tl.to({}, { duration: 1.5 });
    }, container);

    // Refresh ScrollTrigger once after render
    const t = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(t);
      ctx.revert();
    };
  }, []);

  return (
    <div className="manifesto-wrapper">
      <section className="manifesto" id="home-manifesto">
        <div ref={containerRef} className="container">
          {/* THE MANIFESTO TEXT WITH INLINE IMAGE */}
          <div ref={textRef} className="text">
            {/* Left part: "Building Intelligent Solutions That Drive Business" */}
            <span ref={leftTextRef} className="whitespace-nowrap">
              Building Intelligent Solutions That Drive Business
            </span>

            {/* Inline Image between "Business" and "Growth" */}
            <span ref={imageBoxRef} className="inline-image-box">
              <img
                ref={imageRef}
                src={extFirstMeetImg}
                alt="Marketing. Start Orchestrating Growth."
                className="select-none pointer-events-none"
              />
            </span>

            {/* Right part: "Growth" */}
            <span ref={rightTextRef} className="whitespace-nowrap">
              Growth
            </span>
          </div>

          {/* THE SECTION'S RIGHT-SIDE MARKETING CONTENT */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-6 sm:px-10 lg:px-16">
            <div className="max-w-[1020px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
              {/* Left Column Spacer (zoomed photo lands here snug against the right column) */}
              <div className="pointer-events-none" />

              {/* Right Column: Heading, Subtitle & Button */}
              <div
                ref={showcaseContentRef}
                className="text-left flex flex-col items-start justify-center will-change-transform"
              >
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] sm:text-[42px] lg:text-[48px] text-[#0D0D0D] leading-[1.08] tracking-[-0.03em] mb-4 sm:mb-6">
                  Marketing. Start
                  <br />
                  Orchestrating
                  <br />
                  Growth.
                </h3>
                <p className="font-['Manrope',sans-serif] text-[14px] sm:text-[15.5px] text-[#4B5563] leading-[26px] max-w-[460px] mb-6 sm:mb-8">
                  We combine technology, expertise, and innovation to simplify
                  complex challenges, unlock new opportunities, and accelerate
                  sustainable business growth.
                </p>
                <Link
                  to="/startups"
                  className="inline-block px-6 py-2.5 border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-200 text-[13.5px] font-medium text-[#1A1A1A] rounded-none cursor-pointer"
                >
                  View more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManifestoSection;

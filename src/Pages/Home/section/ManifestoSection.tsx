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
  const leftColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;
    const leftText = leftTextRef.current;
    const imageBox = imageBoxRef.current;
    const imageEl = imageRef.current;
    const rightText = rightTextRef.current;
    const showcaseContent = showcaseContentRef.current;
    const leftCol = leftColRef.current;

    if (
      !container ||
      !textEl ||
      !leftText ||
      !imageBox ||
      !imageEl ||
      !rightText ||
      !showcaseContent ||
      !leftCol
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth >= 768;

      // 1. Calculate horizontal scroll distance so inline image lands in center
      const imgCenter = imageBox.offsetLeft + imageBox.offsetWidth / 2;
      const targetScrollX = Math.max(imgCenter - window.innerWidth / 2, 0);

      // 2. Compute exact position of Left Column target box so image never overlaps text
      const containerRect = container.getBoundingClientRect();
      const targetBox = leftCol.getBoundingClientRect();

      const targetCenterX = targetBox.left + targetBox.width / 2;
      const targetCenterY = targetBox.top + targetBox.height / 2;

      const containerCenterX = containerRect.left + containerRect.width / 2;
      const containerCenterY = containerRect.top + containerRect.height / 2;

      const targetX = targetCenterX - containerCenterX;
      const targetY = targetCenterY - containerCenterY;

      const currentThumbWidth = imageEl.offsetWidth || 150;
      const targetPhotoWidth = Math.min(targetBox.width, isDesktop ? 480 : 360);
      const targetScale = Math.max(targetPhotoWidth / currentThumbWidth, 2.0);

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
          end: "+=2600",
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Step 1: Scroll text track horizontally until the image is centered
      tl.to(textEl, {
        x: -targetScrollX,
        ease: "none",
        duration: 3.2,
      });

      // Step 2: The image ZOOMS in place at the center, text disappears
      tl.to(
        [leftText, rightText],
        {
          opacity: 0,
          ease: "power2.inOut",
          duration: 1.2,
        },
        "zoom"
      );

      tl.to(
        imageEl,
        {
          scale: targetScale,
          boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.18)",
          ease: "power2.out",
          duration: 1.5,
        },
        "zoom"
      );

      // Step 3: FIRST the image glides into its exact spot in the left column
      tl.to(
        imageEl,
        {
          x: targetX,
          y: targetY,
          ease: "power2.inOut",
          duration: 1.8,
        }
      );

      // Step 4: ONLY AFTER the image has reached its position, THEN the text reveals on the right
      tl.to(
        showcaseContent,
        {
          opacity: 1,
          x: 0,
          y: 0,
          pointerEvents: "auto",
          ease: "power2.out",
          duration: 1.5,
        }
      );

      // Step 5: Settle hold so user can comfortably read before unpinning
      tl.to({}, { duration: 1.2 });
    }, container);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <div className="manifesto-wrapper">
      <section className="home-manifesto" id="home-manifesto">
        <div ref={containerRef} className="home-manifesto-container">
          {/* THE MANIFESTO TEXT WITH INLINE IMAGE */}
          <div ref={textRef} className="home-manifesto-text">
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
              <div
                ref={leftColRef}
                className="pointer-events-none w-full flex items-center justify-center h-[220px] sm:h-[260px] md:h-auto"
              />

              {/* Right Column: Heading, Subtitle & Button */}
              <div
                ref={showcaseContentRef}
                className="text-left flex flex-col items-start justify-center will-change-transform pt-2 md:pt-0"
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
                  className="inline-block px-6 py-2.5 border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-200 text-[13.5px] font-medium text-[#1A1A1A] rounded-none cursor-pointer pointer-events-auto"
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

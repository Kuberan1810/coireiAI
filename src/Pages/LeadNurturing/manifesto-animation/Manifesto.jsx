import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Manifesto.css";

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const manifestoRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const textEl = textRef.current;
    const containerEl = containerRef.current;
    const manifestoEl = manifestoRef.current;
    if (!textEl || !containerEl || !manifestoEl) return;

    // Ensure opacity is reset so letters are never invisible
    textEl.style.opacity = "1";

    // Split text into individual letters and spaces
    const originalText = textEl.textContent.trim();
    textEl.innerHTML = originalText
      .split("")
      .map((char) =>
        char === " "
          ? `<span>&nbsp;</span>`
          : `<span class="letter">${char}</span>`
      )
      .join("");

    const letterEls = textEl.querySelectorAll(".letter");
    const lastLetter = letterEls[letterEls.length - 1];

    // Allows "Reach Out." to travel fully across and completely off the screen to the left
    const getScrollDistance = () => {
      if (lastLetter) {
        const targetX = lastLetter.offsetLeft + lastLetter.offsetWidth + window.innerWidth * 0.15;
        return Math.max(targetX, 100);
      }
      return textEl.clientWidth - document.body.clientWidth;
    };

    const speedRatio = 0.58;
    const getDuration = () => getScrollDistance() * speedRatio;

    // Pin holds until horizontal scroll and fade are 100% complete
    const pinTrigger = ScrollTrigger.create({
      trigger: containerEl,
      start: "top top",
      end: () => `+=${getDuration()}`,
      pin: true,
      invalidateOnRefresh: true,
    });

    // 1. Horizontal scroll continues all the way until "Reach Out." travels completely past the left edge
    const scrollTween = gsap.to(textEl, {
      x: () => -getScrollDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: containerEl,
        start: "top top",
        end: () => `+=${getDuration()}`,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    // 2. As "Reach Out." finishes moving to the left, it fades away smoothly to 0 before unpin
    const fadeTween = gsap.to(textEl, {
      opacity: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: containerEl,
        start: () => `top+=${getDuration() * 0.65} top`,
        end: () => `top+=${getDuration() * 0.95} top`,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    // Individual letter entrance physics
    const letterTriggers = [];
    const isMobile = window.innerWidth <= 768;
    const ySpread = isMobile ? 80 : 250;
    const rotSpread = isMobile ? 25 : 50;

    letterEls.forEach((letter) => {
      const tween = gsap.from(letter, {
        yPercent: (Math.random() - 0.5) * ySpread,
        rotation: (Math.random() - 0.5) * rotSpread,
        ease: "elastic.out(1.2, 1)",
        scrollTrigger: {
          trigger: letter,
          containerAnimation: scrollTween,
          start: "left 100%",
          end: "left 35%",
          scrub: 0.5,
        },
      });
      if (tween.scrollTrigger) letterTriggers.push(tween.scrollTrigger);
    });

    return () => {
      pinTrigger.kill();
      scrollTween.scrollTrigger?.kill();
      scrollTween.kill();
      fadeTween.scrollTrigger?.kill();
      fadeTween.kill();
      letterTriggers.forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="manifesto-wrapper">
      <section ref={manifestoRef} className="manifesto" id="manifesto">
        <div ref={containerRef} className="lead-manifesto-container">
          <p ref={textRef} className="text">
            Understand Every Lead Before You Reach Out.
          </p>
        </div>
      </section>
    </div>
  );
}

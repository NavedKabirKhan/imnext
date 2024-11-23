"use client";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import aboutStyles from "@/app/styles/About.module.css"; // Import your styles

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Founders() {
  const componentRef = useRef();
  const containerRef = useRef();

  useLayoutEffect(() => {
    // Create a GSAP context for cleanup and scoping
    const ctx = gsap.context(() => {
      const screenWidth = window.innerWidth;

      if (screenWidth > 960) {
        const container = containerRef.current;

        gsap.to(container, {
          x: () => -(container.scrollWidth - screenWidth / 1.5), // Adjust scroll amount as needed
          ease: "none",
          scrollTrigger: {
            trigger: componentRef.current,
            pin: true,
            start: "top 10%",
            scrub: 1,
            end: () => `+=${container.scrollWidth}`,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    }, componentRef); // Attach context to the component reference

    return () => ctx.revert();
  }, []);

  return (
    <div className={aboutStyles.meetTheFounderWrapper} ref={componentRef}>
      <div className={aboutStyles.meetTheFounderContainer} ref={containerRef}>
        {/* Heading */}
        <div className={aboutStyles.panelFirst}>
          <div className={aboutStyles.meetTheFoundersHeading}>
            <h2>Meet The Founders</h2>
            <p>Boisterous brilliance meets calm calculation:</p>
          </div>

          {/* Description */}
          <div className={aboutStyles.meetTheFoundersDescription}>
            <h2>A story that began with a trip without laptops and sharing bold dreams.</h2>
            <p>
              Back in 2017, the founders packed their dreams in a shoestring budget, and dived headfirst into the deep end.
              They made the crazy decision to start Integra Magna, facing a ton of skepticism. Too broke, no network, and not much experience to succeed in a world with predefined rules for entrepreneurs. Today? That flame&apos;s turned into a full-blown fireworks show!
            </p>
          </div>
        </div>

        {/* Misbah Qureshi */}
        <div className={aboutStyles.meetTheFoundersMisbahQureshi}>
          <div className={aboutStyles.meetTheFoundersMisbahQureshiWitty}>
            <div className={aboutStyles.meetTheFoundersMisbahQureshiWittyContainer}>
              <img
                src="/assets/images/about/founder/misbah-witty-sticker.svg"
                alt="Cool, Stoic and Cerebral"
                height={461}
                width={164}
              />
            </div>
          </div>
          <div className={aboutStyles.meetTheFoundersMisbahQureshiimg}>
            <img
              src="/assets/images/about/founder/misbah-image.png"
              alt="Misbah Qureshi Founder Integra Magna and Product Experience Architect"
              height={576}
              width={576}
            />
          </div>
          <div className={aboutStyles.meetTheFoundersMisbahQureshiFounder}>
            <h2 className={aboutStyles.founderName}>Misbah <br />Qureshi</h2>
            <p className={aboutStyles.founderDescription}>Co-founder</p>
            <a href="https://www.linkedin.com/in/misbahqr/" target="_blank" rel="noopener noreferrer" className={aboutStyles.linkedInIcon}>
              <span>LinkedIn →</span>
            </a>
          </div>
        </div>

        {/* Vyanjana Sharma */}
        <div className={aboutStyles.meetTheFoundersMisbahQureshi}>
          <div className={aboutStyles.meetTheFoundersMisbahQureshiWitty}>
            <div className={aboutStyles.meetTheFoundersMisbahQureshiWittyContainer}>
              <img
                src="/assets/images/about/founder/vyanjana-witty-sticker.svg"
                alt="Witty, Savvy, and Boisterous"
                height={461}
                width={164}
              />
            </div>
          </div>
          <div className={aboutStyles.meetTheFoundersMisbahQureshiimg}>
            <img
              src="/assets/images/about/founder/vyanjana.jpg"
              alt="Vyanjana Sharma Founder Integra Magna, Adobe&apos;s 1st CC expert in India and Brand Strategist"
              height={576}
              width={576}
            />
          </div>
          <div className={aboutStyles.meetTheFoundersMisbahQureshiFounder} style={{ borderRight: "none" }}>
            <h2 className={aboutStyles.founderName}>Vyanjana <br />Sharma</h2>
            <p className={aboutStyles.founderDescription}>Co-founder</p>
            <a href="https://www.linkedin.com/in/vyanjanas/" target="_blank" rel="noopener noreferrer" className={aboutStyles.linkedInIcon}>
              <span>LinkedIn →</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founders;

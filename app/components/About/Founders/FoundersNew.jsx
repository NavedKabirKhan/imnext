import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import aboutStyles from "@/styles/About.module.css";
import Image from "next/legacy/image";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger

function Founders() {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const componentRef = useRef(null);
    const containerRef = useRef(null);
    const tween = useRef(null);

    useGSAP(
        () => {
            const screenWidth = window.innerWidth;

            const container = containerRef.current;

            // Initialize the tween timeline with ScrollTrigger
            gsap.set(container, { x: 0 });
            tween.current = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    start: "top 10%",
                    end: () => `+=${container.scrollWidth}`,
                    scrub: 1,
                    // anticipatePin: 1,
                    // invalidateOnRefresh: true,
                    markers: true, // Uncomment for debugging
                },
            });

            // Add horizontal scroll animation to the timeline
            tween.current.to(container, {
                x: () => -(container.scrollWidth - screenWidth / 1.5),
                duration: 0.8,
                ease: "none",
            });
            // tween.current.kill();

            ScrollTrigger.refresh();


            // Cleanup: Kill animation and refresh ScrollTrigger on unmount
            return () => {
                tween.current.kill();
                ScrollTrigger.refresh();
            };
        },
        { scope: componentRef }
    );

    return (
        <div ref={componentRef} className={aboutStyles.meetTheFounderWrapper}>
            <div ref={containerRef} className={aboutStyles.meetTheFounderContainer}>
                {/* Heading */}
                <div className={aboutStyles.panelFirst}>
                    <div className={aboutStyles.meetTheFoundersHeading}>
                        <h2>Meet The Founders</h2>
                        <p>Boisterous brilliance meets calm calculation:</p>
                    </div>
                    <div className={aboutStyles.meetTheFoundersDescription}>
                        <h2>A story that began with a trip without laptops and sharing bold dreams.</h2>
                        <p>
                            Back in 2017, the founders packed their dreams in a shoestring budget...
                        </p>
                    </div>
                </div>

                {/* Misbah Qureshi */}
                <div className={aboutStyles.meetTheFoundersMisbahQureshi}>
                    <div className={aboutStyles.meetTheFoundersMisbahQureshiWitty}>
                        <div className={aboutStyles.meetTheFoundersMisbahQureshiWittyContainer}>
                            <Image src="/assets/images/about/founder/misbah-witty-sticker.svg" alt="Cool, Stoic and Cerebral" height={461} width={164} layout="responsive" />
                        </div>
                    </div>
                    <div className={aboutStyles.meetTheFoundersMisbahQureshiimg}>
                        <Image src="/assets/images/about/founder/misbah-image.png" alt="Misbah Qureshi Founder Integra Magna and Product Experience Architect" height={576} width={576} layout="responsive" />
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
                            <Image src="/assets/images/about/founder/vyanjana-witty-sticker.svg" alt="Witty, Savvy, and Boisterous" height={461} width={164} layout="responsive" />
                        </div>
                    </div>
                    <div className={aboutStyles.meetTheFoundersMisbahQureshiimg}>
                        <Image src="/assets/images/about/founder/vyanjana.jpg" alt="Vyanjana Sharma Founder Integra Magna, Adobe's 1st CC expert in India and Brand Strategist" height={576} width={576} layout="responsive" />
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

import React, { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import Image from "next/legacy/image";
import Spectrum from "@/app/components/Landing/Spectrum/Spectrum";
import { usePathname } from 'next/navigation';
import landingStyles from "@/app/styles/LandingPage.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import DiveintoDetail from "@/app/assets/landing/dive-into-detail.svg";
import thumbsup from "@/app/assets/landing/thumbsup.webp";
import TransitionComponent from "@/app/components/Landing/Heading/TransitionComponent";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {

  const headingRef = useRef(null);

  const heroTexts = useRef([]);
  const pathname = usePathname();


  useGSAP(() => {
    // Split the text into characters only once when the component mounts
    // const splitText = new SplitType(headingRef.current, { types: "chars", tagName: "span" });
    const splitText1 = new SplitType(heroTexts.current[0], { types: "chars", tagName: "span" })
    const splitText2 = new SplitType(heroTexts.current[1], { types: "chars", tagName: "span" })
    const splitText3 = new SplitType(heroTexts.current[2], { types: "chars", tagName: "span" })
    // const chars = [splitText1.chars, splitText2.chars, splitText3.chars]; // Get the split characters
    const chars1 = splitText1.chars
    const chars2 = splitText2.chars
    const chars3 = splitText3.chars

    console.log(chars1);
    console.log(chars2);
    console.log(chars3);

    // const chars = splitText1.chars.join('') + splitText2.chars.join('') + splitText3.chars.join('');

    const maxDistance = 300;
    const maxFontWeight = 200;
    const minFontWeight = 500;
    // const tl = gsap.timeline();



    const handleMouseMove = (event) => {
      const mouseX = event.pageX;
      const mouseY = event.pageY;

      chars1.forEach((char) => {
        const charRect = char.getBoundingClientRect();
        const charCenterX = charRect.left + charRect.width / 2;
        const charCenterY = charRect.top + charRect.height / 2;
        const distance = Math.sqrt(
          Math.pow(mouseX - charCenterX, 2) + Math.pow(mouseY - charCenterY, 2)
        );

        let fontWeight = minFontWeight;
        if (distance < maxDistance) {
          fontWeight =
            minFontWeight +
            (maxFontWeight - minFontWeight) *
            ((maxDistance - distance) / maxDistance);
        }

        gsap.to(char, { fontWeight: fontWeight, duration: 0.5 });
      });
      chars2.forEach((char) => {
        const charRect = char.getBoundingClientRect();
        const charCenterX = charRect.left + charRect.width / 2;
        const charCenterY = charRect.top + charRect.height / 2;
        const distance = Math.sqrt(
          Math.pow(mouseX - charCenterX, 2) + Math.pow(mouseY - charCenterY, 2)
        );

        let fontWeight = minFontWeight;
        if (distance < maxDistance) {
          fontWeight =
            minFontWeight +
            (maxFontWeight - minFontWeight) *
            ((maxDistance - distance) / maxDistance);
        }

        gsap.to(char, { fontWeight: fontWeight, duration: 0.5 });
      });
      chars3.forEach((char) => {
        const charRect = char.getBoundingClientRect();
        const charCenterX = charRect.left + charRect.width / 2;
        const charCenterY = charRect.top + charRect.height / 2;
        const distance = Math.sqrt(
          Math.pow(mouseX - charCenterX, 2) + Math.pow(mouseY - charCenterY, 2)
        );

        let fontWeight = minFontWeight;
        if (distance < maxDistance) {
          fontWeight =
            minFontWeight +
            (maxFontWeight - minFontWeight) *
            ((maxDistance - distance) / maxDistance);
        }

        gsap.to(char, { fontWeight: fontWeight, duration: 0.5 });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    const ctx = gsap.context(() => {
      heroTexts.current.forEach((heroText, index) => {
        console.log(heroText);

        if (heroText) {
          gsap.fromTo(heroText,
            {
              yPercent: 100,

            },
            {
              yPercent: 0,
              duration: 2,
              delay: (index + 0.5) * 0.3,
              ease: 'power2.out',
              onComplete: () => {
                console.log("Header TExt Complete");
                // overController();
              }
            });
        }
      });
    }, headingRef.current);

    return () => {
      document.addEventListener("mousemove", handleMouseMove);
      ctx.revert();
      splitText1.revert();
    };
  }, { scope: headingRef.current, dependencies: [pathname] });


  return (
    <>
      <section className={landingStyles.Hero_section}>
        <div className={landingStyles.header_hero}>

          <h1
            className={landingStyles.heading_text}
            ref={headingRef}
          >

            {/* <SlideUpText text="Spectrum" className={`${landingStyles.spectrum} headTrans`} /> */}
            {/* <SlideUpText text="Perspectives" className={`${landingStyles.Perspectives} headTrans`} delay={1.2} /> */}
            {/* <SlideUpText text="of Diverse" delay={0.6} /> */}
            <span className={`${landingStyles.spectrum} `} ref={(el) => (heroTexts.current[0] = el)}> Spectrum </span >
            <span className={`${landingStyles.of_Diverse} `} ref={(el) => (heroTexts.current[1] = el)}> of Diverse</span>
            <span className={`${landingStyles.Perspectives} `} ref={(el) => (heroTexts.current[2] = el)}>Perspectives</span>


          </h1>

          <Spectrum />
          <div className={landingStyles.landing_circle}>
            <Image
              className="animHead"
              src={thumbsup}
              alt="Thumbs Up"
              background="transparent"
              unoptimized
              speed="0.7"
              loop
              autoPlay
            />
          </div>
        </div>
        <div className={landingStyles.dive_into_detail} id="divedetailarrow">
          <Image src={DiveintoDetail} alt="Scroll Down Arrow" />
        </div>
      </section >
    </>
  )
}

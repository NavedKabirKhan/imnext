"use client";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import Image from "next/legacy/image";
import Spectrum from "@/app/components/Landing/Spectrum/Spectrum";
import landingStyles from "@/app/styles/LandingPage.module.css";
import TeamImageAndService from "@/app/components/Landing/TeamImageAndService";
import Testimonial from "@/app/components/Testimonial/Testimonial";
import Footer from "@/app/components/Footer/FinalFooter";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Work from "@/app/components/Landing/Work/Work";
import ZoomingVideo from "@/app/components/Landing/ZoomingVideo/ZoomingVideo";
import Clients from "@/app/components/Landing/Clientele/Clients";
import DiveintoDetail from "@/app/assets/landing/dive-into-detail.svg";
import thumbsup from "@/app/assets/landing/thumbsup.webp";
import SlideUpText from "@/app/components/SlideUpText";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {


  const headingRef = useRef(null);
  useEffect(() => {
    document.title = 'Integra Magna | Branding, Strategy, and UX UI Design Agency'; // Set the document title
  }, []);


  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);

  const words = ['designers', 'engineers', 'artists'];
  const colors = ['#FA7598', '#007934', '#FFA600']; // Corresponding colors for the words

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500); // Pause before deleting
        setTypingSpeed(100);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(200);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, typingSpeed, loopNum]);



  useEffect(() => {
    // Split the text into characters only once when the component mounts
    const splitText = new SplitType(headingRef.current, { types: "chars" });
    const chars = splitText.chars; // Get the split characters

    const maxDistance = 300;
    const maxFontWeight = 200;
    const minFontWeight = 500;

    const handleMouseMove = (event) => {
      const mouseX = event.pageX;
      const mouseY = event.pageY;

      chars.forEach((char) => {
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

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);




  return (
    <>
      <Head>
        <title>Integra Magna | Branding, Strategy, and UX UI Design Agency</title>
        {/* Add other meta tags and links as needed */}
      </Head>
      <div className={landingStyles.content}>
        <section className={landingStyles.Hero_section}>
          <div className={landingStyles.header_hero}>

            <h1
              className={landingStyles.heading_text}
              id="hero-font"
              ref={headingRef}
              data-animate="font-weight"
              data-float="font-float"
            >

              <span className={`${landingStyles.spectrum} headTrans`} key="1">
                Spectrum
              </span>
              <span className={`${landingStyles.of_Diverse} headTrans`} key="2">
                of Diverse
              </span>
              <span className={`${landingStyles.Perspectives} headTrans`} key="3">
                Perspectives
              </span>
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
        </section>

        <ZoomingVideo />

        <section
          className={`${landingStyles.site_container_padding} ${landingStyles.top_bottom_spacing} ${landingStyles.left_align}`}
          style={{ paddingTop: "100px" }}
        >
          <h1 className={landingStyles.typwrite_text}>
            <span>We are a cadre of professional </span> <br />
            <span
              className={landingStyles.typewrite}
              style={{ color: colors[loopNum % colors.length] }}
            >
              {text}
              <span className={landingStyles.cursor}>|</span>
            </span>
            <span>
              {" "}
              and cats <br className={landingStyles.phone_breaker} />
              in disguise.
            </span>
          </h1>
        </section>

        <Work />

        <Clients />

        {/* <TeamImageAndService>
          <section
            className={`${landingStyles.site_container_padding} ${landingStyles.top_bottom_spacing} ${landingStyles.l_a_t}`}
          >
            <h4 className={landingStyles.l_a_t_h}>
              We&apos;re a global powerhouse of creativity and innovation. We work with
              the best brands in the biz, and we&apos;re not afraid to shake things up
              with our daring and unconventional designs.
            </h4>
          </section>

          <Testimonial />
        </TeamImageAndService> */}

      </div>

      <Footer />

    </>
  );
}

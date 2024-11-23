"use client";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from 'next/navigation';
import landingStyles from "@/app/styles/LandingPage.module.css";
import TeamImageAndService from "@/app/components/Landing/TeamImageAndService";
import Testimonial from "@/app/components/Testimonial/Testimonial";
import Footer from "@/app/components/Footer/FinalFooter";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Work from "@/app/components/Landing/Work/Work";
import ZoomingVideo from "@/app/components/Landing/ZoomingVideo/ZoomingVideo";
import Clients from "@/app/components/Landing/Clientele/Clients";
import HeroHeading from "@/app/components/Landing/Heading/HeroHeading";


gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {


  const headingRef = useRef(null);
  useEffect(() => {
    document.title = 'Integra Magna | Branding, Strategy, and UX UI Design Agency'; // Set the document title
  }, []);


  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);
  const heroTexts = useRef([]);
  const pathname = usePathname();

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





  return (
    <>
      <Head>
        <title>Integra Magna | Branding, Strategy, and UX UI Design Agency</title>
        {/* Add other meta tags and links as needed */}
      </Head>
       <div className={landingStyles.content}>
        {/* <section className={landingStyles.Hero_section}>
          <div className={landingStyles.header_hero}>

            <h1
              className={landingStyles.heading_text}
              id="hero-font"
              ref={headingRef}
              data-animate="font-weight"
              data-float="font-float"
            >  */}

              {/* <SlideUpText text="Spectrum" className={`${landingStyles.spectrum} headTrans`} /> */}
              {/* <SlideUpText text="Perspectives" className={`${landingStyles.Perspectives} headTrans`} delay={1.2} /> */}
              {/* <SlideUpText text="of Diverse" delay={0.6} /> */}
              {/* <span style={{ overflow: "hidden" }}><span className={`${landingStyles.spectrum} headTrans`} ref={(el) => (heroTexts.current[0] = el)}> Spectrum </span ></span>
              <span style={{ overflow: "hidden" }}><span className={`${landingStyles.of_Diverse} headTrans`} ref={(el) => (heroTexts.current[1] = el)}> of Diverse</span></span>
              <span style={{ overflow: "hidden" }}><span className={`${landingStyles.Perspectives} headTrans`} ref={(el) => (heroTexts.current[2] = el)}>Perspectives</span></span>


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
        </section > */}
<HeroHeading />

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

        <TeamImageAndService>
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
        </TeamImageAndService>

      </div >

      <Footer />

    </>
  );
}

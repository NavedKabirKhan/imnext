"use client";
import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import aboutStyles from '@/app/styles/About.module.css';
import Footer from "@/app/components/Footer/FinalFooter";
import SlideUpText from "@/app/components/SlideUpText";
import ViewporTextAnim from '@/app/components/ViewporTextAnim';
import ZoomImage from '@/app/components/About/ZoomImage/ZoomImage'; // adjust folder structure if necessary
import Marquee from '@/app/components/About/Marquee/Marquee';
import Founders from '@/app/components/About/Founders/Founders';
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from "next/legacy/image"; // use next/image for optimization


// Images from public directory
import founderWorking from '/public/assets/images/about/about-hero-image.png';
import circleNoThumb from '/public/assets/images/about/circlenothhumbsvg.svg';
import Verticals from '/public/assets/images/about/verticals.gif';
import Team from '/public/assets/images/about/team.gif';
import Typography from '/public/assets/images/about/typography.gif';
import Flags from '/public/assets/images/about/flags.gif';
import ShowStars from '/public/assets/images/about/show-stars.gif';
import Work from '/public/assets/images/about/work.gif';
import ConceptualWork from '/public/assets/images/about/conceptual-work.gif';
import Book from '/public/assets/images/about/book.gif';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutUsGalleryRef = useRef();
  const circularTextRef = useRef();
  const meetTheFounderRef = useRef();
  const storyTellingTextWheelRef = useRef();
  const [startAnimations, setStartAnimations] = useState(false);
  const textRef = useRef(null);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     gsap.to(circularTextRef.current, {
  //       rotate: 180,
  //       scrollTrigger: {
  //         trigger: circularTextRef.current,
  //         start: "top bottom",
  //         end: "bottom top",
  //         scrub: 1,
  //       },
  //     });

  //     gsap.to(storyTellingTextWheelRef.current, {
  //       rotate: 180,
  //       scrollTrigger: {
  //         trigger: storyTellingTextWheelRef.current,
  //         start: "top bottom",
  //         end: "bottom top",
  //         scrub: 1,
  //       },
  //     });

  //     // Clean up ScrollTrigger instances on component unmount
  //     return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   }
  // }, []);

  return (
    <>

      <Head>
        <title>About | Integra Magna | Design Agency</title>
        <meta name="description" content="About Integra Magna - Strategic Design Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>



      <div id="content">
        <div className={`${aboutStyles.aboutHeroContainer} f-upper-section ${aboutStyles.topBottomSpacing}`}>
          <div className={aboutStyles.imageContainer}>
            <Image src={founderWorking}
              alt="Founders Working"
              className="hero_img"
              layout="responsive"
            />
            <img src="/assets/images/about/circlenothhumbsvg.svg" alt="Integra Magna Agency and Community" className={aboutStyles.circular_text} ref={circularTextRef} />
          </div>
          <h1 className={`${aboutStyles.we} headTrans`} data-float="font-float" ref={textRef}>
            <SlideUpText text="We" />
          </h1>
          <h1 className={`${aboutStyles.are} headTrans`} data-float="font-float" ref={textRef}>
            <SlideUpText text="Are" delay={0.5} />
          </h1>
          <h1 className={`${aboutStyles.gritty} headTrans`} data-float="font-float" ref={textRef}>
            <SlideUpText text="Gritty" delay={0.10} />

          </h1>
        </div>

        <div className={aboutStyles.zoomImageAndContent}>
          <ZoomImage />

          <div className={aboutStyles.globalStrategicContainer}>
            <h2 className="initialTransition">
              <SlideUpText text="We are a global strategic design agency that thrives on building brands with powerful conviction.
                  Collaborating with entrepreneurs, founders, and creators to capitalize their significant business prospects.
                  Crafting designs: Seen Today and Remembered Forever." />
            </h2>
          </div>
        </div>


        <div className={`${aboutStyles.aboutIntegraMagna} site-container-padding`}>
          <div className={aboutStyles.aboutIntegraMagnaLeft}>
            <h2>About Integra Magna</h2>
            <div className={aboutStyles.wheeleElement}>
              <svg version="1.1" x="0px" y="0px" viewBox="0 0 230 230" style={{ background: "new 0 0 230 230", width: "180px", position: "absolute", marginTop: "50px" }} className="storyTellingStar">
                <g id="Layer_1">
                  <path d="M161.7,115.1c-0.2,2-1.5,2.6-3.3,2.6c-5,0-9.9,0.6-14.7,1.8c-12.8,3.3-20,12-23.4,24.4c-2.3,8.2-2.4,16.7-2.8,25.1 c0,0.9,0,1.7-0.1,2.6c-0.2,1.6-1.1,2.4-2.7,2.4c-1.4,0-2.4-0.8-2.5-2.3c-0.1-1.1-0.1-2.2-0.1-3.3c-0.1-8.6-0.5-17.1-2.8-25.4 c-4.5-16.1-15.2-23.1-30.2-24.9c-2.6-0.3-5.2-0.4-7.7-0.5c-1.8-0.1-3.1-0.6-3.1-2.7c0-2.1,1.3-2.8,3.1-2.8c4.7,0,9.4-0.5,14-1.6 c12.9-3,20.3-11.4,23.9-23.9c2.4-8.4,2.8-16.9,2.9-25.6c0-0.9,0-1.9,0.1-2.8c0.2-1.5,1-2.5,2.6-2.5c1.7,0,2.6,1.1,2.6,2.7 c0.1,3.8,0.2,7.6,0.4,11.4c0.3,7.8,1.5,15.4,4.6,22.6c4.7,10.9,13.4,16.5,24.7,18.7c3.7,0.7,7.4,1.1,11.2,1 C160.3,112.2,161.6,113,161.7,115.1z M89.1,114.9c7,2.4,12.5,5.9,16.9,11c4.4,5.1,7,11,8.9,17.5c3.7-13.8,11.4-23.7,25.8-28.3 c-14.3-4.8-22.1-14.8-25.9-29.2C111.3,100.3,103.6,110.3,89.1,114.9z" />
                </g>
              </svg>
              <svg version="1.1" x="0px" y="0px" viewBox="0 0 230 230" style={{ background: "new 0 0 230 230", width: "180px", position: "absolute", marginTop: "50px" }} id="storyTellingTextWheel" ref={storyTellingTextWheelRef}>
                <g id="Layer_1">
                  <g>
                    <g>
                      <g>
                        <path d="M20.2,71.9l-0.9,2.3c-1.7-0.3-3,0.4-3.8,2.5c-0.7,1.9-0.4,3.4,1.1,3.9c1.2,0.4,2.1-0.2,3-1.7l1.2-1.9 c1.6-2.5,3.3-3.7,5.6-2.8c2.8,1,3.7,3.9,2.4,7.3c-1.3,3.6-4.1,5.3-7.4,4.4l0.9-2.3c2,0.4,3.6-0.6,4.5-3c0.7-1.9,0.4-3.4-1-3.9 c-0.9-0.3-1.9-0.1-2.9,1.6l-1.5,2.4c-1.5,2.5-3.4,3.3-5.6,2.5c-2.7-1-3.6-3.8-2.4-7.1C14.5,73.4,16.7,71,20.2,71.9z" />
                        <path d="M29.9,50.9l-3,4.7l11.3,7.3l-1.3,2.1l-11.3-7.3l-3,4.7L20.6,61l7.4-11.4L29.9,50.9z" />
                        <path d="M51.3,36.4c3.2,3.3,3.1,8.4-0.2,11.5c-3.2,3.1-8.4,3-11.5-0.2c-3.2-3.3-3.1-8.4,0.2-11.5C43,33,48.1,33.1,51.3,36.4z M49.4,38.1c-2.2-2.3-5.8-2.5-8.1-0.3c-2.3,2.2-2.2,5.8,0,8.1c2.2,2.3,5.8,2.5,8.1,0.3C51.7,44,51.7,40.4,49.4,38.1z" />
                        <path d="M66.5,29.4l-3.1,1.8l2.7,4.6L63.8,37L56,23.3l5.4-3.1c3-1.7,6.2-1.2,7.8,1.5c1.2,2,0.8,4.2-0.6,5.9l6.6,2.8L72.6,32 L66.5,29.4z M62.2,29.2l3.2-1.8c1.8-1,2.6-2.8,1.7-4.4c-0.9-1.6-2.8-1.7-4.6-0.7l-3.2,1.8L62.2,29.2z" />
                        <path d="M89.9,8.7l-3,11.8l1.6,5.1l-2.4,0.7l-1.6-5.1l-9.1-8l2.6-0.8l7,6.2l2.3-9.1L89.9,8.7z" />
                        <path d="M113.6,8.2L108,8.6l1,13.4l-2.5,0.2l-1-13.4L100,9.2l-0.2-2.3l13.5-1L113.6,8.2z" />
                        <path d="M126.9,9.1l-0.6,4.5l7.7,1.1l-0.3,2.3l-7.7-1.1l-0.6,4.3l8.7,1.2l-0.3,2.3l-11.1-1.6l2.2-15.6L135.9,8l-0.3,2.3 L126.9,9.1z" />
                        <path d="M153.1,27.4l-0.8,2.2l-10.2-3.7l5.4-14.8l2.3,0.9l-4.6,12.6L153.1,27.4z" />
                        <path d="M170,37.2l-1.2,2l-9.2-5.8L168,20l2.1,1.3L163,32.7L170,37.2z" />
                        <path d="M187.7,34.5l-10.5,11.7l-1.8-1.7l10.5-11.7L187.7,34.5z" />
                        <path d="M204.9,54.3l-12.6,9.5l-1.2-1.6l3.3-14.1l-8.9,6.7l-1.5-2l12.6-9.5l1.2,1.5l-3.4,14.3l9.1-6.9L204.9,54.3z" />
                        <path d="M210.8,82.6l-7.9,3.3l-0.7-1.8l2.4-1.2c-2.1-0.3-3.9-1.6-4.9-4.1c-1.8-4.3,0.2-8.9,4.3-10.5c4.5-1.9,9.1,0.2,10.8,4.4 c1.3,3.1,0.8,6.8-2.3,9.1l-1-2.4c1.9-1.7,1.9-4,1.2-5.7c-1.3-3-4.5-4.4-7.8-3c-2.8,1.2-4.4,4.2-3.1,7.3c1.1,2.6,3.4,3.5,5.8,3.1 l-2-4.9l2.1-0.9L210.8,82.6z" />
                      </g>
                    </g>
                    <g>
                      <path d="M32.1,156.2l-16.7,0.5l-0.8-2.3l9.4-7.5l-12,0.2l-0.8-2.3l13.1-10.3l0.9,2.4l-9.9,7.7l12.6-0.3l0.7,2l-9.9,7.9l12.6-0.5 L32.1,156.2z" />
                      <path d="M39,166.4l-13.1,8.8l-1.4-2.1l13.1-8.8L39,166.4z" />
                      <path d="M52.8,185.6l-3.9-3.9l-9.5,9.5l-1.7-1.7l9.5-9.5l-3.9-3.9l1.6-1.6l9.6,9.6L52.8,185.6z" />
                      <path d="M73.4,196.6l-8.1,13.6l-2.1-1.3l3.4-5.7l-7.1-4.2l-3.4,5.7l-2.1-1.3l8.1-13.6l2.1,1.3l-3.5,5.9l7.1,4.2l3.5-5.9 L73.4,196.6z" />
                      <path d="M108.2,211.5c-0.5,3.4-3.3,5.2-7.2,4.7l-2.9-0.4l-0.6,4.7l-2.5-0.3l2.1-15.6l5.7,0.8 C106.5,205.8,108.6,208.3,108.2,211.5z M105.7,211.2c0.2-1.8-1.1-3.3-3.3-3.6l-3.2-0.4l-0.9,6.4l3.2,0.4 C103.8,214.3,105.5,213.2,105.7,211.2z" />
                      <path d="M128.5,217.3l-7.6,0.7l-1.2,3.9l-2.6,0.2l5.4-16.4l2.3-0.2l8.4,15l-2.6,0.2L128.5,217.3z M127.4,215.2l-3.5-6.5l-2.2,7 L127.4,215.2z" />
                      <path d="M153.2,203l-2.3,0.8c-0.8-1.5-2.2-2.1-4.4-1.3c-1.9,0.7-2.8,1.9-2.3,3.4c0.4,1.2,1.5,1.5,3.2,1.2l2.2-0.3 c2.9-0.4,5,0.2,5.8,2.5c1,2.8-0.6,5.4-4,6.6c-3.6,1.3-6.7,0.2-8.1-2.8l2.3-0.8c1,1.8,2.8,2.4,5.2,1.5c1.9-0.7,2.8-1.9,2.3-3.3 c-0.3-0.9-1.2-1.5-3-1.2l-2.8,0.4c-2.9,0.5-4.7-0.5-5.5-2.7c-1-2.7,0.6-5.2,3.8-6.4C148.4,199.5,151.7,199.7,153.2,203z" />
                      <path d="M173.3,191.3l-2,1.3c-1.2-1.2-2.7-1.5-4.6-0.2c-1.7,1.1-2.3,2.5-1.4,3.8c0.7,1,1.8,1.1,3.4,0.4l2.1-0.8 c2.8-1.1,4.8-1,6.2,1c1.6,2.5,0.7,5.4-2.3,7.3c-3.2,2.1-6.4,1.8-8.5-0.8l2.1-1.4c1.3,1.5,3.3,1.6,5.4,0.3 c1.7-1.1,2.3-2.5,1.5-3.8c-0.5-0.8-1.5-1.2-3.2-0.4l-2.6,1.1c-2.7,1.1-4.7,0.6-6-1.3c-1.6-2.4-0.7-5.2,2.2-7.1 C167.8,189.1,171,188.4,173.3,191.3z" />
                      <path d="M180.6,178.5l11.1,11.2l-1.8,1.8l-11.1-11.2L180.6,178.5z" />
                      <path d="M203.3,161.2c3.8,2.5,4.9,7.5,2.5,11.3c-2.4,3.8-7.4,4.9-11.3,2.4c-3.8-2.5-4.9-7.5-2.5-11.3S199.5,158.7,203.3,161.2z M202,163.3c-2.7-1.7-6.2-1.1-8,1.6s-0.8,6.2,1.9,7.9c2.7,1.7,6.2,1.1,7.9-1.6C205.6,168.5,204.7,165.1,202,163.3z" />
                      <path d="M204.9,134.4l15.1,4.6l-0.6,1.9l-13.3,5.6l10.6,3.3l-0.7,2.4l-15.1-4.6l0.6-1.8l13.6-5.6l-10.9-3.3L204.9,134.4z" />
                    </g>
                    <ellipse cx="215.4" cy="114" rx="4.4" ry="4.5" />
                    <ellipse cx="14.2" cy="114" rx="4.4" ry="4.5" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className={aboutStyles.aboutIntegraMagnaRight}>
            <h2>Rooted in strategy, innovation, ideation and execution</h2>
            <h2 className={aboutStyles.sambole}>“</h2>
            <p>
              Currently shaping the future of brands for the next generation,
              through a lens of empathy, passion, and love for the people that trust
              us to help tell their stories.
            </p>
          </div>
        </div>

        <Marquee />
        <Founders />

        <div className={`${aboutStyles.ourCodeOfAwesomenessContainer} f-upper-section`}>
          <div className={`${aboutStyles.imageBoxHeading} ${aboutStyles.awesomeness0}`}>Our Code of Awesomeness</div>
          <div className={`${aboutStyles.imageBox} ${aboutStyles.awesomeness1}`}>
            <Image src={Verticals} alt="Integra Magna's Client Verticals" layout='responsive' />
          </div>
          <div className={`${aboutStyles.imageBox} ${aboutStyles.awesomeness2}`}>
            <Image src={Team} alt="Integra Magna's Team" layout='responsive' />
          </div>
          <div className={`${aboutStyles.imageBox} ${aboutStyles.awesomeness3}`}>
            <Image src={Typography} alt="Typography" layout='responsive' />
          </div>
          <div className={`${aboutStyles.imageBox} ${aboutStyles.awesomeness4}`}>
            <Image src={Flags} alt="Countries of Integra Magna's Clients" layout='responsive' />
          </div>
          <div className={`${aboutStyles.imageBox} ${aboutStyles.awesomeness5}`}>
            <Image src={ShowStars} alt="Teammates" layout='responsive' />
          </div>
          <div className={`${aboutStyles.imageBox} ${aboutStyles.awesomeness6}`}>
            <Image src={Work} alt="Design Tool Icons" layout='responsive' />
          </div>
          <div className={`${aboutStyles.imageBox} ${aboutStyles.awesomeness7}`}>
            <Image src={ConceptualWork} alt="Integra Magna's Conceptual Work" layout='responsive' />
          </div>
          <div className={`${aboutStyles.imageBox} ${aboutStyles.awesomeness8}`}>
            <Image src={Book} alt="Books we recommend for Designers" layout='responsive' />
          </div>
        </div>

        <div className="line_container f-upper-section site-container-padding">
          <div className="div_line"></div>
        </div>
        {/* <Form /> */}
      </div>

      <Footer />

    </>
  );
}

export default About;

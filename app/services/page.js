"use client";
import { useEffect, useRef, useState } from 'react';
import Image from "next/legacy/image";
import dynamic from 'next/dynamic';
import servicesStyles from '@/app/styles/Services.module.css'; // CSS Module for Services page
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PinnedSectionRight from '@/app/components/Services/PinnedSectionRight';
import SlideUpText from "@/app/components/SlideUpText";
import ViewporTextAnim from "@/app/components/ViewporTextAnim";

// Lazy load Testimonial and Footer components for better performance
const Testimonial = dynamic(() => import('@/app/components/Testimonial/Testimonial'), { ssr: false });
const Footer = dynamic(() => import('@/app/components/Footer/FinalFooter'), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const [startAnimations, setStartAnimations] = useState(false);

  useEffect(() => {
    document.title = "Services | Integra Magna | Design Agency";
  }, []);

  const servicesContainerRef = useRef(null);
  const serviceMainHeadingRef = useRef(null);

  useEffect(() => {
    const preloadImages = (srcArray) => {
      const promises = srcArray.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(img);
          img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        });
      });
      return Promise.all(promises);
    };

    const imageSources = [
      "/assets/images/services/top-shape1.svg",
      "/assets/images/services/bottom-shape1.svg",
      // Add paths to other images you want to preload and use here
    ];


    gsap.to(`.${servicesStyles.img1}`, {
      x: -window.innerWidth / 4,
      scrollTrigger: {
        trigger: `.${servicesStyles.service_hero_section}`,
        start: "center center",
        end: `${window.innerHeight}`,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    gsap.to(`.${servicesStyles.img2}`, {
      x: window.innerWidth / 4,
      scrollTrigger: {
        trigger: `.${servicesStyles.service_hero_section}`,
        start: "center center",
        end: `${window.innerHeight}`,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

  }, []);

  return (
    <>
      <div id="content">
        <section className={servicesStyles.service_hero_section}>
          <div className={servicesStyles.service_header_container}>
            {/* <SlideUpText  start={startAnimations}> */}
            <SlideUpText
              text={`Let's Transform Businesses\nwith Precision`}
              className={`${servicesStyles.Service_hero_heading} headTrans`}
              Tag="h1"
            />

            <SlideUpText
              text={`We redefine corporate landscapes with our visionary design ethos. Our comprehensive services are tailored to enhance your entire business ecosystem. We&apos;re all about giving your business the edge it deserves.`}
              className={`${servicesStyles.Service_hero_subheading} headTrans`}
              Tag="span"
              delay={0.7}
            />

          </div>
          <div className={servicesStyles.images_shape_move_container}>
            <div className={servicesStyles.shape_container}>
              <img
                src="./assets/images/service/top-shape1.svg"
                alt="Brand Identity Integra Magna"
                className={servicesStyles.img1}
                layout="intrinsic"
              />
              <img
                src="./assets/images/service/bottom-shape1.svg"
                alt="Brand Identity Integra Magna"
                className={servicesStyles.img2}
                layout="intrinsic"
              />
            </div>
          </div>
        </section>

        <div className={servicesStyles.Approach_container}>
          <h2>Approach</h2>
          <p>
            Our company&apos;s essence is captured in a visual language that blends our
            founder&apos;s values, artist&apos;s creativity, and team spirit with the
            distinctiveness of our clients. We offer expert strategy, web and
            product design, development, animated video creation, and more.
          </p>
        </div>

        <div className={servicesStyles.Industries_served_container}>
          <div className={`${servicesStyles.Industries_served_box_20} initialTransition`}>
            <h1>
              <SlideUpText
                text="20+"
                Tag="h1"
              />
            </h1>
            <p>Industries Served</p>

          </div>
          <div className={servicesStyles.Industries_served_box_line}></div>
          <div className={`${servicesStyles.Industries_served_box_100} initialTransition`}>
          <h1>
              <SlideUpText
                text="100+"
                Tag="h1"
              />
            </h1>
            <p>Brands</p>
          </div>
          <div className={`${servicesStyles.Industries_served_box_7} initialTransition`}>
            <h1>
              <SlideUpText
                text="07"
                Tag="h1"
              />
            </h1>
            <p>Countries</p>
          </div>
          <div className={`${servicesStyles.Industries_served_box_28} initialTransition`}>
          <h1>
              <SlideUpText
                text="28+"
                Tag="h1"
              />
            </h1>
            <p>Apps & Initiatives Launched</p>
          </div>
        </div>

        {/* Pinned section ( it's a component you already built) */}
        <PinnedSectionRight />

        <Testimonial />
        <section className="f-upper-section">
          <div className="line_container site-container-padding">
            <div className="div_line"></div>
          </div>
        </section>
        {/* <Form /> */}
      </div>
      <Footer />
    </>
  );
};

export default Services;

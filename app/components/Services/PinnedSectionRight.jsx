import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import stylesPinSection from "./PinnedSectionRight.module.css"; // Import CSS module
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"; // Assuming this hook is available
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import Image from "next/legacy/image"; // Ensure you're using next/image consistently

gsap.registerPlugin(ScrollTrigger);

const service = [
  {
    name: "Branding",
    imageUrl: "/assets/images/service/services/branding-icon.svg",
    description:
      "As they say, Fine dress helps to impress. We consider each and every element in the formation of the image of the brand that will appeal to the customers.",
    list: ["Visual Identity", "Verbal Identity", "Typography", "Motion Identity", "Brand Guidelines", "Packaging Design"],
  },
  {
    name: "Strategy",
    imageUrl: "/assets/images/service/services/strategy-icon.svg",
    description:
      "We specialize in qualitative insight research to understand you and your business.",
    list: ["Brand Positioning", "Brand Architecture", "Creative Campaigns", "GTMM Plans"],
  },
  {
    name: "UX/UI Design",
    imageUrl: "/assets/images/service/services/ux-icon.svg",
    description:
      "This assures your users don't forget to come back after using your website once. Minimal, Innovative and precise.",
    list: ["UX Research/Analysis", "UX Design", "Website Design/Development", "App Design/Development"],
  },
  {
    name: "Graphic Design",
    imageUrl: "/assets/images/service/services/graphic-design-icon.svg",
    description:
      "Design is a way of changing life and influencing the future. Our truly unique and engaging art in the digital world will generate a memorable brand experience.",
    list: ["Print Design", "Social Media Graphics", "Exhibition Design", "Advertising & Marketing Design", "Merchandise & Apparel Design", "Brand Collateral"],
  },
  {
    name: "Motion Design",
    imageUrl: "/assets/images/service/services/motion-design-icon.svg",
    description:
      "With this, you can explain your strength and superiority to the audience in a simple and understandable language which is through a video.",
    list: ["Promo Videos", "Motion Graphic", "Character Animation", "Logo Animation"],
  },
];


const LeftContent = ({ detailsRef, isMobile }) => {
  if (isMobile) return null; // Do not render anything if mobile
  return (
    <div className={stylesPinSection.left}>
      <div className={stylesPinSection.desktopContent}>
        {service.map((color, index) => (
          <div
            key={index}
            ref={(el) => (detailsRef.current[index] = el)} // Pass ref to each service
            className={stylesPinSection.desktopContentSection}
          >
            <p>{color.description}</p>
            <ul>
              {color.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};




const RightContent = ({ detailsRef, isMobile }) => {
  const photosRef = useRef([]);

  useEffect(() => {
    let scrollTriggerInstance;
    let detailTriggers = [];

    if (!isMobile) {
      const details = detailsRef.current; // Array of detail sections
      const photos = photosRef.current; // Array of photos/icons

      // Ensure all images are hidden initially
      gsap.set(photos, { autoAlpha: 0 });
      gsap.set(photos[0], { autoAlpha: 1 });

      // Pin the right section
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: `.${stylesPinSection.gallery}`,
        start: "top 20%",
        end: "bottom 70%",
        pin: `.${stylesPinSection.right}`,
        pinSpacing: false,
      });

      // Create ScrollTriggers for each detail section
      detailTriggers = details.map((detail, index) => {
        return ScrollTrigger.create({
          trigger: detail,
          start: "top 30%",
          end: "bottom 30%",
          onEnter: () => gsap.to(photos[index], { autoAlpha: 1, duration: 0.2 }), // Fade in the current image
          onLeave: () => gsap.to(photos[index], { autoAlpha: 0, duration: 0.2 }), // Fade out the current image
          onEnterBack: () => gsap.to(photos[index], { autoAlpha: 1, duration: 0.2 }), // Fade back in when scrolling up
          onLeaveBack: () => {
            index === 0
              ? gsap.to(photos[index], { autoAlpha: 1, duration: 0.2 })
              : gsap.to(photos[index], { autoAlpha: 0, duration: 0.2 });
          },
        });
      });

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
    }

    // Cleanup function to kill ScrollTriggers on component unmount
    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
      detailTriggers.forEach((trigger) => trigger.kill());
      ScrollTrigger.refresh(); // Refresh ScrollTrigger to ensure proper DOM cleanup
    };
  }, [detailsRef, isMobile]);

  if (isMobile) return null; // Do not render anything if mobile

  return (
    <div className={stylesPinSection.right}>
      <h2 className={`${stylesPinSection.service_main_heading} site-container-padding left-align`}>Services</h2>

      <div className={stylesPinSection.desktopPhotos}>
        {service.map((color, index) => (
          <div
            className={stylesPinSection.imageAndHeadingContainer}
            ref={(el) => (photosRef.current[index] = el)} // Ref for each photo
            key={index}
          >
            <h1>{color.name}</h1>
            <Image
              src={color.imageUrl}
              alt={`${color.name} Icon`}
              className={stylesPinSection.desktopPhoto}
              width={300} // Adjust the size as necessary
              height={300} // Adjust the size as necessary
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const MobileContent = () => {
  return (
    <div className={`${stylesPinSection.mobileContent} left-align`}>
      <h2 className={`${stylesPinSection.service_main_heading} left-align`}>Services</h2>
      {service.map((color, index) => (
        <React.Fragment key={index}>
             <h1 className={stylesPinSection.mobileHeading}>{color.name}</h1>
          <Image
            src={color.imageUrl}
            alt={`${color.name} Icon`}
            className={stylesPinSection.mobilePhoto}
            width={154}
            height={154}
          />
       
          <p>{color.description}</p>
          <ul>
            {color.list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </div>
  );
};

const PinnedSectionRight = () => {
  const detailsRef = useRef([]); // Refs to track the left content sections
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    // <div className={stylesPinSection.gallery}>
    //   <RightContent detailsRef={detailsRef} isMobile={isMobile} />
    //   <LeftContent detailsRef={detailsRef} isMobile={isMobile} />
    //   {isMobile && <MobileContent />}
    // </div>

    (<>
      {!isMobile &&
        <div className={stylesPinSection.gallery}>
          <RightContent detailsRef={detailsRef} isMobile={isMobile} />
          <LeftContent detailsRef={detailsRef} isMobile={isMobile} />
        </div>
      }
      {isMobile && <MobileContent />}
    </>)
  );
};

export default PinnedSectionRight;


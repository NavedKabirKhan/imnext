import React, { useEffect, useRef,useState } from "react";
import landingStyles from "./../../styles/LandingPage.module.css";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import servicesData from '../Services/serviceList.json';
import teamImage from './teamImages.json';
import TeamImageNew from "@/app/components/Landing/TeamImage/ScrollSequence"
gsap.registerPlugin(ScrollTrigger);

const TeamImageAndService = ({ children }) => {
  // const teamCanvasRef = useRef(null);
  // const canvasContainer = useRef(null);
  const LandingServiceContainer = useRef(null);
  const serviceDetailContainer = useRef(null);
  const serviceTitle = useRef(null);
  // const animationInitializedRefTeamImage = useRef(false);
  // const teamImages = { frame: 0 };
  const serviceCards = useRef([]);
  const { services } = servicesData;
  // const { teamImageURLs } = teamImage;

  const [isDesktop, setIsDesktop] = useState(false);

  // Track if it's desktop based on window size
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        const isDesktopSize = window.innerWidth > 960;
        setIsDesktop(isDesktopSize);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Cached preloaded images
  // const loadedImagesRef = useRef([]);

  // // Resize canvas based on window size
  // const resizeCanvas = (canvas) => {
  //   const width = window.innerWidth;
  //   const height = (9 * width) / 16;
  //   canvas.width = width;
  //   canvas.height = height;
  // };

  // Render images on canvas
  // const render = (context, canvas, loadedImages) => {
  //   if (teamImages.frame >= loadedImages.length || !loadedImages[teamImages.frame]) return;
  //   const renderWidth = canvas.height * (16 / 9);
  //   const renderHeight = canvas.height;
  //   const x = (canvas.width - renderWidth) / 2;
  //   const y = (canvas.height - renderHeight) / 2;
  //   context.clearRect(0, 0, canvas.width, canvas.height);
  //   context.drawImage(
  //     loadedImages[teamImages.frame],
  //     x,
  //     y,
  //     renderWidth,
  //     renderHeight
  //   );
  // };

  // Helper function to initialize different animations based on screen size
  const initAnimation = (loadedImages, isDesktop) => {
    const masterTimeline = gsap.timeline();

    // const canvas = teamCanvasRef.current;
    // const context = canvas.getContext("2d");

    // // Kill any previous ScrollTrigger instances
    // ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    // const masterTimeline = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: canvasContainer.current,
    //     start: isDesktop ? "top top" : "top bottom", // Different start based on desktop
    //     end: isDesktop ? `+=${2 * window.innerHeight}` : "bottom top", // Different end based on desktop
    //     pin: isDesktop, // Pin only on desktop
    //     pinSpacing: isDesktop, // Pin spacing based on desktop
    //     scrub: 1,
    //     onRefresh: ScrollTrigger.refresh,
    //   },
    // });
    // // Canvas scrolling animation
    // masterTimeline.to(teamImages, {
    //   frame: loadedImages.length - 1,
    //   snap: "frame",
    //   ease: "none",
    //   onUpdate: () => {
    //     render(context, canvas, loadedImages);
    //   },
    // });

    // Service cards animation based on screen size
    if (isDesktop) {
      // Adjust pinning to ensure the heading doesn't jump
      masterTimeline.to(serviceDetailContainer.current, {
        scrollTrigger: {
          trigger: serviceDetailContainer.current,
          start: "top 20%",
          end: "bottom 20%",
          pin: serviceTitle.current,
          pinSpacing: true, // Ensure space is left for the pinned element
          scrub: 0.5,
          onRefresh: ScrollTrigger.refresh,
        },
      });
    } else {
      masterTimeline.to(serviceDetailContainer.current, {
        scrollTrigger: {
          trigger: serviceDetailContainer.current,
          start: "top 20%",
          endTrigger: serviceCards.current[serviceCards.current.length - 1],
          end: "top 10%",
          pin: serviceTitle.current,
          pinSpacing: false, // No pin spacing for mobile

          scrub: 0.5,
          onRefresh: ScrollTrigger.refresh,
          id: `Service`,
          // markers: true

        },
      });

      // Stacking effect for services on mobile
      gsap.utils.toArray(serviceCards.current).forEach((service, index) => {
        masterTimeline.fromTo(
          service,
          {
            y: service.innerHeight,
          }, // Initial state (offscreen and hidden)
          {
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: service,
              start: `top 20%`,
              endTrigger: serviceCards.current[serviceCards.current.length - 1],
              end: "top 10%",
              scrub: true,
              pin: true,
              pinSpacing: false,
              id: `card-${index}`,
              // markers: true
            },
          }
        );
      });
    }
  };

  // Load images asynchronously and cache them
  // const loadImages = async (images) => {
  //   const loadedImages = [];
  //   for (let i = 0; i < images.length; i++) {
  //     const img = new Image();
  //     img.src = images[i];
  //     await new Promise((resolve, reject) => {
  //       img.onload = resolve;
  //       img.onerror = reject;
  //     });
  //     loadedImages.push(img);
  //   }
  //   return loadedImages;
  // };

  // Initialize everything
  useGSAP(() => {
    // if (animationInitializedRefTeamImage.current) return;
    // animationInitializedRefTeamImage.current = true;

    // const canvas = teamCanvasRef.current;

    // Load images and initialize the animation
    // loadImages(teamImageURLs).then((loadedImages) => {
    //   loadedImagesRef.current = loadedImages;
    //   resizeCanvas(canvas);

    //   // Check if the screen is desktop or mobile, then initialize the right animation
    //   const isDesktop = window.innerWidth > 960;
    //   initAnimation(loadedImages, isDesktop);
    // });

  //   // Handle window resize
    const handleResize = () => {
      resizeCanvas(canvas);
      render(canvas.getContext("2d"), canvas, loadedImagesRef.current);

      // Recheck the screen size and reinitialize the animations
      const isDesktop = window.innerWidth > 960;
      initAnimation(loadedImagesRef.current, isDesktop);

      ScrollTrigger.refresh(); // Refresh ScrollTrigger on resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup
    };
  }, []);

  // Log the updated isDesktop value whenever it changes
  useEffect(() => {
    console.log("isDesktop:", isDesktop);
  }, [isDesktop]);

  return (
    <>
      {/* <div className={landingStyles.canvas_container} ref={canvasContainer}>
        <canvas ref={teamCanvasRef} id="team-image-changing"></canvas>
      </div> */}
      <TeamImageNew />

      {children}

      <section
        className={`${landingStyles.s_holder} f-upper-section`}
        ref={LandingServiceContainer}
      >
        <div className={landingStyles.s_titles}>
          <div className={landingStyles.s_title_c_image}>
            <div className={landingStyles.t_overflow_holder}>
              <h3 className={landingStyles.s_t_heading} ref={serviceTitle}>
                Services
              </h3>
            </div>
          </div>
        </div>
        <div
          className={landingStyles.s_desc_container}
          ref={serviceDetailContainer}
        >
          {services.map((service, index) => (
            <div key={index}
              className={landingStyles.s_desc}
              ref={(el) => (serviceCards.current[index] = el)}>
              <img
                src={service.icon}
                alt={service.alt}
                className={landingStyles.s_icon}
              />
              <div className={landingStyles.h_list_container}>
                <h3 className={landingStyles.t_heading}>{service.title}</h3>
                <ul className={landingStyles.s_sec_list}>
                  {service.items.map((item, idx) => (
                    <li key={idx} style={item == null ? { listStyleType: "unset" } : {}}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TeamImageAndService;

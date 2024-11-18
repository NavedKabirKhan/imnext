"use client";
import React, { useRef, useLayoutEffect } from "react";
import aboutStyles from "@/app/styles/About.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ZoomImage() {
  const aboutUsGallerySectionRef = useRef();
  const gridVideo = useRef();
  const verticalMoveColumn1 = useRef();
  const verticalMoveColumn2 = useRef();
  // const didAnimate = useRef(false);

  useGSAP(() => {
    // Create a GSAP matchMedia instance
    // if (didAnimate.current) { return; }
    // didAnimate.current = true;

    const mm = gsap.matchMedia();

    // Define animations for different breakpoints
    mm.add("(min-width: 960px)", () => {
      // This will only run if the screen width is 960px or more
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutUsGallerySectionRef.current,
          start: "top top",
          end: `+=${2 * window.innerHeight}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
        },
      });

      tl.to(aboutUsGallerySectionRef.current, {
        scale: 1.8,
      })
        .to(
          gridVideo.current,
          {
            scale: 1,
          },
          0
        )
        .to(verticalMoveColumn1.current, { y: 400 }, 0)
        .to(verticalMoveColumn2.current, { y: 400 }, 0);

      // Cleanup function for this breakpoint
      return () => {
        tl.kill(); // Kill the timeline when the matchMedia condition is no longer met
        ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTrigger instances
      };
    });

    // Clean up all GSAP instances on component unmount
    return () => mm.revert();
  }, [aboutUsGallerySectionRef]);

  return (
    <>
      <div className={aboutStyles.aboutUsGalleryMain} style={{ height: "200vh", overflow: "hidden" }}>
        <section
          className={aboutStyles.aboutUsGallerySection}
          ref={aboutUsGallerySectionRef}
          style={{ overflow: "hidden", position: "relative" }}
        >
          <div className={aboutStyles.aboutUsGridSection}>
            <div className={aboutStyles.aboutUsGalleryContainer}>
              <div className={aboutStyles.aboutUsGalleryGrid}>
                <div>
                  <div
                    className={`${aboutStyles.aboutUsColumn} ${aboutStyles.verticalMoveColumn}`}
                    ref={verticalMoveColumn1}
                    style={{ overflow: "hidden" }}
                  >
                    <img
                      src="/assets/images/about/zoomImage/video-grid/image-grid-2.webp"
                      className={aboutStyles.gridObjects}
                      alt="Designer sketching characters"
                    />
                    <img
                      src="/assets/images/about/zoomImage/video-grid/image-grid-1.webp"
                      className={aboutStyles.gridObjects}
                      alt="Standing Designer working on a laptop"
                    />
                  </div>
                </div>
                <div>
                  <div className={aboutStyles.aboutUsColumn}>
                    <img
                      src="/assets/images/about/zoomImage/video-grid/image-grid-5.webp"
                      className={aboutStyles.gridObjects}
                      alt="Ideation sketches of a Logo Design on a table"
                    />
                    <div
                      className={aboutStyles.animVideoMedia}
                      width="1600"
                      height="1080"
                      style={{ overflow: "hidden" }}
                    >
                      <video
                        playsInline
                        loop
                        muted
                        autoPlay
                        preload="metadata"
                        aria-label="video-player"
                        className={`${aboutStyles.gridObjects} ${aboutStyles.gridVideo}`}
                        poster="/assets/images/about/zoomImage/video-grid/about-us-team-work-video.png"
                        alt="Tabletop video of designers working together"
                        title="Tabletop video of designers working together"
                        ref={gridVideo}
                      >
                        <source src="/assets/images/about/zoomImage/video-grid/about-us-team-work-video.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <img
                      src="/assets/images/about/zoomImage/video-grid/image-grid-1.webp"
                      className={aboutStyles.gridObjects}
                      alt="BTS of a product photoshoot"
                    />
                  </div>
                </div>
                <div>
                  <div
                    className={`${aboutStyles.aboutUsColumn} ${aboutStyles.verticalMoveColumn}`}
                    ref={verticalMoveColumn2}
                  >
                    <img
                      src="/assets/images/about/zoomImage/video-grid/image-grid-4.webp"
                      className={aboutStyles.gridObjects}
                      alt="Designer reading Start with why the book"
                    />
                    <img
                      src="/assets/images/about/zoomImage/video-grid/image-grid-6.webp"
                      className={aboutStyles.gridObjects}
                      alt="Designer working on a laptop with a view"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className={aboutStyles.fullPageVideoSection}>
            <div className="full-page-video-container">
              <video
                playsInline
                loop
                muted
                autoPlay
                preload="metadata"
                aria-label="video-player"
                className={`${aboutStyles.fullPageVideo} lazy`}
              >
                <source
                  src="/assets/images/about/zoomImage/video-grid/about-us-team-work-video.mp4"
                  type="video/mp4"
                  alt="Tabletop video of designers working together"
                  title="Tabletop video of designers working together"
                />
              </video>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default ZoomImage;

// pages/404.js

"use client";
import Head from 'next/head';
// import Link from 'next/link';
import { useEffect } from 'react';
import gsap from 'gsap';
import errorStyles from '@/app/styles/404.module.css';

export default function NotFound() {
  useEffect(() => {
    const marquee = document.querySelector(`.${errorStyles.cTextMarquee}`);
    let tween;

    if (marquee) {
      // Set initial visibility of marquee children
      gsap.set(marquee.children, { autoAlpha: 0 });
      let duration = 5;

      // Function to play the marquee animation
      const playMarquee = () => {
        let progress = tween ? tween.progress() : 0;
        const translateWidth = marquee.querySelector(`.${errorStyles.cTextMarquee__text}`).getBoundingClientRect().width;

        duration = Math.max(0.5, duration);
        if (tween) tween.kill();

        tween = gsap.fromTo(
          marquee.children,
          { x: 0, autoAlpha: 1 },
          { x: -translateWidth, duration: duration, ease: "none", repeat: -1 }
        );

        tween.progress(progress);
      };

      // Play marquee animation on load and adjust on resize
      playMarquee();
      window.addEventListener("resize", debounce(playMarquee, 500));
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", debounce);
      if (tween) tween.kill(); // Properly clean up GSAP tween
    };
  }, []);

  return (
    <>
      <Head>
        <title>404 | Page Not Found | Integra Magna</title>
        {/* Add other meta tags and links as needed */}
      </Head>

      <main className={errorStyles.main}>
        <div className={errorStyles.heroSection}>
          <h1 className={errorStyles.headingText}>PAGE NOT FOUND</h1>
          <p className={errorStyles.heroDescription}>
            Oops! Looks like we took a creative detour. This page is still under construction — kind of like our next big idea.
          </p>
          <a href='https://integramagna.com'>
            <div className={errorStyles.caseNavHolder}>
              <ul className={errorStyles.caseNavBackArrow}>
                <span className={errorStyles.caseNavArrow}>
                  <svg width="15" height="15" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0977 2.50195L2.59766 12.002L12.0977 21.502" stroke="black" strokeWidth="3" strokeLinecap="square" />
                  </svg>
                </span>
              </ul>
              <ul className={errorStyles.caseNavLinks}>
                <span className={errorStyles.caseNavItem}>
                  <div className={errorStyles.cTextMarquee}>
                    <div className={`${errorStyles.cTextMarquee__text} anim-marqueeText`}>
                      Back to Home&nbsp;&#9642;&nbsp;Back to Home&nbsp;&#9642;&nbsp;
                    </div>
                    <div className={`${errorStyles.cTextMarquee__text} anim-marqueeText`}>
                      Back to Home&nbsp;&#9642;&nbsp;Back to Home&nbsp;&#9642;&nbsp;
                    </div>
                    <div className={`${errorStyles.cTextMarquee__text} anim-marqueeText`}>
                      Back to Home&nbsp;&#9642;&nbsp;Back to Home&nbsp;&#9642;&nbsp;
                    </div>
                    <div className={`${errorStyles.cTextMarquee__text} anim-marqueeText`}>
                      Back to Home&nbsp;&#9642;&nbsp;Back to Home&nbsp;&#9642;&nbsp;
                    </div>
                  </div>
                </span>
              </ul>
            </div>
          </a>
        </div>
      </main>
    </>
  );
}

// Utility function to debounce resize events
function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this, args = arguments;
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (callNow) func.apply(context, args);
  };
}

// // SlideUpText.js
// import { delay, motion, useInView } from "framer-motion";
// import React, { useRef } from "react";

// const textVariants = {
//   hidden: {
//     y: '100%',
//     opacity: 0,
//   },
//   visible: {
//     y: '0%',
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//       ease: [0.5, 1, 0.89, 1],
//       delay: 0.5,
//     },
//   },
// };

// const containerVariants = {
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
//   hidden: {},
// };

// const SlideUpText = ({ children, isTransitioning }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, {
//     once: true,
//     threshold: 0.1,
//     margin: '0px 0px -50px 0px',
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={!isTransitioning && isInView ? "visible" : "hidden"}
//       variants={containerVariants}
//       style={{ overflow: 'hidden', willChange: 'transform' }}
//     >
//       {React.Children.map(children, (child, index) => (
//         <motion.div
//           key={index}
//           variants={textVariants}
//           style={{ overflow: 'hidden' }}
//         >
//           {child}
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };
// // SlideUpText.js
// export default SlideUpText;
'use client';

import { useRef, useState, useEffect, useLayoutEffect } from "react";
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function AnimatedText({ text, className = '', tag: Tag = 'span' }) {
  const textRef = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

      if (!textRef.current) return;


      const split = new SplitType(textRef.current, {
        types: 'lines,words, chars',
        lineClass: 'overflow-hidden',
        wordClass: 'inline-block',
        tagName: 'span' // Ensures words are wrapped in <span> tags


      });
      console.log(split.chars);


    // Create a GSAP timeline with ScrollTrigger
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          markers: true,
          start: 'top 80%',
          toggleActions: 'play none none reverse',  
          onUpdate : () => console.log('Animation complete') // Logs when animation completes
        },
      });
      tl.set(split.words, { yPercent: 100, opacity: 0 });
      tl.to(split.words, { yPercent: 0, opacity: 1, duration: 1.2, stagger: 0.0, ease: 'power4.out' });
      
    });
    return () => ctx.revert();
    
  }, []);

    // useEffect(() => {
    //   gsap.registerPlugin(ScrollTrigger);

    //   if (!textRef.current) return;


    //   const split = new SplitType(textRef.current, {
    //     types: 'lines,words',
    //     lineClass: 'overflow-hidden',
    //     wordClass: 'inline-block',
    //     tagName: 'span' // Ensures words are wrapped in <span> tags


    //   });
    //   console.log(split.words);


    //   const animation = gsap.from(split.words, {
    //     scrollTrigger: {
    //       trigger: textRef.current,
    //       start: 'top 80%',
    //       toggleActions: 'play none none reverse',
    //     },
    //     duration: 1.2,
    //     yPercent: 100,
    //     opacity: 0,
    //     stagger: 0.0,
    //     ease: 'power4.out',
    //     onComplete: () => console.log('Animation complete') // Logs when animation completes

    //   });

    //   return () => {
    //     animation.kill();
    //     split.revert();
    //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //   };
    // }, [text]);

    return (
      <Tag ref={textRef} className={className}>
        {text}
      </Tag>
    );
  }

export default AnimatedText;

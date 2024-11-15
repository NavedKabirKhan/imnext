// 'use client';

// import { useRef, useEffect, cloneElement, useLayoutEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import React from 'react';

// // Custom hook for animating images and videos within a container
// const useMediaAnimation = (containerRef) => {
//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     if (!containerRef.current) return;

//     // Select all images and videos within the container
//     const mediaElements = containerRef.current.querySelectorAll('.animated-media');

//     const ctx = gsap.context(() => {
//       mediaElements.forEach((element) => {
//         const delay = parseFloat(element.getAttribute('data-delay')) || 0;

//         gsap.from(element, {
//           scrollTrigger: {
//             trigger: element,
//             start: 'top bottom',           // Start animation when top of element reaches bottom of viewport
//             toggleActions: 'play none none none', // Only play the animation once
//             once: true,                    // Ensures the animation only triggers once
//           },
//           y: 50,              // Slide up by 50px
//           opacity: 0,         // Start from zero opacity
//           duration: 1.2,      // Animation duration
//           delay,              // Individual delay for each element
//           ease: 'power4.out',
//         });
//       });

//       ScrollTrigger.refresh();  // Refresh ScrollTrigger on mount to ensure animations work
//     }, containerRef);

//     return () => {
//       ctx.revert();
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, [containerRef]);
// };


// function AnimatedMediaContainer({ children, className = '' }) {
//   const containerRef = useRef(null);

//   // Apply the custom hook to animate child images and videos
//   useMediaAnimation(containerRef);

//   // Use React.Children.map to safely iterate over children
//   const clonedChildren = React.Children.map(children, (child, index) =>
//     cloneElement(child, {
//       className: `${child.props.className || ''} animated-media`,
//       'data-delay': child.props.delay || 0,  // Set data-delay from prop or default to 0
//       key: index,
//     })
//   );

//   return (
//     <div ref={containerRef} className={className}>
//       {clonedChildren}
//     </div>
//   );
// }

// export default AnimatedMediaContainer;


'use client';

import { useEffect, useRef, cloneElement } from 'react';
import React from 'react';

// Custom hook for animating images using Intersection Observer
const useMediaAnimation = (containerRef) => {
  useEffect(() => {
    if (!containerRef.current) return;

    // Select all images and videos within the container
    const mediaElements = containerRef.current.querySelectorAll('.animated-media');

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const delay = parseFloat(element.getAttribute('data-delay')) || 0;

            // Apply animation styles
            setTimeout(() => {
              element.classList.add('animate');
            }, delay * 1000);

            // Unobserve the element after animation
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    // Observe each media element
    mediaElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, [containerRef]);
};

function AnimatedMediaContainer({ children, className = '' }) {
  const containerRef = useRef(null);

  // Apply the custom hook to animate child images and videos
  useMediaAnimation(containerRef);

  // Use React.Children.map to safely iterate over children
  const clonedChildren = React.Children.map(children, (child, index) =>
    cloneElement(child, {
      className: `${child.props.className || ''} animated-media`,
      'data-delay': child.props.delay || 0, // Set data-delay from prop or default to 0
      key: index,
    })
  );

  return (
    <div ref={containerRef} className={className}>
      {clonedChildren}
    </div>
  );
}

export default AnimatedMediaContainer;

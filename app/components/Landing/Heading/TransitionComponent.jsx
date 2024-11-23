import { useRef } from 'react';
// import ScrollSequence from './ScrollSequence';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger, useGSAP);
export default function TransitionComponent({
  tag: Tag = 'div',
  children,
  ...props
}) {
  const contentRef = useRef(null);
  useGSAP(
    () => {
      // Animate the mask property
      gsap.set(contentRef.current, {
        WebkitMaskImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 1) -100%, rgba(0, 0, 0, 0) 0%)',
        maskImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 1) -100%, rgba(0, 0, 0, 0) 0%)',
        y: 100,
      });
      gsap.to(contentRef.current, {
        WebkitMaskImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 150%)',
        maskImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 150%)',
        duration: 1.4,
        y: 0,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: contentRef.current, // The element that triggers the animation
          start: 'top 80%', // Start animation when the top of the element reaches 80% of the viewport height
          // end: 'top 70%', // End animation when the top of the element reaches 20% of the viewport height
          // scrub: true, // This links the animation to scroll progress
          // markers: true, // Add scroll markers for debugging
        },
      });
    },
    { scope: contentRef.current }
  );
  return (
    <Tag {...props} ref={contentRef}>
      {children}
    </Tag>
  );
}
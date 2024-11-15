// src/hooks/useGsapScroll.js
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useGsapScroll = (triggerId) => {
  useEffect(() => {
    const communityWheel = gsap.timeline({
      scrollTrigger: {
        trigger: triggerId,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    communityWheel.to(triggerId, { rotate: 180 });
  }, [triggerId]);
};

export default useGsapScroll;

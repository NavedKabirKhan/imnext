import gsap from "gsap";

// Animate page-in (transition effect when page loads)
export const animatePageIn = () => {
  const transitionElement = document.getElementById("transition-element");

  if (transitionElement) {
    const tl = gsap.timeline();

    tl.set(transitionElement, {
      yPercent: 0,
      zIndex: 999999,
    })
      .to(transitionElement, {
        yPercent: -100,
        duration: 0.8,
      })
      .to(
        transitionElement,
        {
          duration: 0.4,
        },
        "<"
      );
  }
};

// Animate page-out (transition effect when page changes)
export const animatePageOut = (href, router) => {
  const animationWrapper = document.getElementById("transition-element");

  if (animationWrapper && router) {
    const tl = gsap.timeline();

    tl.set(animationWrapper, {
      yPercent: 100,
    })
      .to(animationWrapper, {
        yPercent: 0,
        duration: 0.8,
        onComplete: () => {
          if (router && href) {
            router.push(href); // Ensure router is defined and href is provided
          } else {
            console.error("Router or href is undefined");
          }
        },
      })
      .to(
        animationWrapper,
        {
          duration: 0.4,
        },
        "<"
      );
  } else {
    // console.error("Animation wrapper or router is not available");
  }
};

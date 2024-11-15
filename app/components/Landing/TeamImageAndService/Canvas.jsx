import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import landingStyles from "@/app/styles/LandingPage.module.css";

const Canvas = ({ isDesktop, loadedImages, frameRef }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const resizeCanvas = (canvas) => {
    const width = window.innerWidth;
    const height = (9 * width) / 16;
    canvas.width = width;
    canvas.height = height;
  };

  const render = (context, canvas) => {
    const currentFrame = Math.floor(frameRef.current.value);
    if (currentFrame >= loadedImages.length || !loadedImages[currentFrame]) return;

    const renderWidth = canvas.height * (16 / 9);
    const renderHeight = canvas.height;
    const x = (canvas.width - renderWidth) / 2;
    const y = (canvas.height - renderHeight) / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(
      loadedImages[currentFrame],
      x,
      y,
      renderWidth,
      renderHeight
    );
  };

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current || !loadedImages.length) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    
    resizeCanvas(canvas);
    render(context, canvas);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: isDesktop ? "top top" : "top bottom",
        end: isDesktop ? `+=${2 * window.innerHeight}` : "bottom top",
        pin: isDesktop,
        pinSpacing: isDesktop,
        scrub: 1,
        onUpdate: () => requestAnimationFrame(() => render(context, canvas)),
      },
    });

    timeline.to(frameRef.current, {
      value: loadedImages.length - 1,
      ease: "none",
    });

    const handleResize = () => {
      resizeCanvas(canvas);
      render(context, canvas);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      timeline.kill();
    };
  }, [isDesktop, loadedImages]);

  return (
    <div className={landingStyles.canvas_container} ref={containerRef}>
      <canvas 
        ref={canvasRef}
        id="team-image-changing"
      />
    </div>
  );
};

export default Canvas;
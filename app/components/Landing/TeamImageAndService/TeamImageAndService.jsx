import { useEffect, useRef, useState } from "react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { gsap } from "gsap";
import Canvas from "./Canvas";
import Services from "./Services";
import servicesData from "@/app/components/Services/serviceList.json";
import teamImage from "@/app/components/Landing/teamImages.json";

gsap.registerPlugin(ScrollTrigger);

const TeamImageAndService = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const frameRef = useRef({ value: 0 });

  useEffect(() => {
    setIsClient(true);
    setIsDesktop(window.innerWidth > 960);

    const loadImages = async () => {
      const loadPromises = teamImage.teamImageURLs.map(url => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve(img);
          img.onerror = reject;
        });
      });

      try {
        const images = await Promise.all(loadPromises);
        setLoadedImages(images);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 960);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  if (!isClient) return null;

  return (
    <>
      <Canvas 
        isDesktop={isDesktop}
        loadedImages={loadedImages}
        frameRef={frameRef}
      />

      {children}

      <Services 
        services={servicesData.services}
        isDesktop={isDesktop}
      />
    </>
  );
};

export default TeamImageAndService;
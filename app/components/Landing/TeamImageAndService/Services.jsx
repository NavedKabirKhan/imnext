import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ServiceCard from "./ServiceCard";
import landingStyles from "@/app/styles/LandingPage.module.css";

const Services = ({ services, isDesktop }) => {
  const serviceCards = useRef([]);
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !titleRef.current) return;

    const timeline = gsap.timeline();

    if (isDesktop) {
      timeline.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 20%",
          end: "bottom 20%",
          pin: titleRef.current,
          pinSpacing: true,
          scrub: 0.5,
        },
      });
    } else {
      serviceCards.current.forEach((card) => {
        if (!card) return;
        
        gsap.fromTo(
          card,
          { y: card.innerHeight },
          {
            y: 0,
            scrollTrigger: {
              trigger: card,
              start: "top 20%",
              endTrigger: serviceCards.current[serviceCards.current.length - 1],
              end: "top 10%",
              pin: true,
              pinSpacing: false,
              scrub: true,
            },
          }
        );
      });
    }

    return () => {
      timeline.kill();
      gsap.killTweensOf(serviceCards.current);
    };
  }, [isDesktop]);

  return (
    <section className={`${landingStyles.s_holder} f-upper-section`}>
      <div className={landingStyles.s_titles}>
        <div className={landingStyles.s_title_c_image}>
          <div className={landingStyles.t_overflow_holder}>
            <h3 
              ref={titleRef}
              className={landingStyles.s_t_heading}
            >
              Services
            </h3>
          </div>
        </div>
      </div>
      <div 
        ref={containerRef}
        className={landingStyles.s_desc_container}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            service={service}
            cardRef={(el) => (serviceCards.current[index] = el)}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
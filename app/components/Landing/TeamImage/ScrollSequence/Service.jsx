"use client";
import React, { useEffect, useRef, useState } from "react";
import landingStyles from "@/app/styles/LandingPage.module.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import servicesData from "@/app/components/Services/serviceList.json";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
    const LandingServiceContainer = useRef(null);
    const serviceDetailContainer = useRef(null);
    const serviceTitle = useRef(null);
    const serviceCards = useRef([]);

    const { services } = servicesData;
    
    const [isDesktop, setIsDesktop] = useState(false); // Default to false
    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsDesktop(window.innerWidth > 960);
        }
    }, []);
    // Helper function to initialize animations
    const initAnimation = (isDesktop) => {
        const masterTimeline = gsap.timeline();

        // Animation logic for desktop and mobile
        if (isDesktop) {
            masterTimeline.to(serviceDetailContainer.current, {
                scrollTrigger: {
                    trigger: serviceDetailContainer.current,
                    start: "top 20%",
                    end: "bottom 20%",
                    pin: serviceTitle.current,
                    pinSpacing: true,
                    scrub: 0.5,
                    // markers: true,
                },
            });
            gsap.utils.toArray(serviceCards.current).forEach((service) => {
                gsap.set(service, { clearProps: "all" });
            });
        } else {
            console.log("phone");

            masterTimeline.to(serviceDetailContainer.current, {
                scrollTrigger: {
                    trigger: serviceDetailContainer.current,
                    start: "top 20%",
                    endTrigger: serviceCards.current[serviceCards.current.length - 1],
                    end: "top 10%",
                    pin: serviceTitle.current,
                    pinSpacing: false, // No pin spacing for mobile

                    scrub: 0.5,
                    onRefresh: ScrollTrigger.refresh,
                    id: `Service`,
                    // markers: true

                },
            });

            // Stacking effect for services on mobile
            gsap.utils.toArray(serviceCards.current).forEach((service, index) => {
                masterTimeline.fromTo(
                    service,
                    {
                        y: service.innerHeight,
                    }, // Initial state (offscreen and hidden)
                    {
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: service,
                            start: `top 20%`,
                            endTrigger: serviceCards.current[serviceCards.current.length - 1],
                            end: "top 10%",
                            scrub: true,
                            pin: true,
                            pinSpacing: false,
                            id: `card-${index}`,
                            // markers: true
                        },
                    }
                );
            });
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== "undefined") {
                setIsDesktop(window.innerWidth > 960);
            }
        };

        // Set initial value
        handleResize();

        // Add event listener to track window resize
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

 
    useEffect(() => {
        if (typeof window !== "undefined") {
            initAnimation(isDesktop);
            ScrollTrigger.refresh();
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [isDesktop]);

    return (
        <section
            className={`${landingStyles.s_holder} f-upper-section`}
            ref={LandingServiceContainer}
        >
            <div className={landingStyles.s_titles}>
                <div className={landingStyles.s_title_c_image}>
                    <div className={landingStyles.t_overflow_holder}>
                        <h3 className={landingStyles.s_t_heading} ref={serviceTitle}>
                            Services
                        </h3>
                    </div>
                </div>
            </div>
            <div
                className={landingStyles.s_desc_container}
                ref={serviceDetailContainer}
            >
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={landingStyles.s_desc}
                        ref={(el) => (serviceCards.current[index] = el)}
                    >
                        <img
                            src={service.icon}
                            alt={service.alt}
                            className={landingStyles.s_icon}
                        />
                        <div className={landingStyles.h_list_container}>
                            <h3 className={landingStyles.t_heading}>{service.title}</h3>
                            <ul className={landingStyles.s_sec_list}>
                                {service.items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        style={item == null ? { listStyleType: "unset" } : undefined}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Service;

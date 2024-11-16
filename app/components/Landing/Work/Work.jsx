import landingStyles from "@/app/styles/LandingPage.module.css";
import React, { useState, useEffect, useRef } from "react";
import ViewporTextAnim from "@/app/components/ViewporTextAnim";
import SlideUpText from "@/app/components/SlideUpText";
import Link from "next/link";
import AnimateImage from "@/app/components/AnimateImage";
import TransitionLink from "@/app/components/TransitionLink";


import NeelamForesteriaThumb from "@/app/assets/work-thumbnails/neelam-landing-thumb.webp";
import NeelamForesteriaVideo from "@/app/assets/work-thumbnails/neelam-landing-work-thumbnail.mp4";
import BoatThumb from "@/app/assets/work-thumbnails/boat-landing-thumb.webp";
import BoatVideo from "@/app/assets/work-thumbnails/boat-landing-work-thumbnail.mp4";
import DecathlonThumb from "@/app/assets/work-thumbnails/decathlon-landing-thumb.webp";
import DecathlonVideo from "@/app/assets/work-thumbnails/decathlon-landing-work-thumbnail.mp4";
import RoyalLegacyThumb from "@/app/assets/work-thumbnails/royal-legacy-landing-thumb.webp";
import RoyalLegacyVideo from "@/app/assets/work-thumbnails/royal-legacy-landing-thumb.mp4";

// Reusable WorkItem component
const WorkItem = ({ link, videoSrc, thumb, alt, title, heading, category, index, isDesktop }) => (
    <div className={`${landingStyles[`w_g_container_${index + 1}`]} ${isDesktop ? landingStyles.thumbnail_holder : ""} textAnim`}>
        <AnimateImage className="media-container" data-links={heading}>
            <TransitionLink href={link} className={landingStyles.w_g_t_link}>
                <figure>
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={`${landingStyles.thumbnail_image} animTxt`}
                        poster={thumb}
                        alt={alt}
                        title={title}
                    >
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </figure>
            </TransitionLink>
        </AnimateImage>
        <a className={landingStyles.w_g_c_container} href={link}>
            <h4 className={landingStyles.w_g_c_heading}>{heading}</h4>
            <p className={landingStyles.w_g_c_vertical}>{category}</p>
        </a>
    </div>
);

function Work() {
    const [isDesktop, setIsDesktop] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== "undefined") {
                const isDesktopSize = window.innerWidth > 960;
                setIsDesktop(isDesktopSize);
            }
        };

        // Set the initial value
        handleResize();

        // Add event listener to track window resize
        window.addEventListener("resize", handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    const workItems = [
        {
            link: "/work/neelam-foresteria",
            videoSrc: NeelamForesteriaVideo,
            thumb: NeelamForesteriaThumb,
            alt: "Neelam Foresteria Resort Brand Identity",
            title: "Neelam Foresteria Resort Brand Identity",
            heading: "Neelam Foresteria",
            category: "Branding | Hospitality",
        },
        {
            link: "/work/boat",
            videoSrc: BoatVideo,
            thumb: BoatThumb,
            alt: "boAt Audiotech company Screen Billboard Marketing",
            title: "boAt Audiotech company Screen Billboard Marketing",
            heading: "Boat",
            category: "Strategy | Tech",
        },
        {
            link: "/work/royal-legacy",
            videoSrc: RoyalLegacyVideo,
            thumb: RoyalLegacyThumb,
            alt: "Royal Legacy Branding",
            title: "Royal Legacy Branding",
            heading: "Royal Legacy",
            category: "Branding | Food",
        },
        {
            link: "/work/decathlon",
            videoSrc: DecathlonVideo,
            thumb: DecathlonThumb,
            alt: "Decathlon Sports Brand OOH Marketing",
            title: "Decathlon Sports Brand OOH Marketing",
            heading: "Decathlon",
            category: "Strategy | Sports",
        }
    ];

    return (
        <section className={landingStyles.work_s}>
            <div className={`${landingStyles.work_headings_container} ${landingStyles.site_container_padding}`}>
                <div>
                    <SlideUpText text="Our Recent Work" className={`${landingStyles.w_o_r_w}`} Tag='h3' />
                </div>
                <div>
                    <TransitionLink href="/work" style={{ overflow: 'hidden' }}>
                        <SlideUpText text="See More Of Our Work →" className={`${landingStyles.w_s_o_m_w_desktop}`} Tag='h3' />
                    </TransitionLink>

                </div>
            </div>

            <div className={landingStyles.work_grid_container_desktop}>
                <div className={landingStyles.w_g_t_container}>

                    <SlideUpText text="We Work Closely With Our Clients To Create Outstanding Experiences For Their Customers." className={`${landingStyles.w_g_t_caption}`} Tag='h3' />

                </div>

                {/* Use map to render each work item dynamically */}

                {workItems.map((item, index) => (
                    <WorkItem key={index} {...item} index={index} isDesktop={isDesktop} />

                ))}
            </div>

            <div data-links="Work">
                <Link className={`${landingStyles.w_s_o_m_w_mobile} ${landingStyles.site_container_padding}`} href="/work">
                    See More Of Our Work →
                </Link>
            </div>
        </section>
    );
}

export default Work;

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import landingStyles from "@/app/styles/LandingPage.module.css";
import ShowreelThumbanil from "@/app/assets/landing/im-thumbnail.webp";
import LandingShowreel from "@/app/assets/landing/integra-magna-landing-showreel.mp4";

const ZoomingVideo = () => {
    const videoContainerRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [cursorVisible, setCursorVisible] = useState(false);

    // Check for desktop view and set state
    useEffect(() => {
        if (typeof window !== 'undefined') {

        const checkIfDesktop = () => setIsDesktop(window.innerWidth > 960);
        checkIfDesktop(); // Initial check
        window.addEventListener("resize", checkIfDesktop); // Update on resize

        return () => window.removeEventListener("resize", checkIfDesktop);
        }
    }, []);

     // Disable background scroll when popup is visible
     useEffect(() => {
        if (popupVisible) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => document.body.classList.remove("no-scroll"); // Cleanup on unmount
    }, [popupVisible]);
    // Set the initial cursor position to the center of the video container
    useEffect(() => {
        if (videoContainerRef.current) {
            const rect = videoContainerRef.current.getBoundingClientRect();
            setCursorPosition({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            });
        }
    }, []);

    // Track scroll progress within the viewport
    const { scrollYProgress } = useScroll({
        target: videoContainerRef,
        offset: ["start end", "center start"],
    });

    // Transform scroll progress to a scale value with a slower progression
    const scale = useTransform(scrollYProgress, [0, 0.7], [0.95, 1.45]);
    // Transform scroll progress to change Y position from -5% to 20%
    const yPosition = useTransform(scrollYProgress, [0, 0.5], ["-5%", "21%"]);

    // Open and close popup
    const openPopup = () => setPopupVisible(true);
    const closePopup = () => setPopupVisible(false);

    // Handle custom cursor position within video
    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <>
            {/* Popup Video */}
            {popupVisible && (
                <section className={landingStyles.y_reel_popup} style={{ display: "block", opacity: 1 }}>
                    <div className={landingStyles.landing_iframe} onClick={closePopup}>
                        <div className={landingStyles.iframe_window}>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/gjkVNzM5wYw?autoplay=1&controls=0"
                                title="INTEGRA MAGNA"
                                frameBorder="0"
                                allow="accelerometer; autoplay;"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                id="youtube-player"
                            ></iframe>
                        </div>
                    </div>
                    <div className={landingStyles.form_close_button_c}>
                        <button
                            type="button"
                            className={landingStyles.form_close_button}
                            aria-label="Close dialog window"
                            onClick={closePopup}
                        >
                            <svg role="presentation" className={landingStyles.t_popup__close_icon} width="23px" height="23px" viewBox="0 0 23 23">
                                <g stroke="none" strokeWidth="1.5" fill="white" fillRule="evenodd">
                                    <rect
                                        transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708)"
                                        x="10.3137085"
                                        y="-3.6862915"
                                        width="2"
                                        height="30"
                                    ></rect>
                                    <rect
                                        transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708)"
                                        x="10.3137085"
                                        y="-3.6862915"
                                        width="2"
                                        height="30"
                                    ></rect>
                                </g>
                            </svg>
                        </button>
                    </div>
                </section>
            )}

            {/* Main Video Section */}
            <section className={landingStyles.site_container_padding}>
                <motion.div
                    className={landingStyles.video_container_Autoplay}
                    ref={videoContainerRef}
                    style={
                        isDesktop
                            ? { scale, y: yPosition } // Apply transforms on desktop
                            : { scale: 1.45, y: "20%" } // No transforms on mobile
                    }
                >
                    <a
                        onClick={openPopup}
                        className={landingStyles.video_container}
                        onMouseEnter={() => setCursorVisible(true)}
                        onMouseLeave={() => setCursorVisible(false)}
                        onMouseMove={handleMouseMove} // Update cursor position only on video hover
                    >
                        <video
                            preload="none"
                            playsInline
                            autoPlay
                            muted
                            loop
                            poster={ShowreelThumbanil}
                            alt="Integra Magna Work Portfolio Showreel"
                            title="Integra Magna Work Portfolio Showreel"
                        >
                            <source src={LandingShowreel} type="video/mp4" />
                        </video>
                    </a>
                </motion.div>

                {/* Custom Cursor */}
                {cursorVisible && (
                    <div
                        className={landingStyles.custom_cursor}
                        style={{
                            left: `${cursorPosition.x}px`,
                            top: `${cursorPosition.y}px`,
                            opacity: 1,
                            visibility: "visible",
                            position: "fixed", // Ensure cursor stays in place relative to viewport
                            transform: "translate(-50%, -50%)" // Center cursor around the mouse
                        }}
                    >
                        <svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="75" cy="75" r="75" fill="#101820" />
                            <path
                                d="M52.96 61.6C57.79 61.6 60.97 64.39 60.97 68.56C60.97 72.94 57.61 75.85 52.51 75.85H48.67V82H45.43V61.6H52.96ZM52.87 72.88C55.81 72.88 57.79 71.14 57.79 68.56C57.79 66.19 55.81 64.57 52.87 64.57H48.67V72.88H52.87ZM63.9393 60.7H67.0593V82H63.9393V60.7ZM82.2435 67.9H85.3335V82H82.2435V80.89C81.0435 81.82 79.5135 82.36 77.7135 82.36C73.7535 82.36 70.5735 79.06 70.5735 74.95C70.5735 70.84 73.7535 67.54 77.7135 67.54C79.5135 67.54 81.0435 68.08 82.2435 69.01V67.9ZM78.1635 79.54C79.7235 79.54 81.1935 79 82.2435 77.5V72.4C81.1935 70.9 79.7235 70.36 78.1635 70.36C75.5835 70.36 73.6935 72.43 73.6935 74.95C73.6935 77.47 75.5835 79.54 78.1635 79.54ZM101.429 67.87H104.729L95.429 88.96H92.159L95.129 82.21L87.929 67.87H91.259L96.569 78.91L101.429 67.87Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                )}
            </section>
        </>
    );
};

export default ZoomingVideo;

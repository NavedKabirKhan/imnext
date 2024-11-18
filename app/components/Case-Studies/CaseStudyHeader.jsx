// /components/Header.jsx
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

import { useRouter } from 'next/router';
import TransitionLink from "@/app/components/TransitionLink"
import casestudyStyles from '@/app/styles/Case-Study.module.css';

import gsap from 'gsap';
const imagePaths = {

  casestudyNavBarBlur: '/assets/images/header/casestudy-navbar-blur.svg',
  casestudyArrowBack: '/assets/images/header/casestudy-arrowback.svg',
};


// Utility function to format the page name
const formatPageName = (href) => {
  if (!href || href === "/") {
    return "Integra Magna";
  }

  const parts = href.replace(/^\//, "").split("/");
  const pageName = parts[parts.length - 1];

  const formattedName = pageName
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word

  return formattedName;
};

function CaseStudyHeader() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const router = useRouter();
  const [pageName, setPageName] = useState("Integra Magna"); // Default page name

  const headerLink = useRef([]);
  // const pageName = router.pathname.split('/').filter(Boolean).pop() || 'Integra Magna'; // Default name if no specific page
  const pathname = usePathname(); // Get current pathname

// Update page name dynamically
useEffect(() => {
  const formattedName = formatPageName(pathname);
  setPageName(formattedName);
}, [pathname]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setIsScrollingDown(currentPosition > scrollPosition);
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);


  useEffect(() => {
    const marqueeElements = gsap.utils.toArray(".anim-marqueeText");
    // console.log(refContext.current);


    gsap.to(marqueeElements, {
      xPercent: -100,
      repeat: -1,
      duration: 2,
      ease: "linear",
    });
  }, []);



  // GSAP hover effects
  useEffect(() => {
    const applyHoverEffects = () => {
      if (window.innerWidth > 960) {

        headerLink.current.forEach((element) => {
          const link = element.querySelector("span");
          if (!link) return;

          if (!element.querySelector(".link-container")) {
            const clone = link.cloneNode(true);
            const container = document.createElement("div");
            container.classList.add("link-container");
            container.appendChild(link);
            container.appendChild(clone);
            element.appendChild(container);

            // GSAP hover animations
            container.addEventListener("mouseover", () => {
              gsap.to(container.querySelectorAll("span"), { y: "-100%", duration: 0.3, ease: "power1.out" });
            });

            container.addEventListener("mouseout", () => {
              gsap.to(container.querySelectorAll("span"), { y: "0", duration: 0.3, ease: "power1.out" });
            });
          }
        });
      }
    };

    applyHoverEffects();
    window.addEventListener('resize', applyHoverEffects);
    return () => window.removeEventListener('resize', applyHoverEffects);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="main-header">
      <div
        className={`scroll-header ${isScrollingDown ? 'hide-scroll-header' : 'show-scroll-header'}`}
        data-header="scroll"
        data-view="0"
      >
        <div className="logo-contact-container">
          <div data-links="Integra Magna">
            <TransitionLink href="/" data-page-name="Integra Magna">
              <div className="logo">
                <img src="/assets/images/header/blending-logo.svg" className="imglogo" alt="Integra Magna Logo" />
              </div>
            </TransitionLink>
          </div>

          <div className="contact-link">
            <div data-links="Contact">
              <TransitionLink href="/contact" data-page-name="Contact" className="contact-link-a">
                Contact
              </TransitionLink>
            </div>
          </div>
          <div className="openButton" id="menu">
            <button
              onClick={toggleSidebar}
              className="menu_button_container"
              id="menu_btn"
              data-change="Menu"
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      <div
        className={`logo-icon-container ${isScrollingDown ? 'hide-scroll-header' : 'show-scroll-header'}`}
        data-header="scroll"
        data-view="0"
      >
        <div data-links="Integra Magna">
          <TransitionLink href="/" data-page-name="Integra Magna">
            <img src="/assets/images/header/logonameblend.svg" className="imglogo" alt="Integra Magna Logo" />
          </TransitionLink>
        </div>
      </div>

      <div
        className={`logo-icon-container ${isScrollingDown ? 'hide-scroll-header' : 'show-scroll-header'}`}
        data-header="scroll"
        data-view="0"
      >
        <img src="./assets/images/header/integra-magna-logo.svg" className="imglogo" style={{ opacity: "0" }} alt="Integra Magna Logo" />
      </div>

      <div className="case_nav_holder" data-header="noscroll" data-view="0">
        <TransitionLink href="/work" passHref>
          <ul className="case_nav_back_arrow" style={{ backgroundImage: `url(${imagePaths.casestudyArrowBack})` }} >
            <span className="case_nav_item">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0977 2.50195L2.59766 12.002L12.0977 21.502"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="square"
                />
              </svg>
            </span>
          </ul>
        </TransitionLink>
        <ul className={casestudyStyles.caseNavLinks}>

          <span className={casestudyStyles.caseNavItem}>
            <div className={casestudyStyles.cTextMarquee}>
              <div className={`${casestudyStyles.cTextMarquee__text} anim-marqueeText`}>
                {pageName}&nbsp;&#9642;&nbsp;
              </div>
              <div className={`${casestudyStyles.cTextMarquee__text} anim-marqueeText`}>
                {pageName}&nbsp;&#9642;&nbsp;

              </div>
              <div className={`${casestudyStyles.cTextMarquee__text} anim-marqueeText`}>
                {pageName}&nbsp;&#9642;&nbsp;

              </div>
              <div className={`${casestudyStyles.cTextMarquee__text} anim-marqueeText`}>
                {pageName}&nbsp;&#9642;&nbsp;

              </div>
            </div>
          </span>
        </ul>
      </div>


      <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-container">
          <div style={{ height: "60px" }}></div>
          <ul className="sidebar-navlinks">
            {[
              { href: '/work', label: 'Work' },
              { href: '/services', label: 'Services' },
              { href: '/thinking', label: 'Thinking' },
              { href: '/career', label: 'Career' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <li key={link.href} className="nav-item" data-links={link.label} data-menu-hover>
                <TransitionLink href={link.href}>
                  <span onClick={() => setIsSidebarOpen(false)}>{link.label}</span>
                </TransitionLink>
              </li>
            ))}
          </ul>
          <ul className="social-media-links">
            <li className="social-media">
              <a href="https://www.instagram.com/integra.magna/" target="_blank" rel="noopener noreferrer">
                Ig
              </a>
            </li>
            <li className="social-media">
              <a href="https://www.linkedin.com/company/integramagna/" target="_blank" rel="noopener noreferrer">
                In
              </a>
            </li>
            <li className="social-media">
              <a href="https://twitter.com/Integra_Magna/" target="_blank" rel="noopener noreferrer">
                X
              </a>
            </li>
            <li className="social-media">
              <a href="https://www.behance.net/integra_magna/" target="_blank" rel="noopener noreferrer">
                Be
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div >
  );
}

export default CaseStudyHeader;

import React, { useEffect, useState, useRef } from 'react';
import TransitionLink from '@/app/components/TransitionLink';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import gsap from 'gsap';
import BlendingLogo from '@/public/assets/images/header/blending-logo.svg';
import LogoNameBlend from '@/public/assets/images/header/logonameblend.svg';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const headerLink = useRef([]);
  const pathname = usePathname();
  // const searchParams = useSearchParams();
  const [url, setUrl] = useState('');

  // Combined Scroll Detection
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
    const updatedUrl = `${pathname}`;
    setUrl(updatedUrl);
    // console.log("Updated URL: ", updatedUrl);
  }, [pathname])

  // GSAP hover effects
  useEffect(() => {
    // console.log("Pathname: ", usePathname());

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
    <div className={`main-header `}>
      <div
        className={`scroll-header ${isScrollingDown ? 'hide-scroll-header' : 'show-scroll-header'}`}
        data-header="scroll"
        data-view="0"
      >
        <div className="logo-contact-container">
          <div data-links="Integra Magna">


            <TransitionLink href="/" data-page-name="Integra Magna" label="home">
              <div className="logo">
                <Image src={BlendingLogo} className="imglogo" alt="Integra Magna Logo" />
              </div>
            </TransitionLink>
          </div>

          <div className="contact-link">
            <div data-links="Contact">
              <TransitionLink href="/contact" label="Contact" >

              </TransitionLink>
            </div>
          </div>
          <div className="openButton" id="menu">
            <button
              onClick={toggleSidebar}
              className="menu_button_container"
              id="menu_btn"
              data-change={isSidebarOpen ? "Close" : "Menu"}
              aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
            >
              {isSidebarOpen ? "Close" : "Menu"}
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
            <Image src= {LogoNameBlend} className="imglogo" alt="Integra Magna Logo" />
          </TransitionLink>
        </div>
      </div>




      {/* Navigation Links */}
      <div className="nav-holder" data-header="noscroll" data-view="0">
        <ul className="navlinks">
          {[
            { href: '/work', label: 'Work' },
            { href: '/services', label: 'Services' },
            { href: '/thinking', label: 'Thinking' },
            { href: '/career', label: 'Career' },
            { href: '/about', label: 'About' },
          ].map((link, index) => (
            <li key={link.href} className="nav-item" data-links={link.label}>


              <TransitionLink
                href={link.href}
                scroll={true}
              >
                {/* {console.log("router.pathname: ", router.pathname, "\nLink.href: ", link.href, "Url: ", url)} */}

                <span ref={(el) => (headerLink.current[index] = el)}>
                  <span>{link.label}</span>
                </span>
              </TransitionLink>

            </li>
          ))}
        </ul>

      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-container">
          <ul className="sidebar-navlinks">
            {[
              { href: '/work', label: 'Work' },
              { href: '/services', label: 'Services' },
              { href: '/thinking', label: 'Thinking' },
              { href: '/career', label: 'Career' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <li key={link.href} className="nav-item" data-links={link.label} onClick={() => {
                setTimeout(() => {
                  setIsSidebarOpen(false)
                }, 1000)
              }} >
                <TransitionLink href={link.href} scroll={true} >
                  <span>{link.label}</span>
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

export default Header;
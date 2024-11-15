import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/legacy/image"; // Import Next.js Image component

const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const footerElement = document.querySelector(".footer-text-section");
      const footerHeight = footerElement ? footerElement.offsetHeight : 0;
      scrollFooter(scrollY, footerHeight);
    };

    const scrollFooter = (scrollY, heightFooter) => {
      const body = document.body;
      const html = document.documentElement;
      const bdHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const threshold = bdHeight - heightFooter - window.innerHeight;

      const footerElement = document.querySelector(".footer-text-section");
      if (scrollY >= threshold) {
        if (footerElement) {
          footerElement.style.bottom = "0px";
          footerElement.style.zIndex =
            scrollY - threshold >= window.innerHeight - 1000 ? "1" : "0";
        }
      } else {
        if (footerElement) {
          footerElement.style.bottom = `-${heightFooter}px`;
        }
      }
    };

    const sectionHeight =
      document.querySelector(".form-container-section")?.offsetHeight || 0;
    const footerHeight =
      document.querySelector(".footer-text-section")?.offsetHeight || 0;

    const scrollAnimateElement = document.getElementById("scroll-animate");
    const scrollAnimateMainElement = document.getElementById(
      "scroll-animate-main"
    );

    if (scrollAnimateElement && scrollAnimateMainElement) {
      scrollAnimateElement.style.height = `${sectionHeight + footerHeight}px`;
      scrollAnimateMainElement.style.height = `${
        sectionHeight + footerHeight
      }px`;
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div id="scroll-animate">
        <div id="scroll-animate-main">
          <div className="wrapper-parallax">
            <section className="footer-text-section" id="header-hide">
              <div className="footer_container">
                <div className="integra_magna_img">
                  <img
                    src="/assets/images/footer/footer-bg-text-desktop.svg"
                    alt="Integra Magna Typography"
                    className="footer_image_text_laptop"
                  />
                  <img
                    src="/assets/images/footer/footer-bg-text-mobile.svg"
                    alt="Integra Magna Typography"
                    className="footer_image_text_mobile"
                  />
                </div>

                <ul className="links_footer">
                  <li data-links="Work">
                    <Link href="/work">Work</Link>
                  </li>
                  <li data-links="Services">
                    <Link href="/services">Services</Link>
                  </li>
                  <li data-links="Thinking">
                    <Link href="/thinking">Thinking</Link>
                  </li>
                  <li data-links="Career">
                    <Link href="/career">Career</Link>
                  </li>
                  <li data-links="About">
                    <Link href="/about">About</Link>
                  </li>
                  <li data-links="Contact">
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>

                <div className="copyright">
                  <div className="privacypolicy" data-links="Privacy Policy">
                    <Link href="/privacy-policy">
                      <p>Privacy Policy</p>
                    </Link>
                  </div>
                  <p>Copyright © 2024 Integra Magna</p>
                </div>

                <div className="image_changing_footer">
                  <img
                    src="/assets/images/footer/team.webp"
                    alt="Integra Magna Team Building"
                    className="image-flick"
                  />
                </div>
                <button onClick={scrollToTop} className="top-btn">
                  <div className="top-arrow">
                    <img
                      src="/assets/images/footer/top-arrow.svg"
                      alt="Scroll to top Arrow"
                    />
                  </div>
                  <span>Back to top</span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

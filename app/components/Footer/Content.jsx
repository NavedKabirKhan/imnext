import React from 'react'
import Link from 'next/link'
import TransitionLink from '@/app/components/TransitionLink';

export default function Content() {
    
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
       <section className="footer-text-section" id="header-hide">
              <div className="footer_container">
                <div className="integra_magna_img">
                  <img
                    src="	https://integramagna.com/assets/footer-bg-text-desktop.svg"
                    alt="Integra Magna Typography"
                    className="footer_image_text_laptop"
                  />
                  <img
                    src="https://integramagna.com/assets/footer-bg-text-mobile.svg"
                    alt="Integra Magna Typography"
                    className="footer_image_text_mobile"
                  />
                </div>

                <ul className="links_footer">
                  <li data-links="Work">
                    <TransitionLink href="/work">Work</TransitionLink>
                  </li>
                  <li data-links="Services">
                    <TransitionLink href="/services">Services</TransitionLink>
                  </li>
                  <li data-links="Thinking">
                    <TransitionLink href="/thinking">Thinking</TransitionLink>
                  </li>
                  <li data-links="Career">
                    <TransitionLink href="/career">Career</TransitionLink>
                  </li>
                  <li data-links="About">
                    <TransitionLink href="/about">About</TransitionLink>
                  </li>
                  <li data-links="Contact">
                    <TransitionLink href="/contact">Contact</TransitionLink>
                  </li>
                </ul>

                <div className="copyright">
                  <div className="privacypolicy" data-links="Privacy Policy">
                    <TransitionLink href="/privacy-policy">
                      <p>Privacy Policy</p>
                    </TransitionLink>
                  </div>
                  <p>Copyright © 2024 Integra Magna</p>
                </div>

                <div className="image_changing_footer">
                  <img
                    src="https://integramagna.com/assets/team.webp"
                    alt="Integra Magna Team Building"
                    className="image-flick"
                  />
                </div>
                <button onClick={scrollToTop} className="top-btn">
                  <div className="top-arrow" style={{display:"flex", justifyContent:"center", alignItems: "center"}}>
                    <img
                      src="	https://integramagna.com/assets/top-arrow.svg"
                      alt="Scroll to top Arrow"
                    />
                  </div>
                  <span>Back to top</span>
                </button>
              </div>
            </section>
    </>
  )
}

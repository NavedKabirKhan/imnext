import React, { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import landingStyles from '../../styles/LandingPage.module.css';

const Testimonial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trim',
    loop: false,
    draggable: true,
  });
  
  const customCursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (customCursorRef.current) {
        const left = e.clientX - customCursorRef.current.offsetWidth / 2;
        const top = e.clientY - customCursorRef.current.offsetHeight / 2;
        customCursorRef.current.style.left = `${left}px`;
        customCursorRef.current.style.top = `${top}px`;
        customCursorRef.current.style.display = 'block';
      }
    };

    const handleMouseEnter = () => {
      if (customCursorRef.current) {
        customCursorRef.current.style.visibility = 'visible';
        customCursorRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      if (customCursorRef.current) {
        customCursorRef.current.style.visibility = 'hidden';
        customCursorRef.current.style.opacity = '0';
      }
    };

    const sliderReport = document.querySelector(`.${landingStyles.embla}`);

    if (sliderReport) {
      sliderReport.addEventListener('mousemove', handleMouseMove);
      sliderReport.addEventListener('mouseenter', handleMouseEnter);
      sliderReport.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (sliderReport) {
        sliderReport.removeEventListener('mousemove', handleMouseMove);
        sliderReport.removeEventListener('mouseenter', handleMouseEnter);
        sliderReport.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section>
      <div className={`${landingStyles.testimonial_heading_container} ${landingStyles.left_align} ${landingStyles.site_container_padding}`}>
        <h2 className={landingStyles.testimonial_heading}>Testimonial</h2>
      </div>
      <div className={`${landingStyles.embla} ${landingStyles.site_container_padding}`} ref={emblaRef}>
        <div className={landingStyles.embla__container}>
          <div className={landingStyles.embla__slide}>
            <div className={landingStyles.slider_card}>
              <div className={landingStyles.body_card}>
                <div className={landingStyles.slider_text}>
                  <p className={landingStyles.top8}>
                    <span className={landingStyles.name}>Karan said</span> IM always has the
                    fundamentals covered. They start painting the canvas only
                    after understanding their customer&apos;s audience.
                    Furthermore, the team has built deep capabilities across
                    all dimensions of brand communication, staying up to speed
                    with the evolving landscape Channels.
                  </p>
                  <div className={landingStyles.testi_identity}>
                    <div className={landingStyles.identity_img}>
                      <img src="./assets/images/testimony/tilx-logo.png" alt="TILX Logo" />
                    </div>
                    <div className={landingStyles.identity_text}>
                      <p className={landingStyles.testi_name}>Karan Bhangay</p>
                      <p className={landingStyles.testi_designation}>
                        Founder The Indian Luxury Expo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={landingStyles.embla__slide}>
            <div className={landingStyles.slider_card}>
              <div className={landingStyles.body_card}>
                <div className={landingStyles.slider_text}>
                  <p className={landingStyles.top8}>
                    <span className={landingStyles.name}>Garvit said</span> Integra Magna has
                    shown a great example of delivering results after
                    critically analyzing the need and understanding the scope
                    of work in one go.
                  </p>
                  <div className={landingStyles.testi_identity}>
                    <div className={landingStyles.identity_img}>
                      <svg viewBox="0 0 188 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="w-full lg:w-36 cursor-pointer" alt="Decathlon Logo">
                        <path
                          d="M57.9108 23.8H71.1548V19.544H62.9508V15.974H70.2169V12.012H62.9508V8.442H71.1548V4.2H57.9108V23.8ZM87.5909 15.358C85.6728 18.41 83.8108 19.684 81.4168 19.684C78.3088 19.684 76.5028 17.5 76.5028 13.706C76.5028 10.108 78.1688 8.316 80.7309 8.316C82.4248 8.316 83.8248 9.072 84.2589 11.592H89.2989C88.7528 6.79 85.6869 3.808 80.7868 3.808C75.1028 3.808 71.3648 7.82599 71.3648 13.986C71.3648 20.188 75.1028 24.192 81.2488 24.192C85.2669 24.192 87.9968 22.512 89.8028 20.244H96.6768V23.8H101.689V4.2H94.5769L87.5909 15.358ZM96.6768 16.31H92.2388L96.6768 9.1V16.31ZM47.1588 4.2H39.7948V23.8H47.1588C52.9969 23.8 56.7628 19.95 56.7628 14C56.7628 8.05 52.9969 4.2 47.1588 4.2ZM47.0888 19.544H44.8348V8.442H47.0888C50.0008 8.442 51.6388 10.5 51.6388 14C51.6388 17.486 50.0008 19.544 47.0888 19.544ZM159.537 3.808C153.615 3.808 149.639 7.826 149.639 14C149.639 20.174 153.615 24.192 159.537 24.192C165.473 24.192 169.435 20.174 169.435 14C169.435 7.82601 165.473 3.808 159.537 3.808ZM159.537 19.684C156.625 19.684 154.791 17.738 154.791 14C154.791 10.262 156.625 8.316 159.537 8.316C162.463 8.316 164.283 10.262 164.283 14C164.283 17.738 162.463 19.684 159.537 19.684ZM102.949 8.442H107.891V23.8H112.931V8.442H117.873V4.2H102.949L102.949 8.442ZM182.301 4.2V14.994L175.805 4.2H170.583V23.8H175.455V12.558L182.217 23.8H187.173V4.2L182.301 4.2ZM142.499 4.2H137.459V23.8H150.101V19.558H142.499V4.2ZM130.963 11.676H124.173V4.2H119.133V23.8H124.173V15.904H130.963V23.8H136.003V4.2H130.963V11.676Z"
                          fill="#3643BA"></path>
                        <path
                          d="M25.5711 0C14.6267 0 1.01309 11.3236 1.01309 20.7085C1.01309 25.5554 4.73612 28 9.65333 28C13.264 28 17.6333 26.6794 21.848 24.1365V5.40893C20.7241 7.33366 15.4416 15.0888 11.1987 19.2193C9.03518 21.3266 7.32118 22.2398 5.84602 22.2398C4.18821 22.2398 3.40146 21.1159 3.40146 19.4441C3.40146 11.8575 16.1722 1.99498 24.6298 1.99498C28.114 1.99498 30.3618 3.54039 30.3618 6.54692C30.3618 9.30055 28.4933 12.7566 25.3041 15.9458V21.7481C30.8676 17.3507 34.1972 11.7451 34.1972 7.22127C34.1972 2.4586 30.4883 0 25.5711 0Z"
                          fill="#3643BA"></path>
                      </svg>
                    </div>
                    <div className={landingStyles.identity_text}>
                      <p className={landingStyles.testi_name}>Garvit Singh Naruka</p>
                      <p className={landingStyles.testi_designation}>Operations Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={landingStyles.embla__slide}>
            <div className={landingStyles.slider_card}>
              <div className={landingStyles.body_card}>
                <div className={landingStyles.slider_text}>
                  <p className={landingStyles.top8}>
                    <span className={landingStyles.name}>Anushree said</span> I&apos;m thrilled with
                    the branding Integra Magna created for my brand. Their
                    creativity and professionalism were outstanding, and the
                    final designs exceeded my expectations. Thank you for an
                    amazing job!
                  </p>
                  <div className={landingStyles.testi_identity}>
                    <div className={landingStyles.identity_img}>
                      <img src="./assets/images/testimony/neelam-resort.png" alt="Neelam Foresteria Logo" />
                    </div>
                    <div className={landingStyles.identity_text}>
                      <p className={landingStyles.testi_name}>Anushree Shukla</p>
                      <p className={landingStyles.testi_designation}>Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={landingStyles.embla__slide}>
            <div className={landingStyles.slider_card}>
              <div className={landingStyles.body_card}>
                <div className={landingStyles.slider_text}>
                  <p className={landingStyles.top8}>
                    <span className={landingStyles.name}>Abhinav said</span> Their dedication to
                    delivering exceptional work truly shines through in every
                    aspect of their designs. I highly recommend them for
                    anyone seeking top-notch design work.
                  </p>
                  <div className={landingStyles.testi_identity}>
                    <div className={landingStyles.identity_img}>
                      <img src="./assets/images/testimony/hari-keshri.png" alt="Hari Keshari Logo" />
                    </div>
                    <div className={landingStyles.identity_text}>
                      <p className={landingStyles.testi_name}>Abhinav Sultania</p>
                      <p className={landingStyles.testi_designation}>Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={landingStyles.embla__slide}>
            <div className={landingStyles.slider_card}>
              <div className={landingStyles.body_card}>
                <div className={landingStyles.slider_text}>
                  <p className={landingStyles.top8}>
                    <span className={landingStyles.name}>Ketan said</span> Integra Magna always
                    has the fundamentals covered. They start painting the
                    canvas only after understanding their customer&apos;s audience.
                    Further, the team has built deep capabilities across all
                    dimensions of brand communication, staying up to speed
                    with the evolving channels.
                  </p>
                  <div className={landingStyles.testi_identity}>
                    <div className={landingStyles.identity_img}>
                      <img src="./assets/images/testimony/prestige-logo.png" alt="Prestige University Logo" />
                    </div>
                    <div className={landingStyles.identity_text}>
                      <p className={landingStyles.testi_name}>Ketan Jain</p>
                      <p className={landingStyles.testi_designation}>Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add more testimonial items as needed */}
        </div>
        <div className={landingStyles.arrow_button_container} ref={customCursorRef}>
          <button type="button" className={landingStyles.prev}>Drag</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

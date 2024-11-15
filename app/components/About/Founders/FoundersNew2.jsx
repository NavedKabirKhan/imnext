import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/legacy/image"; // Import Image if using Next.js Image component
import aboutStyles from '@/styles/About.module.css'// Import styles properly

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const componentRef = useRef(null); // Define these refs
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          <div ref={componentRef} className={aboutStyles.meetTheFounderWrapper}>
            <div ref={containerRef} className={aboutStyles.meetTheFounderContainer}>
              {/* Heading */}
              <div className={aboutStyles.panelFirst}>
                <div className={aboutStyles.meetTheFoundersHeading}>
                  <h2>Meet The Founders</h2>
                  <p>Boisterous brilliance meets calm calculation:</p>
                </div>
                <div className={aboutStyles.meetTheFoundersDescription}>
                  <h2>A story that began with a trip without laptops and sharing bold dreams.</h2>
                  <p>Back in 2017, the founders packed their dreams in a shoestring budget...</p>
                </div>
              </div>

              {/* Misbah Qureshi */}
              <div className={aboutStyles.meetTheFoundersMisbahQureshi}>
                <div className={aboutStyles.meetTheFoundersMisbahQureshiWitty}>
                  <div className={aboutStyles.meetTheFoundersMisbahQureshiWittyContainer}>
                    <Image
                      src="/assets/images/about/founder/misbah-witty-sticker.svg"
                      alt="Cool, Stoic and Cerebral"
                      height={461}
                      width={164}
                      layout="responsive"
                    />
                  </div>
                </div>
                <div className={aboutStyles.meetTheFoundersMisbahQureshiimg}>
                  <Image
                    src="/assets/images/about/founder/misbah-image.png"
                    alt="Misbah Qureshi Founder Integra Magna and Product Experience Architect"
                    height={576}
                    width={576}
                    layout="responsive"
                  />
                </div>
                <div className={aboutStyles.meetTheFoundersMisbahQureshiFounder}>
                  <h2 className={aboutStyles.founderName}>
                    Misbah <br /> Qureshi
                  </h2>
                  <p className={aboutStyles.founderDescription}>Co-founder</p>
                  <a
                    href="https://www.linkedin.com/in/misbahqr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={aboutStyles.linkedInIcon}
                  >
                    <span>LinkedIn →</span>
                  </a>
                </div>
              </div>

              {/* Vyanjana Sharma */}
              <div className={aboutStyles.meetTheFoundersMisbahQureshi}>
                <div className={aboutStyles.meetTheFoundersMisbahQureshiWitty}>
                  <div className={aboutStyles.meetTheFoundersMisbahQureshiWittyContainer}>
                    <Image
                      src="/assets/images/about/founder/vyanjana-witty-sticker.svg"
                      alt="Witty, Savvy, and Boisterous"
                      height={461}
                      width={164}
                      layout="responsive"
                    />
                  </div>
                </div>
                <div className={aboutStyles.meetTheFoundersMisbahQureshiimg}>
                  <Image
                    src="/assets/images/about/founder/vyanjana.jpg"
                    alt="Vyanjana Sharma Founder Integra Magna, Adobe's 1st CC expert in India and Brand Strategist"
                    height={576}
                    width={576}
                    layout="responsive"
                  />
                </div>
                <div
                  className={aboutStyles.meetTheFoundersMisbahQureshiFounder}
                  style={{ borderRight: "none" }}
                >
                  <h2 className={aboutStyles.founderName}>
                    Vyanjana <br /> Sharma
                  </h2>
                  <p className={aboutStyles.founderDescription}>Co-founder</p>
                  <a
                    href="https://www.linkedin.com/in/vyanjanas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={aboutStyles.linkedInIcon}
                  >
                    <span>LinkedIn →</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Example;

import React from 'react';
import Link from 'next/link';
import Image from "next/legacy/image";
import TransitionLink from '@/app/components/TransitionLink';
import casestudyStyles from '@/app/styles/Case-Study.module.css';

const NextCaseStudy = ({ nextStudyTitle, nextStudyLink, images, backgroundColor, description }) => {
  return (
    <>
      <section className={`${casestudyStyles.f_upper_section} ${casestudyStyles.work}`}>
        <div className={`${casestudyStyles.image_grid_container} ${casestudyStyles.image_conten_section}`}>
          
          {/* Image Grid One */}
          <div className={casestudyStyles.image_grid_one}>
            <img
              src={images[0].src}
              alt={images[0].alt}
              layout="responsive"
              className="lazy"
            />
          </div>

          {/* Image Grid Two with Text */}
          <div className={casestudyStyles.image_grid_two} style={{ backgroundColor }}>
            <TransitionLink href={nextStudyLink}>
              <h3>Next</h3>
            </TransitionLink>
          </div>

          {/* Image Grid Three */}
          <div className={casestudyStyles.image_grid_three}>
            <img
              src={images[1].src}
              alt={images[1].alt}
              layout="responsive"
              className="lazy"
            />
          </div>

          {/* Image Grid Four */}
          <div className={casestudyStyles.image_grid_four}>
            <img
              src={images[2].src}
              alt={images[2].alt}
              layout="responsive"
              className="lazy"
            />
          </div>

          {/* Image Grid Five with Description */}
          <div className={casestudyStyles.image_grid_five}>
            <h3>{description}</h3>
          </div>
        </div>

        {/* Next Case Study Section */}
        <div className={casestudyStyles.next_case} >
          <span>Next Case Study</span>
          <div data-links={nextStudyTitle}>
            <TransitionLink href={nextStudyLink}>
              <h1>{nextStudyTitle}</h1>
            </TransitionLink>
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="line_container site-container-padding">
        <div className="div_line"></div>
      </div>
    </>
  );
};

export default NextCaseStudy;

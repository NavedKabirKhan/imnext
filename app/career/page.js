"use client";
import { useEffect, useRef, useState } from 'react';
import Image from "next/legacy/image";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Footer from '@/app/components/Footer/FinalFooter'; // Adjust path accordingly
import careerStyles from '@/app/styles/Career.module.css'; // Assuming styles are moved to Next.js /styles directory
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Ensure this is installed
import SlideUpText from "@/app/components/SlideUpText";
// import ViewporTextAnim from '@/app/components/ViewporTextAnim';
import MultiStepForm from '@/app/components/Career/Accordian/MultiStepForm';
import Accordiannew from "@/app/components/Career/Accordian/Accordiannew";
import AnimateImage from "@/app/components/AnimateImage";
// Dynamic import of Accordion to improve performance
const Accordion = dynamic(() => import('@/app/components/Career/Accordian/Accordian'), {
  ssr: false
});



// Images
import careerHero from '../assets/career/career-hero-image.webp';
import crossIcon from '../assets/career/cross-icon.svg';
import smile from '../assets/career/smile.svg';
import star from '../assets/career/star.svg';
import circleNoThumbsvg from '../assets/career/circlenothhumbsvg.svg';
import gridImageOne from "../assets/career/grid-images/integra-magna-career-grid-image-1.webp";
import gridImageTwo from "../assets/career/grid-images/integra-magna-career-grid-image-5.webp";
import gridImageThree from "../assets/career/grid-images/integra-magna-career-grid-image-3.webp";
import gridImageFour from "../assets/career/grid-images/integra-magna-career-grid-image-8.webp";
import gridImageFive from "../assets/career/grid-images/integra-magna-career-grid-image-6.webp";
import gridImageSix from "../assets/career/grid-images/integra-magna-career-grid-image-2.webp";
import gridImageSeven from "../assets/career/grid-images/integra-magna-career-grid-image-4.webp";
import gridImageEight from "../assets/career/grid-images/integra-magna-career-grid-image-7.webp";


gsap.registerPlugin(ScrollTrigger);

const designationKey = [
  { Key: 'gdi', Folder: 'graphic_intern', Designation: 'Graphic Design - Internship' },
  { Key: 'gi', Folder: 'graphic', Designation: 'Graphic Design' },
  { Key: 'mgdi', Folder: 'motion_graphic_design_intern', Designation: 'Motion Graphic Design - Internship' },
  { Key: 'mgd', Folder: 'motion_graphic_design', Designation: 'Motion Graphic Design' },
  { Key: 'sami', Folder: 'sales_and_marketing_intern', Designation: 'Sales and Marketing - Internship' },
  { Key: 'sam', Folder: 'sales_and_marketing', Designation: 'Sales and Marketing' },
  { Key: 'smmi', Folder: 'social_media_manager_intern', Designation: 'Social Media Manager - Internship' },
  { Key: 'smm', Folder: 'social_media_manager', Designation: 'Social Media Manager' },
  { Key: 'sg', Folder: 'sr_graphic', Designation: 'Sr. Graphic Designer' },
  { Key: 'smg', Folder: 'sr_motion_graphic', Designation: 'Sr. Motion Graphic Designer' },
  { Key: 'uui', Folder: 'ux_ui_intern', Designation: 'UX UI - Internship' },
  { Key: 'uu', Folder: 'ux_ui', Designation: 'UX UI' },
  { Key: 'wdi', Folder: 'web_development_intern', Designation: 'Web Development - Internship' },
  { Key: 'wd', Folder: 'web_development', Designation: 'Web Development' }
];

const Career = () => {
  const [formName, setFormName] = useState('');
  const [formFolder, setFormFolder] = useState('');
  const [formVisible, setFormVisible] = useState(false);
  const [startAnimations, setStartAnimations] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    document.title = 'Career | Integra Magna | Design Agency';

    // gsap animation for scroll-triggered effects
    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({
      scrollTrigger: {
        trigger: `.${careerStyles.culture_that_win_section}`,
        start: 'top bottom',
        scrub: true,
        onUpdate: (self) => {
          const rotation = self.progress * 720;
          gsap.set('.star-rotation', { rotation: -rotation });
          gsap.set('.community-wheel-rotation-gsap', { rotation });
        }
      }
    });
  }, []);

  const openFormModule = (key) => {
    const formKey = designationKey.find((item) => item.Key === key);
    if (formKey) {
      console.log("Opening form for:", formKey.Designation); // Debugging log
      setFormName(formKey.Designation);
      setFormVisible(true);
    }
  };

  const closeFormModule = () => {
    console.log("Closing form"); // Debugging log
    setFormVisible(false);
  };


  return (
    <>
      <Head>
        <title>Career | Integra Magna | Design Agency</title>
        <meta name="description" content="Explore career opportunities at Integra Magna" />
      </Head>



      <div id="content">
        <div className={careerStyles.career_heading_container}>

          <h1 className="headTrans" ref={textRef}>
            <SlideUpText text="Cultivate" />

          </h1>

          <h2 className="headTrans" ref={textRef}>
            <SlideUpText text="We believe in challenging perspectives." delay={0.7} />
          </h2>

        </div>

        <div className={careerStyles.career_image}>
          <Image src={careerHero} alt="Integra Magna Team Image" layout="responsive" />
        </div>

        <div className={careerStyles.image_bottom_text}>
          <h2>
            We&apos;re dead serious about making a positive difference in the world. We believe that design can change lives, and we&apos;re passionate about using our skills to create a better future for all. So if you&apos;re looking to join a design agency that&apos;s as fun as it is fabulous, look no further.
          </h2>
        </div>


        {/* Accordion for Jobs */}
        {/* <Accordion openFormModule={openFormModule} /> */}

        <Accordiannew openFormModule={openFormModule} />

        {/* Multi-step Form for Applying */}
        {formVisible && (
          <MultiStepForm
            formVisible={formVisible}
            closeFormModule={closeFormModule}
            formName={formName}
          />
        )}


        <h2 className={careerStyles.culture_that_win_heading}>A culture that wins</h2>
        <section className={`${careerStyles.culture_that_win_section} f-upper-section`}>
          <div className={careerStyles.wrapper}>
            <div className={careerStyles.culture_one}>
              <Image src={smile} alt="Smile Emoji" className={`lazy ${careerStyles.smile}`} />
              <h3 className={careerStyles.grid_culture_win_heading}>
                <span className={careerStyles.text_italic}>Follow the rules but be ferocious</span>
              </h3>
            </div>
            <div className={careerStyles.culture_two}>
              <h3 className={careerStyles.grid_culture_win_heading}>Accepting failure, and trying again</h3>
            </div>
            <div className={careerStyles.culture_three}>
              <h3 className={careerStyles.grid_culture_win_heading}>Imagine<span className={careerStyles.text_italic}> Wild</span></h3>
            </div>
            <div className={careerStyles.culture_four}>
              <h3 className={careerStyles.grid_culture_win_heading}>We before me</h3>
            </div>
            <div className={careerStyles.culture_five}>
              <h3 className={careerStyles.grid_culture_win_heading}>Collaborate & Be <span className={careerStyles.text_italic}>Adaptable</span></h3>
              <Image src={star} alt="Adaptable Star Icon" className={`star-rotation lazy ${careerStyles.star}`} />
            </div>
            <div className={careerStyles.culture_six}>
              <Image src={circleNoThumbsvg} width={220} alt="Integra Magna Agency and Community"
                className={"community-wheel-rotation-gsap lazy"} />
            </div>
          </div>
        </section>

        <div className={careerStyles.image_grid_container_collage}>
          <AnimateImage className={careerStyles.grid_image_one + " textAnim media-container"}>
            <Image src={gridImageOne} alt="UX Research and UI design on laptop" className={careerStyles.grid_images + " animTxt"} />
          </AnimateImage>
          <AnimateImage className={careerStyles.grid_image_two + " textAnim media-container"}>
            <Image src={gridImageTwo} alt="Window view Integra Magna Office" className={careerStyles.grid_images + " animTxt"} />
          </AnimateImage>
          <AnimateImage className={careerStyles.grid_image_three + " textAnim media-container"}>
            <Image src={gridImageThree} alt="Focused working on the Laptop" className={careerStyles.grid_images + " animTxt"} />
          </AnimateImage>
          <AnimateImage className={careerStyles.grid_image_four + " textAnim media-container"}>
            <Image src={gridImageFour} alt="Cafeteria" className={careerStyles.grid_images + " animTxt"} />
          </AnimateImage>
          <AnimateImage className={careerStyles.grid_image_five + " textAnim media-container"}>
            <Image src={gridImageFive} alt="Creative Yellow Wall in the office" className={careerStyles.grid_images + " animTxt"} />
          </AnimateImage>
          <AnimateImage className={careerStyles.grid_image_six + " textAnim media-container"}>
            <Image src={gridImageSix} alt="DIY Reel BTS" className={careerStyles.grid_images + " animTxt"} />
          </AnimateImage>
          <AnimateImage className={careerStyles.grid_image_seven + " textAnim media-container"}>
            <Image src={gridImageSeven} alt="Team Playing Jenga" className={careerStyles.grid_images + " animTxt"} />
          </AnimateImage>
          <AnimateImage className={careerStyles.grid_image_eight + " textAnim media-container"}>
            <Image src={gridImageEight} alt="Integra Magna Office" className={careerStyles.grid_images + " animTxt"} />
          </AnimateImage>
        </div>

        <div className={careerStyles.Where_braand_container}>
          <h1 className="selectedTrans">Where Bland Brands Go Bold</h1>
          <h2 className="selectedTrans">
            At Integra Magna, we skip the monochrome. We&apos;re the renegades, the rule-breakers, the creative alchemists who turn marketing snooze-fests into brand masterpieces. So, are you ready to move beyond monochrome and embrace the bold? <br />P.S. We also have excellent taste in coffee. Just sayin.
          </h2>
        </div>
        <div className={careerStyles.Dont_see_any_job_container + " f-upper-section"}>
          <h2>
            Don’t see any job openings <br />that might fit you? <br />
            <a href="mailto:join@integramagna.com" className={`${careerStyles.emailUs}`}>Email us</a>
          </h2>
        </div>
        <div className="line_container f-upper-section site-container-padding">
          <div className="div_line"></div>
        </div>
        {/* <Form /> */}
        <Footer />
      </div>
    </>
  );
};

export default Career;

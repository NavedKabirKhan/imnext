"use client";
import useGsapScroll from '@/app/components/hooks/useGsapScroll';
import Head from 'next/head';
import ProjectOverview from '@/app/components/Case-Studies/ProjectOverview';
import casestudyStyles from '@/app/styles/Case-Study.module.css';
import Footer from '@/app/components/Footer/FinalFooter';
import NextTilx from '@/app/components/Case-Studies/Next-Case-Study/NextTilx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SlideUpText from '@/app/components/SlideUpText';
import AnimateImage from '@/app/components/AnimateImage';


gsap.registerPlugin(ScrollTrigger);

const imagePaths = {
  landingCircle: '/assets/images/case-studies/landing-circle.svg',

  NeelamHero: '/assets/images/case-studies/neelam-foresteria/neelam-case-study-he.png',
  stickerLogo: '/assets/images/case-studies/neelam-foresteria/sticker-of-logo-on-brown-paper.webp',
  wayFinderSignBoard: '/assets/images/case-studies/neelam-foresteria/way-finder-sign-boards.webp',
  logoOnWall: '/assets/images/case-studies/neelam-foresteria/logo-on-wall.webp',
  girlWithWine: '/assets/images/case-studies/neelam-foresteria/girl-with-wine-on-table.webp',
  conceptSketch: '/assets/images/case-studies/neelam-foresteria/concept-skecth.webp',
  resortWithLogo: '/assets/images/case-studies/neelam-foresteria/image-of-resort-with-logo.webp',
  roomInterior: '/assets/images/case-studies/neelam-foresteria/interior-of-the-room.webp',
  neelamForesteriaVideo: '/assets/images/case-studies/neelam-foresteria/neelam-foresteriavideo.mp4',
  neelamForesteriaVideoThumb: '/assets/images/case-studies/neelam-foresteria/neelam-foresteriavideo.webp',
  visitingCardsOnRock: '/assets/images/case-studies/neelam-foresteria/visiting-cards-on-rock.webp',
  manPlantingAPlant: '/assets/images/case-studies/neelam-foresteria/man-planting-a-plant.webp',
  toteBagInNature: '/assets/images/case-studies/neelam-foresteria/tote-bag-in-nature.webp',
  itinerary: '/assets/images/case-studies/neelam-foresteria/itinerary.webp',
  naturalElements: '/assets/images/case-studies/neelam-foresteria/natural-elements.webp',
};

const Motivata = () => {
  useGsapScroll("#case_study_circular_text");

  return (
    <>
      <Head>
        <title>Neelam Foresteria | Branding | Integra Magna</title>
      </Head>
      {/* <CaseStudyHeader /> */}

      <div className={`${casestudyStyles.case_Study_hero_container} ${casestudyStyles.case_Study_hero_image}`} style={{ backgroundImage: `url(${imagePaths.NeelamHero})` }}>
        <div className={casestudyStyles.Case_Stydy_hero_text}>


          <h2><SlideUpText text="Neelam Foresteria Resort is a top luxury resort in Pachmarhi, surrounded by tall trees, offering a lush, tree-filled setting." /></h2>
          <h1><SlideUpText text="Neelam Foresteria" delay={1} /></h1>
        </div>
        <div className={casestudyStyles.challange_move}>
          <img src={imagePaths.landingCircle} alt="" id="case_study_circular_text" />
        </div>
      </div>

      <ProjectOverview
        title="Whispers of the Wild: Neelam Foresteria's Luxurious Call to Nature."
        description="A sanctuary nestled in the heart of nature, our branding journey transcended traditional luxury to embrace the essence of the jungle. This luxury jungle resort, with its unparalleled amenities, sought to offer guests an immersive experience where elegance meets the untamed wild. Through a sophisticated branding project, we wove the allure of the wilderness with the finesse of luxury, crafting an identity that beckons the discerning traveler to a world where every detail reflects the harmony of luxury and nature's serenity."
        category="Hospitality"
        service="Branding, Strategy, Brand Positioning"
      />

      <section className={casestudyStyles.image_conten_section}>
        <div className={casestudyStyles.image_container_grid}>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
            <img src={imagePaths.stickerLogo} alt="Prestige University Campus Life" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
          </AnimateImage>
        </div>
      </section>

      <section className={casestudyStyles.text_Heading_Only}>
        <p>
          Through a meticulously crafted logo that symbolizes the intertwining of nature and luxury, to a color palette inspired by the verdant greens and earthy tones of the jungle, every element of the brand identity was designed to transport the viewer into the heart of Neelam Foresteria.
        </p>
      </section>

      <section className={casestudyStyles.image_conten_section}>
        <div className={casestudyStyles.image_container_grid}>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
            <img src={imagePaths.wayFinderSignBoard} alt="Prestige University Auditorium" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
          </AnimateImage>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
            <img src={imagePaths.logoOnWall} alt="Prestige University Student Community" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
          </AnimateImage>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
            <img src={imagePaths.girlWithWine} alt="Prestige University Student Community" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
          </AnimateImage>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
            <img src={imagePaths.conceptSketch} alt="Prestige University Auditorium" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
          </AnimateImage>
        </div>
      </section>

      <section className={casestudyStyles.text_Heading_Only}>
        <p>
          The essence of Neelam Foresteria is its ability to offer an immersive experience that goes beyond the conventional.
        </p>
      </section>

      <section className={casestudyStyles.image_conten_section}>
        <div className={casestudyStyles.image_container_grid}>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
            <img src={imagePaths.resortWithLogo} alt="Students Studying Together at Prestige University" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
          </AnimateImage>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
            <img src={imagePaths.roomInterior} alt="Prestige University Backpack" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
          </AnimateImage>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
            <img src={imagePaths.itinerary}
              alt="Directional signpost at Prestige University" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
          </AnimateImage>

        </div>
        <div className={casestudyStyles.image_container_grid_one_third}>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
            <video autoPlay muted loop playsInline className={`${casestudyStyles.image_content} lazy animTxt`}
              poster={imagePaths.neelamForesteriaVideoThumb}
              alt="boAt GTM Strategy and Screen billboard marketing"
              title="boAt GTM Strategy and Screen billboard marketing">
              <source src={imagePaths.neelamForesteriaVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </AnimateImage>
        </div>
      </section>

      <section className={casestudyStyles.text_Heading_Only}>
        <p>
          Neelam Foresteria stands as a jewel in the wilderness, a destination where luxury and nature converge to create a symphony of experiences that resonate with the soul of the modern traveler seeking refuge in the serene arms of nature.
        </p>
      </section>

      <section className={casestudyStyles.image_conten_section}>
        <div className={casestudyStyles.image_container_grid}>

          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
            <img src={imagePaths.visitingCardsOnRock} unoptimized alt="Directional signpost at Prestige University" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
          </AnimateImage>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
            <img src={imagePaths.naturalElements} alt="Directional signpost at Prestige University" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
          </AnimateImage>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
            <img src={imagePaths.manPlantingAPlant} alt="Prestige University Backpack" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
          </AnimateImage>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
            <img src={imagePaths.toteBagInNature} alt="Students Studying Together at Prestige University" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
          </AnimateImage>

        </div>
      </section>


      <NextTilx />

      {/* <Form /> */}
      <Footer />
    </>
  );
};

export default Motivata;

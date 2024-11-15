"use client";
import Head from 'next/head';
import useGsapScroll from '@/app/components/hooks/useGsapScroll';
import ProjectOverview from '@/app/components/Case-Studies/ProjectOverview';
import casestudyStyles from "@/app/styles/Case-Study.module.css";
import NextRoyalLegacy from '@/app/components/Case-Studies/Next-Case-Study/NextRoyalLegacy';
import Footer from '@/app/components/Footer/FinalFooter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Ensure this is installed
import SlideUpText from '@/app/components/SlideUpText';
import AnimateImage from '@/app/components/AnimateImage';

// Import your image assets from the public folder
const imagePaths = {
  boatHero: '/assets/images/case-studies/boat/boat-case-study-hero.png',
  landingCircle: '/assets/images/case-studies/landing-circle.svg',
  twoBillboardOnBuildingThumb: '/assets/images/case-studies/boat/two-billboard-on-building-thumb.webp',
  twoBillboardOnBuilding: '/assets/images/case-studies/boat/two-billboard-on-building.mp4',
  boatStreetBillboardThumb: '/assets/images/case-studies/boat/boat-street-billboard.webp',
  boatStreetBillboard: '/assets/images/case-studies/boat/boat-street-billboard.mp4',
  handsInWater: '/assets/images/case-studies/boat/man-dipping-hands-in-water.webp',
  watch3dRenders: '/assets/images/case-studies/boat/watch-3d-renders.webp',
  stackOfWatches: '/assets/images/case-studies/boat/stack-of-watches.webp',
  manRunning100PlusSportsMode: '/assets/images/case-studies/boat/man-running-100-plus-sports-mode.webp',
  billboardOnBeigeBuilding: '/assets/images/case-studies/boat/billboard-on-beige-building.webp',
  boat2Thumb: '/assets/images/case-studies/boat/boat-2-thumb.webp',
  boat2: '/assets/images/case-studies/boat/boat-2.mp4',
  brownBillboardOnBuildingTopWithBlueSky: '/assets/images/case-studies/boat/brown-billboard-on-building-top-with-blue-sky.webp',
  billboardOnBoothOnRoadWithNatureInBack: '/assets/images/case-studies/boat/billboard-on-booth-on-road-with-nature-in-back.webp',
  billboardOnSilverWall: '/assets/images/case-studies/boat/billboard-on-silver-wall.webp',
  textures: '/assets/images/case-studies/boat/textures.webp',
  imageOfThreeWatchesWithWhiteBackground: '/assets/images/case-studies/boat/image-of-three-watches-with-white-background.webp',
  posterOnTruck: '/assets/images/case-studies/boat/poster-on-truck.webp',
  twoBillboardsOnWallWithBlueChairs: '/assets/images/case-studies/boat/two-billboards-on-wall-with-blue-chairs.webp',
  boat4Thumb: '/assets/images/case-studies/boat/assets/images/case-studies/boat/boat-4-thumb.webp',
  boat4: '/assets/images/case-studies/boat/boat-4.mp4',
  boat5Thumb: '/assets/images/case-studies/boat/boat-5.webp',
  boat5: '/assets/images/case-studies/boat/boat-5.mp4',
  billboardOnWallWithCheetahOnWatch: '/assets/images/case-studies/boat/billboard-on-wall-with-cheetah-on-watch.webp',
  boat7Thumb: '/assets/images/case-studies/boat/boat-7-thumb.webp',
  boat7: '/assets/images/case-studies/boat/boat-7.mp4',
  boat6Thumb: '/assets/images/case-studies/boat/boat-6-thumb.webp',
  boat6: '/assets/images/case-studies/boat/boat-6.mp4',
  collageOfWatches: '/assets/images/case-studies/boat/collage-of-watches.webp',
};

gsap.registerPlugin(ScrollTrigger);

const BOAT = () => {
  useGsapScroll("#case_study_circular_text");


  return (
    <>
      <Head>
        <title>boAt | Strategy | Integra Magna</title>
      </Head>

      <div
        className={`${casestudyStyles.case_Study_hero_container} ${casestudyStyles.case_Study_hero_image_boAt}`}
        style={{ backgroundImage: `url(${imagePaths.boatHero})` }}
      >
        <div className={casestudyStyles.Case_Stydy_hero_text}>
          <h2>
          <SlideUpText text="Boat offers an incredible range of wireless earphones, earbuds, headphones, smartwatches, and home audio.
            Whether for workouts or adventures, Boat will keep you sailing!" />
          </h2>
          <h1>
          <SlideUpText text="boAt" delay={1} />
          </h1>
        </div>
        <div className={casestudyStyles.challange_move}>
          <img src={imagePaths.landingCircle}   alt="" id="case_study_circular_text" />
        </div>
      </div>

      <ProjectOverview
        title="Ticking Towards Tomorrow with boAt Lifestyle&apos;s Smartwatch Revolution."
        description="For a smartwatch launch, we orchestrated an innovative campaign that seamlessly blended outdoor activations with digital dynamism, positioning boAt at the forefront of India&apos;s wearable technology scene. This dual-channel approach not only amplified the launch but also engaged consumers in a conversation about the future of connectivity and style, establishing boAt&apos;s smartwatches as the must-have accessory for the tech-savvy and fashion-forward."
        category="Tech"
        service="Strategy, GTM Plan"
      />

      <section className={casestudyStyles.image_conten_section}>
        <div className={casestudyStyles.image_container_grid}>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
            <video autoPlay muted loop playsInline className={`${casestudyStyles.image_content} lazy animTxt`}
              poster={imagePaths.twoBillboardOnBuildingThumb}
              alt="boAt GTM Strategy and Screen billboard marketing"
              title="boAt GTM Strategy and Screen billboard marketing">
              <source src={imagePaths.twoBillboardOnBuilding} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </AnimateImage>
        </div>
      </section>

      <section className={casestudyStyles.text_Heading_Only}>
        <p className="selectedTrans">
          The outdoor campaign was designed to grab attention in high-traffic
          areas, utilizing billboards, interactive kiosks, and live demonstrations
          that showcased the smartwatch&apos;s cutting-edge features.
        </p>
      </section>

      <section className={casestudyStyles.image_conten_section}>
        <div className={casestudyStyles.image_container_grid}>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
            <video autoPlay muted loop playsInline className={`${casestudyStyles.image_content} lazy animTxt`}
              poster={imagePaths.boatStreetBillboardThumb}
              alt="Meta Ads of boAt Lunar eclipse watch screen billboard"
              title="Meta Ads of boAt Lunar eclipse watch screen billboard">
              <source src={imagePaths.boatStreetBillboard} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </AnimateImage>

          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
            <img
              src={imagePaths.handsInWater}
              alt="A man wearing boAt watch near a water marketing design"
              layout="responsive"
              className={`${casestudyStyles.image_content} lazy animTxt`}
            />
          </AnimateImage>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
            <img
              src={imagePaths.watch3dRenders}
              alt="3D visuals of Lunar Eclipse boat brand for marketing"
              layout="responsive"
              className={`${casestudyStyles.image_content} animTxt`}
            />
          </AnimateImage>
        </div>
      </section>

      <section className={casestudyStyles.text_Heading_Only}>
        <p className="selectedTrans">
          Its sleek design, health monitoring capabilities, and seamless connectivity—these features allowed us to tell a
          story that resonated with both the tech-savvy and the health-conscious.
        </p>
      </section>

      <section className={casestudyStyles.image_conten_section}>
        <div className={casestudyStyles.image_container_grid}>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
            <img
              src={imagePaths.stackOfWatches}
              alt="Watch digital features and different watch straps marketing design"
              
              
              layout="responsive"
              className={`${casestudyStyles.image_content} lazy animTxt`}
            />
          </AnimateImage>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
            <img
              src={imagePaths.manRunning100PlusSportsMode}
              alt="Man running marketing design"
              
              
              layout="responsive"
              className={`${casestudyStyles.image_content} lazy animTxt`}
            />
          </AnimateImage>

          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
            <img
              src={imagePaths.billboardOnBeigeBuilding}
              alt="boAt watch feature wall mural board marketing design"
              
              
              layout="responsive"
              className={`${casestudyStyles.image_content} lazy animTxt`}
            />
          </AnimateImage>
        </div>

        <div className={casestudyStyles.image_container_grid_one_third}>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
            <video autoPlay muted loop playsInline className={`${casestudyStyles.image_content} lazy animTxt`}
              poster={imagePaths.boat2Thumb} alt="prelaunch nature-oriented videos on the Kiosk"
              title="prelaunch nature-oriented videos on the Kiosk">
              <source src={imagePaths.boat2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </AnimateImage>
        </div>
      </section>

      <section className={casestudyStyles.text_Heading_Only}>
        <p className="selectedTrans">
          Through a blend of local insights and vibrant storytelling, we turned
          stores into community hubs where the spirit of sport lives and breathes.
        </p>
      </section>

      <section className={casestudyStyles.image_conten_section}>
        <div className={casestudyStyles.image_container_grid}>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
            <img
              src={imagePaths.brownBillboardOnBuildingTopWithBlueSky}
              alt="Experience the world boAt campaign on a billboard"
              
              
              layout="responsive"
              className={`${casestudyStyles.image_content} lazy animTxt`}
            />
          </AnimateImage>

          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
            <img
              src={imagePaths.billboardOnBoothOnRoadWithNatureInBack}
              alt="boAt watch features a bus stand kiosk"
              
              
              layout="responsive"
              className={`${casestudyStyles.image_content} lazy animTxt`}
            />
          </AnimateImage>

          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
            <img
              src={imagePaths.billboardOnSilverWall}
              alt="boAt watch features a metro board"
              
              
              layout="responsive"
              className={`${casestudyStyles.image_content} lazy animTxt`}
            />
          </AnimateImage>

          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
            <img
              src={imagePaths.textures}
              alt="boAt watch strap material 3D"
              layout="responsive"
              className={`${casestudyStyles.image_content} animTxt`}
            />
          </AnimateImage>

          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
            <img
              src={imagePaths.imageOfThreeWatchesWithWhiteBackground}
              alt="boAt watch strap material showcase"
              
              
              layout="responsive"
              className={`${casestudyStyles.image_content} lazy animTxt`}
            />
          </AnimateImage>

          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
            <img
              src={imagePaths.posterOnTruck}
              alt="Lunar Eclipse boat watch truck marketing"
              
              
              layout="responsive"
              className={`${casestudyStyles.image_content} lazy animTxt`}
            />
          </AnimateImage>

          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
            <img
              src={imagePaths.twoBillboardsOnWallWithBlueChairs}
              alt="watch feature marketing boards at the movie theatre"
              
              
              layout="responsive"
              className={`${casestudyStyles.image_content} lazy animTxt`}
            />
          </AnimateImage>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
            <video autoPlay muted loop playsInline className={`${casestudyStyles.image_content} lazy animTxt`}
              poster={imagePaths.boat4Thumb} title="The product page of boAt lunar eclipse watch on the phone"
              alt="The product page of boAt lunar eclipse watch on the phone">
              <source src={imagePaths.boat4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </AnimateImage>
        </div>
      </section>

      <section className={casestudyStyles.text_Heading_Only}>
        <p className="selectedTrans">
          These activations were not just advertisements; they were experiences
          that allowed consumers to interact with the product, understand its
          value, and envision it in their lifestyle.
        </p>
      </section>

      <section className={casestudyStyles.image_conten_section}>
        <div className={casestudyStyles.image_container_grid}>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className={`${casestudyStyles.image_content} animTxt`}
              poster={imagePaths.boat5Thumb}
              alt="Product video of boat lunar eclipse watch on the phone"
              title="Product video of boat lunar eclipse watch on the phone"
            >
              <source src={imagePaths.boat5} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </AnimateImage>

          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
            <img
              src={imagePaths.billboardOnWallWithCheetahOnWatch}
              alt="The key visual design of the boAt watch on the billboard"
              
              
              layout="responsive"
              className={`${casestudyStyles.image_content} animTxt`}
            />
          </AnimateImage>

          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className={`${casestudyStyles.image_content} animTxt`}
              poster={imagePaths.boat7Thumb}
              alt="Prelaunch videos on Instagram stories on the phone"
              title="Prelaunch videos on Instagram stories on the phone"
            >
              <source src={imagePaths.boat7} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </AnimateImage>

          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className={`${casestudyStyles.image_content} animTxt`}
              poster={imagePaths.boat6Thumb}
              alt="Sports mode feature marketing on the Kiosk"
              title="Sports mode feature marketing on the Kiosk"
            >
              <source src={imagePaths.boat6} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </AnimateImage>
        </div>

        <div className={casestudyStyles.image_container_grid_one_third}>
          <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image_right} textAnim`}>
            <img
              src={imagePaths.collageOfWatches}
              alt="weather, stopwatch, alarm, and countdown feature of the watch for meta ads"
              
              
              layout="responsive"
              className={`${casestudyStyles.image_content} animTxt`}
            />
          </AnimateImage>
        </div>
      </section>
      <NextRoyalLegacy />



      {/* <Form /> */}
      <Footer />
    </>
  );
};

export default BOAT;

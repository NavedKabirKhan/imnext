"use client";
import Head from 'next/head';
import useGsapScroll from '@/app/components/hooks/useGsapScroll';
import ProjectOverview from '@/app/components/Case-Studies/ProjectOverview';
import casestudyStyles from '@/app/styles/Case-Study.module.css';
import Footer from '@/app/components/Footer/FinalFooter';
import NextAdnd from '@/app/components/Case-Studies/Next-Case-Study/NextAdnd';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Ensure this is installed
import SlideUpText from '@/app/components/SlideUpText';
import AnimateImage from '@/app/components/AnimateImage';

gsap.registerPlugin(ScrollTrigger);

// Image Paths for the Decathlon case study
const imagePaths = {
    hero: '/assets/images/case-studies/decathlon/decathlon-hero-image.png',
    landingCircle: '/assets/images/case-studies/landing-circle.svg',
    wallMural1: '/assets/images/case-studies/decathlon/decathlon-wall-mural-1.webp',
    wallMuralSketch: '/assets/images/case-studies/decathlon/decathlon-wall-mural-sketch.webp',
    wallMuralMoodboard: '/assets/images/case-studies/decathlon/decathlon-wall-mural-moodboard.webp',
    wallMural2: '/assets/images/case-studies/decathlon/decathlon-wall-mural-2.webp',
    yogaWoman: '/assets/images/case-studies/decathlon/decathlon-yoga-women.webp',
    manRunning: '/assets/images/case-studies/decathlon/decathlon-man-running.webp',
    cards: '/assets/images/case-studies/decathlon/decathlon-cards.webp',
    storeFront: '/assets/images/case-studies/decathlon/decathlon-store-front-walls.webp',
    goaChurch: '/assets/images/case-studies/decathlon/goa-church.webp',
    manSwimming: '/assets/images/case-studies/decathlon/decathlon-swimming.webp',
    sportsMan: '/assets/images/case-studies/decathlon/decathlon-sports-man.webp',
    storeWalls: '/assets/images/case-studies/decathlon/decathlon-store-walls.webp',
    paperAd: '/assets/images/case-studies/decathlon/decathlon-paper-ad.webp',
    cardsGoaIndore: '/assets/images/case-studies/decathlon/decathlon-card-indore-goa.webp',
    cardsGoaIndore2: '/assets/images/case-studies/decathlon/decathlon-card-indore-goa-2.webp',
    cardsStoreFront: '/assets/images/case-studies/decathlon/decathlon-store-fronts.webp',
};



const Decathlon = () => {
    useGsapScroll("#circular_text");


    return (
        <>
            <Head>
                <title>Decathlon | Strategy | Integra Magna</title>
            </Head>

            {/* Hero Section */}
            <div className={`${casestudyStyles.case_Study_hero_container} ${casestudyStyles.case_Study_hero_image_Decathlon}`} style={{ backgroundImage: `url(${imagePaths.hero})` }}>
                <div className={casestudyStyles.Case_Stydy_hero_text}>

                    <h2><SlideUpText text="Decathlon is the largest sporting goods retailer in the world with over 2,080 stores in 56 countries." /></h2>
                    <h1><SlideUpText text="Decathlon" delay={1} /></h1>
                </div>
                <div className={casestudyStyles.challange_move}>
                    <img src={imagePaths.landingCircle} alt="" id="circular_text" />
                </div>
            </div>

            {/* Project Overview */}
            <ProjectOverview
                title="Discovering India's Playground with Decathlon."
                description="Decathlon's campaign illuminated the presence of its stores across India, bringing sports closer to enthusiasts with ease."
                category="Sports"
                service="Strategy, GTM Plan"
            />

            {/* Image Content Section 1 */}
            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.wallMural1}
                            alt="Decathlon Wall Mural"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                </div>
            </section>

            {/* Text Section 1 */}
            <section className={casestudyStyles.text_Heading_Only}>
                <p>Leveraging innovative storytelling and immersive experiences, Decathlon&apos;s presence was felt from the bustling streets of Mumbai to the serene landscapes of the Himalayas.</p>
            </section>

            {/* Image Content Section 2 */}
            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.wallMuralSketch}
                            alt="Wall Mural Sketch"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.wallMuralMoodboard}
                            alt="Wall Mural Sketch"
                            layout="responsive"


                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                </div>
            </section>
            <section className={casestudyStyles.text_Heading_Only}>
                <p>Decathlon embarked on an ambitious campaign to weave itself into the fabric of India&apos;s sporting culture.</p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.wallMural2}
                            alt="Wall Mural Sketch"
                            layout="responsive"


                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.yogaWoman}
                            alt="Woman practicing yoga in Decathlon"
                            layout="responsive"


                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.manRunning}
                            alt="Man running Decathlon marketing campaign"
                            layout="responsive"


                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.cardsGoaIndore}
                            alt="Cue cards of monument illustrations from Indore and goa"
                            layout="responsive"

                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.goaChurch}
                            alt="Our Lady of the Immaculate conception church, goa"
                            layout="responsive"


                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.manSwimming}
                            alt="A swimmer in a decathlon swim suit"
                            layout="responsive"


                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.cardsGoaIndore2}
                            alt="Decathlon Standee with different sports Activities and KPIs"
                            layout="responsive"


                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.cards}
                            alt="Notepad covers with illustrations of sports and adventure activities."
                            layout="responsive"


                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                </div>
            </section>

            {/* Text Section 2 */}
            <section className={casestudyStyles.text_Heading_Only}>
                <p>Through a blend of local insights and vibrant storytelling, we turned stores into community hubs where the spirit of sport lives and breathes.</p>
            </section>

            {/* Image Content Section 3 */}
            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.storeFront}
                            alt="Decathlon storefront marketing"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.cardsStoreFront}
                            alt="Billboards of monument illustrations from Indore and Goa"
                            layout="responsive"


                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.sportsMan}
                            alt="OOH Marketing of a man playing basketball in Decathlon merch."
                            layout="responsive"


                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

                </div>
                <div className={casestudyStyles.image_container_grid_one_third}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.storeWalls}
                            alt="Billboard and Mural Marketing of Decathlon by Integra Magna"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                </div>
            </section>

            {/* Text Section 3 */}
            <section className={casestudyStyles.text_Heading_Only}>
                <p>The result? A surge in footfall, a stronger brand connection, and an India more in love with sports than ever before.</p>
            </section>
            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.paperAd}
                            alt="Newspaper Marketing Ad of Decathlon by Integra Magna"
                            layout="responsive"


                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                </div>
            </section>


            {/* Next ADND Case Study Component */}
            <NextAdnd />

            {/* Contact Form and Footer */}
            {/* <Form /> */}
            <Footer />
        </>
    );
};

export default Decathlon;

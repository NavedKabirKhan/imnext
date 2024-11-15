"use client";
import useGsapScroll from '@/app/components/hooks/useGsapScroll';
import Head from 'next/head';
import ProjectOverview from '@/app/components/Case-Studies/ProjectOverview';
import casestudyStyles from '@/app/styles/Case-Study.module.css';
import Footer from '@/app/components/Footer/FinalFooter';
import NextTaskey from '@/app/components/Case-Studies/Next-Case-Study/NextTaskey';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SlideUpText from '@/app/components/SlideUpText';
import AnimateImage from '@/app/components/AnimateImage';

gsap.registerPlugin(ScrollTrigger);

const imagePaths = {
    landingCircle: '/assets/images/case-studies/landing-circle.svg',
    motivataHero: '/assets/images/case-studies/tilx/leaf-texture.webp',
    streetSignBoard: '/assets/images/case-studies/tilx/street-sign-board.webp',
    invitationCard: '/assets/images/case-studies/tilx/invitation-card.webp',
    stairs: '/assets/images/case-studies/tilx/stairs.webp',
    streetBillboard: '/assets/images/case-studies/tilx/street-billboard.webp',
    buildingBanner: '/assets/images/case-studies/tilx/building-banner.webp',
    handInHand: '/assets/images/case-studies/tilx/hand-in-hand.webp',
    wineGlass: '/assets/images/case-studies/tilx/wine-glass.webp',
    glasses: '/assets/images/case-studies/tilx/glasses.webp',
    outdoorBillboard: '/assets/images/case-studies/tilx/outdoor-billboard.webp',
    banners: '/assets/images/case-studies/tilx/banners.webp',
    buildingStructure: '/assets/images/case-studies/tilx/building-structure.webp',
    screenBanner: '/assets/images/case-studies/tilx/screen-banner.webp',
    handingBnner: '/assets/images/case-studies/tilx/handing-bnner.webp',
    standee: '/assets/images/case-studies/tilx/standee.webp',
    smallDisplay: '/assets/images/case-studies/tilx/small-display.webp',
    cardboardBag: '/assets/images/case-studies/tilx/cardboard-bag.webp',
};

const Tilx = () => {
    useGsapScroll("#case_study_circular_text");

    return (
        <>
            <Head>
                <title>TILX | Strategy | Integra Magna</title>
            </Head>
            {/* <CaseStudyHeader /> */}

            <div className={`${casestudyStyles.case_Study_hero_container} ${casestudyStyles.case_Study_hero_image}`} style={{ backgroundImage: `url(${imagePaths.motivataHero})` }}>
                <div className={casestudyStyles.Case_Stydy_hero_text}>
                    <h2><SlideUpText text="The Indian Luxury Expo is focused on all dimensions luxury for the Indian Subcontinent and Beyond." /></h2>
                    <h1><SlideUpText text="THE INDIAN LUXURY EXPO" delay={1} /></h1>
                </div>
                <div className={casestudyStyles.challange_move}>
                    <img src={imagePaths.landingCircle} alt="" id="case_study_circular_text" />
                </div>
            </div>

            <ProjectOverview
                title="Elegance Redefined: The Indian Luxury Expo's Visual Symphony."
                description="The Indian Luxury Expo stands as a pinnacle of opulence, showcasing the finest in lifestyle and elegance. Tasked with creating a visual identity befitting this grandeur, we embarked on a comprehensive journey to develop a visual strategy that would not only reflect the expo's luxurious essence but also engage and allure the crème de la crème of society. This narrative promised attendees an immersive vision through the epitome of luxury, making The Indian Luxury Expo a beacon of exquisite taste and sophistication."
                category="Lifestyle"
                service="Strategy, Visual Identity"
            />

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.streetSignBoard} alt="Prestige University Campus Life" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                    Understanding the unique preferences and high expectations of the luxury market, we opted for a design language that blended classic elegance with modern sophistication.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.invitationCard} alt="Prestige University Auditorium" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <dAnimateImageiv className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.stairs} alt="Prestige University Student Community" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </dAnimateImageiv>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.streetBillboard} alt="Prestige University Student Community" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                    For the event collaterals, attention to detail was paramount. From the invitations that served as the first tangible touchpoint of the luxury experience, to the event brochures and signage, every piece was crafted with precision and care.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.buildingBanner} alt="Students Studying Together at Prestige University" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.handInHand} alt="Directional signpost at Prestige University" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.wineGlass} alt="Prestige University Backpack" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.glasses} alt="Directional signpost at Prestige University" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.outdoorBillboard} alt="Prestige University Backpack" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.banners} alt="Directional signpost at Prestige University" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.buildingStructure} alt="Prestige University Backpack" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                </div>
                <div className={casestudyStyles.image_container_grid_one_third}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.screenBanner}
                            alt="Billboard and Mural Marketing of Decathlon by Integra Magna"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                    The culmination of our efforts was a visual symphony that set the stage for The Indian Luxury Expo, an event that promised more than just an exhibition of luxury goods—it offered an unforgettable experience.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.handingBnner} alt="Students Studying Together at Prestige University" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.standee} alt="Directional signpost at Prestige University" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.smallDisplay} alt="Prestige University Backpack" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.cardboardBag} alt="Students Studying Together at Prestige University" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>


                </div>
            </section>


            <NextTaskey />

            {/* <Form /> */}
            <Footer />
        </>
    );
};

export default Tilx;

"use client";
import useGsapScroll from '@/app/components/hooks/useGsapScroll';
import Head from 'next/head';
import ProjectOverview from '@/app/components/Case-Studies/ProjectOverview';
import casestudyStyles from '@/app/styles/Case-Study.module.css';
import Footer from '@/app/components/Footer/FinalFooter';
import Form from '@/app/components/Form/Form';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import NextDecathlon from '@/app/components/Case-Studies/Next-Case-Study/NextDecathlon';
import SlideUpText from '@/app/components/SlideUpText';
import AnimateImage from '@/app/components/AnimateImage';


gsap.registerPlugin(ScrollTrigger);

const imagePaths = {
    landingCircle: '/assets/images/case-studies/landing-circle.svg',
    royalHero: '/assets/images/case-studies/royal-legacy/royal-legacy-case-study-hero1.png',
    roadsideWallMock: '/assets/images/case-studies/royal-legacy/roadside_wall_mock.webp',
    bagOnTable: '/assets/images/case-studies/royal-legacy/bag_on_table.webp',
    juiceBottle: '/assets/images/case-studies/royal-legacy/juice_bottle.webp',
    utensils: '/assets/images/case-studies/royal-legacy/utensils.webp',
    royalLogoSketch: '/assets/images/case-studies/royal-legacy/royal_logo_sketch.webp',
    diningTable: '/assets/images/case-studies/royal-legacy/dining_table.webp',
    menuCardMock: '/assets/images/case-studies/royal-legacy/menu_card_mock.webp',
    ladyInRoyalLegacy: '/assets/images/case-studies/royal-legacy/lady_in_royal_legacy.webp',
    businessCard: '/assets/images/case-studies/royal-legacy/royal_legacy_business_card.webp',
    italyWitlyMenu: '/assets/images/case-studies/royal-legacy/italy_witly_menu.webp',
    posterStandee: '/assets/images/case-studies/royal-legacy/poster_standee.webp',
    foodInBowl: '/assets/images/case-studies/royal-legacy/food_in_bowl.webp',
    handingBnner: '/assets/images/case-studies/royal-legacy/handing-bnner.webp',
    stampCard: '/assets/images/case-studies/royal-legacy/stamp_card.webp',
    blueCounchAndTable: '/assets/images/case-studies/royal-legacy/blue_couch_and_table.webp',
    glassStandMock: '/assets/images/case-studies/royal-legacy/glass_stand_mock.webp',
    royalLegacyBillboard: '/assets/images/case-studies/royal-legacy/royal_legacy_billboard.webp',
    royalLegacyIndiseView: '/assets/images/case-studies/royal-legacy/royal_legacy_inside_view.webp',
    silkScarfMockup: '/assets/images/case-studies/royal-legacy/silk_scarf_mockup.webp',
};

const Tilx = () => {
    useGsapScroll("#case_study_circular_text");

    return (
        <>
            <Head>
                <title>Royal Legacy | Branding | Integra Magna</title>
            </Head>
            {/* <CaseStudyHeader /> */}

            <div className={`${casestudyStyles.case_Study_hero_container} ${casestudyStyles.case_Study_hero_image}`} style={{ backgroundImage: `url(${imagePaths.royalHero})` }}>
                <div className={casestudyStyles.Case_Stydy_hero_text}>
                    <h2><SlideUpText text="Royal Legacy combines traditional heritage with a contemporary twist, enhancing the hospitality landscape. Experience a design that infuses royal history into modern dining!" /></h2>
                    <h1><SlideUpText text="Royal Legacy" delay={1} /></h1>
                </div>
                <div className={casestudyStyles.challange_move}>
                    <img src={imagePaths.landingCircle} alt="" id="case_study_circular_text" />
                </div>
            </div>

            <ProjectOverview
                title="Weaving Tradition and Modernity into a Regal Dining Experience with Royal Legacy."
                description="Royal Legacy tasked us with incorporating their cherished family heritage into a modern dining concept. The objective was to integrate the rich history of royal architecture and family legacy into a brand identity that appeals to today's diners."
                category="Food"
                service="Branding, Strategy, Brand Positioning"
            />

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.roadsideWallMock} alt="Prestige University Campus Life" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                    Royal Legacy sought to merge their deep-rooted family heritage with a modern dining experience. The challenge was to weave the rich tapestry of royal architecture and familial legacy into a brand identity that resonates with contemporary diners.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.bagOnTable} alt="Prestige University Auditorium" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.juiceBottle} alt="Prestige University Student Community" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.utensils} alt="Prestige University Student Community" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                </div>
                <div className={casestudyStyles.image_container_grid_one_third}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.royalLogoSketch}
                            alt="Billboard and Mural Marketing of Decathlon by Integra Magna"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                    Drawing inspiration from ancient royal elegance and the comfort of home-style cooking, our team delivered a complete branding package. We crafted intricate patterns that capture royal aesthetics and developed branding elements that reflect the restaurant’s dedication to tradition. The logo seamlessly melds these aspects, representing both the grandeur of royalty and the warmth of home.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.diningTable} alt="Students Studying Together at Prestige University" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.menuCardMock} alt="Directional signpost at Prestige University" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.ladyInRoyalLegacy} alt="Prestige University Backpack" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>

                </div>
                <div className={casestudyStyles.image_container_grid_one_third}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image_right} textAnim`}>
                        <img
                            src={imagePaths.businessCard}
                            alt="Billboard and Mural Marketing of Decathlon by Integra Magna"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                    Royal Legacy’s final brand identity is not only engaging but also invites diners to indulge in a regal dining experience. The meticulously designed packaging and menu further narrate this noble tale, transforming every meal into a historical journey, crafted with precision and served with passion.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.italyWitlyMenu} alt="Students Studying Together at Prestige University" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.posterStandee} alt="Directional signpost at Prestige University" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.foodInBowl} alt="Prestige University Backpack" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                </div>
            </section>
            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                    Explore Royal Legacy’s detailed design process with Integra Magna and see how we turn historical elegance into a compelling and vibrant brand identity. Discover our unique blend of historical grace and modern style, creating memorable brand experiences.
                </p>
            </section>
            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.stampCard} alt="Students Studying Together at Prestige University" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.blueCounchAndTable} alt="Directional signpost at Prestige University" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.glassStandMock} alt="Prestige University Backpack" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.royalLegacyBillboard} alt="Directional signpost at Prestige University" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.royalLegacyIndiseView} alt="Prestige University Backpack" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.silkScarfMockup} alt="Students Studying Together at Prestige University" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                </div>
            </section>


            <NextDecathlon />

            {/* <Form /> */}
            <Footer />
        </>
    );
};

export default Tilx;

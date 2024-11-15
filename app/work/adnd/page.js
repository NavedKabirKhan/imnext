"use client";
import useGsapScroll from '@/app/components/hooks/useGsapScroll';
import Head from 'next/head';
import ProjectOverview from '@/app/components/Case-Studies/ProjectOverview';
import casestudyStyles from '@/app/styles/Case-Study.module.css';
import Footer from '@/app/components/Footer/FinalFooter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import NextPrestigeUniversity from '@/app/components/Case-Studies/Next-Case-Study/NextPrestigeUniversity';
import SlideUpText from '@/app/components/SlideUpText';
import AnimateImage from '@/app/components/AnimateImage';
gsap.registerPlugin(ScrollTrigger);

// Organize all images and video assets in one object
const imagePaths = {
    adndHero: '/assets/images/case-studies/adnd/adnd-case-study-hero.png',
    landingCircle: '/assets/images/case-studies/landing-circle.svg',
    laptopOnGreyPlatform: '/assets/images/case-studies/adnd/laptop-on-grey-platform.webp',
    ipadMock: '/assets/images/case-studies/adnd/ipad-mock.webp',
    monochromeGroupImage: '/assets/images/case-studies/adnd/monochrome-group-image.webp',
    adndVideoThumb: '/assets/images/case-studies/adnd/adnd-video.webp',
    adndVideo: '/assets/images/case-studies/adnd/adnd-video.mp4',
    legLeft: '/assets/images/case-studies/adnd/leg-left.gif',
    shoban: '/assets/images/case-studies/adnd/shoban.webp',
    diningTableFrontView: '/assets/images/case-studies/adnd/dining-table-front-view.webp',
    blueCouch: '/assets/images/case-studies/adnd/blue-couch.webp',
    anand: '/assets/images/case-studies/adnd/anand.webp',
    legRight: '/assets/images/case-studies/adnd/leg-right.gif',
    laptopOnBrownCouch: '/assets/images/case-studies/adnd/laptop-on-brown-couch.webp',
    whitePiano: '/assets/images/case-studies/adnd/white-piano.webp',
    lineArtArchWithBlackAndWhite: '/assets/images/case-studies/adnd/line-art-arch-with-black-and-white.webp',
    frame: '/assets/images/case-studies/adnd/frame.webp',
    awards: '/assets/images/case-studies/adnd/awards.webp',
    letterningWithCircleFocus1: '/assets/images/case-studies/adnd/letterning-with-circle-focus-1.webp',
    letterningWithCircleFocus2: '/assets/images/case-studies/adnd/letterning-with-circle-focus-2.webp',
    laptopOnWoodenTableWithGreenary: '/assets/images/case-studies/adnd/laptop-on-wooden-table-with-greenary.webp',
    elements: '/assets/images/case-studies/adnd/elements.webp',
    stickerOfLogoOnBrownPaper: '/assets/images/case-studies/neelam-foresteria/sticker-of-logo-on-brown-paper.webp',
    girlWithWineOnTable: '/assets/images/case-studies/neelam-foresteria/girl-with-wine-on-table.webp',
    logONWall: '/assets/images/case-studies/neelam-foresteria/logo-on-wall.webp',
    blackArchitectureImage: '/assets/images/case-studies/adnd/black-architecture-image.webp',

};

const ADND = () => {
    useGsapScroll("#case_study_circular_text");

    return (
        <>

            <Head>
                <title>ADND | Web Design | Integra Magna</title>
            </Head>
            {/* <CaseStudyHeader /> */}
            <div className={`${casestudyStyles.case_Study_hero_container} ${casestudyStyles.case_Study_hero_image}`} style={{ backgroundImage: `url(${imagePaths.adndHero})` }}>
                <div className={casestudyStyles.Case_Stydy_hero_text}>
                    <h2>
                        <SlideUpText text="ADND achieves design excellence by harmonizing the vision of artists with the insight of thinkers, creating unique and innovative solutions for every project." />
                    </h2>
                    <h1>            
                        <SlideUpText text="ADND" delay={1} />
                    </h1>
                </div>
                <div className={casestudyStyles.challange_move}>
                    <img src={imagePaths.landingCircle} alt="" id="case_study_circular_text" layout="responsive" />
                </div>
            </div>

            <ProjectOverview
                title="Crafting the Digital Canvas: ADND&apos;s Architectural Mastery Unveiled."
                description="For ADND, an architecture studio renowned for its innovative designs and visionary projects, we embarked on a mission to mirror their architectural brilliance in the digital realm."
                category="Architecture"
                service="Web Design, Strategy"
            />

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim media-container`}>
                        <img src={imagePaths.laptopOnGreyPlatform} alt="Laptop displaying ADND Ideology on website" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                    The process began with an in-depth understanding of ADND&apos;s brand identity, their architectural style, and the message they wished to convey.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.ipadMock} alt="IPAD showing ADND News page" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.monochromeGroupImage} alt="ADND Team" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <video autoPlay muted loop playsInline className={`${casestudyStyles.image_content} lazy animTxt`} poster={imagePaths.adndVideoThumb}>
                            <source src={imagePaths.adndVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </AnimateImage>
                    {/* Shobhan Kothari Section */}
                    <div className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image}`}>
                        <div className={casestudyStyles.image_container}>
                            <div className={casestudyStyles.small_image_container}>
                                <AnimateImage className={casestudyStyles.imagewrapper}>
                                    <img src={imagePaths.legLeft} alt="Shobhan Kothari co-founder and left leg of ADND" className="lazy" />
                                    <img src={imagePaths.shoban} alt="Shobhan Kothari co-founder" className="lazy"
                                    />
                                </AnimateImage>
                            </div>
                        </div>
                    </div>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.diningTableFrontView} alt="Dining hall with kitchen ADND project"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.blueCouch}
                            alt="Front view of the blue couch and wall hanging Art from the ADND project"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                    <div className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image}`}>
                        <div className={casestudyStyles.image_container}>
                            <div className={casestudyStyles.small_image_container}>
                                <AnimateImage className={casestudyStyles.imagewrapper}>
                                    <img
                                        src={imagePaths.anand}
                                        alt="Anand Menon co-founder"
                                        className="lazy"
                                    />
                                    <img
                                        src={imagePaths.legRight}
                                        alt="Anand Menon co-founder and right leg of ADND"
                                        className="lazy"
                                    />
                                </AnimateImage>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={casestudyStyles.image_container_grid_one_third}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.laptopOnBrownCouch}
                            alt="Laptop on Brown Couch shows ADND work on website"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                    We employed a minimalist aesthetic to ensure the website design highlighted ADND’s projects without overwhelming the user.
                </p>
            </section>
            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} double-image textAnim`}>
                        <img src={imagePaths.whitePiano} alt="Interior Decor with White Piano from the ADND project" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} double-image textAnim`}>
                        <img src={imagePaths.lineArtArchWithBlackAndWhite} alt="Creative window line art with ADND projects Pictures" className={`${casestudyStyles.image_content} animTxt`} />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} double-image textAnim`}>
                        <img src={imagePaths.frame} alt="Polaroid View of ADND Work Highlights" className={`${casestudyStyles.image_content} animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.blackArchitectureImage}
                            alt="Curve Building Architecture"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.awards} alt="ADND Achieved Awards" className={`${casestudyStyles.image_content} animTxt`} />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                    Through careful design and thoughtful development, we crafted a website that stands as a digital monument to ADND&apos;s creativity, precision, and commitment to pushing the boundaries of architecture.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} double-image textAnim`}>
                        <img src={imagePaths.letterningWithCircleFocus1} alt="Ongoing typography for running projects" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} double-image textAnim`}>
                        <img src={imagePaths.letterningWithCircleFocus2} alt="UNBUILT typography for creative projects" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.laptopOnWoodenTableWithGreenary} alt="Laptop on a Table shows a rough wireframe of the ADND Website" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.elements} alt="Typography formats for website presented with Shapes Animation" className={`${casestudyStyles.image_content} animTxt`} />
                    </AnimateImage>
                </div>
            </section>


            <div className={`${casestudyStyles.line_container} site-container-padding`}>
                <div className="div-line"></div>
            </div>
            <NextPrestigeUniversity />
            {/* <Form /> */}
            <Footer />
        </>
    );
};

export default ADND;

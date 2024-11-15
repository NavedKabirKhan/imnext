"use client";
import useGsapScroll from '@/app/components/hooks/useGsapScroll';
import Head from 'next/head';
import ProjectOverview from '@/app/components/Case-Studies/ProjectOverview';
import casestudyStyles from '@/app/styles/Case-Study.module.css';
import Footer from '@/app/components/Footer/FinalFooter';
import NextMotivata from '@/app/components/Case-Studies/Next-Case-Study/NextMotivata';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SlideUpText from '@/app/components/SlideUpText';
import AnimateImage from '@/app/components/AnimateImage';


gsap.registerPlugin(ScrollTrigger);

const imagePaths = {
    prestigeHero: '/assets/images/case-studies/prestige-university-branding/pu-case-study-hero-i.png',
    landingCircle: '/assets/images/case-studies/landing-circle.svg',
    bookMockup: '/assets/images/case-studies/prestige-university-branding/book-mockup.webp',
    toteBag: '/assets/images/case-studies/prestige-university-branding/man-wearing-tote-bag.webp',
    twoFlyersOnWall: '/assets/images/case-studies/prestige-university-branding/two-flyers-on-wall.webp',
    boysInLibraryStudying: '/assets/images/case-studies/prestige-university-branding/two-boys-in-library-studying.webp',
    directionSign: '/assets/images/case-studies/prestige-university-branding/direction-sign.webp',
    posterOnGlassDoor: '/assets/images/case-studies/prestige-university-branding/poster-on-glass-door.webp',
    campusLife: '/assets/images/case-studies/prestige-university-branding/campus-life.webp',
    auditorium: '/assets/images/case-studies/prestige-university-branding/auditorium.webp',
    threeManStudyingTogether: '/assets/images/case-studies/prestige-university-branding/three-man-studying-together.webp',
    buildingFrontWithLogo: '/assets/images/case-studies/prestige-university-branding/building-front-with-logo.webp',
    flyerWithPattern: '/assets/images/case-studies/prestige-university-branding/flyer-with-pattern.webp',
    bagHangingOnPole: '/assets/images/case-studies/prestige-university-branding/bag-hanging-on-pole.webp',
    posterInHand: '/assets/images/case-studies/prestige-university-branding/poster-in-hand.webp',
    presitgeUniversityHoodies: '/assets/images/case-studies/prestige-university-branding/prestige-university-hoodies.webp',
    presitgeUniversityBrochure1: '/assets/images/case-studies/prestige-university-branding/prestige-university-brochure-1.webp',
    presitgeUniversityBrochure2: '/assets/images/case-studies/prestige-university-branding/prestige-university-brochure-2.webp',
    bookInHands: '/assets/images/case-studies/prestige-university-branding/book-in-hands.webp',
    signBoardIcon: '/assets/images/case-studies/prestige-university-branding/hand-with-sign-board-icon.webp',
};

const PrestigeUniversity = () => {
    useGsapScroll("#case_study_circular_text");

    return (
        <>
            <Head>
                <title>Prestige University | Branding | Integra Magna</title>
            </Head>
            {/* <CaseStudyHeader /> */}

            <div className={`${casestudyStyles.case_Study_hero_container} ${casestudyStyles.case_Study_hero_image}`} style={{ backgroundImage: `url(${imagePaths.prestigeHero})` }}>
                <div className={casestudyStyles.Case_Stydy_hero_text}>
                <h2><SlideUpText text="Prestige University embarked on a transformative branding project to position itself as the crucible for future leaders." /></h2>
                <h1><SlideUpText text="Prestige University" delay={1} /></h1>
                </div>
                <div className={casestudyStyles.challange_move}>
                    <img src={imagePaths.landingCircle} alt=""  id="case_study_circular_text" />
                </div>
            </div>

            <ProjectOverview
                title="Sculpting Leaders of Tomorrow at Prestige University"
                description="Specializing in super-specialized MBA courses, the university aimed to craft an identity that resonates with ambition, innovation, and excellence. Through strategic branding, we highlighted Prestige University's commitment to not just education, but to shape the global business leaders of tomorrow with cutting-edge courses tailored for the visionary, the strategist, and the disruptor."
                category="Education"
                service="Branding, Visual Identity, Strategy, Brand Positioning"
            />

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.bookMockup} alt="Prestige University Campus Life" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                    The challenge was to encapsulate the university&apos;s ethos of innovation, leadership, and academic rigor in a brand identity that speaks directly to the aspirations of ambitious students around the globe.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.toteBag} alt="Prestige University Auditorium" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.twoFlyersOnWall} alt="Prestige University Student Community" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.boysInLibraryStudying} alt="Prestige University Student Community" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.directionSign} alt="Prestige University Auditorium" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                    Through our strategic branding efforts, we established Prestige University not just as an institution of higher learning, but as a crucible for innovation and leadership.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.posterOnGlassDoor} alt="Students Studying Together at Prestige University" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.threeManStudyingTogether} alt="Directional signpost at Prestige University" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.buildingFrontWithLogo} alt="Prestige University Backpack" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.flyerWithPattern} alt="Students Studying Together at Prestige University" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                </div>
                <div className={casestudyStyles.image_container_grid_one_third}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.signBoardIcon}
                            alt="Laptop on Brown Couch shows ADND work on website"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                    Prestige University&apos;s reimagined brand identity is a promise of the transformative educational journey that awaits its students, setting a new benchmark for MBA education on the global stage.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                 
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.bagHangingOnPole} alt="Directional signpost at Prestige University" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.posterInHand} alt="Prestige University Backpack" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.presitgeUniversityHoodies} alt="Students Studying Together at Prestige University" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.presitgeUniversityBrochure1} alt="Students Studying Together at Prestige University" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.presitgeUniversityBrochure2} alt="Students Studying Together at Prestige University" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                </div>
                <div className={casestudyStyles.image_container_grid_one_third}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.bookInHands}
                            alt="Laptop on Brown Couch shows ADND work on website"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                </div>
            </section>


            <NextMotivata />

            {/* <Form /> */}
            <Footer />
        </>
    );
};

export default PrestigeUniversity;

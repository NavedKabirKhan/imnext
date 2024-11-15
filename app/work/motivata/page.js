"use client";
import useGsapScroll from '@/app/components/hooks/useGsapScroll';
import Head from 'next/head';
import ProjectOverview from '@/app/components/Case-Studies/ProjectOverview';
import casestudyStyles from '@/app/styles/Case-Study.module.css';
import Footer from '@/app/components/Footer/FinalFooter';
import NextNeelamForesteria from '@/app/components/Case-Studies/Next-Case-Study/NextNeelamForesteria';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SlideUpText from '@/app/components/SlideUpText';
import AnimateImage from '@/app/components/AnimateImage';

gsap.registerPlugin(ScrollTrigger);

const imagePaths = {
    landingCircle: '/assets/images/case-studies/landing-circle.svg',
    motivataHero: '/assets/images/case-studies/motivata/motivata-hero-image.png',
    streetBillboard: '/assets/images/case-studies/motivata/street-billboard.webp',
    streetSignBoard: '/assets/images/case-studies/motivata/street-sign-board.webp',
    wristBand: '/assets/images/case-studies/motivata/motivata-wrist-band.webp',
    confetti: '/assets/images/case-studies/motivata/confetti.webp',
    pinBadges: '/assets/images/case-studies/motivata/pin-badges.webp',
    stickerCloud: '/assets/images/case-studies/motivata/sticker--cloud.webp',
    sunShining: '/assets/images/case-studies/motivata/sun-shining.webp',
    directionSign: '/assets/images/case-studies/motivata/direction-sign.webp',
    motivataToteBag: '/assets/images/case-studies/motivata/motivata-tote-bag.webp',
    motivataBeerCan: '/assets/images/case-studies/motivata/motivata-beer-can.webp',
    motivataLogoAnimation: '/assets/images/case-studies/motivata/motivata-logo-animation.mp4',
    motivataLogoAnimationThumb: '/assets/images/case-studies/motivata/motivata-logo-animation.webp',
    tShirtDesign: '/assets/images/case-studies/motivata/t-shirt-design.webp',
    streetBlackPoster: '/assets/images/case-studies/motivata/street-black-poster.webp',
    invitationCards: '/assets/images/case-studies/motivata/invitation-cards.webp',
    streetBillboard2: '/assets/images/case-studies/motivata/street-billboard-2.webp',
    motivataPemplate: '/assets/images/case-studies/motivata/motivata-pemplate.webp',
    motivataSignCard: '/assets/images/case-studies/motivata/motivata-sign-card.webp',
};

const Motivata = () => {
    useGsapScroll("#case_study_circular_text");

    return (
        <>
            <Head>
                <title>Motivata | Branding | Integra Magna</title>
            </Head>
            {/* <CaseStudyHeader /> */}

            <div className={`${casestudyStyles.case_Study_hero_container} ${casestudyStyles.case_Study_hero_image}`} style={{ backgroundImage: `url(${imagePaths.motivataHero})` }}>
                <div className={casestudyStyles.Case_Stydy_hero_text}>
             
                    <h2><SlideUpText text="Motivata, a festival dedicated to inspiring youth and fostering self-growth. They invited attendies to embark on a journey of exploration and inspiration." /></h2>
                    <h1><SlideUpText text="MOTIVATA" delay={1} /></h1>
                </div>
                <div className={casestudyStyles.challange_move}>
                    <img src={imagePaths.landingCircle} alt=""  id="case_study_circular_text" />
                </div>
            </div>

            <ProjectOverview
                title="A Festival of Self-Growth, Heart of the vibrant youth culture."
                description="In the heart of the vibrant youth culture, Motivata emerged as a pioneering festival with a mission to inspire, empower, and catalyze self-growth among the younger generation. The essence of this unique event was to create an immersive experience that not only educates and motivates but also celebrates the journey of personal development in the most dynamic way possible. Our task was to conceptualize a theme and visual strategy that would capture the spirit of Motivata, making it not just an event but a movement that resonates with the vibrancy and aspirations of today's youth."
                category="Hospitality"
                service="Branding, Strategy, Brand Positioning"
            />

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.streetBillboard} alt="Prestige University Campus Life" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                    The illustrations, a core component of our visual strategy, were not just decorative. They were narratives in themselves, each telling a story of transformation, resilience, and the joy of discovering one&apos;s potential.                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.streetSignBoard} alt="Prestige University Auditorium" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.wristBand} alt="Prestige University Student Community" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.confetti} alt="Prestige University Student Community" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                    Furthermore, our visual strategy extended to the design of workshops, talks, and activities that formed the backbone of the Motivata festival.                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.pinBadges} alt="Students Studying Together at Prestige University" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.stickerCloud} alt="Directional signpost at Prestige University" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.sunShining} alt="Prestige University Backpack" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.directionSign} alt="Students Studying Together at Prestige University" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.motivataToteBag} alt="Directional signpost at Prestige University" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.motivataBeerCan} alt="Prestige University Backpack" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                    By integrating the theme and illustrations into these educational and inspirational sessions, we ensured that the message of vibrancy and growth was echoed in every aspect of the attendee&apos;s journey.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <video autoPlay muted loop playsInline className={`${casestudyStyles.image_content} lazy animTxt`}
                            poster={imagePaths.motivataLogoAnimationThumb}
                            alt="boAt GTM Strategy and Screen billboard marketing"
                            title="boAt GTM Strategy and Screen billboard marketing">
                            <source src={imagePaths.motivataLogoAnimation} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>                   
                         </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.tShirtDesign} alt="Directional signpost at Prestige University" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.streetBlackPoster} alt="Prestige University Backpack" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.invitationCards} alt="Students Studying Together at Prestige University" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.streetBillboard2} alt="Students Studying Together at Prestige University" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.motivataPemplate} alt="Directional signpost at Prestige University" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.motivataSignCard} alt="Prestige University Backpack" layout="responsive"  className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                
                </div>
            </section>


            <NextNeelamForesteria />

            {/* <Form /> */}
            <Footer />
        </>
    );
};

export default Motivata;

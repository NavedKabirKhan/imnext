"use client";
import useGsapScroll from '@/app/components/hooks/useGsapScroll';
import Head from 'next/head';
import ProjectOverview from '@/app/components/Case-Studies/ProjectOverview';
import casestudyStyles from '@/app/styles/Case-Study.module.css';
import Footer from '@/app/components/Footer/FinalFooter';
import NextBoat from '@/app/components/Case-Studies/Next-Case-Study/NextBoat';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SlideUpText from '@/app/components/SlideUpText';
import AnimateImage from '@/app/components/AnimateImage';

gsap.registerPlugin(ScrollTrigger);

const imagePaths = {
    landingCircle: '/assets/images/case-studies/landing-circle.svg',
    taskeyHero: '/assets/images/case-studies/taskey/taskey-case-study-hero.webp',
    taskeylogophonemockup: '/assets/images/case-studies/taskey/taskeylogophonemockup.webp',
    taskeywelcomescreenThumb: '/assets/images/case-studies/taskey/taskeywelcomescreen.webp',
    taskeywelcomescreen: '/assets/images/case-studies/taskey/taskeywelcomescreen.mp4',
    createtaskinmoments: '/assets/images/case-studies/taskey/createtaskinmoments.webp',
    manusingphone: '/assets/images/case-studies/taskey/manusingphone.webp',
    taskeybillboarddisplayreminders: '/assets/images/case-studies/taskey/taskeybillboarddisplayreminders.webp',
    productivegirl: '/assets/images/case-studies/taskey/productivegirl.webp',
    filterbytaskscreen: '/assets/images/case-studies/taskey/filterbytaskscreen.webp',
    filterbytaskpopup: '/assets/images/case-studies/taskey/filterbytaskpopup.webp',
    taskeytasklistThumb: '/assets/images/case-studies/taskey/taskeytasklist.webp',
    taskeytasklist: '/assets/images/case-studies/taskey/taskeytasklist.mp4',
    taskeyanalyticsbook: '/assets/images/case-studies/taskey/taskeyanalyticsbook.webp',
    taskeyappicon: '/assets/images/case-studies/taskey/taskeyappicon.webp',
    createtaskscreen: '/assets/images/case-studies/taskey/createtaskscreen.webp',
    twopeoplediscussion: '/assets/images/case-studies/taskey/twopeoplediscussion.webp',
    swipeaction: '/assets/images/case-studies/taskey/swipeaction.webp',
    frequentlyusedpop: '/assets/images/case-studies/taskey/frequentlyusedpop.webp',
    conferencemeeting: '/assets/images/case-studies/taskey/conferencemeeting.webp',
    girlorganizingtask: '/assets/images/case-studies/taskey/girlorganizingtask.webp',
    deletetaskThumb: '/assets/images/case-studies/taskey/deletetaskthumb.webp',
    deletetask: '/assets/images/case-studies/taskey/deletetask.mp4',
    createlist: '/assets/images/case-studies/taskey/createlist.webp',
    createlistphonemockup: '/assets/images/case-studies/taskey/createlistphonemockup.webp',
    taskeystreetboardmockup: '/assets/images/case-studies/taskey/taskeystreetboardmockup.webp',
};

const Tilx = () => {
    useGsapScroll("#case_study_circular_text");

    return (
        <>
            <Head>
                <title>Taskey | Strategy | Integra Magna</title>
            </Head>
            {/* <CaseStudyHeader /> */}

            <div className={`${casestudyStyles.case_Study_hero_container} ${casestudyStyles.case_Study_hero_image}`} style={{ backgroundImage: `url(${imagePaths.taskeyHero})` }}>
                <div className={casestudyStyles.Case_Stydy_hero_text}>
       
                    <h2><SlideUpText text="A revolutionary concept where you can send tasks to your
                        contacts like a message, with added features for setting
                        dates, times, and automated reminders. Simple, fast, and
                        efficient task management!" /></h2>
                    <h1><SlideUpText text="TasKey" delay={1} /></h1>
                    
                </div>
                <div className={casestudyStyles.challange_move}>
                    <img src={imagePaths.landingCircle} alt="" id="case_study_circular_text" />
                </div>
            </div>

            <ProjectOverview
                title="Streamlining Your Day with TasKey: Where Simplicity Meets Productivity."
                description="TasKey is a productivity app designed to simplify task management for individuals and teams alike. The brand needed more than just a functional app—it required a UX/UI transformation that could engage users, streamline task handling, and make the entire process feel effortless. Our goal was to craft an intuitive, visually appealing interface that allowed users to focus on completing tasks without getting bogged down in complexity. We aimed to make TasKey not only a tool for productivity but also an enjoyable user experience."
                category="Tech"
                service="App Design & Development"
            />

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.taskeylogophonemockup} alt="Smartphone displaying the TasKey app logo on a blue screen, placed on a rocky surface." layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                    We aimed to simplify the process of managing tasks, ensuring users could navigate effortlessly. Our approach involved using vibrant colors and clean layouts to enhance user interaction and overall experience.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <video autoPlay muted loop playsInline className={`${casestudyStyles.image_content} lazy animTxt`}
                            poster={imagePaths.taskeywelcomescreenThumb}
                            alt="Welcome screen displaying the app logo with a simple and clean interface to start managing tasks."
                            title="Welcome screen displaying the app logo with a simple and clean interface to start managing tasks.">
                            <source src={imagePaths.taskeywelcomescreen} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.createtaskinmoments} alt="Displaying the 'Create Task' feature of a task management app with the message 'Create task in moments" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.manusingphone} alt="Man sitting on stairs using phone." layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.taskeybillboarddisplayreminders} alt="Billboard displaying Taskey app with a phone screen reminder notification and the text 'On time reminders - Never forget what matters." layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                    The minimalist design made task creation and collaboration effortless. Users could now manage tasks smoothly while staying visually engaged.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.productivegirl} alt="Young woman working in a cafe, writing in a notebook while using a tablet, with a coffee cup and meal on the table." layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.filterbytaskscreen} alt="Person holding a smartphone displaying a task management app with a 'Filter By Task' popup." layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.filterbytaskpopup} alt="Task management app interface showing a 'Filter By Task' popup with options to view all tasks, tasks assigned to me, and tasks assigned by me." layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className={`${casestudyStyles.image_content} animTxt`}
                            poster={imagePaths.taskeytasklistThumb}
                            alt="Task management app interface showing a 'Filter By Task' popup with options to view all tasks, tasks assigned to me, and tasks assigned by me."
                            title="Task management app interface showing a 'Filter By Task' popup with options to view all tasks, tasks assigned to me, and tasks assigned by me."
                        >
                            <source src={imagePaths.taskeytasklist} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.taskeyanalyticsbook} alt="Close-up of two people reviewing data and sketches in a notebook" layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                </div>
                <div className={casestudyStyles.image_container_grid_one_third}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image_right} textAnim`}>
                        <img
                            src={imagePaths.taskeyappicon}
                            alt="Close-up of a smartphone screen displaying the Taskey app icon alongside other icons."
                            width={100}
                            height={100}
                            layout="responsive"
                            className={`${casestudyStyles.image_content} animTxt`}
                        />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                    The app allowed seamless integration of individual and team tasks, catering to both personal and professional needs. This flexibility made TasKey adaptable to users’ evolving demands.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img src={imagePaths.createtaskscreen} alt="Smartphone displaying the 'Create Task' screen of a task management app, with other options." layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.twopeoplediscussion} alt="Two business professionals sitting together, discussing work on a tablet, with a laptop on the table in a modern office setting." layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.swipeaction} alt="Smartphone screen showing a task management app with swipe actions." layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                </div>
            </section>
            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                    We introduced automated notifications and tracking features to enhance engagement. These tools helped users stay on top of deadlines and progress, creating a more efficient experience.
                </p>
            </section>
            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.frequentlyusedpop} alt="Hand holding a smartphone displaying a 'Send/Assign Task' interface." layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.conferencemeeting} alt="Business team in a conference meeting discussing around a table." layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.girlorganizingtask} alt="Young woman holding a phone and pen, writing or organizing tasks on paper outdoors." layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className={`${casestudyStyles.image_content} animTxt`}
                            poster={imagePaths.deletetaskThumb}
                            alt="App interface showing a task list with options to view, manage, and delete tasks. The user can swipe to delete tasks."
                            title="App interface showing a task list with options to view, manage, and delete tasks. The user can swipe to delete tasks."
                        >
                            <source src={imagePaths.deletetask} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.createlist} alt="Create List interface with options to add members, add pictures, and list assigned members." layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img src={imagePaths.createlistphonemockup} alt="Hand holding a smartphone displaying the 'Create List' interface." layout="responsive" className={`${casestudyStyles.image_content} lazy animTxt`} />
                    </AnimateImage>
                </div>
                <div className={casestudyStyles.image_container_grid_one_third}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.taskeystreetboardmockup}
                            alt="Street billboard displaying TasKey app with the message 'Send/Assign tasks to your contacts instantly' and a task management interface."
                            width={100}
                            height={100}
                            layout="responsive"
                            className={`${casestudyStyles.image_content} animTxt`}
                        />
                    </AnimateImage>
                </div>
            </section>
            <section className={casestudyStyles.text_Heading_Only}>
                <p>
                TasKey’s new design has transformed productivity by making task management as simple as possible. It stands out in a crowded market with its user-friendly interface and enhanced functionality.
                </p>
            </section>


            <NextBoat />

            {/* <Form /> */}
            <Footer />
        </>
    );
};

export default Tilx;

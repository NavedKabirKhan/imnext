// import { Accordion, AccordionItem } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import accordianStyles from "./Accordian.module.css";
import Image from "next/legacy/image";
// import crossIcon from "./crossIcon"
import crossIcon from "./cross-icon.svg"; // Ensure this path is correct


const Accordiannew = ({ openFormModule }) => {

    const accordionData = [
        {
            title: "Sales and Marketing",
            type: "Internship",
            mode: "Remote",
            key: "sami",  // Add the key for each job to map to form
            content: (
                <>
                    <p>
                        We are looking for a qualified sales intern to assist in various stages of the sales funnel, including creating awareness of new offerings, generating leads, and retaining customers. You&apos;ll gain hands-on experience working on challenging, meaningful projects.
                    </p>
                    <br />
                    <h4>- Responsibilities and Duties:</h4>
                    <br />
                    <ul>
                        <li>Research and generate lists of potential customers.</li>
                        <li>Provide input on customer briefs, presentations, and sales literature.</li>
                        <li>Help develop client relationships and retain existing accounts.</li>
                        <li>Assist in evaluating new sponsorship opportunities.</li>
                        <li>Learn and apply sales techniques.</li>
                        <li>Maintain sales records.</li>
                    </ul>
                    <br />
                    <h4>- Only those candidates can apply who:</h4>
                    <br />
                    <ul>
                        <li>Are available for a full-time (remote) internship.</li>
                        <li>Can start the internship immediately or within 15 days.</li>
                        <li>Are available for a duration of 3 months (minimum).</li>
                    </ul>
                    <br />
                    <h4>- Required Experience and Qualifications:</h4>
                    <br />
                    <ul>
                        <li>Basic understanding of international customers, markets & businesses.</li>
                        <li>Some Ideas about the creative industry (animation, video, etc.) would be an added advantage.</li>
                    </ul>

                    <button
                        className={accordianStyles.apply_button}
                        onClick={() => openFormModule("sami")}
                    >
                        <strong>APPLY NOW</strong>
                    </button>
                </>
            ),
        },
        {
            title: "UX/UI Designer",
            type: "Internship",
            mode: "In-office",
            key: "uui",  // Add the key for each job to map to form
            content: (
                <>
                    <p>
                        We are looking for a UX UI Intern at Integra Magna located in Indore. As a UX UI Intern, you will be involved in the day-to-day tasks of designing and implementing user interfaces for our clients. This is an on-site role that requires you to be based in Indore.
                    </p>
                    <br />
                    <h4>- Responsibilities and Duties:</h4>
                    <br />
                    <ul>
                        <li>Assist in user research and usability testing.</li>
                        <li>Create wireframes and interactive prototypes.</li>
                        <li>Design visual elements and maintain consistency.</li>
                        <li>Collaborate with cross-functional teams.</li>
                        <li>Conduct competitive analysis.</li>
                        <li>Support ongoing projects and make revisions.</li>
                        <li>Communicate design ideas and respond to feedback.</li>
                        <li>Organize and manage design files.</li>
                        <li>Participate in brainstorming sessions.</li>
                        <li>Conduct user testing and iterate designs.</li>
                    </ul>
                    <br />
                    <h4>- Only those candidates can apply who:</h4>
                    <br />
                    <ul>
                        <li>Are available for full time (in-office) internship.</li>
                        <li>Can start the internship immediately or within 15 days.</li>
                        <li>Are available for a duration of 6 months (minimum).</li>
                    </ul>
                    <br />
                    <h4>- Required Experience and Qualifications:</h4>
                    <br />
                    <ul>
                        <li>Proficiency in design software tools such as Adobe Creative Suite, Figma.</li>
                        <li>Experience with wireframing and prototyping tools.</li>
                        <li>Knowledge of responsive design and mobile-first approach.</li>
                    </ul>

                    <button
                        className={accordianStyles.apply_button}
                        onClick={() => openFormModule("uui")}
                    >
                        <strong>APPLY NOW</strong>
                    </button>
                </>
            ),
        },
        {
            title: "Motion Graphic Design",
            type: "Internship",
            mode: "In-office",
            key: "mgdi",
            content: (
                <>
                    <p>
                        We are seeking a talented and enthusiastic Motion Graphic Design Intern who will assist in the development of assigned print and digital projects, including video and animated content. The role requires a creative individual with a keen eye for design, animation, and storytelling. This is a fantastic opportunity for someone looking to gain hands-on experience in motion graphics and to work closely with a team of experienced designers on a variety of projects.
                    </p>
                    <br />
                    <h4>- Responsibilities and Duties:</h4>
                    <br />
                    <ul>
                        <li>Stay updated with current motion design trends, tools, materials, and practices.</li>
                        <li>Work on the company&apos;s social media projects, including creating engaging video content.</li>
                        <li>Produce quality designs that accurately reflect a visual design language or brand guidelines.</li>
                        <li>Contribute innovative ideas and design solutions in brainstorming sessions.</li>
                    </ul>
                    <br />
                    <h4>- Only those candidates can apply who:</h4>
                    <br />
                    <ul>
                        <li>Are available for a full-time (in-office) internship.</li>
                        <li>Can start the internship immediately or within 15 days.</li>
                        <li>Are available for a duration of 6 months.</li>
                    </ul>
                    <br />
                    <h4>- Required Experience and Qualifications:</h4>
                    <br />
                    <ul>
                        <li>Proficient in Adobe Photoshop, Adobe Illustrator, and especially Adobe After Effects.</li>
                        <li>Familiarity with Adobe Premiere Pro and Lightroom is a plus.</li>
                        <li>Foundational knowledge of typography, color, grid, and composition.</li>
                    </ul>
                    <button
                        className={accordianStyles.apply_button}
                        onClick={() => openFormModule("mgdi")}
                    >
                        <strong>APPLY NOW</strong>
                    </button>
                </>
            ),
        },
        {
            title: "Social Media Manager",
            type: "Internship",
            mode: "In-office",
            key: "smmi",
            content: (
                <>
                    <p>
                        As a social media manager intern, you will play a crucial role in supporting our social media strategy across various platforms. This internship is designed for individuals passionate about digital marketing and social media, offering the opportunity to gain practical experience in content creation, campaign management, and analytics.
                    </p>
                    <br />
                    <h4>- Responsibilities and Duties:</h4>
                    <br />
                    <ul>
                        <li>Stay updated with current Social Media trends, tools, materials, and practices.</li>
                        <li>Work on the company&apos;s social media projects, including creating engaging video content.</li>
                        <li>Produce quality designs that accurately reflect a visual design language or brand guidelines.</li>
                        <li>Contribute innovative ideas and design solutions in brainstorming sessions.</li>
                    </ul>
                    <br />
                    <h4>- Only those candidates can apply who:</h4>
                    <br />
                    <ul>
                        <li>Are available for a full-time (in-office) internship.</li>
                        <li>Can start the internship immediately or within 15 days.</li>
                        <li>Are available for a duration of 3 months (minimum).</li>
                    </ul>
                    <br />
                    <h4>- Required Experience and Qualifications:</h4>
                    <br />
                    <ul>
                        <li>Proficiency in social media platforms (Facebook, Twitter, Instagram, and LinkedIn).</li>
                        <li>Basic understanding of content creation tools (e.g., Canva, Adobe Creative Suite).</li>
                        <li>Eagerness to learn and stay updated with social media trends.</li>
                    </ul>

                    <button
                        className={accordianStyles.apply_button}
                        onClick={() => openFormModule("smmi")}
                    >
                        <strong>APPLY NOW</strong>
                    </button>
                </>
            ),
        },
    ];

    return (
        //     < Accordion >
        //     <AccordionItem key="1" aria-label="Accordion 1" title={
        //         <div style={{ display: "flex", width: "100%" }}>
        //             <h3 className={accordianStyles.setname}>{item.title}</h3>
        //             <h3 className={accordianStyles.settype}>{item.type}</h3>
        //             <h3 className={accordianStyles.setmode}>{item.mode}</h3>
        //             <Image
        //       src={crossIcon}
        //       alt="Cross Icon"
        //       className={
        //         activeIndex === index
        //           ? accordianStyles.cross_icon_active
        //           : accordianStyles.cross_icon
        //       }
        //       width={30}
        //       height={30}
        //     />
        //         </div>
        //     }>
        //         {defaultContent}
        //     </AccordionItem>
        //     <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
        //         {defaultContent}
        //     </AccordionItem>
        //     <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
        //         {defaultContent}
        //     </AccordionItem>
        // </Accordion >
        (<Accordion className={accordianStyles.accordion_container} variant="light">
            {accordionData.map((item, index) => (
                <AccordionItem
                    className={accordianStyles.accordion_item}
                    key={index}

                    aria-label={`Accordion ${index}`}
                    title={
                        <div className={accordianStyles.header}>
                            <h3 className={accordianStyles.setname}>{item.title}</h3>
                            <h3 className={accordianStyles.settype}>{item.type}</h3>
                            <h3 className={accordianStyles.setmode}>{item.mode}</h3>
                            {/* <Image
                                src={crossIcon}
                                alt="Cross Icon"

                                width={30}
                                height={30}
                            /> */}
                        </div>
                    }
                    indicator={
                        <Image
                            src={crossIcon}
                            alt="Cross Icon"
                            className={accordianStyles.cross_icon}
                            width={30}
                            height={30}
                        />}
                >
                    <div className={accordianStyles.set_content}>{item.content}</div>
                </AccordionItem>
            ))}
        </Accordion>)


        // (<Accordion className={accordianStyles.accordion_container}>
        //     {accordionData.map((item, index) => (
        //         <AccordionItem
        //             className={accordianStyles.accordion_item}
        //             key={index}

        //             aria-label={`Accordion ${index}`}
        //             title={
        //                 <div className={accordianStyles.header}>
        //                     <h3 className={accordianStyles.setname}>{item.title}</h3>
        //                     <h3 className={accordianStyles.settype}>{item.type}</h3>
        //                     <h3 className={accordianStyles.setmode}>{item.mode}</h3>
        //                     {/* <Image
        //                         src={crossIcon}
        //                         alt="Cross Icon"

        //                         width={30}
        //                         height={30}
        //                     /> */}
        //                 </div>
        //             }
        //             indicator={
        //                 <Image
        //                     src={crossIcon}
        //                     alt="Cross Icon"
        //                     className={accordianStyles.cross_icon}
        //                     width={30}
        //                     height={30}
        //                 />}
        //         >
        //             <div className={accordianStyles.set_content}>{item.content}</div>
        //         </AccordionItem>
        //     ))}
        // </Accordion>)
    );
}

export default Accordiannew;
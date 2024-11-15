import React from 'react';
import NextCaseStudy from '@/app/components/Case-Studies/Next-Case-Study/NextCaseStudy';

const NextTaskey = () => {
    const images = [
        {
            src: '/assets/images/case-studies/taskey/taskeybillboarddisplayreminders.webp',
            alt: 'Billboard displaying Taskey app with a phone screen reminder notification and the text. On time reminders - Never forget what matters.',
        },
        {
            src: '/assets/images/case-studies/taskey/productivegirl.webp',
            alt: 'Young woman working in a cafe, writing in a notebook while using a tablet, with a coffee cup and meal on the table.',
        },
        {
            src: '/assets/images/case-studies/taskey/taskeyappicon.webp',
            alt: 'Close-up of a smartphone screen displaying the Taskey app icon alongside other icons.',
        },
    ];

    return (
        <NextCaseStudy
    nextStudyTitle="Taskey"
    nextStudyLink="/work/taskey"
    images={images}
    description={<span>New Way to Work - <br /> Simple, Smart, Seamless!</span>}
    backgroundColor="#4D4BD3" // Optional custom background color
/>

    );
};

export default NextTaskey;

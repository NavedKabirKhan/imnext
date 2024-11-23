"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import aboutStyles from '@/app/styles/About.module.css';

const Marquee = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const textPath = textRef.current;

        // GSAP animation
        gsap.to(textPath, {
            attr: { startOffset: '-100%' }, // Moves the text smoothly
            duration: 5, // Speed of the animation in seconds
            repeat: -1, // Infinite loop
            ease: 'linear', // Ensures smooth, consistent speed
        });
    }, []);

    const myText = {
        fontSize: '36px', // Adjust the size as needed
        fill: 'gray', // Adjust the color as needed
        dominantBaseline: 'middle',
    };

    return (
        <div className={aboutStyles.marqueeBand}>
            <svg viewBox="0 0 1920 210" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin slice">
                <path
                    id="wavyPath"
                    fill="none"
                    stroke="transparent" // The path's stroke is hidden
                    d="
                        M 0 100 Q 458 240 940 100 T 1920 100" // Creates a continuous wave from left to right
                />
                <text style={myText}>
                    <textPath ref={textRef} href="#wavyPath" startOffset="0%">
                        Shit-hot work for hot-shot brands • We embrace white space like our best friend • We obsess over details • Shit-hot work for hot-shot brands • We embrace white space like our best friend • We obsess over details • Shit-hot work for hot-shot brands •
                    </textPath>
                </text>
            </svg>
        </div>
    );
};

export default Marquee;

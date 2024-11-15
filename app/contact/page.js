"use client";
import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import TransitionLink from "@/app/components/TransitionLink";

import Head from 'next/head';

import Link from "next/link";
import { useRouter } from 'next/router';
// import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/ContactFooter";
import Form from "@/app/components/Form/Form";
import contactStyles from "@/app/styles/Contact.module.css";
import passionateImg from "@/app/assets/contact/are_you_a_passionate.png";
import contactWorkImages from "@/app/assets/contact/contact-work-images.png";
import contactWorkVideo from "@/app/assets/contact/contact-work-images.mp4";
import subscribeImage from "@/app/assets/subscribe-form/subscribe-us-01.png";
import SlideUpText from "@/app/components/SlideUpText";
import ViewporTextAnim from "@/app/components/ViewporTextAnim";

const Contact = () => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);
  // Manage email input state
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subscribed, setSubscribed] = useState(false); // Track subscription status

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.title = "Contact | Integra Magna | Design Agency";
    }
  }, []);

  const openForm = () => {
    if (typeof window !== 'undefined') {
      document.getElementById("myForm").style.display = "block";
    }
  };

  const closeForm = () => {
    if (typeof window !== 'undefined') {
      document.getElementById("myForm").style.display = "none";
    }
  };

  // Form submission handler for subscription
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email }) // Sending email only
      });

      const result = await response.json();

      if (result.success) {
        setSubscribed(true); // Mark as subscribed
        setMessage('Subscription successful!');
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    } catch (error) {
      setMessage('Error occurred. Please try again later.');
    }
  };

  return (
    <>
      <Head>
        <title>Contact | Integra Magna | Design Agency</title>
        <meta name="description" content="Contact | Integra Magna | Strategic Design Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div id="content">
        {/* Hero Section */}
        <div className={contactStyles.contact_hero_conntainer}>
          <h1 className={`${contactStyles.heading_container} initialTransition`} data-mobile-off="">
            <SlideUpText text="Ready to do big things? Fill out our form below and tell us about your vision." />
          </h1>
        </div>

        {/* Form Component */}
        <div className={contactStyles.form_import}>
          <Form />
        </div>
        {/* Partner with Us Section */}
        <div className={contactStyles.Partner_container}>
          <h2 className="initialTransition">
            <SlideUpText text="Partner with us to build the future." />
          </h2>
          <h1 className="initialTransition">
            <span id={contactStyles.level_text}>
              <SlideUpText text="Start a project:" />
            </span>
            <a href="mailto:hi@integramagna.com" id={contactStyles.link_text}>

              <SlideUpText text="hi@integramagna.com" />

            </a>
          </h1>
          <h1 className="initialTransition">
            <span id={contactStyles.level_text}>

              <SlideUpText text="Join Integra Magna:" />

            </span>
            <a href="mailto:join@integramagna.com" id={contactStyles.link_text}>

              <SlideUpText text="join@integramagna.com" />

            </a>
          </h1>
        </div>

        {/* Passionate Designer Section */}
        <div className={contactStyles.passionate_designer_container}>
          <figure>
            <Image src={passionateImg} alt="Integra Magna Team discussing a project" />
          </figure>
          <article>
            <h2>Are you a passionate designer?</h2>
            <p>If your designs speak louder than words and your creativity knows no bounds, we want you on our team. If you&apos;re nodding so hard your head&apos;s about to unscrew, it&apos;s time to bring that talent here. Join us, where the only thing we take seriously is fun (and exceptional design, but mostly fun). Apply now—let&apos;s make design history together, one quirky project at a time.</p>
            <div data-links="Career" className={`${contactStyles.passionate_designer_container_button_div}`}>
              <TransitionLink href="/career">
                <button>Submit</button>
              </TransitionLink>
            </div>
          </article>
        </div>

        {/* Join Us Section */}
        <div className={`${contactStyles.Join_Us_container} f-upper-section`}>
          <div className={`${contactStyles.Join_Us} selectedTrans`}>
            <h1>Join us @ Integra Magna</h1>
            <div data-links="Career">
              <TransitionLink href="/career">
                <h2>See opening →</h2>
              </TransitionLink>
            </div>
          </div>
          <div className={`${contactStyles.fable_div} textAnim`}>
            <div data-links="Work">
              <TransitionLink href="/work">
                <video
                  src={contactWorkVideo}
                  autoPlay
                  loop
                  playsInline
                  muted
                  className="animTxt"
                  poster={contactWorkImages}
                  alt="Glimpses of Our Work portfolio"
                  title="Glimpses of Our Work portfolio"
                ></video>
              </TransitionLink>
            </div>
          </div>
          <div className={`${contactStyles.Keep_up} selectedTrans`}>
            <h1>Keep up with what we’ve been up to</h1>
            <a id="signup-form" className="open-button" onClick={openForm}>
              <h2>Sign up →</h2>
            </a>
          </div>


        </div>




        {/* Subscribe Form */}
        <section className={contactStyles.subs_form} id="myForm" style={{ display: 'none' }}>
          <div className={contactStyles.form_close_button_c}>
            <button
              type="button"
              className={contactStyles.form_close_button}
              aria-label="Close dialog window"
              id="close-form-button"
              onClick={closeForm}
            >
              <svg
                role="presentation"
                className="t-popup__close-icon"
                width="23px"
                height="23px"
                viewBox="0 0 23 23"
                version="1.1"
              >
                <g stroke="none" strokeWidth="1" fill="#fff" fillRule="evenodd">
                  <rect
                    transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708)"
                    x="10.3137085"
                    y="-3.6862915"
                    width="2"
                    height="30"
                  ></rect>
                  <rect
                    transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708)"
                    x="10.3137085"
                    y="-3.6862915"
                    width="2"
                    height="30"
                  ></rect>
                </g>
              </svg>
            </button>
          </div>

          <div className={contactStyles.subs_container}>
            <Image className={contactStyles.subs_img}
              alt="Keep up with what we've been up to"
              layout="responsive"
              src={subscribeImage} />
            <div className={contactStyles.subs_content}>
              <div className={contactStyles.sub_text}>
                <h1 className={contactStyles.subs_head}>Keep up with what we&apos;ve been up to</h1>
                <p className={contactStyles.subs_para}>
                  By signing up to receive emails from Integra Magna, you agree to our Privacy Policy. We treat your info responsibly. Unsubscribe anytime.
                </p>
              </div>

              {/* Form */}
              <form className={contactStyles.form_main} id="subscribForm" onSubmit={handleSubmit}>
                {!subscribed ? (
                  <>
                    <div className={contactStyles.input_container}>
                      <input
                        type="email"
                        id="hero-field"
                        name="hero-field"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit">Subscribe</button>
                  </>
                ) : (
                  <h3>Subscribed Successfully!</h3>
                )}
              </form>

              {/* {message && <p>{message}</p>}  */}

            </div>
          </div>
        </section>

        {/* <section>
            <div className={`${contactStyles.Our_story} f-upper-section`}>
              <h2>What is Integra Magna?</h2>
              <h1>
                <div><Link href="/about">Our Story</Link></div>
              </h1>
            </div>
          </section> */}


        {/* Footer Section */}
      </div>
      <Footer />

    </>
  );
};

export default Contact;

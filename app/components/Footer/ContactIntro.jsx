import React from 'react'
import Form from '@/app/components/Form/Form'
import contactStyles from '@/app/styles/Contact.module.css'
import Link from 'next/link'
import TransitionLink from '@/app/components/TransitionLink';

export default function Intro() {
  return (
    <div>
          {/* <Form /> */}
          <section>
            <div className={`${contactStyles.Our_story} f-upper-section`}>
              <h2>What is Integra Magna?</h2>
              <h1>
                <div><TransitionLink href="/about"><u>Our Story</u></TransitionLink></div>
              </h1>
            </div>
          </section>

    </div>
  )
}

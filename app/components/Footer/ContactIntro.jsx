import React from 'react'
import Form from '@/app/components/Form/Form'
import contactStyles from '@/app/styles/Contact.module.css'
import Link from 'next/link'

export default function Intro() {
  return (
    <div>
          {/* <Form /> */}
          <section>
            <div className={`${contactStyles.Our_story} f-upper-section`}>
              <h2>What is Integra Magna?</h2>
              <h1>
                <div><Link href="/about">Our Story</Link></div>
              </h1>
            </div>
          </section>

    </div>
  )
}

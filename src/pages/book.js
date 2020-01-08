import React from "react"

import Layout from "../components/layout"
import Body from "../components/body"
import Hero from "../components/hero"
import SEO from "../components/seo"
import HeroImg from "../svg/undraw_mindfulness.svg"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Hero
      text="Book a session in the hall through our online booking system"
      image={<HeroImg />}
      cta={{
        to: `https://v2.hallmaster.co.uk/Diary/ViewWeeklyDiary/7630`,
        text: `Book now`
      }}
    />
    <Body>
      <h1>Book</h1>
      <p>
        We offer an online booking service or if you prefer, you can contact us
        via email or phone.
      </p>
      <h2>Rates</h2>
      <ul>
        <li></li>
      </ul>
      <h2>Regular hirers</h2>
      <p>
        The hiring schedule for the hall remains extremely busy and we are
        pleased to have added a few new regular hirers.
      </p>
      <p>
        In terms of public benefit, it is noted that the beneficiaries of the
        events held in the hall range from under 3 years of age to over 90.
      </p>
      <p>The current regular hirers include:</p>
      <ul>
        <li>Emmaus School</li>
        <li>Yoga</li>
        <li>Martial arts</li>
        <li>Yoga for pregnancy</li>
        <li>Lunch club</li>
        <li>Bridge club</li>
        <li>W.I.</li>
        <li>Flower club</li>
        <li>Dramatic society</li>
        <li>Children&#39;s Ballet (term-time)</li>
        <li>Pilates</li>
        <li>Youth Group</li>
        <li>National Childbirth Trust ante natal classes</li>
        <li>Zumba</li>
        <li>Monthly surgery by County Councillor</li>
      </ul>
    </Body>
  </Layout>
)

export default AboutPage

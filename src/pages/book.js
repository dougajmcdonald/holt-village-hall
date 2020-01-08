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
        text: `Book online`
      }}
    />
    <Body>
      <h1>How to book</h1>
      <p>
        We offer an online booking service or if you prefer, you can contact us
        via email or phone using the details below
      </p>
      <h2>Booking secretary</h2>
      <p>
        For enquiries related to room bookings/availability/details please
        contact our Bookings Secretarys Joy and Tim Mason.
        <a href="mailto:holthallbooking@gmail.com">holthallbooking@gmail.com</a>
        07421 838343.
      </p>
      <p className="mt-4 mb-0">Church View Farm,</p>
      <p className="mt-0 mb-0">Melksham Road,</p>
      <p className="mt-0 mb-0">Holt,</p>
      <p className="mt-0 mb-0">Wiltshire,</p>
      <p className="mt-0 mb-0">BA14 6QT</p>
      <h2>Rates</h2>
      <h3>Main hall</h3>
      <ul>
        <li>General use £10.00 per hour - minimum of two hours</li>
        <li>
          Fri/Sat evenings - villagers £100.00 - non-villagers £120.00 (access
          to hall from 5pm)
        </li>
        <li>
          Weddings & Family Parties - villagers £175.00 - non-villagers £200.00
          (includes use of the kitchen, the bar is hired separately)
        </li>
      </ul>
      <h3>Bar</h3>
      <ul>
        <li>£25.00 single charge if alcohol is to be sold across the bar</li>
      </ul>
      <h3>Kitchen</h3>
      <ul>
        <li>£5.00 per hour</li>
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

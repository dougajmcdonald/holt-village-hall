import React from "react"

import Layout from "../components/layout"
import Body from "../components/body"
import Hero from "../components/hero"
import SEO from "../components/seo"
import HeroImg from "../svg/undraw_mindfulness.svg"
import Word from "../images/word.webp"
import PDF from "../images/pdf.webp"

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
      <h2>Online</h2>
      <p>
        You can check the availability of the slot you'd like via our online
        diary below.
      </p>
      <p>
        Select the room your want from menu then click the <b>+</b> icon on the
        day you want to book and create an account to make a booking.
      </p>
      <p className="italic font-bold">
        NOTE: This will take you to the Hallmaster website where you will need
        to register or login to complete your booking request.
      </p>
      <iframe
        src="https://v2.hallmaster.co.uk/Scheduler/View/7630"
        className="w-full"
        style={{ minHeight: `1550px` }}
      ></iframe>

      <h2>Email</h2>
      <p>Contact our Bookings Secretarys Joy and Tim Mason.</p>
      <a href="mailto:holthallbooking@gmail.com">holthallbooking@gmail.com</a>
      <h2>Phone</h2>
      <p>Contact our Bookings Secretarys Joy and Tim Mason.</p>
      <p>07421 838343</p>
      <h2>Post</h2>
      <p>Save, print and post the form to the address below</p>
      <a href="#" className="block mt-4">
        <img src={Word} className="inline-block mr-4" />
        <span>Microsoft Word Form</span>
      </a>
      <a href="#" className="block mt-4">
        <img src={PDF} className="inline-block mr-4" />
        <span>Adobe PDF Form</span>
      </a>
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
    </Body>
  </Layout>
)

export default AboutPage

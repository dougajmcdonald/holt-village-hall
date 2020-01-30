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
    <SEO title="Book the hall" />
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

      <div className="flex justify-between">
        <article>
          <h2>Base Rates</h2>
          <table className="font-body my-4">
            <thead className="font-bold">
              <tr>
                <td className="border-primary border-2 py-2 px-4">Room</td>
                <td className="border-primary border-2 py-2 px-4">
                  Hourly Rate
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Main hall</td>
                <td>£12</td>
              </tr>
              <tr>
                <td>First floor</td>
                <td>£11</td>
              </tr>
              <tr>
                <td>Skittle alley</td>
                <td>£11</td>
              </tr>
              <tr>
                <td>Meeting room</td>
                <td>£10</td>
              </tr>
              <tr>
                <td>Bar</td>
                <td>£5</td>
              </tr>
            </tbody>
          </table>
          <p className="font-bold">
            NOTE: All bookings are a minimum of two hours
          </p>
          <p className="font-bold">
            NOTE: £25.00 license charge if alcohol is to be sold across the bar
          </p>
        </article>
        <article>
          <h2>Special rates</h2>
          <p>
            Fri/Sat evenings - villagers £100.00 - non-villagers £120.00 (access
            to hall from 5pm)
          </p>
          <h3>Children's parties</h3>
          <p>4 hour booking - Includes the skittle alley and kitchen.</p>
          <p>Villagers £50 - non-villagers £60</p>
          <h3>Weddings &amp; Family parties</h3>
          <p>Includes use of the kitchen (bar hired separately)</p>
          <p>Villagers £175.00 - non-villagers £200.00</p>
        </article>
      </div>

      <iframe
        src="https://v2.hallmaster.co.uk/Scheduler/View/7630"
        className="w-full"
        style={{ minHeight: `1550px` }}
        title="Hallmaster booking diary"
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
    </Body>
  </Layout>
)

export default AboutPage

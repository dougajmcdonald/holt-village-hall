import React from "react"

import Layout from "../components/layout"
import Body from "../components/body"
import Hero from "../components/hero"
import SEO from "../components/seo"
import HeroImg from "../svg/undraw_events.svg"
import Word from "../images/word.webp"
import PDF from "../images/pdf.webp"

const AboutPage = () => (
  <Layout>
    <SEO title="Book the hall" />
    <Hero
      text="Book a session in the hall through our online booking system"
      image={<HeroImg width="300" height="300" />}
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
        <article className="mr-4">
          <h2>General Hourly Rates</h2>
          <p className="font-bold">
            All bookings are a minimum of two hours
          </p>
          <p className="font-bold">
            There is a single £25.00 license charge if alcohol is to be sold across the bar in addition to bar hire
          </p>
          <table className="font-body my-4">
            <thead className="font-bold">
              <tr>
                <td className="border-primary border-2 py-2 px-4">Room</td>
                <td className="border-primary border-2 py-2 px-4">
                  Villagers
                </td>
                <td className="border-primary border-2 py-2 px-4">
                  Non-villagers
                </td>
                <td className="border-primary border-2 py-2 px-4">
                  For profit classes
                </td>                 
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Main hall</td>
                <td>£11</td>
                <td>£12</td>
                <td>£13</td>
              </tr>
              <tr>
                <td>First floor</td>
                <td>£10</td>
                <td>£11</td>
                <td>£12.50</td>
              </tr>
              <tr>
                <td>Skittle alley</td>
                <td>£10</td>
                <td>£11</td>
                <td>£12</td>
              </tr>
              <tr>
                <td>Meeting room</td>
                <td>£8</td>
                <td>£10</td>
                <td>£10</td>
              </tr>
              <tr>
                <td>Bar</td>
                <td>£5</td>
                <td>£5</td>
                <td>£7.50</td>
              </tr>
            </tbody>
          </table>
        </article>
        <article>
          <h2>Special rates</h2>
          <h3>Children's parties</h3>
          <p>The hall makes a great location for childrens parties.</p> 
          <p>Bookings are 4 hours (which includes any time needed to setup and clear up).</p>
          <p>Bookings include usage of the Main hall, Kitchen and Skittle Alley.</p>
          <table className="font-body my-4">
            <thead className="font-bold">
              <tr>
                <td className="border-primary border-2 py-2 px-4">
                  Villagers
                </td>
                <td className="border-primary border-2 py-2 px-4">
                  Non-villagers
                </td>               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>£50</td>
                <td>£60</td>
              </tr>
            </tbody>
          </table>

          <h3>Weddings &amp; Family parties</h3>
          <p>Wedding bookings include all day exclusive hire of the hall.</p>
          <p>Bookings include, Main hall, Kitchen, Bar, Skittle alley, 1st floor hall and meeting room.</p>
          <p className="font-bold">
            There is a single £25.00 license charge if alcohol is to be sold across the bar.
          </p>
          <table className="font-body my-4">
            <thead className="font-bold">
              <tr>
                <td className="border-primary border-2 py-2 px-4">
                  Villagers
                </td>
                <td className="border-primary border-2 py-2 px-4">
                  Non-villagers
                </td>               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>£200</td>
                <td>£200</td>
              </tr>
            </tbody>
          </table>
          <p>Exclusive hire is offered from 5pm the day before for an additional £50 if you need more time to set up.</p>
          <p>If you need more time to clear up or want to host a two day party, a rate of £350 is available.</p>
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
        <img src={Word} className="inline-block mr-4" alt="Microsoft Word logo" />
        <span>Microsoft Word Form</span>
      </a>
      <a href="#" className="block mt-4">
        <img src={PDF} className="inline-block mr-4" alt="Adobe PDF logo" />
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

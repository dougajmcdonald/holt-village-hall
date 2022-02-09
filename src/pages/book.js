import React, { useState } from "react"

import Layout from "../components/layout"
import Body from "../components/body"
import Hero from "../components/hero"
import SEO from "../components/seo"
import HeroImg from "../svg/undraw_events.svg"

const howToBook = () => (
  <React.Fragment>
    <h2>Online</h2>
    <p>
      You can check the availability of the slot you'd like via our online diary
      below.
    </p>
    <p>
      Select the room your want from menu then click the <b>+</b> icon on the
      day you want to book and create an account to make a booking.
    </p>
    <p className="italic font-bold">
      NOTE: This will take you to the Hallmaster website where you will need to
      register or login to complete your booking request.
    </p>

    <div className="flex justify-between">
      <article className="mr-4">
        <h2>General Hourly Rates</h2>
        <p className="font-bold">All bookings are a minimum of two hours</p>
        <p className="font-bold">
          Time to include for setting up and clearing away
        </p>
        <p className="font-bold">
          There is a single £25.00 license charge if alcohol is to be sold
          across the bar in addition to bar hire
        </p>
        <table className="font-body my-4">
          <thead className="font-bold">
            <tr>
              <td className="border-primary border-2 py-2 px-4">Room</td>
              <td className="border-primary border-2 py-2 px-4">Villagers</td>
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
              <td>£14</td>
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
              <td>Use of skittles &amp; balls</td>
              <td>£10</td>
              <td>£12.50</td>
              <td>£13.50</td>
            </tr>
            <tr>
              <td>Meeting room</td>
              <td>£10</td>
              <td>£10</td>
              <td>£10</td>
            </tr>
            <tr>
              <td>Bar</td>
              <td>£8</td>
              <td>£10</td>
              <td>£10</td>
            </tr>
          </tbody>
        </table>
        <p className="font-bold">
          *Figures shown are subject to confirmation and may change without
          notice (unless already confirmed) E&amp;OE
        </p>
      </article>
      <article>
        <h2>Special rates</h2>
        <h3>Children's parties</h3>
        <p>The hall makes a great location for childrens parties.</p>
        <p>
          Bookings are 4 hours (which includes any time needed to setup and
          clear up).
        </p>
        <p>
          Bookings include usage of the Main hall, Kitchen and Skittle Alley
          area (but do not include hire of skittles and balls).
        </p>
        <table className="font-body my-4">
          <thead className="font-bold">
            <tr>
              <td className="border-primary border-2 py-2 px-4">Villagers</td>
              <td className="border-primary border-2 py-2 px-4">
                Non-villagers
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>£55</td>
              <td>£65</td>
            </tr>
          </tbody>
        </table>

        <h3>Weddings &amp; Family parties</h3>
        <p>Wedding bookings include all day exclusive hire of the hall.</p>
        <p>
          Bookings include, Main hall, Kitchen, Bar, Skittle alley, 1st floor
          hall and meeting room.
        </p>
        <p className="font-bold">
          There is a single £25.00 license charge if alcohol is to be sold
          across the bar.
        </p>
        <table className="font-body my-4">
          <thead className="font-bold">
            <tr>
              <td className="border-primary border-2 py-2 px-4">Villagers</td>
              <td className="border-primary border-2 py-2 px-4">
                Non-villagers
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>£235</td>
              <td>£235</td>
            </tr>
          </tbody>
        </table>
        <p>
          Exclusive hire is offered from 5pm the day before for an additional
          £75 if you need more time to set up.
        </p>
        <p>
          If you need more time to clear up or want to host a two day party, a
          rate of £395 is available.
        </p>
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
  </React.Fragment>
)

const forms = () => (
  <React.Fragment>
    <h2>Bookings</h2>
    <ul>
      <li>
        <a
          href="https://drive.google.com/file/d/1XnDcBmT7kWZ2yVcXUhTuM4X4-cUuUzPv/view?usp=sharing"
          alt="Booking form"
        >
          Booking form
        </a>
      </li>
      <li>
        <a
          href="/docs/Hire Charges - 2022 Customers  01_01_2022.pdf"
          alt="Hire charges"
        >
          Hire charges
        </a>
      </li>
    </ul>
    <h2>Terms and conditions</h2>
    <ul>
      <li>
        <a
          href="https://drive.google.com/file/d/1C6T0gzLyTjnf5QlSvaakKpFWzLy78Uqg/view?usp=sharing"
          alt="Regulations for Hiring the Hall"
        >
          Regulations for Hiring the Hall
        </a>
      </li>
      <li>
        <a
          href="/docs/HVH Appendix 1 Premises Licencing Conditions.pdf"
          alt="Premises Licencing Conditions"
        >
          Premises Licencing Conditions
        </a>
      </li>
      <li>
        <a
          href="/docs/HVH Appendix 2 Checklist when hiring the hall.pdf"
          alt="Checklist when hiring the hall"
        >
          Checklist when hiring the hall
        </a>
      </li>
      <li>
        <a
          href="/docs/HVH Appendix 3 COVID -19 Special Conditions of Hire v10 May 2021.pdf"
          alt="COVID 19 Special Conditions of Hire"
        >
          COVID 19 Special Conditions of Hire - Updated May 2021
        </a>
      </li>
    </ul>
  </React.Fragment>
)

const BookPage = () => {
  const [activeTab, setActiveTab] = useState(0)
  return (
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
        <h1
          className={`inline-block mt-4 mr-12 md:mb-16 text-l md:text-2xl cursor-pointer border-b-4 border-transparent ${
            activeTab === 0
              ? "border-tertiary"
              : "text-gray-700 hover:border-tertiary"
          }`}
          onClick={() => setActiveTab(0)}
        >
          How to book
        </h1>
        <h1
          className={`inline-block mt-4 md:mb-16 text-l md:text-2xl cursor-pointer border-b-4 border-transparent ${
            activeTab === 1
              ? "border-tertiary"
              : "text-gray-700 hover:border-tertiary"
          }`}
          onClick={() => setActiveTab(1)}
        >
          Forms &amp; Terms
        </h1>
        {activeTab === 0 ? howToBook() : forms()}
      </Body>
    </Layout>
  )
}

export default BookPage

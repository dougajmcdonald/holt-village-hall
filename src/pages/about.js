import React from "react"

import Layout from "../components/layout"
import Body from "../components/body"
import Hero from "../components/hero"
import SEO from "../components/seo"
import HeroImg from "../svg/undraw_mindfulness.svg"
import HallImage1 from "../components/images/hall-image-1"
import HallImage2 from "../components/images/hall-image-2"
import HallImage3 from "../components/images/hall-image-3"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Hero
      text="Holt Village Hall was established in 1873 as a reading room for men who worked in the village"
      image={<HeroImg />}
    />
    <Body>
      <h1>About the hall</h1>
      <div className="flex flex-wrap justify-between w-ful mb-10">
        <HallImage3 />
        <HallImage2 />
        <HallImage1 />
      </div>
      <p>
        The Hall was built as a single storey building in 1873 as a reading room
        for men who worked in the village.
      </p>
      <p>
        The hall was erected in 1873 as 'a reading room for the working
        classes'. Books and some newspapers were supplied for the use of farm
        labourers and factory workers in the evening. There was doubtless the
        hope that this would help keep them out of the public houses. Later it
        became the village hall and, up until to the 1970s, there was first a
        village library centre and then a small library, run by Wiltshire County
        Council in part of the building.
      </p>
      <p>
        The hall is now run by a village committee and is used as a meeting
        place for groups, and a venue for fund raising events, wedding
        receptions and other private functions.
      </p>
      <p>
        A second floor was added after the First World War in memory of those
        who gave their lives.
      </p>
      <p>
        During the Second World War, the Hall was used as a kitchen but closed
        shortly afterwards. The Hall re-opened in 1956 and has been used ever
        since as a Village Hall.
      </p>
      <p>
        The land for the car park was purchased in 1970, having previously been
        the Bowling Green.
      </p>
      <p>
        The single storey extension (surgery, toilet block and skittle alley)
        was added in 1978.
      </p>
      <p>
        A Fire Alarm Sytem was installed at the beginning of 2011 for the
        additional protection of users.
      </p>
      <p>
        The Hall has Public Liability Insurance protecting the hirer against
        injury or damage caused by defects in the Hall structure. However the
        organiser of an event should also consider separate Public Liability
        Insurance to cover accidents to their attendees.
      </p>
      <p>
        There is a large car park to the rear of the Hall with more than 40
        marked spaces for Hall users.
      </p>
      <h2>Objectives</h2>
      <p>The objectives of Holt Village Hall are:</p>
      <ul>
        <li>To provide a meeting place for local community groups</li>
        <li>To maintain clean, safe &amp; functional premises</li>
        <li>
          To ensure that the facilities provided comply with the necessary
          regulations (e.g. fire, health &amp; safety, licensing act etc.)
        </li>

        <li>To improve facilities where possible</li>
        <li>
          To receive hiring fees from Hall users and to fund-raise when
          necessary to ensure income stays on a par with expenditure.
        </li>
      </ul>
      <h2>Strategy</h2>
      <p>
        The strategies employed to achieve these objectives during the year
        reported were:
      </p>
      <ul>
        <li>
          To maintain a hall management committee of elected members and
          representatives from regular user groups
        </li>
        <li>
          To assign key management roles i.e. chairperson, secretary, treasurer,
          bookings secretary, health &amp; safety, to individuals
        </li>
        <li>
          To hold regular (monthly) management committee meetings with minutes
          (including agreed actions on individuals) being issued prior to the
          next meeting
        </li>
        <li>
          To review the financial position of the hall at the monthly meetings
        </li>
        <li>To source local (volunteer) help where necessary</li>
        <li>
          To hold an Annual General Meeting (advertised in the Village Magazine)
          open to all villagers
        </li>
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

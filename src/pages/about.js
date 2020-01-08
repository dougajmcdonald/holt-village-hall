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
      text="Holt Village Hall provides an affordable venue for villagers to hire and enjoy"
      image={<HeroImg />}
    />
    <Body>
      <h1>About the hall</h1>
      <p>
        Holt village hall was established in 19xx and exists to serve the
        village of Holt, Wiltshire.
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
    </Body>
  </Layout>
)

export default AboutPage

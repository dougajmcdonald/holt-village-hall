import React from "react"

import Layout from "../components/layout"
import Body from "../components/body"
import Hero from "../components/hero"
import SEO from "../components/seo"
import HeroImg from "../svg/undraw_mindfulness.svg"

const AboutPage = () => (
  <Layout>
    <SEO title="Privacy policy" />
    <Hero
      text="Holt Village Hall was established in 1873 as a reading room for men who worked in the village"
      image={<HeroImg />}
    />
    <Body>
      <h1>Privacy policy</h1>
      <p>
        This data protection policy sets out our commitment to protecting
        personal data and how we implement that commitment with regards to the
        collection and use of personal data.
      </p>
      <p>
        Our Personal Data collection will commence when you make an enquiry
        about using our facilities, when you make a booking to use our
        facilities or when you supply goods or services to us.
      </p>
      <p>
        Data will also be collected when you visit our web site delivered
        through Hall Master.
      </p>
      ​
      <p>
        We are committed to complying with the data protection principles listed
        below.
      </p>
      <ul>
        <li>Ensuring that data is collected and used fairly and lawfully</li>
        <li>
          Processing personal data only in order to meet our operational needs
          or fulfil legal requirements
        </li>
        <li>
          Taking steps to ensure that personal data is up to date and accurate
        </li>
        <li>Establishing appropriate retention periods for personal data</li>
        <li>
          Ensuring that data subjects' rights can be appropriately exercised
        </li>
        <li>Providing adequate security measures to protect personal data</li>
        <li>
          Ensuring that a nominated officer is responsible for data protection
          compliance and provide a point of contact for all data protection
          issues
        </li>
        <li>
          Making staff and officers aware of good practice in data protection
        </li>
        <li>
          Providing adequate training for all staff responsible for personal
          data
        </li>
        <li>
          Ensuring that everyone handling personal data knows where to find
          further guidance
        </li>
        <li>
          Dealing with queries about data protection, internal and external to
          the organisation, effectively and promptly
        </li>
        <li>
          Regularly reviewing data protection procedures and guidelines within
          the organisation
        </li>
        <li>National Childbirth Trust ante natal classes</li>
        <li>
          If you want to find out what information we may hold on you or for
          other data protection issues please contact
        </li>
      </ul>
    </Body>
  </Layout>
)

export default AboutPage

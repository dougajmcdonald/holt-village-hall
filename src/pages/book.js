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
      text="Find out more about the starter and what it offers"
      image={<HeroImg />}
    />
    <Body>
      <h1>Book</h1>
      <p>
        We offer an online booking service or if you prefer, you can contact us
        via email or phone.
      </p>
      <h2>Rates</h2>
    </Body>
  </Layout>
)

export default AboutPage

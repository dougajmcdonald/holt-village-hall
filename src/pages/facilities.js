import React from "react"

import Layout from "../components/layout"
import Body from "../components/body"
import Hero from "../components/hero"
import SEO from "../components/seo"
import HeroImg from "../svg/undraw_mindfulness.svg"

const AboutPage = () => (
  <Layout>
    <SEO title="Facilities" />
    <Hero
      text="A well equipped and maintained hall providing a good kitchen,large hall with stage and an upper meeting room "
      image={<HeroImg />}
    />
    <Body>
      <h1>Our facilities</h1>
      <p>
        The hall provides large spaces over two floors, with a skittle alley,
        kitchen, bar area and meeting rooms.
      </p>
      <ul></ul>
      <h2>Rooms</h2>
      <h3>Main Hall</h3>
      <p>
        This main hall measures approx. 16m long by 6m wide plus the stage which
        measures 6m by 5m.
      </p>
      <h2>Capacity</h2>
      <ul>
        <li>Standing audience: 300</li>
        <li>Seated audience: 150</li>
        <li>Function with tables: 150</li>
        <li>Dancing: 235</li>
      </ul>
      <h2>Parking</h2>
      <p>
        There is a large car park to the rear of the Hall with more than 40
        marked spaces for Hall users.
      </p>
      <h2>Licensed for</h2>
      <ul>
        <li>Serving Alcohol</li>
        <li>Films</li>
        <li>Plays</li>
        <li>Recorded Music</li>
        <li>Live Music</li>
      </ul>
      <h2>Suitable for</h2>
      <p>
        The hall is suitable for all kinds of events. We'd be happy to discuss
        your specific requirements.
      </p>
      <ul>
        <li>Children's Parties</li>
        <li>Dance Classes</li>
        <li>Exercise Classes</li>
        <li>Wedding Receptions</li>
        <li>Private Functions</li>
        <li>Meetings</li>
      </ul>
    </Body>
  </Layout>
)

export default AboutPage

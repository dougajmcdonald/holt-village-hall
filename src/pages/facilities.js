import React from "react"

import Layout from "../components/layout"
import Body from "../components/body"
import Hero from "../components/hero"
import SEO from "../components/seo"
import HeroImg from "../svg/undraw_mindfulness.svg"
import MainHallImage1 from "../components/images/main-hall-image-1"
import MainHallImage2 from "../components/images/main-hall-image-2"
import MainHallInUse from "../components/images/main-hall-in-use"
import MainHallWedding from "../components/images/main-hall-wedding"
import FirstFloorImage from "../components/images/first-floor-image"
import KitchenImage from "../components/images/kitchen-image"

const AboutPage = () => (
  <Layout>
    <SEO title="Facilities" />
    <Hero
      text="A well equipped and maintained hall providing a good kitchen, large hall with stage and an upstairs meeting room "
      image={<HeroImg />}
    />
    <Body>
      <h1>Our facilities</h1>
      <p>
        The hall provides large spaces over two floors, with a skittle alley,
        kitchen, bar area and meeting rooms.
      </p>
      <p>
        We also have a small Meeting Room, stair lift to Upstairs Meeting Room &
        Disabled Toilets
      </p>
      <h3>Suitability</h3>
      <p>The hall is suitable for all kinds of events including.</p>
      <ul>
        <li>Children's Parties</li>
        <li>Dance Classes</li>
        <li>Exercise Classes</li>
        <li>Wedding Receptions</li>
        <li>Private Functions</li>
        <li>Meetings</li>
      </ul>
      <p> We'd be happy to discuss your specific requirements.</p>
      <h3>Parking</h3>
      <p>
        There is a large car park to the rear of the Hall with more than 40
        marked spaces for Hall users.
      </p>
      <h3>Licensing</h3>
      <ul>
        <li>Serving Alcohol</li>
        <li>Films</li>
        <li>Plays</li>
        <li>Recorded Music</li>
        <li>Live Music</li>
      </ul>

      <h2>Rooms</h2>
      <h3>Main Hall</h3>
      <p>
        This main hall measures approx. 16m long by 6m wide plus the stage which
        measures 6m by 5m.
      </p>

      <section>
        <div className="mb-4">
          <MainHallImage1 />
        </div>
        <div className="mb-4">
          <MainHallImage2 />
        </div>
        <div className="mb-4">
          <MainHallInUse />
        </div>
        <div>
          <MainHallWedding />
        </div>
      </section>
      <h3>Kitchen</h3>
      <p></p>
      <KitchenImage />
      <h3>First floor</h3>
      <p></p>
      <FirstFloorImage />
      <h2>Capacity</h2>
      <ul>
        <li>Standing audience: 300</li>
        <li>Seated audience: 150</li>
        <li>Function with tables: 150</li>
        <li>Dancing: 235</li>
      </ul>
    </Body>
  </Layout>
)

export default AboutPage

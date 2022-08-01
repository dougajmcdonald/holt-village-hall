import React from "react"

import Layout from "../components/layout"
import Body from "../components/body"
import Hero from "../components/hero"
import SEO from "../components/seo"
import HeroImg from "../svg/undraw_questions.svg"

const FAQPage = () => (
  <Layout>
    <SEO title="FAQ" />
    <Hero
      text="Find the answer to common questions about the hall and the hiring process"
      image={<HeroImg width="300" height="300" />}
    />
    <Body>
      <h1>Frequently asked questions</h1>
      <h2>Parking</h2>
      <p className="font-bold">There is parking for 50 cars.</p>
      <p>
        Parking spaces are shared between 10am-5am with the Courts (National
        Trust). Seven spaces are reserved for village hall use, but
        unfortunately we aren't able to police this.
      </p>
      <h2>Cleaning</h2>
      <p className="font-bold">
        We ask that you leave the hall as you found it.
      </p>
      <p>
        The hall is cleaned regularly, but as a curtesy to other hirers you are
        responsible for cleaning any mess and taking away any rubbish from your
        event. We have cleaning tools available in the cupboard opposite the
        kitchen we ask that you use.
      </p>
      <h2>COVID</h2>
      <p className="font-bold">
        You must remove all rubbish, recycling and sanitising cloths to reduce
        the risk of cross contamination, this is a mandatory condition of your
        hire.
      </p>
      <h2>Heating</h2>
      <p className="font-bold">
        The heating system will be turned on before your hire unless you ask us
        not to.
      </p>
      <p>
        The system is set to X degrees and can be turned off if it gets too hot,
        or on if you need it during your hire. Instructions are in cupboard
        opposite the kitchen.
      </p>
      <h2>Bathrooms</h2>
      <p className="font-bold">Ground floor</p>
      <p>
        Toilets and wash hand basins for ladies, gents and a full disabled
        access W.C.
      </p>
      <p className="font-bold">First floor</p>
      <p>
        A walk in W.C and hand basin suitable for walk in disabled (located down
        three stairs from the main first floor level)
      </p>
      <h2>Access facilities</h2>
      <p className="font-bold">Stair lift to the first floor</p>
      <p>
        A key operated stair lift (with seat) please say at the time of booking
        if you would need this facility and we can give you instruction for use.
      </p>
      <h2>Seating and tables</h2>
      <p className="font-bold">
        In the main hall we have a range of tables and chairs. When seating
        guests, you must ensure there is at least 1 metre of direct unrestricted
        access to all fire escapes.
      </p>
      <ul>
        <li>32 - 6 foot folding tables</li>
        <li>4 - 4 foot tables</li>
        <li>4 - 5 foot round tables</li>
        <li>150 - Banquet chairs</li>
      </ul>
      <h2>Audio equipment</h2>
      <p className="font-bold">
        The main hall is equipped with an audio system with the following
        features
      </p>
      <p>Apple flash lead input</p>
      <p>
        3.5mm stereo jack which will fit most phones and devices with a
        headphone socket
      </p>
      <p>
        A radio microphone that can be used with a handheld mic, lappeliar mic
        or sport mic. (It only works with one at a time)
      </p>
      <p>A wired microphone that plugs into a socket on the stage.</p>
      <p>Volume control on the road side of the stage.</p>
      <h2>Internet &amp; WiFi</h2>
      <p className="font-bold">
        The hall offers free WiFi with internet access.
      </p>
      <p>
        There are two seperate networks for the hall, both with the same
        password. The password is found on the notice board in the main foyer.
        Choose the one with the strongest signal.
      </p>
      <h2>Ground floor kitchen</h2>
      <p className="font-bold">
        Whilst we provide almost everything you need to use the kitchen, please
        note there are no tea towels, glasses or pots and pans provided.
      </p>
      <p>
        We ask that all items are washed up and put away where you found them.
        There are washing cloths and washing up liquid to do this. We also ask
        that you empty the rubbish bin if you use it, as part of your hire.
      </p>
      <p>The kitchen facilities include:</p>
      <ul>
        <li>
          Commercial 6 ring Gas hob and an Electric Double Oven; this is linked
          to Gas and Extraction hood Controls. Instructions are available
          locally in the kitchen but the gas hob will not work unless they are
          set correctly.
        </li>
        <li>Worktop height Warming cupboard approx 600mm x 600mm</li>
        <li>Water boiler (approx 20 litres)</li>
        <li>2 electric kettles</li>
        <li>Commercial dishwasher with a 180 second cycle</li>
        <li>
          A small domestic Larder Fridge located in the small meeting room
        </li>
        <li>
          Crockery (Dinner plates/Tea plates/Dessert dishes) for up to 150
        </li>
        <li>Mugs for up to 100</li>
        <li>Cups and saucers up to 150</li>
        <li>Rubbish bin</li>
      </ul>
      <h2>Skittle alley</h2>
      <p className="font-bold">
        Full sized skittle alley with drop in side boards and recessed pit.
      </p>
      <p>
        The tables and chairs for the main hall are stored in the skittle alley
        and the bar is at one end.
      </p>
      <h2>Bar</h2>
      <p className="font-bold">
        The bar does not include stock or staff. You're welcome to bring your
        own drinks as long as you have a nominated individual responsible for
        guests drinking but if you are going to sell them or ask for a donation
        you will need a Bar Licence (cost £25.00) - and you will need to use
        glasses marked with measures as are stocked in our Bar.
      </p>
      <p>
        There is a small charge for the use of the bar and any breakages are the
        responsibility or the hirers and expected to be paid for by the hirer
        not the guests.
      </p>
      <p>
        We may be able to help with contacts to provide staffing for your bar at
        an extra cost between you and them if requested. You will need to
        provide a responsible person (other than employed staff) and any stock
        to be served or sold and the removal of all bottles etc. at the end of
        the hire will be your responsibility not of those "Running the Bar" for
        you.
      </p>
      <h2>Small meeting room</h2>
      <p>
        This is suitable for a meeting of 6 to 8 people, but also is the
        location of the Small Larder fridge which can be used FOC by the Main
        Hall and Kitchen Hires. Access will only be restricted if the room is
        hired separately which does happen from time to time.
      </p>
      <h2>First floor hall</h2>
      <p className="font-bold">Not available for childrens parties.</p>
      <p>The first floor hall has the following facilities:</p>
      <ul>
        <li>Electric Key operated "Stannah Type" seated stair lift</li>
        <li>10 - 6 foot tables</li>
        <li>40 - Folding chairs on racks</li>
        <li>A fully equipped kitchen with a serving hatch</li>
        <li>A domestic Four ring gas cooker</li>
        <li>A large kitchen with plenty of preparation surfaces</li>
        <li>Sink for washing up (no tea towels)</li>
        <li>Wall mounted retractable projection screen</li>
        <li>Gas heaters, controlled locally</li>
      </ul>
    </Body>
  </Layout>
)

export default FAQPage

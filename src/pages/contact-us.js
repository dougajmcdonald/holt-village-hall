import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Body from "../components/body"

import SEO from "../components/seo"
import HeroImg from "../svg/undraw_contactus.svg"
import Map from "../images/google-maps.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <Hero
      text="We're on hand to answers your queries and listen to your feedback"
      image={<HeroImg />}
    />
    <Body>
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you, whether it's making a booking or
        providing some valuable feedback we can use to improve.
      </p>
      <p>
        We will endeavour to get back to you within 48 hours though emails
        usually get answered sooner.
      </p>
      <h3>Contact form</h3>
      <form name="contact" method="POST" data-netlify="true">
        <p className="my-4">
          <label className="block text-secondary font-semibold" for="name">
            Name
          </label>
          <input
            className="border-2 border-primary rounded p-2 w-1/3"
            type="text"
            name="name"
          />
        </p>
        <p className="my-4">
          <label className="block text-secondary font-semibold" for="email">
            Email
          </label>
          <input
            className="border-2 border-primary rounded p-2 w-1/3"
            type="email"
            name="email"
          />
        </p>
        <p className="my-4">
          <label
            className="block text-secondary font-semibold"
            for="enquiry-type"
          >
            Enquiry type
          </label>
          <select
            className="border-2 border-primary rounded p-2 w-1/3"
            id="enquiry-type"
            name="enquiry-type"
          >
            <option value="booking">Booking enquiry</option>
            <option value="feedback">Feedback</option>
            <option value="idea">Idea</option>
          </select>
        </p>
        <p className="my-4">
          <label className="block text-secondary font-semibold" for="message">
            Message
          </label>
          <textarea
            className="border-2 border-primary rounded p-2 w-1/3"
            name="message"
          ></textarea>
        </p>
        <p>
          <button
            className="bg-tertiary rounded text-white font-bold font-body text-center my-10"
            style={{ width: `200px`, height: `60px` }}
            type="submit"
          >
            Send
          </button>
        </p>
      </form>
      <h3>Contact details</h3>
      <h4>Acting chairman: Graham Hill</h4>
      <a className="inline-block" href="mailto:grayivor@hotmail.com">
        grayivor@hotmail.com
      </a>
      <h4>Secretary: Rob Page</h4>
      <a className="inline-block" href="mailto:holtvillagehall@hotmail.com">
        holtvillagehall@hotmail.com
      </a>
      <h4>Hall address</h4>
      <p className="mt-4 mb-0">Holt Village Hall - Wiltshire,</p>
      <p className="mt-0 mb-0">The Street,</p>
      <p className="mt-0 mb-0">Holt,</p>
      <p className="mt-0 mb-0">Wiltshire,</p>
      <p className="mt-0 mb-0">BA14 6QH</p>
      <h2>Where to find us</h2>
      <img src={Map} />
    </Body>
  </Layout>
)

export default IndexPage

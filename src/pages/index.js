import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Body from "../components/body"
import SEO from "../components/seo"
import BlogListing from "../components/blog-listing"
import HeroImg from "../svg/undraw_suburbs.svg"

export default ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const events = edges
    .filter(
      edge =>
        !!edge.node.frontmatter.date && edge.node.frontmatter.draft === false
    )
    .map(edge => <BlogListing key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        text="Holt Village Hall provides an inclusive community venue for the village of Holt and local residents"
        image={<HeroImg />}
        cta={{ to: "/contact-us", text: "How to find us" }}
      />
      <Body>
        <h1>The Hall</h1>
        <p>
          Holt Village Hall is situated in the heart of the village, offering
          two bookable floors and a large car park providing a facility which is
          second to none in the surrounding area.
        </p>
        <h2 className="mt-6">Events</h2>
        {events}
      </Body>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            draft
            image {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 220, webpQuality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

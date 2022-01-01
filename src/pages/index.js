import React, { useState } from "react"
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
  const [activeTab, setActiveTab] = useState(0)
  const events = edges
    .filter(
      edge =>
        edge.node.frontmatter.category === "events" &&
        !!edge.node.frontmatter.date &&
        edge.node.frontmatter.draft === false &&
        (edge.node.frontmatter.sticky ||
          new Date(edge.node.frontmatter.date) >= new Date())
    )

    .map(edge => <BlogListing key={edge.node.id} post={edge.node} />)
  const descendingSort = (a, b) =>
    new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)
  const news = edges
    .filter(
      edge =>
        edge.node.frontmatter.category === "news" &&
        !!edge.node.frontmatter.date &&
        edge.node.frontmatter.draft === false
    )
    .sort(descendingSort)
    .map(edge => <BlogListing key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        text="Holt Village Hall provides an inclusive community venue for the village of Holt and local residents"
        image={<HeroImg />}
        cta={{ to: "/book", text: "Book now" }}
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
          Upcoming Events
        </h1>
        <h1
          className={`inline-block mt-4 md:mb-16 text-l md:text-2xl cursor-pointer border-b-4 border-transparent ${
            activeTab === 1
              ? "border-tertiary"
              : "text-gray-700 hover:border-tertiary"
          }`}
          onClick={() => setActiveTab(1)}
        >
          News
        </h1>
        {activeTab === 0 ? events : news}
      </Body>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            category
            date(formatString: "MMMM DD, YYYY")
            path
            draft
            sticky
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

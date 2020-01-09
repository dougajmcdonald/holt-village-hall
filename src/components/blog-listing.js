import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import DefaultImg from "../svg/undraw_events.svg"

const PostLink = ({ post: { excerpt, frontmatter } }) => (
  <Link
    to={frontmatter.path}
    className="post-link flex flex-row mt-3xl mb-10 no-underline hover:no-underline flex-wrap md:flex-no-wrap md:mt-5xl"
  >
    {frontmatter.image ? (
      <Img
        fixed={frontmatter.image.childImageSharp.fixed}
        alt="article lead"
        className="inline-block md:mr-3xl"
      />
    ) : (
      <DefaultImg width="220px" height="182.45px" />
    )}
    <div className="flex flex-col inline-block md:w-2/3 mt-10 md:ml-10 md:mt-auto">
      <h4 className="text-tertiary mt-0">{frontmatter.date}</h4>
      <h3 className="mt-2">{frontmatter.title}</h3>
      <span className="inline-block w-5xl h-xxxs bg-primary mb-lg"></span>
      <p className="leading-relaxed">{excerpt}</p>
    </div>
  </Link>
)
export default PostLink

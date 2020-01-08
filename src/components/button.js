import React from "react"
import { Link } from "gatsby"

const Button = ({ to, children }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)
  return internal ? (
    <Link to={to}>
      <button
        className="bg-tertiary rounded text-white font-bold font-body text-center my-10"
        style={{ width: `200px`, height: `60px` }}
      >
        {children}
      </button>
    </Link>
  ) : (
    <a href={to}>
      <button
        className="bg-tertiary rounded text-white font-bold font-body text-center my-10"
        style={{ width: `200px`, height: `60px` }}
      >
        {children}
      </button>
    </a>
  )
}

export default Button

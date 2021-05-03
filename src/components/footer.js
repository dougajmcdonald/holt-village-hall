import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <footer
    className="bg-secondary font-body flex mt-24"
    style={{ minHeight: `220px` }}
  >
    <div className="w-4/5 md:w-2/3 mx-auto text-white flex flex-column flex-wrap py-16">
      <span className="w-full text-center">
        Holt Village Hall, The Street, Holt, BA14 6QH
      </span>
      <span className="w-full text-center text-primary mt-4">
        Visit us on{" "}
        <a href="https://www.facebook.com/holtvillagehall">Facebook</a>
      </span>
      <span className="w-full text-center text-primary mt-4">
        Registered charity number{" "}
        <a href="http://apps.charitycommission.gov.uk/Showcharity/RegisterOfCharities/CharityWithoutPartB.aspx?RegisteredCharityNumber=305527&SubsidiaryNumber=0">
          305527
        </a>
      </span>
      <span className="w-full text-center text-primary mt-4">
        <Link to="/privacy">Privacy policy</Link>
      </span>
    </div>
  </footer>
)

export default Header

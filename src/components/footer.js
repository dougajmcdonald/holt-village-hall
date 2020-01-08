import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <footer
    className="bg-secondary font-body flex mt-24"
    style={{ minHeight: `220px` }}
  >
    <div className="w-4/5 md:w-2/3 mx-auto text-white flex flex-column flex-wrap py-16">
      <span className="w-full text-center">
        Holt Village Hall, The Street, Holt, BA14 6QH
      </span>
      <span className="w-full text-center text-primary mt-8">
        Registered charity number{" "}
        <a href="http://apps.charitycommission.gov.uk/Showcharity/RegisterOfCharities/CharityWithoutPartB.aspx?RegisteredCharityNumber=305527&SubsidiaryNumber=0">
          305527
        </a>
      </span>
    </div>
  </footer>
)

export default Header

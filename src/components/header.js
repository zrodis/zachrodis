import { Link } from "gatsby"
import Img from 'gatsby-image'
import PropTypes from "prop-types"
import React from "react"
import '../styles/header.css'

const Header = ({ siteTitle }) => (
  <header>
  <Link
    to="/"
    className="zachrodis"
  >
    <div className="headerContainer">
      <h1 style={{ margin: 0 }}>

          {siteTitle}
      </h1>
    </div>
  </Link>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Zach Rodis`,
}

export default Header

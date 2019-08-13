import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

import Fade from 'react-reveal/Fade';

import '../styles/header.css'

const Header = ({ siteTitle }) => (
  <header>
  <Link
    to="/"
    className="zachrodis"
  >
    <div className="headerContainer">


      <Fade left cascade>
          <h1 style={{ margin: 0 }}>{siteTitle}</h1>
      </Fade>


    </div>
  </Link>

  </header>
)


export default Header

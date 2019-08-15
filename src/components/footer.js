import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'


import '../styles/footer.css'

const FooterLink = ({to, title}) => {
  return <a className="yellowLink" href={to}>{title}</a>
}


const Footer = () => {

  return(
    <footer>
      <div className="footerLineDivider"/ >

      <div className="footerWrapper">

        <div className="footerLinks">
          <FooterLink to={"/builtwith"} title={"What is this site built with?"}/>
          <div className="footerDot">•</div>
          <FooterLink to={"/friends"} title={"Friends and Family websites"}/>

        </div>
          <div className="finePrint" > ©2019 Zach Rodis </div>
        </div>

    </footer>
  )
}


export default Footer

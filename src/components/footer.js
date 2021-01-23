import React from "react"
import { Link } from "gatsby"

import '../styles/footer.css'

const FooterLink = ({to, title}) => {
  return <Link className="yellowLink" to={to}>{title}</Link>
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
          <div className="finePrint" > {`©1986 - ${new Date().getFullYear()} Zach Rodis`} </div>
        </div>

    </footer>
  )
}


export default Footer

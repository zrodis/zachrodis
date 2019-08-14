import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'


import '../styles/footer.css'

const FooterLink = ({to, title}) => {
  return <a className="footerLink" href={to}>{title}</a>
}


const Footer = () => {

  return(
    <footer>
      <div className="footerWrapper">
      <div>
        <FooterLink to={"https://www.circleupstories.com/"} title={"Circle Up Stories"}/> • <FooterLink to={"https://kimfolse.com/"} title={"Kim Folse"}/> • <FooterLink to={"http://rodis.net/"} title={"rodis.net"}/> 
      </div>
      <div className="finePrint" >
        ©2019 Zach Rodis - Built with <FooterLink to={"https://reactjs.org/"} title={"React.js"}/> and <FooterLink to={"https://www.gatsbyjs.org/"} title={"Gatsby.js"}/></div>
      </div>

    </footer>
  )
}


export default Footer

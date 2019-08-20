import React, {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import contactSubmitComponent from '../components/forms/contactSubmitComponent'
import HelloContact from '../components/forms/HelloContact'
// import ContactTypes from '../components/forms/ContactTypeDropdown'

import "../styles/contact.css"

/*
form types:
 - feedback
 - hello
 - website commision inquiry
 - illustraiton commision inquiry


// you can't call a HOC in a render function

*/



const ContactPage = ({data}) => {
  const [ contactType, setContactType ] = useState('hello')

  return (
    <Layout>
      <SEO title="Contact" />
      <div style={{margin: '20px auto', textAlign: 'center'}}>
          <p style={{margin: '10px'}}>Hello. Please contact me to inquire about websites, apps, illustrations, to report bugs in things i made, or just to say hello.</p>

      </div>
      <br/>


      <HelloContact className="test-class" />
    </Layout>
  )
}

export default ContactPage

import React, {useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactFormsFilter from "../components/forms/ContactFormsFilter"
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

  function dropdownUpdate(evt){
    setContactType(evt.target.value)
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <div style={{margin: '20px auto', textAlign: 'center'}}>
          <p style={{margin: '10px'}}>Contact me:</p>

          <select name="contactChoice" onChange={dropdownUpdate}>
            <option value="hello">Say Hello</option>
            <option value="website">I need a website!</option>
            <option value="app">I need an app!</option>
            <option value="illustration">I need illustrations!</option>
            <option value="bug">I want to report a bug!</option>
            <option value="meany">I want to send a mean message!</option>
          </select>
      </div>

      <br/>
      <ContactFormsFilter type={contactType} />


    </Layout>
  )
}

export default ContactPage

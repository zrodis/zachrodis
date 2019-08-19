import React, {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import contactSubmitComponent from '../components/contactSubmitComponent'

/*
form types:
 - feedback
 - hello
 - website commision inquiry
 - illustraiton commision inquiry


// you can't call a HOC in a render function

*/
const HelloContact = (props) =>{
  console.log('HelloContact props', props);
  return <div>
    hello

    {props.children}
  </div>
}


const ContactPage = ({data}) => {
  const [ contactType, setContactType ] = useState('hello')

  return (
    <Layout>
      <SEO title="Contact" />
      <div style={{margin: '20px auto', textAlign: 'center'}}>
          <p style={{margin: '10px'}}>Here's my email.</p>
          <h3 style={{margin: '10px'}}>zachrodis[at-symbol-thing]gmail.com</h3>
          <p>If you want to follow me on social media, sorry not much there.</p>
          <p>Please email about websites, apps, or illustrations.</p>
      </div>


    </Layout>
  )
}

export default ContactPage

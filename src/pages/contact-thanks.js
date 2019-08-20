import React, {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/contact.css"


const ContactThanks = ({data}) => {
  const [ contactType, setContactType ] = useState('hello')

  return (
    <Layout>
      <SEO title="Thanks for contacting" />
      <div style={{margin: '20px auto', textAlign: 'center', fontSize:'20px'}}>
          Thanks for contacting me! I'll respond soon.<br/>
          <Link to='/'>
            <button title="Home Page">
              Back to Home Page
            </button>
          </Link>
      </div>
      <br/>


    </Layout>
  )
}

export default ContactThanks

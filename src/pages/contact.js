import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"


import '../styles/home.css'



const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Contact" />
    <div style={{margin: '20px auto', textAlign: 'center'}}>
        <p style={{margin: '10px'}}>Here's my email.</p>
        <h3 style={{margin: '10px'}}>zachrodis[at-symbol-thing]gmail.com</h3>
        <p>If you want to follow me on social media, that would be really boring for you.</p>
    </div>
  </Layout>
)

export default ContactPage

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Kimbirdly from '../components/Kimbirdly'
// <Kimbirdly />


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="flexCenterColumn" style={{paddingTop:'20px'}}>
      <h1>Oops you're lost</h1>
    </div>
  </Layout>
)

export default NotFoundPage

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Kimbirdly from '../components/Kimbirdly'


const BirdPage = ({data}) => (
  <Layout>
    <SEO title="Bird" />
    <Kimbirdly />

  </Layout>
)

export default BirdPage

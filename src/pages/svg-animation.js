import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import SVGAnimation from '../components/header/SVGAnimation'


const BirdPage = ({data}) => (
  <Layout>
    <SEO title="SVG Line Animation" />
    <SVGAnimation animate/>


  </Layout>
)

export default BirdPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import BigButton from "../components/BigButton"

import AccordionImage from '../images/ah-wideimage'
import BuildPiggyImage from '../images/build-piggy-image'

import '../styles/home.css'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />

    <BigButton
      href='https://accordionhelper.com'
      image={<AccordionImage />}
      title='Accordion Helper'
      animDelay={500}
    />

    <BigButton
      href='https://www.kickstarter.com/projects/circleupstories/build-piggy-build'
      image={<BuildPiggyImage />}
      title='Card Game Illustration'
      animDelay={1000}
    />

  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "ah_wideimage.png" }) {
      childImageSharp {
        fixed(width: 1746, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';

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
        description="An interactive accordion chord chart. Made with React.js and Redux.\nUpdated monthly(-ish) based on community feedback.\nClick to vsit the site."
      />

      <BigButton
        href='https://www.kickstarter.com/projects/circleupstories/build-piggy-build'
        image={<BuildPiggyImage />}
        title='Build Piggy Build'
        description="Illustrations for the card game.\nCollect all parts of a matching house to give your piggy a suburban paradise away from wolves.\nClick to visit the Kickstarter."
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

import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import BigButton from "../components/BigButton"
import AccordionImage from '../images/ah-wideimage'
import BuildPiggyImage from '../images/build-piggy-image'
import CLocktowerImage from '../images/clocktower-image'
import RobotGuardianImage from '../images/robotguardian-wideimage'

import '../styles/home.css'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div className="bigButtonContainer">
      <BigButton
        href='https://accordionhelper.com'
        image={<AccordionImage />}
        title='Accordion Helper'
        description="Accordion Helper is an interactive accordion chord chart made with React.js and Redux.\nIt helps accordion players figure out chords and fingering variations.\n Updated monthly(-ish) based on user feedback.\nClick to visit the site."
      />

      <BigButton
        href='https://www.kickstarter.com/projects/circleupstories/build-piggy-build'
        image={<BuildPiggyImage />}
        title='Build Piggy Build'
        description="I did illustrations for the card game.\nCollect all parts of a matching house and give your piggy the suburban paradise they've always dreamed of.\nClick to visit the Kickstarter."
      />

      <BigButton
        href='https://zrodis-clocktower.herokuapp.com/'
        image={<CLocktowerImage />}
        title='Clocktowers'
        description={'"The year is 3009.\n'+
          'London was bombed into dust during World War VII,\n but the remnants of humanity have managed to rebuild.\n'+
          'The mysteries of analog clocks have long been forgotten and Big Ben was re-created with a giant LED display.\n'+
          'Clock enthusiasts of the future need to know how many times the bell will ring between two given times."\n'+
          'I made this little test for a job application. Also I got the job, hooray!'}
      />
      <BigButton
        href='/robotguardian'
        image={<RobotGuardianImage />}
        title='Robot Guardian'
        description={'The ancient scrolls used to entomb the Robot Guardian were thought to be long lost... until today. Using the latest innovations in bio-engineering, robotics, mathematics, quantum physics, and gourmet baking, scientists were able to resurrect the Robot Guardian and contain him within a small animation.'}
      />

    </div>
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

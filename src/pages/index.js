import React, {useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import BigButton from "../components/BigButton"
import AccordionImage from '../images/ah-wideimage'
import BuildPiggyImage from '../images/build-piggy-image'
import CLocktowerImage from '../images/clocktower-image'
import RobotGuardianImage from '../images/robotguardian-wideimage'

import '../styles/home.css'

const bigButtonData = [
  {
  href: 'https://accordionhelper.com',
  image:<AccordionImage />,
  title:'Accordion Helper',
  description:"Accordion Helper is an interactive accordion chord chart made with React.js and Redux.\nIt helps accordion players figure out chords and fingering variations.\n Updated monthly(-ish) based on user feedback.",
  }
]

const IndexPage = ({data}) => {

  let [show, setShow] = useState(0)


  function handleExpansion(id){
    setShow(id)
  }

  function handleCollapse(){
    setShow(0)
  }

  return (
  <Layout>
    <SEO title="Home" />
    <div className="bigButtonContainer">

      {}

      <BigButton
        id={4}
        show={show === 4}
        handleExpansion={handleExpansion}
        handleCollapse={handleCollapse}
        href='https://accordionhelper.com'
        image={<AccordionImage />}
        title='Accordion Helper'
        description="Accordion Helper is an interactive accordion chord chart made with React.js and Redux.\nIt helps accordion players figure out chords and fingering variations.\n Updated monthly(-ish) based on user feedback."
      />

      <BigButton
        id={1}
        show={show === 1}
        handleExpansion={(id) => handleExpansion(id)}
        handleCollapse={handleCollapse}

        href='https://www.kickstarter.com/projects/circleupstories/build-piggy-build'
        image={<BuildPiggyImage />}
        title='Build Piggy Build'
        description="Collect all parts of a matching house and give your piggy the suburban paradise they've always dreamed of.\nI did the illustrations. Check out the Kickstarter."
      />

      <BigButton
        id={2}
        show={show === 2}
        handleExpansion={(params) => handleExpansion(params)}
        handleCollapse={handleCollapse}

        href='https://zrodis-clocktower.herokuapp.com/'
        image={<CLocktowerImage />}
        title='Clocktowers'
        description={'"The year is 3009.\n'+
          'The mysteries of analog clocks have long been forgotten, but clock enthusiasts of the future still need to know how many times the bell will ring between two given times."\n'}
      />
      <BigButton
        id={3}
        show={show === 3}
        handleExpansion={(id) => handleExpansion(id)}
        handleCollapse={handleCollapse}

        href='/robotguardian'
        image={<RobotGuardianImage />}
        title='Robot Guardian'
        description={'The ancient scrolls used to entomb the Robot Guardian were thought to be long lost... Using the latest innovations in robotics, quantum physics, and gourmet baking, scientists were able to resurrect the Robot Guardian and contain him within a small animation.'}
      />

    </div>
  </Layout>
)}

export default IndexPage

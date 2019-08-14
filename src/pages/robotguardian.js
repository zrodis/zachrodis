import React from 'react'
import { Link } from 'gatsby'
import {Player} from 'video-react'
import "../../node_modules/video-react/dist/video-react.css";
import Layout from '../components/layout'

import SEO from '../components/seo'

import '../styles/robotguardian.css'
import video from '../images/RobotGuardianVid.mp4'


const RobotPage = ({data}) => (
  <Layout>
    <SEO title='Robot Guardian Defender of the Universe' />
    <div style={{margin: '20px auto'}}>
        <h3 style={{textAlign: 'center', fontSize:'35px'}}>Robot Guardian</h3>
        <h3 style={{textAlign: 'center'}}>Defender of the Universe</h3>
        <Player
          playsInline
          autoplay={true}
          src={video}
        />
        <div style={{margin: '10px'}}>
        <p>
          The Robot Guardian is the Defender of the Universe. The Robot Guardian is the defender of your soul. He is made of an aluminum-titanium alloy that is impervious to all forms of bullets, rockets, lasers, and radiation. He has a laser in his eyes for defending the universe, and he has compassion in his heart for saving lost souls.
        </p>
        <p>
          The ancient scrolls used to entomb the Robot Guardian were thought to be long lost... until today. Using the latest innovations in bio-engineering, robotics, mathematics, quantum physics, and gourmet baking, scientists were able to resurrect the Robot Guardian and contain him within a small animation.
        </p>
        <p>
          One would be wise to not be fooled by his current form, however. For when the universe is threatened, he will spring into action like he has done many times before, over past eons.
        </p>
        <p>
          From the most recent defeat of the evil dinosaurs threatening dominance of the earth, to his battle with earth-magma-monsters over 4 billion years ago, to his pre-time war with the King of the Thirteenth Dimension who hatched a scheme to stop the Big Bang from creating the universe, the Robot Guardian will always be there to watch over you.
        </p>
        </div>

    </div>
  </Layout>
)

export default RobotPage

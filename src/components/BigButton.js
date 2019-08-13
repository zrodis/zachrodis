import React from "react"
import '../styles/BigButton.css'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

export default ({href, image, title, animDelay=0}) => (

  <a style={{color: 'black'}} href={href}>
    <div className='big-button'>

      <div className='big-button-bg'>
        {image}
      </div>
      <div className='big-button-overlay'>

        <Flip left cascade delay={animDelay}>
          <h1>{title}</h1>
        </Flip>

      </div>
    </div>

  </a>

)

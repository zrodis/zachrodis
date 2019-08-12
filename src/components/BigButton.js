import React from "react"
import '../styles/BigButton.css'

export default ({href, image, title}) => (

  <a style={{color: 'black'}} href={href}>
    <div className='big-button'>

      <div className='big-button-bg'>
        {image}
      </div>
      <div className='big-button-overlay'>

        <h1>{title}</h1>
      </div>
    </div>

  </a>

)

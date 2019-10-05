import React, {Fragment} from "react"
import Description from './Description'
import './BigButton.css'

export default (props) => {
  const {
    href,
    image,
    title,
    description,
    handleExpansion,
    handleCollapse,
    id,
    show,
  } = props

  const descriptionProps = {
      href,
      title,
      description,
      show,
  }

  return (

    <div
      className={'big-button ' + (show ? 'stretched' : 'not-stretched')}
      onMouseEnter={() => handleExpansion(id)}
      onMouseLeave={handleCollapse}
    >
          <div className='big-button-bg'> {image} </div>
          <div className='big-button-overlay'>

            <div className="big-button-overlay-wrap" >
              <h1>{title}</h1>

              <Description
                {...descriptionProps}
              />

              <div className="big-button-description-mobile">
                <a href={ href } className="big-anchor" >
                  <div className="clickout-button"> {'Go to ' + title + ' >'} </div>
                </a>
              </div>

            </div>
          </div>

    </div>
  )
}

import React, {Fragment} from "react"
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

              <div
                className="big-button-description"
                style={{
                    height: `${ show ? 'auto' : 0}`,
                    opacity: `${ show ? 1 : 0}`}
                }
              >
                {description.split('\\n').map((item, key) => (<Fragment key={key}>{item}<br/> </Fragment>))}
                <a href={ href }  className="big-anchor" style={{visibility: `${ show ? 'visible' : 'hidden'}`} }>
                  <div className="clickout-button"> {'Go to ' + title + ' >'} </div>
                </a>
              </div>

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

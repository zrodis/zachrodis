import React, {useState, useEffect} from "react"
import './BigButton.css'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import {useTransition, animated} from 'react-spring'


export default ({href, image, title, description, animDelay=0}) => {
  let [show, setShow] = useState(false)
  let [flexSize, setFlexSize] = useState(1)

  function handleExpansion(evt){
    // setFlexSize(2)
    // evt.currentTarget.style.flex = 2;
    setShow(true)
  }

  function handleCollapse(evt){
    // setFlexSize(1)
    setShow(false)
    // evt.currentTarget.style.flex = 1;
  }

  const transitions = useTransition(show, null, {
    from: {  opacity: 0, height: 0 },
    enter: { opacity: 1, height:'auto'},
    leave: { opacity: 0, height: 0},
  })

  return (
    <div
      style={{flex: `${ show ? 2 : 1}`}}
      className='big-button'
      onMouseOver={handleExpansion}
      onMouseOut={handleCollapse}

    >
      <a style={{color: 'black'}} href={href} className="big-anchor">

          <div className='big-button-bg'> {image} </div>
          <div className='big-button-overlay'>

            <div className="big-button-overlay-wrap" >
              <h1>{title}</h1>
              <div style={{height: `${ show ? 'auto' : 0}`, opacity: `${ show ? 1 : 0}`}}>
                {description.split('\\n').map(item => (<>{item}<br/> </>))}
              </div>

            </div>

          </div>
      </a>
    </div>
  )
}

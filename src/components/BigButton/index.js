import React, {useState, useEffect} from "react"
import './BigButton.css'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import {useTransition, animated} from 'react-spring'


export default ({href, image, title, description, animDelay=0}) => {
  let [show, setShow] = useState(false)

  function handleExpansion(evt){
    evt.currentTarget.style.flex = 2;
    setShow(true)
  }

  function handleCollapse(evt){
    setShow(false)
    evt.currentTarget.style.flex = 1;
  }

  const transitions = useTransition(show, null, {
    from: {  opacity: 0, height: 0 },
    enter: { opacity: 1, height:'auto'},
    leave: { opacity: 0, height: 0},
  })

  return (
    <div className='big-button'
      onMouseOver={handleExpansion}
      onMouseOut={handleCollapse}
    >
      <a style={{color: 'black'}} href={href} className="big-anchor">

          <div className='big-button-bg'> {image} </div>
          <div className='big-button-overlay'>

            <div className="big-button-overlay-wrap" style={show ? {backgroundColor: `rgba(255,255,255, 0.5)`} : null}>
            <h1>{title}</h1>
            {
              transitions.map( ({ item, key, props }) => {
                if(item) {
                  return <animated.div key style={props}>{description}</animated.div>
                }
              })
            }
            </div>

          </div>
      </a>
    </div>
  )

}

/*
<Flip left cascade
      when={show} duration={300} delay={animDelay}
>
  {title}
</Flip>
<Flip left cascade
      when={!show} duration={300} delay={animDelay}
>
  {description}
</Flip>
*/

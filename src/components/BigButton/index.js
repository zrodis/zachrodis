import React, {useState, useEffect} from "react"
import './BigButton.css'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import {useTransition, animated} from 'react-spring'


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

  const transitions = useTransition(show, null, {
    from: {  opacity: 0, height: 0 },
    enter: { opacity: 1, height:'auto'},
    leave: { opacity: 0, height: 0},
  })

  function clickOut(evt){

    // window.open(href, "_self");
  }

  return (

    <div
      style={{flex: `${ show ? 3 : 2}`} }
      className='big-button'
      onPointerEnter={() => handleExpansion(id)}
      onTouchStart={() =>  handleExpansion(id)}
      onPointerLeave={handleCollapse}
      onPointerUp={clickOut}
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
                {description.split('\\n').map(item => (<>{item}<br/> </>))}
                <a href={ href } className="big-anchor" style={{visibility: `${ show ? 'visible' : 'hidden'}`} }>
                  <div className="clickout-button"> {'Go to ' + title + ' >'} </div>
                </a>
              </div>



            </div>



          </div>



    </div>
  )
}


/*
<a style={{color: 'black'}} href={ href } className="big-anchor">

    <div className='big-button-bg'> {image} </div>
    <div className='big-button-overlay'>

      <div className="big-button-overlay-wrap" >
        <h1>{title}</h1>
        <div className="big-button-description"
              style={{height: `${ show ? 'auto' : 0}`, opacity: `${ show ? 1 : 0}`}}
        >
          {description.split('\\n').map(item => (<>{item}<br/> </>))}
        </div>

      </div>

    </div>
</a>

*/

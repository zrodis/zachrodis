import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import { Location } from '@reach/router';

import HeronIcon from '../../images/heron_icon'
import DesktopLink from './DesktopHeaderLink'
import SVGAnimation from './SVGAnimation'

import '../../styles/header.css'


const Header = ({ siteTitle }) => {
  const [shortHeader, updateShortHeader] = useState(false)

  useEffect( () => {
    window.addEventListener('scroll', listenToScroll)
    return () => {
      window.removeEventListener('scroll', listenToScroll)
    }
  }, [shortHeader])

  function listenToScroll(evt){
    if(!shortHeader && window.pageYOffset > 190 ){
      updateShortHeader(true)
      window.removeEventListener('scroll', listenToScroll)
    }else if(shortHeader && window.pageYOffset < 100 ){
      updateShortHeader(false)
      window.removeEventListener('scroll', listenToScroll)
    }
  }


  return(
  <header className={(shortHeader ? 'shortHeader': 'tallHeader')}>

    <Location >

    {({location}) => (
      <div className='animationContainer'>
        <SVGAnimation animate={(location.pathname=== '/' ? true : false)} />
      </div>
    )}
    </Location >


    {!shortHeader &&
      <div className="zachrodisContainer">
        <Link to="/" className="zachrodis">

            <h1 style={{ margin: 0 }}>{siteTitle}</h1>
        </Link>
      </div>
    }

    <div className="DesktopNav">
        {shortHeader &&
          <DesktopLink to="/" title="Zach Rodis" />
        }
        <DesktopLink to="/about" title="about" />
        <DesktopLink to="/contact" title="contact" />
    </div>



  </header>
)}

/*
<div style={{
  position: 'absolute',
  left:'20px',
  bottom:'20px',
  width: '60px',
  height: '60px',
  padding: '8px',
  borderRadius: '500px',
  background:'#bf7315',
  overflow: 'hidden',
}}>
  <HeronIcon style={{
    filter: 'saturate(8)',
    width: '100%',
    height: '100%',
  }}/>

</div>
*/
export default Header

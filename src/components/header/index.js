import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';

import HeronIcon from '../../images/heron_icon'
import DesktopLink from './DesktopHeaderLink'
import '../../styles/header.css'

const Header = ({ siteTitle }) => {
  const [shortHeader, setShortHeader] = useState(false)

  useEffect( () => {
    window.addEventListener('scroll', listenToScroll)
    return () => {
      window.removeEventListener('scroll', listenToScroll)
    }
  }, [])

  function listenToScroll(evt){
    if(window.pageYOffset > 150 ){
      setShortHeader(true)
    }else if(window.pageYOffset < 100 ){
      setShortHeader(false)
    }
  }
/*

  <div className="headerBGContainer">
    <div style={{background:"#C1666B", flex: '5'}}></div>
    <div style={{background:"#F7DC7B", flex: '16'}}></div>
    <div style={{background:"#C1666B", flex: '13'}}></div>

  </div>
*/
  return(
  <header style={{height: (shortHeader ? '50px': '100px')}}>



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

import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {BigLinkLocal} from "../components/BigLink"


import '../styles/home.css'

const thingsILike = [
  ['JavaScript', 'ES6', 'React.js', 'CSS3' ,'node.js', 'express.js', 'React Native',],
  ['accordion', 'guitar'],
  ['watercolor paints', 'inks', 'texture'],
  [ 'board games', 'card games', 'video games', 'growing tomatoes'],
]

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About" />
    <div className='textSection'>
      <div style={{margin: '20px'}}>
        I am a Front End Developer. Sometimes I do illustrations, too.<br/><br/>
        <h3>Here are some things I like:</h3>
        <ul>
          {thingsILike.map( (item, key) => {
            return <li key={key} >{item.join(', ')}</li>
          })}

        </ul>
      </div>

      <div style={{margin: '20px'}}>


        <a href="https://github.com/zrodis" style={{fontWeight:'bold', hover:"red"}}>Here</a> is my github.
       
        I live in Philadelphia.
      </div>
      <div style={{margin: '20px'}}>
          You can ask me to make websites, apps, or illustrations.
          <BigLinkLocal to="/contact" title="contact me"/>
      </div>
    </div>
  </Layout>
)

export default AboutPage

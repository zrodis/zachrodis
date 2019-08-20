import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BigLink from "../components/BigLink"


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
      <BigLink to="https://github.com/zipfreeman" title="Here is my github."/>
      <p>
        Don't tell anyone, but it's under the alias Zip Freeman. Dang I shouldn't have put that information on the internet, oh well too late now, can't undo.
        Mainly though I use my raspberry pi as a repo.
      </p>
      I live in Philadelphia.
    </div>
    <div style={{margin: '20px'}}>
        I do commissions for websites, webapps, mobile apps, or illustrations.
        <BigLink to="/contact" title="contact me"/>
    </div>
  </Layout>
)

export default AboutPage

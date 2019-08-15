import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/home.css'

const BigLink = ({to, title}) => {
  return <a className="yellowLink" href={to}><h3>{title}</h3></a>
}

const BuiltWithPage = ({data}) => (
  <Layout>
    <SEO title="Built With" />
    <div style={{margin: '20px auto', textAlign: 'center'}}>
        Since I didn't invent the universe, nothing on this site is made from scratch. I used:
        <br/><br/>
        <BigLink to={"https://reactjs.org/"} title={"React.js"} />
        <p>React is pretty cool.</p>
        <BigLink to={"https://gatsbyjs.org/"} title={"Gatsby.js"} />
        <p>Gatsby makes static paths automatically from react.js and optimizes image loading.</p>
        <BigLink to={"https://www.react-spring.io"} title={"react-spring"} />
        <p>A library that makes animations in react a lot less manual.</p>
        <h3>JavaScript, CSS3</h3>
        <p>Arrow functions and flexbox are nice, plus all that other stuff</p>

    </div>
  </Layout>
)

export default BuiltWithPage

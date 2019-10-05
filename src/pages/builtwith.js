import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {BigLinkOut} from '../components/BigLink'
import '../styles/home.css'


const BuiltWithPage = ({data}) => (
  <Layout>
    <SEO title="Built With" />
    <div style={{margin: '20px auto', textAlign: 'center'}}>
        Since I didn't invent the universe, I didn't make anything from scratch. I used:
        <br/><br/>
        <BigLinkOut to={"https://reactjs.org/"} title={"React.js"} />
        <p>React is pretty cool.</p>
        <BigLinkOut to={"https://gatsbyjs.org/"} title={"Gatsby.js"} />
        <p>Gatsby makes static paths automatically from react.js and optimizes image loading.</p>
        <BigLinkOut to={"https://www.react-spring.io"} title={"react-spring"} />
        <p>A library that makes animations in react a lot less manual.</p>
        <h3>JavaScript, CSS3</h3>
        <p>Arrow functions and flexbox are nice, plus all that other stuff</p>
        <h3>SVG</h3>
        <p>Magic lines</p>

    </div>
  </Layout>
)

export default BuiltWithPage

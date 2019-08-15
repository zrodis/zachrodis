import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BigLink from "../components/BigLink"


const FriendPage = ({data}) => (
  <Layout>
    <SEO title="Friends and Family Links" />
    <div style={{margin: '20px auto', textAlign: 'center'}}>
        <h3 style={{margin: '10px'}}>Friends and Family Links</h3>

        <BigLink to={"https://www.circleupstories.com/"} title={"Circle Up Stories"}/>

        <BigLink to={"https://kimfolse.com/"} title={"Kim Folse"}/>

        <BigLink to={"http://rodis.net/"} title={"rodis.net"}/>

    </div>
  </Layout>
)

export default FriendPage

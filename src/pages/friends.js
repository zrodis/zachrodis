import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {BigLinkOut} from "../components/BigLink"


const FriendPage = ({data}) => (
  <Layout>
    <SEO title="Friends and Family Links" />
    <div style={{margin: '20px auto', textAlign: 'center'}}>
        <h3 style={{margin: '10px'}}>Friends and Family Links</h3>

        <BigLinkOut to={"https://www.circleupstories.com/"} title={"Circle Up Stories"}/>

        <BigLinkOut to={"https://kimfolse.com/"} title={"Kim Folse"}/>

        <BigLinkOut to={"http://rodis.net/"} title={"rodis.net"}/>

    </div>
  </Layout>
)

export default FriendPage

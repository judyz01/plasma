import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Eligible = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Congratulations, you are eligible to be a plasma donor!</h1>
    <div style={{width: '100%', height: '10px'}} />
    <p>The next step for you is to find out where your nearest blood donor clinic is,
      and that's just a google search away!
    </p>
    <div style={{width: '100%', height: '20px'}} />
    <Button href="/getRequest" variant="outlined" color="primary" size="large">
        Find Donation Center
    </Button> 
    <div style={{width: '100%', height: '260px'}} />
  </Layout>
)

export default Eligible

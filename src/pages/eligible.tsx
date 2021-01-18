import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Eligible = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Congratulations, you are eligible to be a plasma donor!</h1>
    <p>The next step for you is to find out where your nearest blood donor clinic is,
      and that's just a google search away!
    </p>
    <Button href="/getRequest" variant="outlined" color="primary" size="large">
        Find donation center
    </Button> 
    <Link to="/">Back to Home</Link>
  </Layout>
)

export default Eligible

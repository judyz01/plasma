import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Eligible = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Eligible</h1>
    <p>Welcome to page 2</p>
    <Button href="/getRequest" variant="outlined" color="primary" size="large">
        Find donation center
    </Button> 
    <a href=""></a>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Eligible

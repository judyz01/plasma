import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotEligible = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>We're sorry. It appears that you are not eligible to be a plasma donor.</h1>
    <p>Don't worry though, there's always other ways to contribute!</p>
    <Link to="/">Back to Home</Link>
  </Layout>
)

export default NotEligible

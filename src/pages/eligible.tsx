import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Eligible = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Congratulations, you are eligible to be a plasma donor!</h1>
    <p>The next step for you is to find out where your nearest blood donor clinic is,
      and that's just a google search away!
    </p>
    <Link to="/">Back to Home</Link>
  </Layout>
)

export default Eligible

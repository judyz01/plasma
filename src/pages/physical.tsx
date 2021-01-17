import React from "react"
import Button from "@material-ui/core/Button"

import Layout from "../components/layout"

const Physical = () => (
  <Layout>
    <p>Are at least 17 years old and weigh 110 lbs?</p>
    
    <Button href="/symptoms" variant="outlined" color="primary" size="large">
        Yes
    </Button> 
    <Button href="/notEligible" variant="outlined" color="primary" size="large">
        No
    </Button> 
  </Layout>
)

export default Physical

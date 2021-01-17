import React from "react"
import Button from "@material-ui/core/Button"

import Layout from "../components/layout"

const LabTest = () => (
  <Layout>
    <p>Was your COVID-19 diagnosis confirmed by a lab test?</p>
    
    <Button href="/uploadResults" variant="outlined" color="primary" size="large">
        Yes
    </Button> 
    <Button href="/notEligible" variant="outlined" color="primary" size="large">
        No
    </Button> 
  </Layout>
)

export default LabTest

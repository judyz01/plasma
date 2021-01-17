import React from "react"
import Button from "@material-ui/core/Button"

import Layout from "../components/layout"

const Symptoms = () => (
  <Layout>
    <p>Has it been at least 14 days since the last day of your symptoms (COVID-19 symptoms include fever, cough and shortness of breath)?</p>
    
    <Button href="/labTest" variant="outlined" color="primary" size="large">
        Yes
    </Button> 
    <Button href="/notEligible" variant="outlined" color="primary" size="large">
        No
    </Button> 
  </Layout>
)

export default Symptoms

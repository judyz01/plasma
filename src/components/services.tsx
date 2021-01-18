import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ServiceCard from "./service-card"
import Bar from "./bar"

const Services = () => {
  let services = [
    {
      id: 1,
      image: "tracking-icon.png",
      title: "Take a Survey",
      description: "Done in less than 20 seconds. Don't worry, it's completely confidential!",
    },
    {
      id: 2,
      image: "consultation-icon.png",
      title: "Upload Your Test Results",
      description:
        "We accept .PNG and .JPG files, so just take a picture with your phone. No more scanning those pesky PDFs anymore!",
    },
    {
      id: 3,
      image: "search-doctor-icon.png",
      title: "Find a Nearby Blood Bank",
      description:
        "If you're eligible, you can donate plasma and save lives!",
    }
  ]

  return (
    <Grid
      container
      spacing={3}
      style={{
        textAlign: "center",
        minHeight: 200,
        padding: 10,
      }}
    >
      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h5">Our Goal</Typography>
        <Bar />
        <Typography variant="subtitle1" style={{ margin: 30 }}>
         The outbreak of COVID-19 impacted the lives of countless people around the world for the past year already.
         The level of suffering and hardships endured by everyone is a testament to our collective strength.
         Through month after month of quarantine and uncertainty, we on Team Plasma want to help people believe
         that the decision they make today by donating to others will be of profound importance. Every donation
         of plasma will go a long way to save lives, whether it be in your local community or another. Only if we
         help each other can we make a difference.
        </Typography>
      </Grid>

      {services.map(service => (
        <Grid item xs={12} sm={4} key={service.id}>
          <ServiceCard service={service} />
        </Grid>
      ))}

      <Grid item xs={12}>
      </Grid>
    </Grid>
  )
}
export default Services

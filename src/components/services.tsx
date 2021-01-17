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
      description: "filler1",
    },
    {
      id: 2,
      image: "consultation-icon.png",
      title: "Upload Your Test Results",
      description:
        "filler2",
    },
    {
      id: 3,
      image: "search-doctor-icon.png",
      title: "Find a Nearby Blood Bank",
      description:
        "filler3",
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
        <Typography variant="h5">Something idk</Typography>
        <Bar />
        <Typography variant="subtitle1" style={{ margin: 30 }}>
          Lots of filler
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

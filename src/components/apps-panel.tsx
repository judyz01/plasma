import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"
import Bar from "./bar"

const AppsPanel = () => {
  return (
    <Grid container spacing={3} style={{ minHeight: 500 }}>
      <Grid
        item={true}
        xs={12}
        sm={6}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ paddingLeft: 40, paddingRight: 40 }}
      >
        <Typography variant="h4" color="inherit">
          How does our site work?
        </Typography>
        <Bar />
        <Typography
          variant="subtitle1"
          style={{ marginBottom: 30, marginTop: 20 }}
        >
         One of the main features we implemented in our website is OCR, which stands for optical
         character recognition. What it does is that it takes any image, analyze the text in said image, 
         and extracts the text for us to manipulate it. In our case, we use OCR to analyze your COVID-19
         test results and to help determine your eligibility! {
           
         }
        </Typography>
        {/* <Button
          variant="outlined"
          color="primary"
          size="large"
          endIcon={<ArrowDownwardIcon />}
        >
          Download
        </Button> */}
      </Grid>

      <Hidden xsDown>
        <Grid
          item={true}
          sm={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ padding: 10 }}
        >
          <div style={{ width: "100%" }}>
            <Image
              alt="Virtual Healthcare for you"
              filename="apps-panel-image.png"
            />
          </div>
        </Grid>
      </Hidden>
    </Grid>
  )
}
export default AppsPanel

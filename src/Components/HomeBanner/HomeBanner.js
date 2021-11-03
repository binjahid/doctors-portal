import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import chair from "../../images/chair.png";
import bg from "../../images/bg.png";
import { Typography, Container, Button } from "@mui/material";
const HomeBanner = () => {
  const verticalCenter = {
    display: "flex",
    justifyContent: "center",
  };
  const bannerBg = {
    background: `url(${bg})`,
    height: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
  return (
    <Container sx={{ flexGrow: 1 }} style={bannerBg}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} style={verticalCenter}>
          <Box>
            <Typography variant="h4">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              variant="h6"
              style={{ fontWeight: "300", fontSize: "15px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              soluta modi, in, ea distinctio inventore cumque dolore recusandae
              illum, perferendis dolor! Nisi dolore sapiente sint repellat,
              culpa consequatur aliquam quia.
            </Typography>
            <Button variant="contained">GET APPOINTMENT</Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={chair} alt="" style={{ width: "500px" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeBanner;

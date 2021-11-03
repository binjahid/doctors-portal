import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../images/doctor.png";
import AppoinmentBg from "../../images/appointment-bg.png";
import { Button, Container, Typography } from "@mui/material";
const AppointmentBanner = () => {
  return (
    <Box
      style={{
        background: `url(${AppoinmentBg})`,
        marginTop: "180px",
        backgroundColor: "rgba(45 , 58 , 74 , 0.8)",
        backgroundBlendMode: "darken , luminosity",
      }}
      sx={{ flexGrow: 1 }}
    >
      <Container>
        <Grid container spacing={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} md={6}>
              <img
                src={doctor}
                style={{
                  width: "500px",
                  marginTop: "-147px",
                }}
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                style={{
                  color: "#44E7D8",
                }}
              >
                Appointment
              </Typography>
              <Typography
                variant="h4"
                style={{ color: "white", padding: "10px 0" }}
              >
                Make An Appointment Today
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: "white",
                  fontWeight: "300",
                  fontSize: "15px",
                  paddingBottom: "15px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                libero numquam dolore laborum explicabo enim aperiam error cum
                exercitationem, dicta aliquam quas. Provident ipsam esse,
                repudiandae quod eaque sint eveniet?
              </Typography>
              <Button variant="outlined">Learn more</Button>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentBanner;

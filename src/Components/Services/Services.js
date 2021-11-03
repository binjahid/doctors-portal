import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Service/Service";
import Typography from "@mui/material/Typography";
const Services = () => {
  const services = [
    {
      name: "Flouride Treatment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, libero eos! Nostrum unde reprehenderit magnam nisi pariatur nulla tempora dicta ipsa facilis provident fugiat voluptatem molestias, suscipit odio aliquam doloribus?",
      img: "https://i.ibb.co/hYxWGzC/fluoride.png",
    },
    {
      name: "Cavity Filling",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, libero eos! Nostrum unde reprehenderit magnam nisi pariatur nulla tempora dicta ipsa facilis provident fugiat voluptatem molestias, suscipit odio aliquam doloribus?",
      img: "https://i.ibb.co/Pr4MMtx/cavity.png",
    },
    {
      name: "Teeth Whitening",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, libero eos! Nostrum unde reprehenderit magnam nisi pariatur nulla tempora dicta ipsa facilis provident fugiat voluptatem molestias, suscipit odio aliquam doloribus?",
      img: "https://i.ibb.co/YhK0YBG/whitening.png",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          variant="h6"
          component="div"
          align="center"
          sx={{ my: 4, color: "info.main" }}
        >
          OUR SERVICES
        </Typography>
        <Typography
          variant="h4"
          component="div"
          align="center"
          sx={{ fontWeight: 500, mb: 3 }}
        >
          SERVICES WE PROVIDE{" "}
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Service service={service} key={service.name}></Service>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

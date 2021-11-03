import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
const Service = (props) => {
  const { name, description, img } = props.service;
  return (
    <Card sx={{ minWidth: 275, boxShadow: 0, padding: 2 }}>
      <CardMedia
        component="img"
        height="90px"
        style={{ width: "auto", margin: "auto" }}
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" component="div" align="center">
          {name}
        </Typography>
        <Typography variant="body2" align="center">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Service;

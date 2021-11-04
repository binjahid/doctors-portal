import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import BookingOptions from "../BookingOptions/BookingOptions";

const AvailableAppoinments = ({ date }) => {
  const appoinmentsServices = [
    {
      id: 1,
      name: "Teeth Orthodontics",
      time: "8:00 AM - 9:00 AM",
      space: 10,
    },
    {
      id: 2,
      name: "Cosmetic Dentistry",
      time: "10:05 AM - 11:30 AM",
      space: 7,
    },
    {
      id: 3,
      name: "Teeth Cleaning",
      time: "5:00 AM - 6:30 AM",
      space: 8,
    },
    {
      id: 4,
      name: "Cavity Protection",
      time: "7:00 AM - 8:30 AM",
      space: 10,
    },
    {
      id: 5,
      name: "Teeth Orthodontics",
      time: "8:00 AM - 9:00 AM",
      space: 10,
    },
    {
      id: 6,
      name: "Teeth Orthodontics",
      time: "8:00 AM - 9:00 AM",
      space: 5,
    },
  ];
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          py: 3,
          fontWeight: 600,
          color: "primary.main",
        }}
      >
        Availbale Dates {date.toDateString()}
      </Typography>
      <Grid container spacing={2}>
        {appoinmentsServices.map((bookings) => (
          <BookingOptions key={bookings.id} booking={bookings}></BookingOptions>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppoinments;

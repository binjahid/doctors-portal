import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const BookingOptions = ({ booking }) => {
  const { name, time, space } = booking;
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Paper elevation={3} sx={{ py: 5 }}>
        <Typography
          variant="h5"
          align="center"
          sx={{ py: 1, fontWeight: 600, color: "primary.main" }}
        >
          {name}
        </Typography>
        <Typography variant="h6" align="center">
          {time}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            py: 1,
          }}
        >
          {space} SPACES AVAILABLE
        </Typography>
        <Typography>
          <Button variant="contained" sx={{ left: "100px", mt: 1 }}>
            BOOK APPOINMENT
          </Button>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default BookingOptions;

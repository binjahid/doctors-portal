import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const BookingOptions = ({ booking, date }) => {
  const [openBookingModal, setOpenBookingModal] = React.useState(false);
  const handleBookingModalOpen = () => setOpenBookingModal(true);
  const handleBookingModalClose = () => setOpenBookingModal(false);
  const { name, time, space } = booking;
  return (
    <>
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
            <Button
              variant="contained"
              sx={{ left: "100px", mt: 1 }}
              onClick={handleBookingModalOpen}
            >
              BOOK APPOINMENT
            </Button>
          </Typography>
        </Paper>
      </Grid>
      <BookingModal
        openBookingModal={openBookingModal}
        handleBookingModalClose={handleBookingModalClose}
        booking={booking}
        date={date}
      ></BookingModal>
    </>
  );
};

export default BookingOptions;

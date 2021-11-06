import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  openBookingModal,
  handleBookingModalClose,
  booking,
  date,
}) => {
  const { name, time } = booking;
  const HandleBookSubmi = (e) => {
    e.preventDefault();
    window.alert("submitting");
  };
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBookingModal}
        onClose={handleBookingModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBookingModal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={HandleBookSubmi}>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <TextField
                  sx={{ width: "90%" }}
                  disabled
                  id="standard-basic"
                  label={time}
                  variant="standard"
                />
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <TextField
                  sx={{ width: "90%" }}
                  id="standard-basic"
                  label="Your Name"
                  variant="standard"
                />
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <TextField
                  sx={{ width: "90%" }}
                  id="standard-basic"
                  label="Your Email"
                  variant="standard"
                />
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <TextField
                  sx={{ width: "90%" }}
                  id="standard-basic"
                  label="Your Phone Number"
                  variant="standard"
                />
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <TextField
                  disabled
                  sx={{ width: "90%" }}
                  id="standard-basic"
                  label={date.toDateString()}
                  variant="standard"
                />
              </Typography>
              <Button sx={{ mt: 2 }} type="submit" variant="contained">
                Book Now
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default BookingModal;

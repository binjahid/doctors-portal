import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, InputAdornment } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
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
  setApprovedAppoinment,
}) => {
  const { name, time } = booking;

  const { user } = useAuth();
  const initialBookingInfo = {
    name: user.displayName,
    email: user.email,
    phone: user.phone,
  };
  const [bookingInfo, setBookingInfo] = React.useState(initialBookingInfo);
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newBookingInfo = { ...bookingInfo };
    newBookingInfo[field] = value;
    setBookingInfo(newBookingInfo);
  };
  const HandleBookSubmit = (e) => {
    e.preventDefault();
    const updatedBookingInfo = {
      ...bookingInfo,
      date: date.toLocaleDateString(),
      time: time,
      serviceName: name,
    };
    fetch("http://localhost:5000/appoinments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setApprovedAppoinment(true);
          handleBookingModalClose();
        }
      });
    console.log(updatedBookingInfo);
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
            <form onSubmit={HandleBookSubmit}>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <TextField
                  disabled
                  sx={{ m: 1, width: "90%" }}
                  id="outlined-size-normal"
                  defaultValue={time}
                />
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <TextField
                  name="name"
                  sx={{ m: 1, width: "90%" }}
                  id="outlined-size-normal"
                  defaultValue={user.displayName}
                  onBlur={handleBlur}
                />
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <TextField
                  name="email"
                  sx={{ m: 1, width: "90%" }}
                  id="outlined-size-eamil"
                  defaultValue={user.email}
                  onBlur={handleBlur}
                />
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <TextField
                  name="phone"
                  sx={{ m: 1, width: "90%" }}
                  id="outlined-size-num"
                  defaultValue=""
                  placeholder="Phone Number"
                  onBlur={handleBlur}
                />
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <TextField
                  disabled
                  sx={{ m: 1, width: "90%" }}
                  id="outlined-size-normal"
                  defaultValue={date.toDateString()}
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

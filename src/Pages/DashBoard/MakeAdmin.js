import { Button, TextField } from "@mui/material";
import React from "react";
import useFirebase from "../../hooks/useFiresbase";

const MakeAdmin = () => {
  const [email, setEmail] = React.useState("");
  const { token } = useFirebase();
  const handleAdminSubmit = (e) => {
    e.preventDefault();
    console.log("Admin");
    const Useremail = email;
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email: Useremail,
      }),
    });
  };
  const handleBlur = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Make Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          type="email"
          placeholder="Enter Your Email"
          sx={{ width: "50%" }}
          onBlur={handleBlur}
        />
        <Button color="inherit" type="submit" variant="contained">
          Add
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;

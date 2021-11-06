import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import login from "../../images/login.png";
const Login = () => {
  const [loginEmial, setLoginEmail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");
  const handleLogin = (e) => {
    setLoginEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setLoginPassword(e.target.value);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful");
    console.log(loginEmial, loginPassword);
  };
  return (
    <div>
      <Container>
        <Grid container spacing={2} sx={{ mt: 8 }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant="body1" gutterBottom>
              Login
            </Typography>
            <form onSubmit={handleLoginSubmit}>
              <Typography sx={{ mb: 2 }}>
                <TextField
                  sx={{ width: "75%" }}
                  id="standard-basic"
                  label="Your Email"
                  type="email"
                  variant="standard"
                  onBlur={handleLogin}
                />
              </Typography>
              <Typography sx={{ mb: 2 }}>
                <TextField
                  sx={{ width: "75%" }}
                  id="standard-basic"
                  label="Your Password"
                  type="password"
                  variant="standard"
                  onBlur={handlePassword}
                />
              </Typography>
              <Typography sx={{ m: 1, width: "75%" }}>
                <Button variant="contained" type="submit">
                  Login
                </Button>
              </Typography>
            </form>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={login} style={{ width: "100%" }} alt="login" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;

import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import login from "../../images/login.png";

const Register = () => {
  const [loginEmial, setLoginEmail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");
  const [loginPasswordConfirm, setLoginPasswordConfirm] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const { user, registerUser, loading, error } = useAuth();
  const handleName = (e) => {
    setUserName(e.target.value);
  };
  const handleLogin = (e) => {
    setLoginEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setLoginPassword(e.target.value);
  };
  const handlePasswordConfirm = (e) => {
    setLoginPasswordConfirm(e.target.value);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginPassword !== loginPasswordConfirm) {
      return alert("Password does not match");
    }
    registerUser(loginEmial, loginPassword, userName);
  };
  return (
    <div>
      <Container>
        <Grid container spacing={2} sx={{ mt: 8 }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant="body1" gutterBottom>
              Register
            </Typography>
            {!loading && (
              <form onSubmit={handleLoginSubmit}>
                <Typography sx={{ mb: 2 }}>
                  <TextField
                    sx={{ width: "75%" }}
                    id="standard-name"
                    label="Your Name"
                    type="text"
                    variant="standard"
                    onBlur={handleName}
                  />
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  <TextField
                    sx={{ width: "75%" }}
                    id="standard-email"
                    label="Your Email"
                    type="email"
                    variant="standard"
                    onBlur={handleLogin}
                  />
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  <TextField
                    sx={{ width: "75%" }}
                    id="standard-pass"
                    label="Your Password"
                    type="password"
                    variant="standard"
                    onBlur={handlePassword}
                  />
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  <TextField
                    sx={{ width: "75%" }}
                    id="standard-confirm-pass"
                    label="Confirm Password"
                    type="password"
                    variant="standard"
                    onBlur={handlePasswordConfirm}
                  />
                </Typography>
                <Typography sx={{ mt: 1, width: "75%" }}>
                  <Button
                    variant="contained"
                    type="submit"
                    style={{ width: "100%" }}
                  >
                    Register
                  </Button>
                </Typography>
                Not a member? <Link to="/login">Login</Link>
              </form>
            )}
            {loading && <CircularProgress />}
            {user.email && (
              <Alert severity="success">Succesfully Added The User</Alert>
            )}
            {error && <Alert severity="error">{error}</Alert>}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={login} style={{ width: "100%" }} alt="login" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;

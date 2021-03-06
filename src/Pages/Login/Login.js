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
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import login from "../../images/login.png";
const Login = () => {
  const [loginEmial, setLoginEmail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");
  const { loading, error, loginUser, user, loginWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleLogin = (e) => {
    setLoginEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setLoginPassword(e.target.value);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(loginEmial, loginPassword);
    loginUser(loginEmial, loginPassword, location, history);
  };
  const handleGoogleLogin = () => {
    loginWithGoogle(location, history);
  };
  return (
    <div>
      <Container>
        <Grid container spacing={2} sx={{ mt: 8 }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant="body1" gutterBottom>
              Login
            </Typography>
            {!loading && (
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
                <Typography sx={{ mt: 1, width: "75%" }}>
                  <Button
                    variant="contained"
                    type="submit"
                    style={{ width: "100%" }}
                  >
                    Login
                  </Button>
                </Typography>
                <Button variant="text">
                  Already have an account? <Link to="/register">Register</Link>
                </Button>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Or login with
                </Typography>
                <Button
                  onClick={handleGoogleLogin}
                  variant="contained"
                  style={{ width: "75%" }}
                >
                  Login with Google
                </Button>
              </form>
            )}
            {loading && <CircularProgress />}
            {user.email && (
              <Alert severity="success">Logged In Successfully</Alert>
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

export default Login;

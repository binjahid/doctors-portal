import { CircularProgress } from "@mui/material";
import { Redirect, Route } from "react-router";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, loading, isAdmin } = useAuth();
  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && isAdmin ? (
          children
        ) : (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        )
      }
    ></Route>
  );
};

export default AdminRoute;

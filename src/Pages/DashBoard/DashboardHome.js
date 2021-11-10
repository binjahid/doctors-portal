import React from "react";
import { Grid } from "@mui/material";
import Calender from "../../Shared/Calender/Calender";
import UserAppoiments from "./UserAppoiments";
const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={4}>
        <Calender date={date} setDate={setDate}></Calender>
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <UserAppoiments date={date}></UserAppoiments>
      </Grid>
    </Grid>
  );
};

export default DashboardHome;

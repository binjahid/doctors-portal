import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import AppoinmentHeader from "../AppoinmentHeader/AppoinmentHeader";
import AvailableAppoinments from "../AvailableAppoinments/AvailableAppoinments";
const Appoinment = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Navbar></Navbar>
      <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>
      <AvailableAppoinments date={date}></AvailableAppoinments>
    </div>
  );
};

export default Appoinment;

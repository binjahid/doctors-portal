import React from "react";
import AppointmentBanner from "../../../Components/AppoinmentBanner/AppointmentBanner";
import Navbar from "../../../Components/Navbar/Navbar";
import Services from "../../../Components/Services/Services";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Services></Services>
      <AppointmentBanner></AppointmentBanner>
    </div>
  );
};

export default Home;

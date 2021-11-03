import React from "react";
import AppointmentBanner from "../../../Components/AppoinmentBanner/AppointmentBanner";
import HomeBanner from "../../../Components/HomeBanner/HomeBanner";
import Navbar from "../../../Components/Navbar/Navbar";
import Services from "../../../Components/Services/Services";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HomeBanner></HomeBanner>
      <Services></Services>
      <AppointmentBanner></AppointmentBanner>
    </div>
  );
};

export default Home;

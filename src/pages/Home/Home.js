import React from "react";
import Banner from "./Banner";
import CallToAction from "./CallToAction";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Service from "./Service";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info></Info>
      <Service></Service>
      <CallToAction></CallToAction>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;

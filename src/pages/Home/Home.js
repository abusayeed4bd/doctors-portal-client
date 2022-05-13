import React from "react";
import Banner from "./Banner";
import CallToAction from "./CallToAction";
import Contact from "./Contact";

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
      <Contact></Contact>
    </div>
  );
};

export default Home;

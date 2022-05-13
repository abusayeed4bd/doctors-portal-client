import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import Service from "./Service";

const Home = () => {
  return (
    <div className="px-5">
      <Banner />
      <Info></Info>
      <Service></Service>
    </div>
  );
};

export default Home;

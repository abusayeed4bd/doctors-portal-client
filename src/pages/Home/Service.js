import React from "react";
import ServiceCard from "./ServiceCard";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import fluoride from "../../assets/images/fluoride.png";

const Service = () => {
  return (
    <div className="text-center my-20 lg:mx-12  mx-5">
      <h4 className="text-primary text-2xl font-semibold uppercase">
        Our Service
      </h4>
      <h2 className="text-3xl">Services We Provide</h2>
      <div className="grid grid-cols-1 md:grid-cols-3  my-12 gap-4">
        <ServiceCard img={fluoride} title="Fluoride Treatment"></ServiceCard>
        <ServiceCard img={cavity} title="Cavity Fillingt"></ServiceCard>
        <ServiceCard img={whitening} title="Teeth Whitening"></ServiceCard>
      </div>
    </div>
  );
};

export default Service;

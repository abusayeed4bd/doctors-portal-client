import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bg}) no-repeat center center`,
      }}
      className="hero min-h-screen  lg:px-12 px-5"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className=" lg:w-1/2 rounded-lg shadow-2xl"
          alt="chair"
        />
        <div className="sm:mr-10">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;

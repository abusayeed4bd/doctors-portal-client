import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bg}) no-repeat cover`,
      }}
      class="hero min-h-screen  lg:px-12 "
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class=" lg:w-1/2 rounded-lg shadow-2xl" alt="chair" />
        <div class="sm:mr-10">
          <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-6 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary bg-gradient-to-l  text-white uppercase font-bold from-primary to-secondary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

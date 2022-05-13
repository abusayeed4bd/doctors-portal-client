import React from "react";
import contact from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <div
      className="py-12 text-center px-5"
      style={{ background: `url(${contact})` }}
    >
      <div className="text-center">
        <h2 className="text-primary text-2xl">Contact us</h2>
        <h4 className="text-4xl text-white">Stay connected with us</h4>
      </div>
      <form className="my-5">
        <input
          type="text"
          placeholder="Your Name"
          class="input w-full max-w-lg  mt-3"
          required
        />
        <br />
        <input
          type="email"
          placeholder="Your Email"
          class="input w-full max-w-lg mt-3"
          required
        />
        <br />
        <textarea
          class="input w-full max-w-lg mt-3 h-32"
          name=""
          id=""
          cols="50"
          placeholder="Write your message here"
          required
        ></textarea>
        <br />
        <PrimaryButton>Send Message</PrimaryButton>
      </form>
    </div>
  );
};

export default Contact;

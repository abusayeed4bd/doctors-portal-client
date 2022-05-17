import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Info = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:mx-12 mx-5 my-12">
      <InfoCard
        img={clock}
        bg={
          "bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary"
        }
        title={"Opening Hours"}
      ></InfoCard>
      <InfoCard
        img={clock}
        bg={"!bg-accent"}
        title={"Visit Our Location"}
      ></InfoCard>

      <InfoCard
        img={phone}
        bg={
          "bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary"
        }
        title={"Contact us Now"}
      ></InfoCard>
    </div>
  );
};

export default Info;

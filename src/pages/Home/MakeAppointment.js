import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-between items-center py-5 lg:py-0 px-4"
    >
      <div className="flex-1 hidden md:block">
        <img className="mt-[-100px]  " src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h2 className="text-primary text-2xl">Appointment</h2>
        <h2 className="text-white text-5xl my-5">Make an Appointment today</h2>
        <p className="text-white my-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>Make an appointment</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;

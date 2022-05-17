import React from "react";

const AppointmentCard = ({ appointment, setTreatment }) => {
  const { name, slots } = appointment;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>
          {slots.length > 1 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No Slot Available</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
        </p>
        <div className="card-actions">
          {/* <button className="btn btn-secondary ">Book Appointment</button> */}
          <label
            disabled={slots.length < 1}
            htmlFor="appointment-modal"
            className="btn btn-secondary text-white uppercase modal-button"
            onClick={() => setTreatment(appointment)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;

import React from "react";

const AppointmentCard = ({ appointment, setTreatment }) => {
  const { name, slots } = appointment;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-secondary">{name}</h2>
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
        <div class="card-actions">
          {/* <button class="btn btn-secondary ">Book Appointment</button> */}
          <label
            disabled={slots.length < 1}
            for="appointment-modal"
            class="btn btn-secondary text-white uppercase modal-button"
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

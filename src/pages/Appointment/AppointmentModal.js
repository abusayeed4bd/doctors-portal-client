import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const AppointmentModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const formattedDate = format(date, "PP");
  const [user] = useAuthState(auth);
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;

    const appointment = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };

    fetch("https://salty-oasis-22278.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(
            `Appointment booked successfully for ${formattedDate} at ${slot}`
          );
        } else {
          toast.error(
            `Already have an appointment for ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="appointment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-secondary text-lg">
            Appointment for : {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-2 justify-items-center"
          >
            <input
              type="text"
              placeholder="Date"
              className="input input-bordered w-full max-w-xs"
              value={format(date, "PP")}
              disabled
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled defaultValue>
                Select a Slot
              </option>
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
              value={user?.displayName || "n/a"}
              disabled
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="input input-bordered w-full max-w-xs"
              value={user?.email || ""}
              disabled
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;

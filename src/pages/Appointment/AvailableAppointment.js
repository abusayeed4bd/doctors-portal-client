import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import AppointmentCard from "./AppointmentCard";
import AppointmentModal from "./AppointmentModal";

const AvailableAppointment = ({ date }) => {
  const [service, setService] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="lg:mx-12 mx-5">
      <h4 className="text-xl text-secondary text-center my-12">
        Available appointment on {format(date, "PP")}.
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cools-2 gap-5">
        {service.map((appointment) => (
          <AppointmentCard
            key={appointment._id}
            appointment={appointment}
            setTreatment={setTreatment}
          ></AppointmentCard>
        ))}
        {treatment && (
          <AppointmentModal
            setTreatment={setTreatment}
            date={date}
            treatment={treatment}
          ></AppointmentModal>
        )}
      </div>
    </div>
  );
};

export default AvailableAppointment;

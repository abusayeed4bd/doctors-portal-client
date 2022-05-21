import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import AppointmentCard from "./AppointmentCard";
import { useQuery } from "react-query";
import AppointmentModal from "./AppointmentModal";
import Loading from "../Shared/Loading";

const AvailableAppointment = ({ date }) => {
  // const [service, setService] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");
  const {
    data: service,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`https://salty-oasis-22278.herokuapp.com/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
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
            refetch={refetch}
          ></AppointmentModal>
        )}
      </div>
    </div>
  );
};

export default AvailableAppointment;

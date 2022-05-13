import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({ selected }) => {
  return (
    <div>
      <h4 className="text-xl text-secondary text-center">
        Available appointment on {format(selected, "PP")}.
      </h4>
    </div>
  );
};

export default AvailableAppointment;

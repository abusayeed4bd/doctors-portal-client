import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ selected, setSelected }) => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col justify-between lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;

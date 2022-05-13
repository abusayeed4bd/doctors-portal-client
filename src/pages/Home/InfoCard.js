import React from "react";

const InfoCard = ({ img, bg, title }) => {
  return (
    <div class={`card w-auto card-side bg-base-100 shadow-xl ${bg} text-white`}>
      <figure>
        <img class="ml-5 " src={img} alt="card img" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  );
};

export default InfoCard;

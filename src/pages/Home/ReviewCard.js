import React from "react";

const ReviewCard = ({ client }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{client.review}</p>
        <div className="flex items-center">
          <div className="avatar mr-3 py-2">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={client.img} alt="" />
            </div>
          </div>
          <div>
            <h2 className="text-primary font-bold text-2xl">{client.name}</h2>
            <h4>{client.location}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

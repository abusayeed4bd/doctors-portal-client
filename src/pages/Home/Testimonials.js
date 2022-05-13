import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";

import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import ReviewCard from "./ReviewCard";

const Testimonials = () => {
  const clients = [
    {
      _id: 1,
      name: "William jhon",
      location: "california",
      img: people1,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi maiores nulla ab enim accusamus cumque excepturi aspernatur quas numquam quaerat corrupti ",
    },
    {
      _id: 2,
      name: "William jhon",
      location: "california",
      img: people2,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi maiores nulla ab enim accusamus cumque excepturi aspernatur quas numquam quaerat corrupti ",
    },
    {
      _id: 3,
      name: "William jhon",
      location: "california",
      img: people3,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi maiores nulla ab enim accusamus cumque excepturi aspernatur quas numquam quaerat corrupti ",
    },
  ];
  return (
    <section className="lg:mx-12 mx-5 my-12">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-primary text-xl">Testimonials</h4>
          <h2 className="text-4xl font-bold">What our clients say</h2>
        </div>
        <div>
          <img className="w-[192px]" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {clients.map((client) => (
          <ReviewCard key={client._id} client={client}></ReviewCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";
import HouseImg from "../assets/High.png";
import LowImg from "../assets/low.png";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const boxes = [
  {
    id: 1,
    people: "1000+",
    desc: "Property availability",
  },
  {
    id: 2,
    people: "5+",
    desc: "Years experience",
  },
  {
    id: 3,
    people: "100%",
    desc: "customer satisfaction",
  },
];

const Grid3: React.FC = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl mt-3 mb-4">
        {" "}
        Why Trust us?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3  px-3 mt-5 ml-5 mr-5 gap-10 md:gap-[100px] ">
        {boxes.map((b) => (
          <div
            key={b.id}
            className="text-center p-5 bg-white-200 rounded-xl shadow text-3xl border py-17 px-5"
          >
            <h2 className="font-bold">{b.people}</h2>
            <h2 className="text-lg">{b.desc}</h2>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <h1 className="font-bold text-center mb-5 text-3xl">Who we are?</h1>
        <div className="grid grid-cols-1 mr-6 gap-5 ml-10 md:grid-cols-2 lg:grid-cols-2  items-stretch">
          {/* Left column - HouseImg (High and Low)*/}
          <div className=" flex flex-col gap-5 ">
            <div className="rounded-xl overflow-hidden h-80 object-cover ">
              <img
                src={HouseImg}
                alt="Image 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-20 ">
              <img
                src={LowImg}
                alt="Image 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right column - description ko */}
          <div className="mr-10 h-full w-full">
            <div className="rounded-xl p-5 h-full text-justify flex flex-col justify-between ">
              <p className="text-xl sm:text-xl md:text-xl lg:text-xl ">
                At our core, we believe that real estate is more than just
                property; it's about building a future and securing financial
                stability for our clients. With a foundation built on integrity
                and an extensive knowledge of the local market, our dedicated
                team guides clients through every step of the home buying or
                selling process. Whether assisting a first-time home-buyer in
                finding the perfect starter home or helping an experienced
                investor identify a lucrative commercial property, we leverage
                our skills in sales, negotiation, and marketing to achieve
                exceptional results. Our goal is to make your real estate
                journey as seamless and successful as possible, transforming
                what can be a complex transaction into a rewarding experience
                you can trust.
              </p>
              <div className=" flex justify-between">
                <button className="bg-gray-600 text-white px-3 py-2 rounded text-xl mt-5 hover:bg-gray-700 ">
                  <Link to="/contact"> Contact </Link>
                </button>
                <button className="bg-gray-600 text-white px-3 py-2 rounded text-xl mt-5">
                  {" "}
                  eshabajracharya@gmail.com
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 px-5"></div>
    </div>
  );
};

export default Grid3;

import React from "react";
import rawAboutData from "../../data/Aboutus.json";

interface About {
  id: number;
  name: string;
  desc: string;
  image: string;
}

const AboutData = rawAboutData as About[];

const AboutGrid: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-20 px-4 sm:px-6 lg:px-8 mt-30 mb-30">
      {AboutData.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={item.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center "
          >
            {/* TEXT */}
            <div
              className={` lg:col-span-7 text-justify ${
                isEven ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <h1 className="text-3xl sm:text-3xl font-bold mb-4 mt-0.5">
                {item.name}
              </h1>
              <p className="text-sm md:text-xl sm:text-base leading-relaxed text-gray-700 max-w-prose text-justify">
                {item.desc}
              </p>
            </div>

            {/* IMAGE */}
            <div
              className={`lg:col-span-5 flex justify-center lg:justify-start  ${
                isEven ? "lg:order-2" : "lg:order-1"
              }
              `}
            >
              <img
                src={item.image}
                alt={item.name}
                className="
                  w-full
                  h-[40vh]
                  max-w-sm
                  sm:max-w-md
                  lg:max-w-lg
                  rounded-2xl
                  object-cover
                "
              />
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default AboutGrid;

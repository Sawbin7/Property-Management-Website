import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonialsData from "../../data/testimonialsData.json";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  feedback: string;
}

const TestimonialCarousel: React.FC = () => {
  const testimonials: Testimonial[] = testimonialsData; //I promise testimonialsData is an array of objects matching the Testimonial interface
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const item = testimonials[index]; //index is the state that keeps track of which testimonial is currently shown.testimonials[index] → selects the current testimonial object from the array.

  return (
    <div className="w-full flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-5">Testimonials</h1>

      <div className="relative w-full max-w-lg flex items-center justify-center">
        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute left-0 bg-gray-200 p-2 rounded-full hover:bg-gray-300 shadow"
        >
          <ChevronLeft size={28} />
        </button>

        {/* IMAGE + TEXT */}
        <div className="text-center p-5">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="mt-4 text-lg italic">"{item.feedback}"</p>
          <h3 className="mt-2 font-bold text-xl">{item.name}</h3>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute right-0 bg-gray-200 p-2 rounded-full hover:bg-gray-300 shadow"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

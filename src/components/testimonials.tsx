import { useState } from "react";
import { found2, found32, found4, found5 } from "../constants/assets";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Parent 1",
    profile: found2,
    testimony:
      "As a UI/UX designer, I rely heavily on collaboration with developers to bring my designs to life, and Chukwunenye Moses constantly exceeds expectations. His attention to details and passion for clean, efficient code not only ensures seamless implementation of designs but also enhances the overall usability and aesthetics of our projects.",
  },
  {
    name: "Parent 2",
    profile: found4,
    testimony:
      "Chukwunenye is a great asset to any organization. He has a sharp mind and is able to assimilate new information, always open to learning and improving the systems around him.",
  },
  {
    name: "Parent 3",
    profile: found5,
    testimony:
      "I have worked with many professionals throughout my journey, but Moses was a unique one to work with. I started my work journey with him, and he helped me understand the company's internal process. His work ethics are pristine, and he easily adjusts to any given situation. His ability to go out of his way to help others makes him stand out. Thanks a lot, man! You made the transition smooth and more comfortable.",
  },
  {
    name: "UNIZIK Interim VC",
    profile: found32,
    testimony:
      "I have worked with many professionals throughout my journey, but Moses was a unique one to work with. I started my work journey with him, and he helped me understand the company's internal process. His work ethics are pristine, and he easily adjusts to any given situation. His ability to go out of his way to help others makes him stand out. Thanks a lot, man! You made the transition smooth and more comfortable.",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  return (
    <div className="relative flex justify-center items-center w-full sm:w-[60%] m-auto my-72">
      {/* Prev Button */}
      <button
        className="absolute left-2 -top-40 w-10 h-10 flex justify-center items-center bg-[#02a69d] text-white rounded-full hover:bg-[#a6cc39] transition-transform duration-300 transform hover:scale-110 cursor-pointer z-50"
        onClick={handlePrevSlide}
      >
        <FaArrowLeft size={14} />
      </button>

      {/* Next Button */}
      <button
        className="absolute right-2 -top-40 w-10 h-10 flex justify-center items-center bg-[#02a69d] text-white rounded-full hover:bg-[#a6cc39] transition-transform duration-300 transform hover:scale-110 cursor-pointer z-50"
        onClick={handleNextSlide}
      >
        <FaArrowRight size={14} />
      </button>

      {testimonials.map((test, index) => (
        <div
          key={index}
          className={`absolute sm:w-[75%] w-full transition-opacity duration-500 ${
            index === currentSlide
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
            <img
              src={test.profile}
              alt={test.name}
              className="rounded-full w-48 h-48"
            />
            <p className="my-5 text-center">"{test.testimony}"</p>
            <div className="text-center">
              <p className="font-bold">{test.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;

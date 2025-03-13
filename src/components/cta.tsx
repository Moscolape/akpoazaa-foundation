import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="my-5 font-Poppins">
        <h1 className="sm:text-5xl text-2xl font-Urbanist font-bold text-center font-Montserrat">Want to support us?</h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center my-10">
        {/* Donate Button */}
        <Link to={'/donate'}>
          <button className="px-6 py-3 bg-[#a6cc39] text-white font-semibold rounded-full shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 cursor-pointer">
              Donate
          </button>
        </Link>

        {/* Volunteer Button */}
        <Link to={'/volunteer'}>
          <button className="px-6 py-3 bg-[#f69223] text-white font-semibold rounded-full shadow-md transition-all duration-300 hover:bg-green-700 hover:scale-105 cursor-pointer">
              Volunteer
          </button>
        </Link>

        {/* Get Involved Button */}
        <Link to={'/get-involved'}>
          <button className="px-6 py-3 bg-[#02a69d] text-white font-semibold rounded-full shadow-md transition-all duration-300 hover:bg-orange-700 hover:scale-105 cursor-pointer">
              Get Involved
          </button>
        </Link>
        </div>
    </div>
  );
};

export default CTA;
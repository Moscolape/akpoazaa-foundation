import { useEffect } from "react";
import PageWrapper from "../components/pageWrapper";
import initializeAOS from "../utils/aos-init";
import { Link } from "react-router-dom";

const GetInvolved = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <div className="pt-12 sm:px-6 sm:w-4/5 w-full mx-auto text-center font-Montserrat">
        <h1 className="text-3xl sm:text-5xl font-Script font-bold mb-6" data-aos="fade-down">
          Get Involved with Akpoazaa Foundation
        </h1>
        <p className="text-lg text-gray-700 font-Montserrat mb-10" data-aos="fade-up">
          Be a part of our mission to empower communities through education, skills development, and outreach programs.  
          Choose how you’d like to contribute below.
        </p>

        {/* Sections */}
        <div className="sm:grid sm:grid-cols-2 sm:gap-10 flex flex-col">
          {/* Volunteer Opportunities */}
          <div className="bg-gray-100 p-6 sm:rounded-lg shadow-md mb-5 sm:mb-0" data-aos="fade-right">
            <h2 className="text-2xl font-bold text-[#be202f] mb-4">Volunteer Opportunities</h2>
            <p className="text-gray-700">
              Join us as a volunteer and make a difference! You can contribute by mentoring students,  
              teaching skills, or supporting fundraising efforts.
            </p>
            <Link to="/volunteer" className="mt-4 inline-block bg-[#be202f] text-white px-6 py-2 rounded-md shadow-lg hover:bg-[#9c1721] transition">
              Become a Volunteer
            </Link>
          </div>

          {/* Partner with Us */}
          <div className="bg-gray-100 p-6 sm:rounded-lg shadow-md mb-5 sm:mb-0" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-[#02a69d] mb-4">Partner with Us</h2>
            <p className="text-gray-700">
              Organizations and businesses can collaborate with us to expand educational opportunities,  
              launch impactful projects, and support community initiatives.
            </p>
            <Link to="/partner" className="mt-4 inline-block bg-[#02a69d] text-white px-6 py-2 rounded-md shadow-lg hover:bg-[#066f6a] transition">
              Become a Partner
            </Link>
          </div>

          {/* Host an Event */}
          <div className="bg-gray-100 p-6 sm:rounded-lg shadow-md mb-5 sm:mb-0" data-aos="fade-right">
            <h2 className="text-2xl font-bold text-[#a6cc39] mb-4">Host an Event</h2>
            <p className="text-gray-700">
              Help us spread awareness and raise funds by organizing an event in your community,  
              workplace, or school to support our cause.
            </p>
            <Link to="/host-event" className="mt-4 inline-block bg-[#a6cc39] text-white px-6 py-2 rounded-md shadow-lg hover:bg-[#7b9b25] transition">
              Host an Event
            </Link>
          </div>

          {/* Corporate Social Responsibility (CSR) */}
          <div className="bg-gray-100 p-6 sm:rounded-lg shadow-md mb-5 sm:mb-0" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-[#f69223] mb-4">Corporate Social Responsibility (CSR) Initiatives</h2>
            <p className="text-gray-700">
              Companies looking to make an impact can support our programs through scholarships, infrastructure projects,  
              and employee volunteering.
            </p>
            <Link to="/csr" className="mt-4 inline-block bg-[#f69223] text-white px-6 py-2 rounded-md shadow-lg hover:bg-[#c27318] transition">
              Learn More
            </Link>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-12 p-6 bg-[#be202f] text-white sm:rounded-lg shadow-lg text-center" data-aos="zoom-in">
          <h2 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-lg mb-4">
            Whether you're an individual, business, or organization,  
            there’s a way for you to contribute to our cause.
          </p>
          <Link to="/contact" className="inline-block bg-white text-[#be202f] px-6 py-2 rounded-md shadow-lg hover:bg-gray-200 transition">
            Contact Us Today
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default GetInvolved;

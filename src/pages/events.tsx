import { useEffect } from "react";
import PageWrapper from "../components/pageWrapper";
import initializeAOS from "../utils/aos-init";
import { Link } from "react-router-dom";

const upcomingEvents = [
  {
    title: "Tech for Change Summit",
    date: "April 20, 2025",
    description: "An interactive webinar on the role of technology in community empowerment.",
    link: "/event-registration",
  },
  {
    title: "Annual Fundraising Gala",
    date: "June 15, 2025",
    description: "A grand event to raise funds for educational programs and scholarships.",
    link: "/event-registration",
  },
];

const pastEvents = [
  {
    title: "Youth Skills Training Workshop",
    date: "February 12, 2024",
    description: "An intensive workshop equipping young people with vocational skills.",
    link: "/event-reports",
  },
  {
    title: "Library Donation Drive",
    date: "December 5, 2023",
    description: "We donated over 5,000 books to underserved communities.",
    link: "/event-reports",
  },
];

const Events = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <div className="pt-12 px-6 max-w-6xl mx-auto sm:text-center font-Montserrat">
        <h1 className="sm:text-4xl text-3xl font-bold mb-6" data-aos="fade-down">
          Events & Engagements
        </h1>
        <p className="text-lg text-gray-700 font-Montserrat mb-10" data-aos="fade-up">
          Stay connected with our upcoming events, or take a look back at our past activities that  
          have made a difference in communities.
        </p>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#be202f] mb-4" data-aos="fade-right">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md" data-aos="fade-up">
                <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                <p className="text-gray-600">{event.date}</p>
                <p className="text-gray-700 mt-2">{event.description}</p>
                <Link to={event.link} className="mt-4 inline-block bg-[#be202f] text-white px-4 py-2 rounded-md shadow-lg hover:bg-[#9c1721] transition">
                  Register Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-2xl font-bold text-[#be202f] mb-4" data-aos="fade-left">
            Past Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md" data-aos="fade-up">
                <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                <p className="text-gray-600">{event.date}</p>
                <p className="text-gray-700 mt-2">{event.description}</p>
                <Link to={event.link} className="mt-4 inline-block text-[#be202f] font-semibold hover:underline">
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Events;

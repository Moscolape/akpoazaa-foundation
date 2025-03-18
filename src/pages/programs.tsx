import { useEffect } from "react";
import PageWrapper from "../components/pageWrapper";
import initializeAOS from "../utils/aos-init";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Educational Support",
    description: "We provide scholarships, school supplies, and financial aids to help students achieve their academic dreams.",
    link: "/educational-support",
  },
  {
    title: "Skill Development",
    description: "Empowering individuals through vocational training, technology education, and career readiness programs.",
    link: "/skill-development",
  },
  {
    title: "Community Outreach",
    description: "We donate books to libraries, provide free community classes, and execute key infrastructure projects.",
    link: "/community-outreach",
  },
  {
    title: "Upcoming Programs",
    description: "Stay updated on our active projects and upcoming initiatives aimed at community betterment.",
    link: "/upcoming-programs",
  },
];

const Programs = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <div className="pt-12 px-6 max-w-6xl mx-auto sm:text-center font-Montserrat">
        <h1 className="text-3xl sm:text-5xl font-Script font-bold mb-6" data-aos="fade-down">
          Our Programs & Initiatives
        </h1>
        <p className="text-lg text-gray-700 font-Montserrat mb-10" data-aos="fade-up">
          At Akpoazaa Foundation, we are committed to making a lasting impact through education, skill training,  
          and community development. Explore our key programs below.
        </p>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <div key={index} className="sm:p-6" data-aos="fade-up">
              <h2 className="sm:text-2xl text-lg font-bold sm:text-[#be202f] mb-3">{program.title}</h2>
              <p className="text-gray-700 mb-4">{program.description}</p>
              <Link to={program.link} className="text-[#be202f] font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Programs;

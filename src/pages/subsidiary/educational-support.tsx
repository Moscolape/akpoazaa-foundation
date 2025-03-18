import { useEffect } from "react";
import PageWrapper from "../../components/pageWrapper";
import initializeAOS from "../../utils/aos-init";
import { Link } from "react-router-dom";
import { found17, found23, found24, obi1 } from "../../constants/assets";

const EducationalSupport = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <div className="pt-12 px-6 max-w-5xl mx-auto font-Montserrat">
        <h1 className="sm:text-4xl text-2xl font-bold text-[#be202f] mb-6 text-center" data-aos="fade-down">
          Educational Support & Scholarships
        </h1>
        <p className="text-lg text-gray-700 font-Montserrat mb-10" data-aos="fade-up">
          The Akpoazaa Foundation is committed to promoting academic excellence and  
          providing financial support to deserving students through various scholarship  
          and educational support initiatives.
        </p>

        {/* Section 1: ₦500,000 Endowment */}
        <div className="text-left mb-10" data-aos="fade-right">
          <h2 className="sm:text-2xl text-lg font-bold text-[#be202f] mb-4">
            Nnamdi Azikiwe University Alumnus Endows ₦500,000 for Best Graduating Students
          </h2>
          <p className="text-gray-700">
            In a generous effort to support academic excellence,  
            <strong> Dr. Frank Odinaka Igbojindu</strong>, Group Managing Director of Akpoazaa Group  
            and an alumnus of Nnamdi Azikiwe University, has endowed a total of  
            <strong> ₦500,000</strong> to reward the university’s best-graduating students.
          </p>

          <p className="text-gray-700 mt-4">
            During a visit to the Acting Vice-Chancellor, <strong>Prof. Joseph Ikechebelu</strong>,  
            Dr. Igbojindu expressed gratitude to the institution that shaped his academic journey.
          </p>

          <blockquote className="italic text-gray-600 border-l-4 border-[#be202f] pl-4 my-4">
            "This university has given me so much in terms of knowledge.  
            I obtained all my degrees here, up to my PhD. I am here to give back  
            and support the university, especially the administration of Prof. Ikechebelu."  
            — Dr. Frank Odinaka Igbojindu
          </blockquote>

          <div className="flex justify-center sm:flex-row flex-col" data-aos="fade-up">
            <img src={found23} alt="prof" className="rounded-full sm:mr-3 hover:translate-y-5 sm:mx-0 mx-auto" width={300} height={400} />
            <img src={found24} alt="dr" className="rounded-full sm:ml-3 hover:translate-y-5 sm:block hidden" width={300} height={400} />
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mt-6">Prize Categories:</h3>
          <ul className="list-disc pl-6 text-gray-700 mt-2">
            <li>₦250,000 for the overall best-graduating student.</li>
            <li>₦150,000 for the best-graduating student in the Faculty of Management Sciences.</li>
            <li>₦100,000 for the best graduating student in the Department of Accountancy.</li>
          </ul>

          <p className="text-gray-700 mt-4">
            This initiative will commence at the university’s <strong>19th Convocation Ceremonies </strong>  
            scheduled for <strong>March 26 – 28, 2025</strong>.
          </p>

          <p className="text-gray-700 mt-4">
            Additionally, Dr. Igbojindu donated a <strong>500-capacity event tent </strong>  
            through <strong>Akpoazaa Event Planners</strong> to support the convocation ceremonies.
          </p>
        </div>

        {/* Section 2: ₦1,000,000 Okija Scholarship */}
        <div className="" data-aos="fade-left">
          <h2 className="sm:text-2xl text-lg font-bold text-[#be202f] mb-4">
            2nd Edition of ₦1,000,000 Scholarship for Indigent Students of Okija
          </h2>
          <p className="text-gray-700">
            This initiative was first introduced on <strong>April 17, 2023 </strong>  
            in honor of <strong>Dr. Sir Ernest Azudialu Obiejesi</strong>,  
            Group Managing Director of Obijackson Foundation,  
            to celebrate his birthday and recognize his immense contributions to  
            education, humanity, and the development of Okija.
          </p>

          <p className="text-gray-700 mt-4">
            Dr. Obiejesi’s unwavering dedication to improving education inspired  
            the <strong>Akpoazaa Foundation</strong> to invest in supporting indigent  
            students from Okija through this scholarship program.
          </p>

          <p className="text-gray-700 mt-4">
            The <strong>2nd edition</strong> of this scholarship continues to  
            provide financial aid to deserving students who demonstrate  
            academic excellence and financial need.
          </p>

          <div className="flex justify-center sm:flex-row flex-col mt-10" data-aos="fade-up">
            <img src={obi1} alt="prof" className="rounded-full sm:mr-3 hover:-translate-y-5 sm:mx-0 mx-auto" width={300} height={400} />
            <img src={found17} alt="dr" className="rounded-full sm:ml-3 hover:-translate-y-5 sm:block hidden" width={300} height={400} />
          </div>

          <div className="mt-10">
            <Link to="/scholarship-application" className="block bg-gray-300 text-[#be202f] px-6 py-3 rounded-lg shadow-lg hover:bg-[#be202f] hover:text-white transition sm:w-1/4 w-3/4 text-center mx-auto">
              Apply for Scholarship
            </Link>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-12 sm:mx-0 -mx-6 p-6 bg-[#be202f] text-white sm:rounded-lg sm:shadow-lg text-center" data-aos="zoom-in">
          <h2 className="text-2xl font-bold mb-4">Want to Support Our Educational Initiatives?</h2>
          <p className="text-lg mb-4">
            Partner with us in funding scholarships, donating educational materials,  
            or providing mentorship to students in need.
          </p>
          <Link to="/donate" className="inline-block bg-white text-[#be202f] px-6 py-3 rounded-md shadow-lg hover:bg-gray-300 transition">
            Support Education
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default EducationalSupport;
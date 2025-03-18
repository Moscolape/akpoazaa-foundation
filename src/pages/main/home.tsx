import PageWrapper from "../../components/pageWrapper";
import { useEffect, useState } from "react";
import initializeAOS from "../../utils/aos-init";
import {
  boss,
  found10,
  found11,
  found12,
  found13,
  found18,
  found20,
  found22,
  found23,
  found24,
  found25,
  found26,
  found3,
  found31,
  found32,
  found6,
  found7,
  found8,
  found9,
  obi1,
  obi2,
} from "../../constants/assets";
import { AnimatePresence, motion } from "framer-motion";
import ImageSlider from "../../components/image-slider";
import { Link } from "react-router-dom";
import Testimonials from "../../components/testimonials";
import CTA from "../../components/cta";
import Partners from "../../components/partners";

const Home = () => {
  const [bgIndex, setBgIndex] = useState(0);

  const backgroundImages = [found3, found6, found7, found22];

  const slider1 = [found31, found32, found23, found24, found26, found25];

  const slider2 = [
    found8,
    found9,
    found10,
    found11,
    obi1,
    found12,
    found13,
    found18,
    found20,
    obi2,
  ];

  useEffect(() => {
    initializeAOS();

    // Background image slider interval
    const bgInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 8000);

    return () => {
      clearInterval(bgInterval);
    };
  }, [backgroundImages.length]);

  return (
    <PageWrapper>
      <div className="relative sm:h-[30rem] h-[20rem] w-full flex flex-col items-center justify-center text-white">
        {/* Background Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImages[bgIndex]})` }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          {/* Fixed Text */}
          <h1 className="text-3xl md:text-8xl font-Script animate-fadeDown">
            "Just a Touch for God and Humanity"
          </h1>
        </div>
      </div>
      <div className="font-Montserrat mx-auto sm:mt-10 mt-5" data-aos="fade-up">
        <h1 className="sm:text-5xl text-2xl font-Montserrat font-bold text-center">
          Brief Overview
        </h1>
        <img
          src={boss}
          alt="ceo"
          className="sm:w-96 sm:h-96 w-72 h-72 mx-auto my-5 rounded-full"
        />
        <p className="p-2 sm:w-4/5 mx-auto" data-aos="fade-down">
          <span className="text-[#be202f] font-bold">Akpoazaa Foundation</span>{" "}
          is a non-governmental organization dedicated towards empowering
          individuals via education, skill acquisition and community development
          through scholarships, organization of skill workshops and building of
          support infrastructures. {"  "}
          <Link to={"/about"}>
            <span className="font-bold text-[#be202f]"> Read more...</span>
          </Link>
        </p>
      </div>
      <div
        className="font-Montserrat sm:w-[80%] mx-auto p-2 sm:mt-10 mt-5"
        data-aos="fade-up"
      >
        <h1 className="sm:text-5xl text-2xl font-Urbanist font-bold text-center font-Montserrat">
          Upcoming Projects & Initiatives
        </h1>
        <div className="flex sm:flex-row flex-col justify-between items-center w-full">
          {/* Image Slider */}
          <ImageSlider images={slider1} />
          <div className="sm:w-[45%] sm:mt-0 mt-5" data-aos="fade-down">
            <p className="sm:text-2xl text-xl font-bold mb-3">
              ₦500,000 Endowment Funds for Best Graduating Students in Nnamdi
              Azikiwe University, Awka
            </p>
            <p className="mb-3">
              In a generous gesture to support academic excellence,{" "}
              <b>
                Dr Frank Odinaka Igbojindu, Group Managing Director of Akpoazaa
                Group, CEO of Akpoazaa Foundation
              </b>
              , and an alumnus of Nnamdi Azikiwe University, has endowed a total
              of ₦500,000 to reward the university’s best-graduating students.
            </p>
            <p className="mb-3">
              Dr. Frank Odinaka Igbojindu announced that the Akpoazaa Foundation
              Best Graduating Student Prize will be awarded in the following
              categories:
            </p>
            <ul className="list-disc mb-3 ml-4">
              <li>
                <b>₦250,000</b> for the overall best-graduating student.
              </li>
              <li>
                <b>₦150,000</b> for the best-graduating student in the Faculty
                of Management Sciences.
              </li>
              <li>
                <b>₦100,000</b> for the best graduating student in the
                Department of Accountancy, his alma mater.
              </li>
            </ul>
            <Link to={"/programs"}>
              <span className="font-bold text-[#be202f]"> Read more...</span>
            </Link>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col-reverse justify-between items-center w-full">
          <div className="sm:w-[45%] sm:mt-0 mt-5" data-aos="fade-down">
            <p className="sm:text-2xl text-xl font-bold mb-3">
              2nd Edition of ₦1,000,000 Scholarship for Indigent Students of
              Okija in Honour of GMD, Obijackson Foundation
            </p>
            <p className="mb-3">
              The 1st edition was initiated on April 17, 2023 to honour{" "}
              <b>
                Dr. Sir Ernest Azudialu Obiejesi, Group Managing Director of
                Obijackson Foundation
              </b>{" "}
              on his birthday and also in appreciation of his contribution and
              unmatched dedication towards education, humanity, and the
              development of Okija, which is his hometown and that of CEO
              Akpoazaa Foundation as well.
            </p>
            <p className="mb-3">
              He has done tremendously well and the only way we in Akpoazaa
              Foundation could honour him was to invest in those areas that he
              has vested his interest.
            </p>
          </div>
          {/* Image Slider */}
          <ImageSlider images={slider2} />
        </div>
        <div className="flex sm:flex-row flex-col justify-between items-center w-full">
          {/* Image Slider */}
          <ImageSlider images={slider2} />
          <div className="sm:w-[45%] sm:mt-0 mt-5" data-aos="fade-down">
            <p className="sm:text-2xl text-xl font-bold mb-3">
              Provision of Fully Solar-Powered Borehole for Ubahu Community in
              Okija
            </p>
            <p className="mb-3">
              Dr. Frank Odinaka Igbojindu hails from Ubahuagboba Ubahu community
              in Okija and in a quest for community development, he's dedicated
              cash and land resources to ensure that sustainable water supply is
              provided for his community.
            </p>
            <p className="mb-3">
              The borehole which is currently in development would be manned
              24hrs by two personnels on full-time employment for day and night
              shifts to ensure that there's orderliness and the facilities are
              safe and secure.
            </p>
          </div>
        </div>
      </div>
      <div
        className="font-Montserrat sm:w-[80%] mx-auto p-2 sm:mt-10 mt-5"
        data-aos="fade-up"
      >
        <h1 className="sm:text-5xl text-2xl font-Urbanist font-bold text-center font-Montserrat">
          Testimonials
        </h1>
        <Testimonials />
      </div>
      <CTA />
      <div
        className="font-Montserrat w-full mx-auto p-2 sm:mt-10 mt-5"
        data-aos="fade-up"
      >
        <h1 className="sm:text-5xl text-2xl font-Urbanist font-bold text-center font-Montserrat">
          Our Partners
        </h1>
        <Partners />
      </div>
    </PageWrapper>
  );
};

export default Home;

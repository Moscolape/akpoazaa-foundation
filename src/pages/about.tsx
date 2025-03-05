import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import { inProgress } from "../constants/assets";

const About = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <div className="flex flex-col justify-center items-center my-5 h-[60vh]">
        <img src={inProgress} alt="no-data" className="w-30 h-30" />
        <span className="block my-4">Under development</span>
      </div>
    </PageWrapper>
  );
};

export default About;

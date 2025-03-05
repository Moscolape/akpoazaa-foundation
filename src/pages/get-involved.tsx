import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";


const GetInvolved = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <div className="flex flex-col justify-center items-center my-5 h-[60vh]">
        <span className="block my-4">Nothing yet</span>
      </div>
    </PageWrapper>
  );
};

export default GetInvolved;

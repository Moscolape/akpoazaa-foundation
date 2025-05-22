import { useEffect } from "react";
import PageWrapper from "../../components/pageWrapper";
import initializeAOS from "../../utils/aos-init";

const CommunityOutreach = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      {/* Content Section */}
      <section className="relative pt-12 px-6 max-w-5xl mx-auto font-Montserrat">
        <h1
          className="text-[#be202f] text-2xl sm:text-4xl font-bold mb-6 text-center"
          data-aos="flip-down"
        >
          Community Outreach Initiative
        </h1>
        <p
          className="text-lg text-gray-700 font-Montserrat mb-10"
          data-aos="fade-up"
        >
          Akpoazaa Foundation is committed to{" "}
          <b>sustainable community development</b>, ensuring access to essential
          resources for rural communities.
        </p>

        {/* Borehole Project Details */}
        <div className="" data-aos="fade-right">
          <img
            src="/bore2.JPG"
            alt="borehole-pic"
            className="h-[70vh] w-full mb-10"
            data-aos="fade-in"
          />
          <h2 className="text-2xl font-bold text-[#be202f] mb-4">
            Provision of Fully Solar-Powered Borehole for Ubahu Community in
            Okija
          </h2>
          <p className="text-gray-700">
            <strong>Dr. Frank Odinaka Igbojindu</strong>, an indigene of
            <b> Ubahuagboba Ubahu community in Okija</b>, has dedicated{" "}
            <b>cash and land resources</b> to ensure sustainable{" "}
            <b>clean water supply</b> for his community.
          </p>

          <p className="text-gray-700 mt-4">
            The borehole, currently under development, is powered entirely by
            <b> solar energy</b>, ensuring a <b>sustainable, uninterrupted</b>{" "}
            water supply for the community.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-6">
            Key Features of the Project:
          </h3>
          <ul className="list-disc pl-6 text-gray-700 mt-2">
            <li>
              Fully <b>solar-powered</b> water supply system
            </li>
            <li>
              <b>24-hour management</b> by trained personnel
            </li>
            <li>
              <b>Two full-time employees</b> for day & night shifts
            </li>
            <li>
              <b>Safe, secure, and orderly</b> access to clean water
            </li>
          </ul>
        </div>

        {/* Call-to-Action Section */}
        <div
          className="mt-12 p-6 bg-[#be202f] text-white rounded-lg shadow-lg text-center"
          data-aos="zoom-in"
        >
          <h2 className="text-2xl font-bold mb-4">
            Support Our Community Initiatives
          </h2>
          <p className="text-lg mb-4">
            Join us in making a lasting impact! You can support this project by
            contributing to **maintenance, security, and further expansions**.
          </p>
          <a
            href="/donate"
            className="inline-block bg-white text-[#be202f] px-6 py-3 rounded-md shadow-lg hover:bg-gray-200 transition"
          >
            Support Now
          </a>
        </div>
      </section>
    </PageWrapper>
  );
};

export default CommunityOutreach;

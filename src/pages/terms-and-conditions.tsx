import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";

const TermsAndConditions = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto p-6 mt-20 font-Montserrat">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6 text-center" data-aos="fade-up">
          Terms and Conditions
        </h2>
        <p className="text-gray-700 mb-8">
          Last Updated: <b>March 6, 2025</b>
        </p>
        <h3 className="font-semibold">1. Introduction</h3>
        <p data-aos="fade-up">
          Welcome to Akpoazaa Foundation! By accessing and using our website,
          you agree to comply with these Terms and Conditions. If you do not
          agree, please refrain from using our services.
        </p>
        <h3 className="font-semibold mt-8">2. Use of Our Website</h3>
        <ul className="block list-disc ml-4" data-aos="fade-up">
          <li>
            You must be at least 18 years old or have parental consent to use
            this website.
          </li>
          <li>
            You agree not to misuse our website, including attempting to hack,
            spam, or disrupt services.
          </li>
          <li>
            Any content provided on this website is for informational purposes
            only and should not be considered legal, financial, or professional
            advice.
          </li>
        </ul>
        <h3 className="font-semibold mt-8">3. Program Participation</h3>
        <ul className="block list-disc ml-4" data-aos="fade-up">
          <li>
            Scholarships, grants, and other support programs are subject to
            eligibility criteria.
          </li>
          <li>
            Submitting false information in applications may lead to
            disqualification.
          </li>
          <li>
            We reserve the right to modify or terminate programs at any time.
          </li>
        </ul>
        <h3 className="font-semibold mt-8">4. Donations and Refunds</h3>
        <ul className="block list-disc ml-4" data-aos="fade-up">
          <li>
            Donations made to Akpoazaa Foundation are voluntary and
            non-refundable unless there was an error in processing.
          </li>
          <li>
            We ensure that all funds are used for our educational and
            philanthropic initiatives.
          </li>
        </ul>
        <h3 className="font-semibold mt-8">5. Intellectual Property</h3>
        <ul className="block list-disc ml-4" data-aos="fade-up">
          <li>
            All content, including logos, text, and images, belongs to Akpoazaa
            Foundation unless otherwise stated.
          </li>
          <li>
            Unauthorized use, reproduction, or distribution of our content is
            prohibited.
          </li>
        </ul>
        <h3 className="font-semibold mt-8">6. Limitation of liability</h3>
        <ul className="block list-disc ml-4" data-aos="fade-up">
          <li>
            We are not liable for any damages or losses resulting from your use
            of our website.
          </li>
          <li>
            While we strive for accuracy, we do not guarantee that all
            information on the website is up-to-date at every point in time.
          </li>
        </ul>
        <h3 className="font-semibold mt-8">7. Changes to These Terms</h3>
        <p data-aos="fade-up">We may update these Terms and Conditions at any time. Continued use of the website after changes means you accept the updated terms.

</p>
      </div>
    </PageWrapper>
  );
};

export default TermsAndConditions;
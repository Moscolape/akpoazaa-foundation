import PageWrapper from "../../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../../utils/aos-init";

const PrivacyPolicy = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto p-6 mt-20 font-Montserrat">
        <h2
          className="sm:text-4xl text-2xl font-bold mb-6 text-center"
          data-aos="fade-up"
        >
          Privacy Policy
        </h2>
        <p className="text-gray-700 mb-8">
          Last Updated: <b>March 6, 2025</b>
        </p>

        <h3 className="font-semibold">1. Introduction</h3>
        <p data-aos="fade-up">
          At Akpoazaa Foundation, we value your privacy and are committed to
          protecting your personal data. This policy explains how we collect,
          use, and safeguard your information.
        </p>

        <h3 className="font-semibold mt-8">2. Information We Collect</h3>
        <ul className="block list-disc ml-4" data-aos="fade-up">
          <li>
            <b>Personal Information:</b> Name, email, phone number, address,
            documents you are asked to upload, etc. (when you donate, register,
            or subscribe).
          </li>
        </ul>

        <h3 className="font-semibold mt-8">3. How We Use Your Information</h3>
        <ul className="block list-disc ml-4" data-aos="fade-up">
          <li>Process donations and issue receipts.</li>
          <li>Provide updates on our programs and initiatives.</li>
          <li>Respond to inquiries and improve user experience.</li>
        </ul>

        <h3 className="font-semibold mt-8">4. Data Protection and Security</h3>
        <ul className="block list-disc ml-4" data-aos="fade-up">
          <li>
            We implement appropriate security measures to protect your data.
          </li>
          <li>
            However, no online transmission is 100% secure, so we cannot
            guarantee absolute security.
          </li>
        </ul>

        <h3 className="font-semibold mt-8">5. Third-Party Sharing</h3>
        <ul className="block list-disc ml-4" data-aos="fade-up">
          <li>We do not sell or rent your data to third parties.</li>
          <li>
            We may share information with trusted partners for payment
            processing, newsletter services, or legal compliance.
          </li>
        </ul>

        <h3 className="font-semibold mt-8">6. Your Rights</h3>
        <ul className="block list-disc ml-4" data-aos="fade-up">
          <li>
            You can request access to, correction of, or deletion of your
            personal data.
          </li>
        </ul>

        <h3 className="font-semibold mt-8">7. Changes to This Policy</h3>
        <p data-aos="fade-up">
          We may update this policy periodically. Please review it to stay
          informed.
        </p>
      </div>
    </PageWrapper>
  );
};

export default PrivacyPolicy;

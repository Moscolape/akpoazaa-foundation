import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";

const DonationPolicy = () => {
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
          Donation Policy
        </h2>
        <p className="text-gray-700 mb-4" data-aos="fade-up">
          <i>Last Updated:</i> <b>March 6, 2025</b>
        </p>
        <h3 className="font-semibold">1. Introduction</h3>
        <p data-aos="fade-up">
          Your generous contributions help us empower individuals and
          communities through education and philanthropy. This policy outlines
          how donations are handled.
        </p>
        <h3 className="font-semibold mt-8">2. Donation Methods</h3>
        <ul className="block list-disc ml-4" data-aos="fade-up">
          <li>Online payments (debit cards, bank transfer).</li>
          <li>Offline donations (bank deposits, in-person contributions).</li>
        </ul>
        <h3 className="font-semibold mt-8">3. Use of Donations</h3>
        <ul className="block list-disc ml-4" data-aos="fade-up">
          <li>
            Donations support scholarships, school supplies, community projects,
            and administrative costs.
          </li>
          <li>
            We allocate funds transparently and provide periodic financial
            reports where applicable.
          </li>
        </ul>
        <h3 className="font-semibold mt-8">4. Refund Policy</h3>
        <ul className="block list-disc ml-4" data-aos="fade-up">
          <li>Donations are generally non-refundable.</li>
          <li>
            Refunds may be considered in cases of accidental duplicate
            transactions or technical errors.
          </li>
        </ul>
        <h3 className="font-semibold mt-8">5. Receipts and Acknowledgments</h3>
        <ul className="block list-disc ml-4" data-aos="fade-up">
          <li>Donors are emailed their receipt upon payment.</li>
        </ul>
        <h3 className="font-semibold mt-8">
          6. Corporate and Sponsorship Donations
        </h3>
        <p data-aos="fade-up">
          Companies or organizations interested in sponsorships should contact
          us for partnership details.
        </p>
        <h3 className="font-semibold mt-8">7. Donor Privacy</h3>
        <ul className="block list-disc ml-4" data-aos="fade-up">
          <li>
            We do not share donor details with third parties without consent.
          </li>
          <li>You can choose to remain anonymous when making a donation.</li>
        </ul>
      </div>
    </PageWrapper>
  );
};

export default DonationPolicy;

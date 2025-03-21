import { useEffect, useState } from "react";
import PageWrapper from "../../components/pageWrapper";
import initializeAOS from "../../utils/aos-init";
import { Link } from "react-router-dom";
import { paystack } from "../../constants/assets";

const Donate = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  const [donationAmount, setDonationAmount] = useState<number>(5000); // Default donation amount

  // PayStack Payment Handler (Replace with actual API integration)
  const handleDonate = () => {
    alert(`Proceeding to donate ${donationAmount}`);
    // Here, you would integrate with PayStack or another payment processor
  };

  return (
    <PageWrapper>
      <div className="pt-12 px-6 max-w-4xl mx-auto text-center font-Montserrat">
        <h1 className="sm:text-4xl text-2xl font-bold text-[#be202f] mb-6" data-aos="fade-down">
          Support Akpoazaa Foundation
        </h1>
        <p className="text-lg text-gray-700 font-Montserrat mb-10" data-aos="fade-up">
          Your generous contribution helps us provide scholarships, skill training,  
          and essential resources to empower communities.
        </p>

        {/* Donation Tiers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {[
            { amount: 5000, label: "Support a Student" },
            { amount: 10000, label: "Fund a Skills Training" },
            { amount: 50000, label: "Sponsor a Project" },
          ].map((tier) => (
            <div
              key={tier.amount}
              className={`p-6 rounded-lg shadow-md border ${
                donationAmount === tier.amount ? "border-[#be202f] bg-gray-100" : "border-gray-300"
              } hover:shadow-lg transition cursor-pointer animate-fadeDown`}
              onClick={() => setDonationAmount(tier.amount)}
            >
              <h3 className="text-xl font-semibold text-gray-800">{tier.label}</h3>
              <p className="text-lg font-bold text-[#be202f] mt-2">₦{tier.amount.toLocaleString()} & above</p>
            </div>
          ))}
        </div>

        {/* Custom Donation Input */}
        <div className="mb-8">
          <label className="block text-gray-700 font-semibold mb-2">Enter Custom Amount (₦)</label>
          <input
            type="number"
            value={donationAmount}
            onChange={(e) => setDonationAmount(Number(e.target.value))}
            className="w-full p-3 border rounded-lg"
            min="500"
          />
        </div>

        {/* Donate Button */}
        <button
          onClick={handleDonate}
          className="bg-[#be202f] text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-[#9c1721] transition cursor-pointer"
        >
          Donate Now
        </button>

        {/* Payment Options (PayStack Placeholder) */}
        <div className="mt-6">
          <p className="text-gray-700">Secure payments powered by:</p>
          <img src={paystack} alt="PayStack" className="w-20 mx-auto mt-2" />
        </div>

        {/* Transparency & Impact Reports */}
        <div className="mt-12 p-6 bg-gray-100 rounded-lg shadow-md text-center" data-aos="fade-up">
          <h2 className="sm:text-2xl text-lg font-bold text-[#be202f] mb-4">Where Your Donations Go</h2>
          <p className="text-gray-700">
            We ensure transparency and accountability in fund allocation.  
            View our biannual impact reports to see how your donations are changing lives.
          </p>
          <Link to="/impact-reports" className="mt-4 inline-block bg-[#be202f] text-white px-6 py-2 rounded-md shadow-lg hover:bg-[#9c1721] transition">
            View Impact Reports
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Donate;
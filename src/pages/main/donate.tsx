import { useEffect, useState } from "react";
import PageWrapper from "../../components/pageWrapper";
import initializeAOS from "../../utils/aos-init";
import { Link } from "react-router-dom";
import { paystack } from "../../constants/assets";
import { toast } from "react-toastify";

const Donate = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  const [donationAmount, setDonationAmount] = useState<number>(100);
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<{ email?: string; donation?: string }>(
    {}
  );
  const [loading, setLoading] = useState<boolean>(false);

  const validate = () => {
    const newErrors: { email?: string; donation?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!donationAmount || donationAmount < 100) {
      newErrors.donation = "Minimum donation is ₦100.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDonate = () => {
    if (!validate()) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handler = (window as any).PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email,
      amount: donationAmount * 100,
      currency: "NGN",
      ref: `${Date.now()}`,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback: (response: any) => {
        setLoading(true);
        fetch("https://akpoazaa-foundation-backend.onrender.com/api/donations/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ reference: response.reference }),
        })
          .then((res) => res.json())
          .then((data) => {
            setLoading(false);
            if (data.status === "success") {
              toast.success("Thank you! Donation successful.");
              setEmail("");
              setDonationAmount(100);
              setErrors({});
            } else {
              toast.error("Payment verification failed.");
            }
          })
          .catch(() => {
            setLoading(false);
            toast.error("An error occurred during verification.");
          });
      },
      onClose: () => {
        toast.info("Transaction cancelled.");
      },
    });

    handler.openIframe();
  };

  return (
    <PageWrapper>
      <div className="pt-12 px-6 max-w-4xl mx-auto text-center font-Montserrat">
        <h1
          className="sm:text-4xl text-2xl font-bold text-[#be202f] mb-6"
          data-aos="fade-down"
        >
          Support Akpoazaa Foundation
        </h1>
        <p
          className="text-lg text-gray-700 font-Montserrat mb-10"
          data-aos="fade-up"
        >
          Your generous contribution helps us provide scholarships, skill
          training, and essential resources to empower communities.
        </p>

        {/* Bank Transfer Option */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6 text-center">
          <p className="text-gray-700 mb-3 mt-5 sm:text-2xl text-xl">
            AKPOAZAA FOUNDATION
          </p>
          <div className="flex items-center justify-center gap-2">
            <p className="font-bold text-gray-900 select-all sm:text-2xl text-xl">
              1027930321
            </p>
            <button
              onClick={() => {
                navigator.clipboard.writeText("1027930321");
                toast.success("Account number copied to clipboard!");
              }}
              className="text-sm bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition"
            >
              copy
            </button>
          </div>
          <p className="text-gray-700 mt-2 sm:text-2xl text-xl">UBA</p>
        </div>

        <h3 className="text-2xl sm:text-3xl font-Prism font-bold text-[#be202f] mb-10">
          OR?
        </h3>

        {/* Email Input */}
        <div className="mb-6 text-left">
          <label className="block text-gray-700 font-semibold mb-2">
            Your Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-red-600 mt-1 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Donation Input */}
        <div className="mb-8 text-left">
          <label className="block text-gray-700 font-semibold mb-2">
            Enter Amount (₦)
          </label>
          <input
            type="number"
            value={donationAmount}
            onChange={(e) => setDonationAmount(Number(e.target.value))}
            className="w-full p-3 border rounded-lg"
            min="100"
          />
          {errors.donation && (
            <p className="text-red-600 mt-1 text-sm">{errors.donation}</p>
          )}
        </div>

        {/* Donate Button */}
        <button
          onClick={handleDonate}
          className="bg-[#be202f] text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-[#9c1721] transition cursor-pointer disabled:opacity-50"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 100 16v-4l-3.5 3.5L12 24v-4a8 8 0 01-8-8z"
                ></path>
              </svg>
              Processing...
            </div>
          ) : (
            "Donate Now"
          )}
        </button>

        {/* Payment Info */}
        <div className="mt-6">
          <p className="text-gray-700 text-xl">Secure payments powered by:</p>
          <p className="text-center mt-5">Paystack</p>
          <img src={paystack} alt="PayStack" className="w-20 mx-auto mt-2" />
        </div>

        {/* Transparency Section */}
        <div
          className="mt-12 p-6 bg-gray-100 rounded-lg shadow-md text-center"
          data-aos="fade-up"
        >
          <h2 className="sm:text-2xl text-lg font-bold text-[#be202f] mb-4">
            Where Your Donations Go
          </h2>
          <p className="text-gray-700">
            We ensure transparency and accountability in fund allocation. View
            our biannual impact reports to see how your donations are changing
            lives.
          </p>
          <Link
            to="/impact-reports"
            className="mt-4 inline-block bg-[#be202f] text-white px-6 py-2 rounded-md shadow-lg hover:bg-[#9c1721] transition"
          >
            View Impact Reports
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Donate;

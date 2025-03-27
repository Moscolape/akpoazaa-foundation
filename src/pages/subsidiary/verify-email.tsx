import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import PageWrapper from "../../components/pageWrapper";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();
  const [status, setStatus] = useState({ loading: true, message: "" });

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setStatus({ loading: false, message: "Invalid verification link." });
        return;
      }

      try {
        const response = await fetch(
          `https://akpoazaa-foundation-backend.onrender.com/api/scholarship/verify-email?token=${token}`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Verification failed.");
        } else {
          setStatus({
            loading: false,
            message:
              data.message || "Email verified successfully! Redirecting...",
          });

          setTimeout(() => navigate("/scholarship-success"), 3000);
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    verifyToken();
  }, [token, navigate]);

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Email Verification</h2>
          {status.loading ? (
            <p className="text-blue-600">Verifying your email...</p>
          ) : (
            <p
              className={`text-lg ${
                status.message.includes("success")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {status.message}
            </p>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default VerifyEmail;

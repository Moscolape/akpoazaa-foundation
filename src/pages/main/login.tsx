import PageWrapper from "../../components/pageWrapper";
import { useEffect, useState } from "react";
import initializeAOS from "../../utils/aos-init";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { working } from "../../constants/assets";

type LoginData = {
  username: string;
  password: string;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"error" | "success" | null>(
    null
  );

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginData>();
  const navigate = useNavigate();

  useEffect(() => {
    initializeAOS();
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    setFormMessage(null);
    try {
      setIsSubmitting(true);

      const response = await fetch(
        // "http://localhost:8000/api/auth/login",
        "https://akpoazaa-foundation-backend.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result.message.toLowerCase().includes("invalid")) {
        setFormMessage(result.message);
        setMessageType("error");
        return;
      }

      if (result.message.toLowerCase().includes("successful")) {
        setFormMessage(result.message);
        login(result.token);
        setMessageType("success");
        reset();

        // delay before navigation
        setTimeout(() => {
          navigate("/applicants");
        }, 2000);

        return;
      }

      // fallback for unexpected
      setFormMessage(result.message);
      setMessageType(response.ok ? "success" : "error");
    } catch (err) {
      console.error("Login Error:", err);
      setFormMessage("Login failed. Please try again.");
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <div className="py-12 px-6 max-w-6xl mx-auto font-Montserrat">
        <div className="bg-white p-6 w-full shadow rounded-xl flex gap-6" data-aos="fade-up">
          <div className="sm:w-1/2 flex flex-col justify-center" data-aos="fade-up">
            <h1 className="sm:text-3xl text-xl font-bold">Login</h1>
            <p className="text-gray-400 mb-6 mt-2 sm:text-[1rem] text-sm">
              Enter your username and password
            </p>
            {formMessage && (
              <div
                className={`p-3 mb-4 rounded text-center ${
                  messageType === "error"
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {formMessage}
              </div>
            )}
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Username Field */}
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Username
                </label>
                <input
                  type="text"
                  {...register("username", {
                    required: "Username is required",
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-[#f69223] placeholder:text-sm"
                  placeholder="Enter your username"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded pr-10 focus:outline-none focus:ring focus:ring-[#f69223] placeholder:text-sm"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none cursor-pointer"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-2 flex justify-center mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#f69223] text-white px-6 py-2 rounded hover:bg-[#ae6716] transition cursor-pointer flex items-center justify-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed w-full"
                >
                  {isSubmitting && (
                    <svg
                      className="animate-spin h-4 w-4 text-white"
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
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                  )}
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </div>
            </form>
          </div>

          {/* Illustration */}
          <img
            src={working}
            alt="undraw-illustration"
            className="w-1/2 object-contain sm:block hidden"
            data-aos="zoom-in"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Login;

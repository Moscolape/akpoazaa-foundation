import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import PageWrapper from "../../components/pageWrapper";
import { useNavigate } from "react-router-dom";

interface PartnerFormData {
  organizationName: string;
  businessEmail: string;
  businessAddress: string;
  partnershipType:
    | "launch a community project"
    | "launch an educational program";
  projectName: string;
  projectDescription: string;
}

const PartnerWithUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<PartnerFormData>();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();

  const partnershipType = watch("partnershipType");

  const onSubmit: SubmitHandler<PartnerFormData> = async (data) => {
    try {
      setIsSubmitting(true);

      const response = await fetch(
        "https://akpoazaa-backend.onrender.com/api/partner",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok)
        throw new Error("Failed to submit partnership request.");

      alert("Partnership request submitted successfully!");
      reset();
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <div className="p-6 sm:bg-gray-100 rounded-md sm:shadow-lg max-w-3xl mx-auto my-20 font-Montserrat">
        <h2 className="sm:text-3xl text-2xl font-bold mb-4 text-center">
          Partner With Us
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label>Organization/Business Name</label>
          <input
            {...register("organizationName", {
              required: "Organization name is required",
            })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.organizationName && (
            <p className="text-red-500">{errors.organizationName.message}</p>
          )}

          <label>Business Email</label>
          <input
            type="email"
            {...register("businessEmail", {
              required: "Business email is required",
            })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.businessEmail && (
            <p className="text-red-500">{errors.businessEmail.message}</p>
          )}

          <label>Address of Business</label>
          <input
            {...register("businessAddress", {
              required: "Business address is required",
            })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.businessAddress && (
            <p className="text-red-500">{errors.businessAddress.message}</p>
          )}

          <label>How do you want to partner with us?</label>
          <select
            {...register("partnershipType", {
              required: "Please select a partnership type",
            })}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select an option</option>
            <option value="launch a community project">
              Launch a community project
            </option>
            <option value="launch an educational program">
              Launch an educational program
            </option>
          </select>
          {errors.partnershipType && (
            <p className="text-red-500">{errors.partnershipType.message}</p>
          )}

          <label>
            {partnershipType === "launch an educational program"
              ? "Educational Program Name"
              : "Proposed Project Name"}
          </label>
          <input
            {...register("projectName", {
              required: "Project/Program name is required",
            })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.projectName && (
            <p className="text-red-500">{errors.projectName.message}</p>
          )}

          <label>Short Description of the Project/Program</label>
          <textarea
            {...register("projectDescription", {
              required: "Please provide a short description",
            })}
            className="w-full p-3 border rounded-lg h-24"
          />
          {errors.projectDescription && (
            <p className="text-red-500">{errors.projectDescription.message}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#be202f] text-white p-3 rounded-lg font-bold cursor-pointer hover:bg-[#9c1721]"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </PageWrapper>
  );
};

export default PartnerWithUs;

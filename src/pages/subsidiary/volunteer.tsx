import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import PageWrapper from "../../components/pageWrapper";
import { useNavigate } from "react-router-dom";

import { statesData } from "../../utils/statesdata";

interface VolunteerFormData {
  name: string;
  dob: string;
  lgaOrigin: string;
  stateOrigin: string;
  lgaResidence: string;
  stateResidence: string;
  phoneNumber: string;
  email: string;
  skillArea: string;
}

const skillsOptions = [
  "Teaching",
  "Mentorship",
  "IT Support",
  "Community Outreach",
  "Administration",
];

const Volunteer: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<VolunteerFormData>();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();

  const stateOrigin = watch("stateOrigin");
  const stateResidence = watch("stateResidence");

  const onSubmit: SubmitHandler<VolunteerFormData> = async (data) => {
    try {
      setIsSubmitting(true);
      const response = await fetch(
        "https://volunteer-backend.onrender.com/api/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) throw new Error("Failed to register.");

      alert("Registration successful!");
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
          Volunteer Registration
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label>Full Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <label htmlFor="">Date of Birth</label>
          <input
            type="text"
            {...register("dob", { required: "Date of Birth is required" })}
            placeholder="DD-MM-YYYY e.g 30-01-1985"
            className="w-full p-3 border rounded-lg"
          />
          {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}

          <label>State of Origin</label>
          <select
            {...register("stateOrigin", { required: true })}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select State</option>
            {Object.keys(statesData).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.stateOrigin && (
            <p className="text-red-500">{errors.stateOrigin.message}</p>
          )}

          <label>LGA of Origin</label>
          <select
            {...register("lgaOrigin", { required: true })}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select LGA</option>
            {stateOrigin &&
              statesData[stateOrigin as keyof typeof statesData]?.map((lga) => (
                <option key={lga} value={lga}>
                  {lga}
                </option>
              ))}
          </select>
          {errors.lgaOrigin && (
            <p className="text-red-500">{errors.lgaOrigin.message}</p>
          )}

          <label>State of Residence</label>
          <select
            {...register("stateResidence", { required: true })}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select State</option>
            {Object.keys(statesData).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.stateResidence && (
            <p className="text-red-500">{errors.stateResidence.message}</p>
          )}

          <label>LGA of Residence</label>
          <select
            {...register("lgaResidence", { required: true })}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select LGA</option>
            {stateResidence &&
              statesData[stateResidence as keyof typeof statesData]?.map(
                (lga) => (
                  <option key={lga} value={lga}>
                    {lga}
                  </option>
                )
              )}
          </select>
          {errors.lgaResidence && (
            <p className="text-red-500">{errors.lgaResidence.message}</p>
          )}

          <label>Phone Number</label>
          <input
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber.message}</p>
          )}

          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <label>Skill Area</label>
          <select
            {...register("skillArea", { required: "Skill area is required" })}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select a Skill</option>
            {skillsOptions.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>
          {errors.skillArea && (
            <p className="text-red-500">{errors.skillArea.message}</p>
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

export default Volunteer;

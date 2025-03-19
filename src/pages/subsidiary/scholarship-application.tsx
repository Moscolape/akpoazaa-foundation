import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import PageWrapper from "../../components/pageWrapper";
import { Link, useNavigate } from "react-router-dom";

interface ScholarshipFormData {
  fullName: string;
  gender: "Male" | "Female";
  dob: string;
  village: string;
  town: string;
  stateResidence: string;
  obiArea: string;
  category: "Primary" | "Secondary" | "Tertiary";
  guardianName: string;
  guardianBank: string;
  guardianAccountNo: string;
  guardianAccountName: string;
  guardianPhone: string;
  schoolName: string;
  schoolState: string;
  schoolLGA: string;
  schoolBank: string;
  schoolAccountNo: string;
  schoolAccountName: string;
  schoolPhone: string;
  referralName: string;
  referralPhone: string;
  reason: string;
  declaration: boolean;
}

const ScholarshipApplication: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ScholarshipFormData>();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ScholarshipFormData> = async (data) => {
    try {
      setIsSubmitting(true);

      const payload = {
        fullName: data.fullName,
        gender: data.gender,
        dob: data.dob,
        village: data.village,
        town: data.town,
        stateResidence: data.stateResidence,
        obiArea: data.obiArea,
        category: data.category,
        guardianName: data.guardianName,
        guardianBank: data.guardianBank,
        guardianAccountNo: data.guardianAccountNo,
        guardianAccountName: data.guardianAccountName,
        guardianPhone: data.guardianPhone,
        schoolName: data.schoolName,
        schoolState: data.schoolState,
        schoolLGA: data.schoolLGA,
        schoolBank: data.schoolBank,
        schoolAccountNo: data.schoolAccountNo,
        schoolAccountName: data.schoolAccountName,
        schoolPhone: data.schoolPhone,
        referralName: data.referralName,
        referralPhone: data.referralPhone,
        reason: data.reason,
        declaration: data.declaration,
      };

      console.log("Submitting Data:", payload);

      const response = await fetch(
        "https://akpoazaa-foundation-backend.onrender.com/api/scholarship/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Backend Error:", errorResponse);
        throw new Error(
          errorResponse.message || "Failed to submit application."
        );
      }

      const result = await response.json();
      alert("Scholarship application submitted successfully!");
      console.log(result);
      reset();
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <div className="p-6 sm:bg-gray-100 rounded-md sm:shadow-lg max-w-3xl mx-auto my-20 font-Montserrat">
        <h2 className="sm:text-3xl text-2xl font-bold mb-4 text-center">
          Scholarship Application
        </h2>
        <p className="text-gray-800 text-center mb-4 font-bold">
          (For 2nd Edition One Million Naira Scholarship in honour of Dr. Sir
          Ernest Azudialu Obiejesi)
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label>Full Name</label>
          <input
            {...register("fullName", { required: "Full Name is required" })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.fullName && (
            <p className="text-red-500">{errors.fullName.message}</p>
          )}

          <label>Gender</label>
          <select
            {...register("gender", { required: "Gender is required" })}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label>Date of Birth</label>

          <input
            placeholder="DD-MM-YYYY e.g 30-01-1985"
            type="text"
            {...register("dob", { required: "Date of Birth is required" })}
            className="w-full p-3 border rounded-lg"
          />

          <label>Village</label>
          <input
            {...register("village", { required: "Village is required" })}
            className="w-full p-3 border rounded-lg"
          />

          <label>Town</label>
          <input
            {...register("town", { required: "Town is required" })}
            className="w-full p-3 border rounded-lg"
          />

          <label>State of Residence</label>
          <input
            {...register("stateResidence", {
              required: "State of Residence is required",
            })}
            className="w-full p-3 border rounded-lg"
          />

          <label>Obi Area in Okija</label>
          <input
            {...register("obiArea", { required: "Obi Area is required" })}
            className="w-full p-3 border rounded-lg"
          />

          <label>Category</label>
          <select
            {...register("category", { required: "Category is required" })}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select Category</option>
            <option value="Primary">Primary</option>
            <option value="Secondary">Secondary</option>
            <option value="Tertiary">Tertiary</option>
          </select>

          <h3 className="text-xl font-semibold mt-6">
            Parent/Guardian Information
          </h3>
          <label>Full Name</label>
          <input
            {...register("guardianName", {
              required: "Guardian Name is required",
            })}
            className="w-full p-3 border rounded-lg"
          />

          <label>Bank Name</label>
          <input
            {...register("guardianBank", {
              required: "Guardian Bank is required",
            })}
            className="w-full p-3 border rounded-lg"
          />

          <label>Account Number</label>
          <input
            {...register("guardianAccountNo", {
              required: "Account Number is required",
            })}
            className="w-full p-3 border rounded-lg"
          />

          <label>Account Name</label>
          <input
            {...register("guardianAccountName", {
              required: "Account Name is required",
            })}
            className="w-full p-3 border rounded-lg"
          />

          <label>Phone Number</label>
          <input
            {...register("guardianPhone", {
              required: "Guardian Phone is required",
            })}
            className="w-full p-3 border rounded-lg"
          />

          <h3 className="text-xl font-semibold mt-6">School Information</h3>
          <label>Name of School</label>
          <input
            {...register("schoolName", { required: "School Name is required" })}
            className="w-full p-3 border rounded-lg"
          />

          <label>School's State</label>
          <input
            {...register("schoolState", {
              required: "School State is required",
            })}
            className="w-full p-3 border rounded-lg"
          />

          <label>School's LGA</label>
          <input
            {...register("schoolLGA", { required: "School LGA is required" })}
            className="w-full p-3 border rounded-lg"
          />

          <label>Bank Name</label>
          <input
            {...register("schoolBank", {
              required: "School Bank is required",
            })}
            className="w-full p-3 border rounded-lg"
          />

          <label>Account Number</label>
          <input
            {...register("schoolAccountNo", {
              required: "Account Number is required",
            })}
            className="w-full p-3 border rounded-lg"
          />

          <label>Account Name</label>
          <input
            {...register("schoolAccountName", {
              required: "Account Name is required",
            })}
            className="w-full p-3 border rounded-lg"
          />

          <label>Phone Number</label>
          <input
            {...register("schoolPhone", {
              required: "School contact number is required",
            })}
            className="w-full p-3 border rounded-lg"
          />

          <h3 className="text-xl font-semibold mt-6">Referral Information</h3>
          <label>Name of Referral</label>
          <input
            {...register("referralName", {
              required: "Referral Name is required",
            })}
            className="w-full p-3 border rounded-lg"
          />

          <label>Phone Number</label>
          <input
            {...register("referralPhone", {
              required: "Referral Phone is required",
            })}
            className="w-full p-3 border rounded-lg"
          />

          <h3 className="text-xl font-semibold mt-6">Additional Information</h3>
          <label>Why should you be considered for this scholarship?</label>
          <textarea
            {...register("reason", { required: "This field is required" })}
            className="w-full p-3 border rounded-lg mt-3" rows={10}
          />

          <label>
            <input
              type="checkbox"
              {...register("declaration", {
                required: "You must accept the declaration",
              })}
            />
            I hereby declare that the information provided is accurate to the
            best of my knowledge. I understand that any false information may
            lead to disqualification.
          </label>

          <h2 className="text-xl font-bold mt-6 mb-4">Feedback</h2>
          <p>
            For feedback and more information about the competition, chat us on
            WhatsApp via{" "}
            <Link
              to={"https://wa.me/+2347030555581"}
              target="_blank"
              className="text-[#be202f] font-medium"
            >
              0703 055 5581
            </Link>{" or "}
            <Link
              to={"https://wa.me/+2347077145544"}
              target="_blank"
              className="text-[#be202f] font-medium"
            >
              0707 714 5544
            </Link>{" "}
            and click to follow us on the Facebook Pages below;
          </p>
          <div>
            <a
              href={"https://www.facebook.com/share/18LvqCJULT/"}
              target="_blank"
              className="text-[#be202f] font-bold block"
            >
              @Best Brain Contest
            </a>
            <a
              href={"https://www.facebook.com/share/1BDvdoZf6Y/"}
              target="_blank"
              className="inline-block text-[#be202f] font-bold"
            >
              @Akpoazaa Foundation
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#be202f] text-white p-3 rounded-lg font-bold cursor-pointer hover:bg-[#9c1721] mt-10"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </PageWrapper>
  );
};

export default ScholarshipApplication;

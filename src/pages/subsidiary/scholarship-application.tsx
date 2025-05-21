import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import PageWrapper from "../../components/pageWrapper";
import { Link } from "react-router-dom";
import { statesData } from "../../utils/allStatesdata";

interface ScholarshipFormData {
  fullName: string;
  email: string;
  gender: "Male" | "Female";
  dob: string;
  // village: string;
  // town: string;
  // stateResidence: string;
  stateOrigin: string;
  lgaOrigin: string;
  // obiArea: string;
  category: "Primary" | "Secondary" | "Tertiary";
  guardianName: string;
  relationshipWithWard: "Father" | "Mother" | "Guardian";
  guardianPhone: string;
  schoolName: string;
  schoolState: string;
  schoolLGA: string;
  schoolFees: number;
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
    watch,
    formState: { errors },
  } = useForm<ScholarshipFormData>();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const stateOfOrigin = watch("stateOrigin");
  const selectedState = statesData.find(
    (state) => state.state === stateOfOrigin
  );

  const stateSchool = watch("schoolState");
  const selectedSchoolState = statesData.find(
    (state) => state.state === stateSchool
  );

  const onSubmit: SubmitHandler<ScholarshipFormData> = async (data) => {
    try {
      setIsSubmitting(true);

      const payload = {
        fullName: data.fullName,
        email: data.email,
        gender: data.gender,
        dob: data.dob,
        // village: data.village,
        // town: data.town,
        // stateResidence: data.stateResidence,
        // obiArea: data.obiArea,
        stateOrigin: data.stateOrigin,
        lgaOrigin: data.lgaOrigin,
        category: data.category,
        guardianName: data.guardianName,
        relationshipWithWard: data.relationshipWithWard,
        guardianPhone: data.guardianPhone,
        schoolName: data.schoolName,
        schoolState: data.schoolState,
        schoolLGA: data.schoolLGA,
        schoolFees: data.schoolFees,
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
        "https://akpoazaa-foundation-backend.onrender.com/api/scholarship/foundation/register",
        // "https://akpoazaa-foundation-backend.onrender.com/api/scholarship/register",
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
      console.log(result);
      reset();
      setMessage(result.message);
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
          AKPOAZAA FOUNDATION Scholarship Beneficiary Form
        </h2>
        {/* <p className="text-gray-800 text-center mb-4 font-bold">
          For 2nd Edition One Million Naira Scholarship in honour of Dr. Sir
          Ernest Azudialu Obiejesi (OBIJACKSON'S Birthday)
        </p> */}
        {/* <span className="">
          <span className="font-bold">NOTE: </span>THIS SCHOLARSHIP IS ONLY FOR{" "}
          <span className="font-bold text-red-700">OKIJA INDIGENES</span>
        </span> */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h3 className="text-xl font-semibold mt-10">Personal Information</h3>
          <label>Full Name</label>
          <input
            {...register("fullName", { required: "Full Name is required" })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.fullName && (
            <p className="text-red-500">{errors.fullName.message}</p>
          )}

          <label>Email</label>
          <input
            {...register("email", { required: "Full Name is required" })}
            type="email"
            className="w-full p-3 border rounded-lg"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
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
          {errors.gender && (
            <p className="text-red-500">{errors.gender.message}</p>
          )}

          <label>Date of Birth</label>

          <input
            placeholder="DD-MM-YYYY e.g 30-01-1985"
            type="text"
            {...register("dob", {
              required: "Date of Birth is required",
              pattern: {
                value:
                  /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19|20)\d{2}$/,
                message: "Date must be in DD-MM-YYYY format",
              },
            })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}

          {/* <label>Village</label>
          <input
            {...register("village", { required: "Village is required" })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.village && (
            <p className="text-red-500">{errors.village.message}</p>
          )}

          <label>Town</label>
          <input
            {...register("town", { required: "Town is required" })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.town && <p className="text-red-500">{errors.town.message}</p>} */}

          {/* <label>State of Residence</label>
          <input
            {...register("stateOrigin", {
              required: "State of Residence is required",
            })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.stateResidence && (
            <p className="text-red-500">{errors.stateResidence.message}</p>
          )} */}

          <label>State of Origin</label>
          <select
            {...register("stateOrigin", { required: "State is required" })}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select State</option>
            {statesData.map(({ state }) => (
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
            {...register("lgaOrigin", { required: "LGA is required" })}
            className="w-full p-3 border rounded-lg"
            disabled={!selectedState}
          >
            <option value="">Select LGA</option>
            {selectedState?.lgas.map((lga) => (
              <option key={lga} value={lga}>
                {lga}
              </option>
            ))}
          </select>
          {errors.lgaOrigin && (
            <p className="text-red-500">{errors.lgaOrigin.message}</p>
          )}

          {/* <label>Obi Area in Okija</label>
          <input
            {...register("obiArea", { required: "Obi Area is required" })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.obiArea && (
            <p className="text-red-500">{errors.obiArea.message}</p>
          )} */}

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
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}

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
          {errors.guardianName && (
            <p className="text-red-500">{errors.guardianName.message}</p>
          )}

          <label>Relationship With Beneficiary</label>
          <select
            {...register("relationshipWithWard", {
              required: "Relationship with ward is required",
            })}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select relationship</option>
            <option value="Father">Father</option>
            <option value="Mother">Mother</option>
            <option value="Guardian">Guardian</option>
          </select>
          {errors.relationshipWithWard && (
            <p className="text-red-500">
              {errors.relationshipWithWard.message}
            </p>
          )}

          <label>Phone Number</label>
          <input
            {...register("guardianPhone", {
              required: "Guardian Phone is required",
            })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.guardianPhone && (
            <p className="text-red-500">{errors.guardianPhone.message}</p>
          )}

          <h3 className="text-xl font-semibold mt-6">School Information</h3>
          <label>Name of School</label>
          <input
            {...register("schoolName", { required: "School Name is required" })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.schoolName && (
            <p className="text-red-500">{errors.schoolName.message}</p>
          )}

          <label>School's State</label>
          <select
            {...register("schoolState", {
              required: "School state is required",
            })}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select State</option>
            {statesData.map(({ state }) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.schoolState && (
            <p className="text-red-500">{errors.schoolState.message}</p>
          )}

          <label>School's LGA</label>
          <select
            {...register("schoolLGA", { required: "School LGA is required" })}
            className="w-full p-3 border rounded-lg"
            disabled={!selectedSchoolState}
          >
            <option value="">Select LGA</option>
            {selectedSchoolState?.lgas.map((lga) => (
              <option key={lga} value={lga}>
                {lga}
              </option>
            ))}
          </select>
          {errors.schoolLGA && (
            <p className="text-red-500">{errors.schoolLGA.message}</p>
          )}

          <label>School Fees</label>
          <input
            {...register("schoolFees", {
              required: "School Fees is required",
            })}
            placeholder="e.g #10,000"
            className="w-full p-3 border rounded-lg"
          />
          {errors.schoolFees && (
            <p className="text-red-500">{errors.schoolFees.message}</p>
          )}

          <label>School's Bank Name</label>
          <input
            {...register("schoolBank", {
              required: "School Bank is required",
            })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.schoolBank && (
            <p className="text-red-500">{errors.schoolBank.message}</p>
          )}

          <label>School's Account Number</label>
          <input
            {...register("schoolAccountNo", {
              required: "Account Number is required",
            })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.schoolAccountNo && (
            <p className="text-red-500">{errors.schoolAccountNo.message}</p>
          )}

          <label>School's Account Name</label>
          <input
            {...register("schoolAccountName", {
              required: "Account Name is required",
            })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.schoolAccountName && (
            <p className="text-red-500">{errors.schoolAccountName.message}</p>
          )}

          <label>Phone Number</label>
          <input
            {...register("schoolPhone", {
              required: "School contact number is required",
            })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.schoolPhone && (
            <p className="text-red-500">{errors.schoolPhone.message}</p>
          )}

          <h3 className="text-xl font-semibold mt-6">Referral Information</h3>
          <label>Name of Referral</label>
          <input
            {...register("referralName", {
              required: "Referral Name is required",
            })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.referralName && (
            <p className="text-red-500">{errors.referralName.message}</p>
          )}

          <label>Phone Number</label>
          <input
            {...register("referralPhone", {
              required: "Referral Phone is required",
            })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.referralPhone && (
            <p className="text-red-500">{errors.referralPhone.message}</p>
          )}

          <h3 className="text-xl font-semibold mt-6">Additional Information</h3>
          <label>Why should you be considered for this scholarship?</label>
          <textarea
            {...register("reason", { required: "This field is required" })}
            className="w-full p-3 border rounded-lg mt-3"
            rows={10}
          />
          {errors.reason && (
            <p className="text-red-500">{errors.reason.message}</p>
          )}

          <label>
            <input
              type="checkbox"
              {...register("declaration", {
                required: "You must accept the declaration",
              })}
              className="accent-[#be202f] mr-1"
            />
            I hereby declare that the information provided is accurate to the
            best of my knowledge. I understand that any false information may
            lead to disqualification.
          </label>
          {errors.declaration && (
            <p className="text-red-500">{errors.declaration.message}</p>
          )}

          <h2 className="text-xl font-bold mt-6 mb-4">Feedback</h2>
          <p>
            For feedback and more information about the scholarship, chat us on
            WhatsApp via{" "}
            <Link
              to={"https://wa.me/+2347030555581"}
              target="_blank"
              className="text-[#be202f] font-medium"
            >
              0703 055 5581
            </Link>
            {" or "}
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
          {message !== "" && (
            <p className="text-green-700 p-3 rounded text-center bg-green-200">
              {message}
            </p>
          )}
        </form>
      </div>
    </PageWrapper>
  );
};

export default ScholarshipApplication;

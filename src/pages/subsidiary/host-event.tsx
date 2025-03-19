import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import PageWrapper from "../../components/pageWrapper";
import { useNavigate } from "react-router-dom";

interface EventFormData {
  organizerName: string;
  email: string;
  phoneNumber: string;
  eventName: string;
  eventLocation: string;
  eventDate: string;
  eventDescription: string;
}

const HostAnEvent: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EventFormData>();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<EventFormData> = async (data) => {
    try {
      setIsSubmitting(true);

      const response = await fetch(
        "https://akpoazaa-backend.onrender.com/api/host-event",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) throw new Error("Failed to submit event request.");

      alert("Event registration submitted successfully!");
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
          Host an Event
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Help us spread awareness and raise funds by organizing an event in
          your community, workplace, or school to support our cause.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label>Organizer's Name</label>
          <input
            {...register("organizerName", {
              required: "Organizer's name is required",
            })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.organizerName && (
            <p className="text-red-500">{errors.organizerName.message}</p>
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

          <label>Phone Number</label>
          <input
            type="tel"
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber.message}</p>
          )}

          <label>Event Name</label>
          <input
            {...register("eventName", { required: "Event name is required" })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.eventName && (
            <p className="text-red-500">{errors.eventName.message}</p>
          )}

          <label>Event Location</label>
          <input
            {...register("eventLocation", {
              required: "Event location is required",
            })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.eventLocation && (
            <p className="text-red-500">{errors.eventLocation.message}</p>
          )}

          <label>Event Date</label>
          <input
            type="date"
            {...register("eventDate", { required: "Event date is required" })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.eventDate && (
            <p className="text-red-500">{errors.eventDate.message}</p>
          )}

          <label>Event Description</label>
          <textarea
            {...register("eventDescription", {
              required: "Please provide a short description",
            })}
            className="w-full p-3 border rounded-lg h-24"
          />
          {errors.eventDescription && (
            <p className="text-red-500">{errors.eventDescription.message}</p>
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

export default HostAnEvent;

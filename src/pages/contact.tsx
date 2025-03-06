import PageWrapper from "../components/pageWrapper";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import initializeAOS from "../utils/aos-init";
import axios from "axios";

import MapComponent from "../components/map";

// Define Form Data Type
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const [status, setStatus] = useState<string>("");

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setStatus("Sending...");
    try {
      const response = await axios.post<{ message: string }>(
        "http://localhost:5000/api/contact",
        data
      );

      if (response.status === 200) {
        setStatus("Message sent successfully!");
        reset();
      }
    } catch (error) {
      setStatus("Failed to send message. Try again.");
      console.log(error);
    }
  };

  return (
    <PageWrapper>
      <div className="w-[90%] mx-auto sm:mt-32 flex flex-col sm:grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="">
          <h2
            className="text-3xl font-bold sm:mt-0 mt-5 mb-4 font-Montserrat text-[#be202f]"
            data-aos="fade-left"
          >
            Contact Us
          </h2>
          <p
            className="text-gray-800 font-DM-Sans"
            data-aos="fade-left"
            data-aos-delay={500}
          >
            Do you have any <b>questions</b> about our <b>programs & events</b>?
            Do you need to make <b>further enquiries</b> about how to{" "}
            <b>get involved or donate</b> to the foundation? Or do you just want
            to say hi? Whatever it is, feel free to send a message and we would
            get back to you within 24hrs.
          </p>
          <br />
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Full Name"
              className="w-full p-2 border rounded placeholder:text-gray-400"
              data-aos="fade-in"
              data-aos-delay={500}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              className="w-full p-2 border rounded placeholder:text-gray-400"
              data-aos="fade-in"
              data-aos-delay={500}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Message"
              className="w-full p-2 border rounded resize-none placeholder:text-gray-400"
              rows={8}
              data-aos="fade-in"
              data-aos-delay={500}
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#be202f] text-white hover:bg-[#f69223] p-2 rounded cursor-pointer animate-hop font-Montserrat"
            >
              Send Message
            </button>
          </form>
          {status && (
            <p className="mt-4 text-center text-green-700 font-medium">
              {status}
            </p>
          )}
        </div>

        {/* Location on Map */}

        <MapComponent
          latitude={6.1329419}
          longitude={6.7923994}
          locationName="Awka, Nigeria"
        />
      </div>

      {/* Contact Details */}
      <div className="font-Montserrat flex sm:flex-row flex-col justify-between items-center sm:w-[85%] w-full sm:mx-auto my-20 px-3">
        <div
          className="sm:w-[30%] w-full flex sm:justify-center items-center"
          data-aos="fade-down"
        >
          <FaMapMarkerAlt className="text-[#f69223] text-7xl" />
          <div className="sm:ml-5 ml-7">
            <h3 className="font-bold">ADDRESS:</h3>
            <p>
              Suite B6 Millennium Plaza by Total Filling Station, Aroma
              Junction, Awka, Anambra State, Nigeria.
            </p>
          </div>
        </div>
        <div
          className="sm:w-[30%] w-full flex sm:justify-center items-center my-3 sm:my-0"
          data-aos="fade-down"
        >
          <FaPhoneAlt className="text-[#a6cc39] text-4xl" />
          <div className="ml-5">
            <h3 className="font-bold">TELEPHONE:</h3>
            <p>0703 055 5581</p>
            <p>0707 714 5544</p>
          </div>
        </div>
        <div
          className="sm:w-[30%] w-full flex sm:justify-center items-center"
          data-aos="fade-down"
        >
          <AiOutlineMail className="text-[#02a69d] text-4xl" />
          <div className="ml-5">
            <h3 className="font-bold">EMAIL:</h3>
            <p>akpoazaafoundation@gmail.com</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;

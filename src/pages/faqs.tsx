import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Akpoazaa Foundation and what does it do?",
    answer:
      "Akpoazaa Foundation is a non-profit organization dedicated to providing educational support, scholarships, and community development initiatives to empower individuals and underserved communities.",
  },
  {
    question: "How can I benefit from your programs?",
    answer:
      "We offer scholarships, skill development workshops, and community projects. Check our 'Programs' page for eligibility criteria and application details.",
  },
  {
    question: "Who is eligible to apply for your scholarships?",
    answer:
      "Eligibility varies by program, but generally, we support students from low-income backgrounds, high-achievers in need of financial aid, and individuals committed to giving back to their communities.",
  },
  {
    question: "How do I apply for a scholarship?",
    answer:
      "Check out the scholarship section of the 'Programs' page, fill out the online application form, and submit the required documents before the deadline.",
  },
  {
    question: "When will I know if my scholarship application was successful?",
    answer:
      "We review applications within a week after the deadline. Successful applicants will be contacted via email or phone.",
  },
  {
    question: "How can I donate to support your cause?",
    answer:
      "You can donate securely via our website using debit cards, bank transfers, or mobile payment platforms. Visit the 'Donate' page for details.",
  },
  {
    question: "Can I sponsor a student directly?",
    answer:
      "Yes! We offer a direct sponsorship program where donors can fund a specific student’s education. Contact us for more details.",
  },
  {
    question: "How can I volunteer with your foundation?",
    answer:
      "We welcome volunteers for tutoring, fundraising, and community outreach. Fill out the “Volunteer” form on our website to get started.",
  },
  {
    question: "Do you collaborate with other organizations or companies?",
    answer:
      "Yes, we partner with educational institutions, corporate sponsors, and NGOs. If you’d like to collaborate, please reach out via our “Contact Us” page.",
  },
];

const FAQs = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
  };

  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto p-6 mt-20 font-Montserrat">
        <h2 className="sm:text-4xl text-xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${index !== faqs.length - 1 ? "border-b pb-4" : ""}`}
              data-aos="fade-up"
            >
              <button
                className="w-full flex justify-between sm:text-lg items-center font-medium p-3 focus:outline-none cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-left">{faq.question}</span>
                {openIndexes.includes(index) ? (
                  <FaMinus className="text-red-500" />
                ) : (
                  <FaPlus className="text-green-500" />
                )}
              </button>
              {openIndexes.includes(index) && (
                <p className="text-gray-700 p-3 bg-gray-100 text-sm sm:text-[1rem] rounded-md animate-fadeDownFast">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default FAQs;

import { useEffect, useState } from "react";
import moment from "moment";
import PageWrapper from "../../components/pageWrapper";
import Pagination from "../../components/pagination";
import Modal from "../../components/modal";

interface Applicant {
  _id: string;
  fullName: string;
  email: string;
  gender: string;
  dob: string;
  stateResidence: string;
  stateOrigin: string;
  lgaOrigin: string;
  category: string;
  class: string;
  passport: string;
  guardianName: string;
  relationshipWithWard: string;
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
  createdAt: string;
}

const Applicant = () => {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(
    null
  );

  const openModal = (applicant: Applicant) => setSelectedApplicant(applicant);
  const closeModal = () => setSelectedApplicant(null);

  const itemsPerPage = 10;

  useEffect(() => {
    const fetchApplicants = async () => {
      setIsLoading(true);
      try {
        // const baseUrl ="http://localhost:8000/api/scholarship/foundation/applicants";
        const baseUrl = "https://akpoazaa-foundation-backend.onrender.com/api/scholarship/foundation/applicants";

        const queryParams = new URLSearchParams();

        queryParams.append("page", currentPage.toString());

        const response = await fetch(`${baseUrl}?${queryParams.toString()}`);
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Failed to fetch applicants");
        }

        setApplicants(result.applicants);
        setTotalItems(result.totalApplicants);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplicants();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <PageWrapper>
      <section className="relative pt-12 px-6 w-[90%] mx-auto font-Montserrat">
        <h1
          className="text-[#be202f] text-2xl sm:text-4xl font-bold mb-6 text-center"
          data-aos="flip-down"
        >
          Akpoazaa Foundation Scholarship Applicants
        </h1>{" "}
        <div className="">
          <div className="p-3 flex items-center bg-gray-300">
            <span className="w-[20.5%] font-bold">Name</span>
            <span className="w-[17%] font-bold">Phone Number</span>
            <span className="w-[18.75%] font-bold">Category</span>
            <span className="w-[18.75%] font-bold">Class</span>
            <span className="w-[15%] font-bold">Applied On</span>
            <span className="w-[10%] font-bold">Actions</span>
          </div>
          {isLoading ? (
            <div className="flex items-center justify-center h-[20vh]">
              <div className="w-8 h-8 border-4 border-[#be202f] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="min-h-[50vh]" data-aos="fade-up">
              {applicants.length === 0 ? (
                <div className="flex items-center justify-center h-[20vh] text-gray-500 font-medium">
                  No applicants found.
                </div>
              ) : (
                <>
                  {applicants.map((applicant, index) => (
                    <div
                      key={applicant._id}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-100"
                      } py-3 px-2 font-Montserrat group`}
                    >
                      <div className="flex items-center justify-between w-full cursor-pointer transition-all">
                        <span className="w-[20.5%] text-sm text-[#272525] font-normal group-hover:scale-[1.02]">
                          {applicant.fullName}
                        </span>
                        <span className="w-[17%] text-sm font-normal group-hover:scale-[1.02]">
                          {applicant.guardianPhone}
                        </span>
                        <span className="w-[18.75%] text-sm font-normal group-hover:scale-[1.02]">
                          {applicant.category}
                        </span>
                        <span className="w-[18.75%] text-sm font-normal group-hover:scale-[1.02]">
                          {applicant.class}
                        </span>
                        <span className="w-[15%] text-sm font-normal group-hover:scale-[1.02]">
                          {moment(applicant.createdAt).format("LL")}
                        </span>
                        <span className="w-[10%] text-sm text-[#be202f] font-normal">
                          <button
                            onClick={() => openModal(applicant)}
                            className="cursor-pointer"
                          >
                            View
                          </button>
                        </span>
                      </div>
                    </div>
                  ))}

                  <Pagination
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                  />
                </>
              )}
            </div>
          )}
        </div>
      </section>
      {selectedApplicant && (
        <Modal onClose={closeModal}>
          <div className="p-6 text-left space-y-4 font-Nunito max-h-[80vh] overflow-y-auto font-Montserrat">
            <h2 className="text-xl font-bold text-[#be202f]">
              {selectedApplicant.fullName}
            </h2>
            <img
              src={selectedApplicant.passport}
              alt="passport"
              className="w-64 h-64 object-cover rounded border border-gray-300"
            />
            <p>
              <strong>Email:</strong> {selectedApplicant.email}
            </p>
            <p>
              <strong>Guardian Name:</strong> {selectedApplicant.guardianName}
            </p>
            <p>
              <strong>Guardian Phone:</strong> {selectedApplicant.guardianPhone}
            </p>
            <p>
              <strong>School:</strong> {selectedApplicant.schoolName} (
              {selectedApplicant.schoolState})
            </p>
            <p>
              <strong>Reason:</strong> {selectedApplicant.reason}
            </p>

            <div className="text-right">
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-[#be202f] text-white rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </PageWrapper>
  );
};

export default Applicant;

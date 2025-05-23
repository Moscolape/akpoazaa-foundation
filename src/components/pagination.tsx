import { next, prev } from "../constants/assets";

interface PaginationProps {
  totalItems: number | null;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = totalItems && Math.ceil(totalItems / itemsPerPage);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      onPageChange(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextClick = () => {
    if (totalPages && currentPage < totalPages) {
      const newPage = currentPage + 1;
      onPageChange(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-between items-center font-Inter bg-gray-50 p-3 rounded-lg my-5">
      <span className="text-gray-4 text-h12">
        Showing{" "}
        {totalItems &&
          Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)}{" "}
        to {totalItems && Math.min(currentPage * itemsPerPage, totalItems)} of{" "}
        {totalItems} applicants
      </span>
      <div className="flex items-center">
        <img
          src={prev}
          alt="prev"
          className={`p-3 bg-gray rounded-full mr-2 cursor-pointer ${
            currentPage === 1 ? "opacity-20 cursor-not-allowed" : ""
          }`}
          onClick={handlePrevClick}
        />
        {currentPage > 1 && (
          <span
            className="w-10 h-10 rounded-full mr-2 justify-center flex items-center cursor-pointer"
            onClick={() => onPageChange(currentPage - 1)}
          >
            {currentPage - 1}
          </span>
        )}
        <span className="w-10 h-10 rounded-full bg-[#be202f] text-white mr-2 justify-center flex items-center">
          {currentPage}
        </span>
        {totalPages && currentPage < totalPages && (
          <span
            className="w-10 h-10 rounded-full mr-2 justify-center flex items-center cursor-pointer"
            onClick={() => onPageChange(currentPage + 1)}
          >
            {currentPage + 1}
          </span>
        )}
        <img
          src={next}
          alt="next"
          className={`p-3 bg-gray rounded-full ml-2 cursor-pointer ${
            currentPage === totalPages ? "opacity-20 cursor-not-allowed" : ""
          }`}
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Pagination;

import Footer from "./footer";
import NavLinks from "./navbar";
import { ReactNode, useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

type PageWrapperProps = {
  children: ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll visibility for "Back to Top" button
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300); // Show when scrolled 300px
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full h-full custom-scrollbar-example relative">
      <NavLinks />
      <div className="mt-15">{children}</div>
      <Footer />

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#be202f] text-white p-3 rounded-full shadow-lg hover:bg-[#f69223] transition-all duration-300 cursor-pointer animate-fadeUp"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default PageWrapper;
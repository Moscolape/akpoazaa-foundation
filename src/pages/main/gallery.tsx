import { useState, useEffect } from "react";
import PageWrapper from "../../components/pageWrapper";
import initializeAOS from "../../utils/aos-init";
import {
  found1,
  found2,
  found3,
  found4,
  found5,
  found6,
  found7,
  found8,
  found9,
  found10,
  found11,
  found12,
  found13,
  found14,
  found15,
  found16,
  found17,
  found18,
  found20,
  found21,
  found22,
  found23,
  found24,
  found25,
  found26,
  found27,
  found28,
  found29,
  found30,
  found31,
  found32,
  boss,
  obi1,
  obi2,
} from "../../constants/assets";

const Gallery = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imgSrc: string) => {
    setSelectedImage(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  // Photo Gallery Images
  const photoGallery = [
    found1,
    found2,
    found3,
    found4,
    found5,
    found6,
    found7,
    found8,
    found9,
    found10,
    found11,
    found12,
    found13,
    found14,
    found15,
    found16,
    found17,
    found18,
    found20,
    found21,
    found22,
    found23,
    found24,
    found25,
    found26,
    found27,
    found28,
    found29,
    found30,
    found31,
    found32,
    boss,
    obi1,
    obi2,
    "/bore1.JPG",
    "/bore2.JPG",
    "/bore3.JPG",
  ];

  // Video Gallery Links (Replace with actual YouTube video links)
  const videoGallery = [
    "https://www.youtube.com/embed/ZMIDDgatTbg",
    "https://www.youtube.com/embed/oHqY_HPvaXM",
    "https://www.youtube.com/embed/0NoiYS_5wr8",
  ];

  return (
    <PageWrapper>
      <div className="pt-12 px-6 max-w-4xl mx-auto text-center">
        <p
          className="sm:text-2xl text-lg text-gray-700 font-Montserrat"
          data-aos="fade-right"
        >
          Hello! Welcome to <strong>Our Gallery</strong> page.
        </p>

        {/* Toggle Tabs with Sliding Effect */}
        <div className="mt-6 flex justify-center relative">
          <div className="relative flex bg-gray-200 p-1 rounded-lg w-[200px]">
            <div
              className={`absolute top-0 left-0 h-full w-1/2 bg-[#be202f] transition-all duration-300 ${
                activeTab === "videos"
                  ? "translate-x-full rounded-r-lg"
                  : "translate-x-0 rounded-l-lg"
              }`}
            ></div>
            <button
              className={`relative z-10 flex-1 py-2 font-semibold transition duration-300 cursor-pointer ${
                activeTab === "photos" ? "text-white" : "text-gray-700"
              }`}
              onClick={() => setActiveTab("photos")}
            >
              Photos
            </button>
            <button
              className={`relative z-10 flex-1 py-2 font-semibold transition duration-300 cursor-pointer ${
                activeTab === "videos" ? "text-white" : "text-gray-700"
              }`}
              onClick={() => setActiveTab("videos")}
            >
              Videos
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-6">
          {activeTab === "photos" ? (
            <div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8"
              data-aos="fade-up"
            >
              {photoGallery.map((imgSrc, index) => (
                <div
                  key={index}
                  className="w-full h-48 overflow-hidden rounded-lg shadow-md"
                >
                  <img
                    src={imgSrc}
                    loading="lazy"
                    alt={`Gallery ${index + 1}`}
                    onClick={() => openModal(imgSrc)}
                    className="w-full h-full object-cover hover:scale-125 cursor-pointer transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div
              className="flex flex-col gap-4 items-center"
              data-aos="fade-up"
            >
              {videoGallery.map((video, index) => (
                <iframe
                  key={index}
                  className="w-full sm:w-[560px] h-[315px] rounded-lg shadow-md"
                  src={video}
                  title={`YouTube video ${index + 1}`}
                  allowFullScreen
                ></iframe>
              ))}
            </div>
          )}
        </div>

        {modalOpen && selectedImage && (
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-[#000000da] bg-opacity-70 flex justify-center items-center z-50"
          >
            <div
              className="max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold z-10 cursor-pointer"
                onClick={closeModal}
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Selected Tribute"
                className="w-full max-h-[80vh] object-contain rounded-md animate-hop"
              />
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default Gallery;

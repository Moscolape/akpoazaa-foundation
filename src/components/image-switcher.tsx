import { useState, useEffect } from "react";

interface SliderProps {
  images: string[];
  interval?: number;
}

const ImageSwitcher: React.FC<SliderProps> = ({ images, interval = 3000 }) => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [nextImageIndex, setNextImageIndex] = useState<number>(1);
  const [isSliding, setIsSliding] = useState<boolean>(false);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setNextImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setIsSliding(false);
      }, 500); // Adjust timing to match CSS transition duration
    }, interval);

    return () => clearInterval(imageInterval);
  }, [images.length, interval]);

  return (
    <div
      className="relative sm:w-3/5 w-full mx-auto my-10 overflow-hidden"
      data-aos="fade-up"
    >
      <div
        className={`relative flex transition-transform duration-500 ease-in-out ${
          isSliding ? "translate-x-[-100%]" : "translate-x-0"
        }`}
        style={{ width: "200%" }}
      >
        <img
          src={images[imageIndex]}
          alt={`Slide ${imageIndex + 1}`}
          className="w-full sm:h-[30rem] h-[17rem] rounded-lg shadow-lg"
          style={{ flex: "0 0 50%" }}
        />
        <img
          src={images[nextImageIndex]}
          alt={`Slide ${nextImageIndex + 1}`}
          className="w-full sm:h-[30rem] h-[17rem] rounded-lg shadow-lg"
          style={{ flex: "0 0 50%" }}
        />
      </div>
    </div>
  );
};

export default ImageSwitcher;
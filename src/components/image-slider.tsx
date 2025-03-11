import { useState, useEffect } from "react";

interface SliderProps {
  images: string[];
  interval?: number;
}

const ImageSlider: React.FC<SliderProps> = ({ images, interval = 3000 }) => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(imageInterval);
  }, [images.length, interval]);

  return (
    <div
      className="relative sm:w-[45%] w-full mx-auto sm:my-10 overflow-hidden mt-5"
      data-aos="fade-up"
    >
      <div className="relative flex items-center justify-center">
        <img
          src={images[imageIndex]}
          alt={`Slide ${imageIndex + 1}`}
          className="w-full sm:h-[30rem] h-[17rem] rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ImageSlider;

import { partner1, partner2, partner3 } from "../constants/assets";
import Marquee from "react-fast-marquee";

const images = [partner1, partner2, partner3];

const Partners = () => {
  return (
    <Marquee className="overflow-hidden w-full py-5 my-5">
      <div className="flex items-center">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="h-32 w-auto object-cover mr-5"
          />
        ))}
      </div>
    </Marquee>
  );
};

export default Partners;

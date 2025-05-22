import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import { logo } from "../constants/assets";

const socialMediaLinks = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/share/1BDvdoZf6Y/",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/akpoazaafoundation?igsh=eXN3cWJlbW5sMGt0",
  },
  {
    icon: <FaYoutube />,
    href: "https://www.youtube.com/@AkpoazaaFoundation",
  },
];

const quickLinks = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About Us",
    href: "/about",
  },
  {
    text: "Programs & Initiatives",
    href: "/programs",
  },
  {
    text: "Get Involved",
    href: "/get-involved",
  },
  {
    text: "Donate",
    href: "/donate",
  },
  {
    text: "Events",
    href: "/events",
  },
  {
    text: "Blog",
    href: "/blog",
  },
  {
    text: "Contact Us",
    href: "/contact",
  },
];

const policyLinks = [
  {
    text: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
  {
    text: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    text: "Donation Policy",
    href: "/donation-policy",
  },
];

export default function Footer() {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <div className="w-full bg-gray-100 text-black mt-20 font-Montserrat">
      <div className="flex sm:flex-row flex-col justify-between items-start sm:p-6 p-3">
        <div className="sm:w-1/3 font-Montserrat" data-aos="fade-up">
          <img src={logo} alt="logo" className="w-40 sm:mx-0 mx-auto" />
          <div className="flex items-center">
            <p className="mt-5">
              Empowering education and transforming lives through scholarships
              and community support.
            </p>
          </div>
          <div className="text-h6 flex mt-5">
            {socialMediaLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 text-2xl text-[#be202f]"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="sm:w-2/5 sm:mt-0 mt-10 flex sm:flex-row flex-col justify-between">
          <div className="sm:w-1/2" data-aos="fade-up">
            <h1 className="text-lg text-[#be202f] font-bold">QUICK LINKS</h1>
            <br />
            <div className="flex flex-col">
              {quickLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  className="mb-2 text-[1rem] hover:text-[#be202f] hover:scale-95"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
          <div className="sm:w-1/2 sm:mt-0 mt-10" data-aos="fade-up">
            <h1 className="text-lg text-[#be202f] font-bold">
              LEGAL & POLICIES
            </h1>
            <br />
            <div className="flex flex-col">
              {policyLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  className="mb-2 text-[1rem] hover:text-[#be202f] hover:scale-95"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center border-t-2 border-white p-6">
        {/* Footer Text */}
        <div className="">
          <p className="sm:px-0 px-7 my-3">
            &copy; 2025 Akpoazaa Foundation. All rights reserved.
          </p>
          <p>
            Designed and developed by{" "}
            <b>
              <a
                href="https://chukwunenye-moses-portfolio.vercel.app/portfolio"
                target="_blank"
              >
                Chukwunenye Moses
              </a>
            </b>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

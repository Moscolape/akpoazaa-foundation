import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Importing icons
import { logo } from "../constants/assets";

const links = [
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Donate", href: "/donate" },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQs", href: "/frequently-asked-questions" },
];

export default function NavLinks() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const logoSize = windowWidth < 640 ? 60 : 80;

  return (
    <nav className="flex justify-between items-center sm:px-4 pl-2 py-2 fixed w-full top-0 z-40" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", backdropFilter: "blur(30px)" }}
>
      <Link to="/" className="logo">
        <img
          src={logo}
          alt="My Logo"
          width={logoSize}
          height={logoSize}
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4 font-Montserrat">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className={`px-4 py-2 text-h6 hover:text-[#be202f] hover:scale-110 rounded-md ${
              currentPath.includes(link.href)
                ? "text-[#be202f] font-bold"
                : "font-medium"
            } ${link.name === "Donate" ? "hidden" : "inline-block"}`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <motion.a
        href="/donate"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          scale: [0.9, 1.1, 0.9, 1.1],
          backgroundColor: ["#be202f", "#f69223", "#a6cc39", "#02a69d"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="text-white py-2 px-4 rounded-md hidden sm:block"
      >
        Donate!
      </motion.a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden p-2 rounded-md focus:outline-none"
      >
        <Menu size={32} />
      </button>

      {/* Mobile Sliding Menu */}
      <motion.div
        ref={menuRef}
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed w-screen h-screen inset-0 bg-opacity-90 bg-white z-50 flex flex-col items-center justify-center text-black"
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-3 right-3"
        >
          <X size={40} className="text-black" />
        </button>

        <div className="space-y-6 text-center flex flex-col justify-center font-Urbanist">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-xl font-semibold hover:text-[#be9611] transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}

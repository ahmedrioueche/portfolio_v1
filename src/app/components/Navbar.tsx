"use client";
import { useEffect, useRef, useState } from "react";
import { animateScroll } from "react-scroll";
import { Spotlight } from "./ui/spotlight";
import { useRouter } from "next/navigation";
import { useSectionInView } from "@/hooks/useSectionInView";
import { useSettings } from "@/context/SettingsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { contacts } from "@/constants/contacts";

const MyNavBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const router = useRouter();
  const sections = [
    "home",
    "experience",
    "projects",
    "skills",
    "contact",
    "feedback",
  ];
  const activeSection = useSectionInView(sections);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (section: string) => {
    setActiveLink(section);
    setIsOpen(false);
  };

  useEffect(() => {
    if (activeSection) {
      setActiveLink(activeSection);
    }
  }, [activeSection]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    router.push("/");
    animateScroll.scrollToTop();
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gray-900 shadow-md py-4 md:px-32 px-4 transition-all duration-300 font-stix">
      {windowWidth > 768 ? (
        <Spotlight
          className="absolute top-[20%] right-[-5%] w-[1200px] h-[1300px]"
          fill="white"
        />
      ) : (
        <Spotlight
          className="absolute top-[20%] right-[-180%] w-[1100px] h-[1000px]"
          fill="white"
        />
      )}
      <div className="container mx-auto flex items-center justify-between px-4">
        <div
          className="text-white font-bold text-xl cursor-pointer font-satisfy hover:text-primary transition duration-300"
          onClick={handleLogoClick}
        >
          <span className="text-primary">{"<"}</span> Portfolio{" "}
          <span className="text-primary">{"/>"}</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <a
              key={section}
              href={`/#${section}`}
              className="relative cursor-pointer text-sm sm:text-lg font-medium group"
              onClick={() => handleNavClick(section)}
            >
              <span
                className={`font-satisfy relative transition-colors duration-300 ${
                  activeLink === section
                    ? "text-primary"
                    : "text-white group-hover:text-primary"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
              <span
                className={`block h-[2px] w-0 bg-primary absolute left-0 bottom-[-2px] transition-all duration-300 ${
                  activeLink === section ? "w-full" : "group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Desktop Right Side (Social + Language + Hire Me) */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href={contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href={contacts.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href={contacts.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>

          <a
            href="/#contact"
            className="font-satisfy border border-primary text-primary py-2 px-4 rounded-full cursor-pointer bg-transparent hover:bg-primary hover:text-white transition-colors duration-300"
            onClick={() => handleNavClick("contact")}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-900 z-40 transition-all duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-4 right-4">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {sections.map((section) => (
            <a
              key={section}
              href={`/#${section}`}
              className={`text-xl font-satisfy font-medium transition-colors duration-300 ${
                activeLink === section
                  ? "text-primary"
                  : "text-white hover:text-primary"
              }`}
              onClick={() => handleNavClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}

          <div className="flex space-x-6 mt-8">
            <a
              href={contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href={contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href={contacts.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href={contacts.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>

          <a
            href="/#contact"
            className="mt-8 font-satisfy border-2 border-primary text-primary py-3 px-6 rounded-full text-lg font-medium hover:bg-primary hover:text-white transition-colors duration-300"
            onClick={() => handleNavClick("contact")}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MyNavBar;

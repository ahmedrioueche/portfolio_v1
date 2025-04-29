"use client";
import { useEffect, useRef, useState } from "react";
import { animateScroll } from "react-scroll";
import { Spotlight } from "./ui/spotlight";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSectionInView } from "@/hooks/useSectionInView";
import { Language } from "@/types/common";
import { useSettings } from "@/context/SettingsContext";

interface LanguagePair {
  code: Language;
  name: string;
  icon: string;
}

const languages: LanguagePair[] = [
  { code: "en", name: "English", icon: "EN" },
  { code: "fr", name: "Français", icon: "FR" },
  { code: "ar", name: "العربية", icon: "AR" },
];

const MyNavBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const router = useRouter();
  const sectionIds = ["home", "experience", "projects", "skills", "contact"];
  const activeSection = useSectionInView(sectionIds);
  const { language, setLanguage } = useSettings();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(language);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close languages dropdown
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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

  const toggleLanguageDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    setIsDropdownOpen(false);
    // Add your language change logic here (i18n, context, etc.)
    setLanguage(lang);
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
          {["home", "experience", "projects", "skills", "contact"].map(
            (section) => (
              <a
                key={section}
                href={`/#${section}`}
                className="relative cursor-pointer text-sm sm:text-lg font-medium group"
                onClick={() => handleNavClick(section)}
              >
                <span
                  className={`relative transition-colors duration-300 ${
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
            )
          )}
        </div>

        {/* Desktop Right Side (Social + Language + Hire Me) */}
        <div className="hidden md:flex items-center space-x-4">
          {["nav-icon1", "nav-icon2", "nav-icon3"].map((icon, index) => (
            <a
              key={index}
              href="#"
              className="transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={`/${icon}.svg`}
                alt={`icon${index + 1}`}
                width={24}
                height={24}
              />
            </a>
          ))}

          <a
            href="/#contact"
            className="border border-primary text-primary py-2 px-4 rounded-full cursor-pointer bg-transparent hover:bg-primary hover:text-white transition-colors duration-300"
            onClick={() => handleNavClick("contact")}
          >
            Hire Me
          </a>
          {/*   <div className="relative">
            <button
              onClick={toggleLanguageDropdown}
              className="flex items-center text-white hover:text-primary transition-colors duration-300 py-1 rounded"
            > 
              <span className="mr-1 text-lg">
                {languages.find((lang) => lang.code === currentLanguage)?.icon}
              </span>
            </button>

            <div
              className={`absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50 overflow-hidden transition-all duration-300 ${
                isDropdownOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`w-full px-4 py-2 text-sm text-left transition-colors duration-200 flex items-center ${
                    currentLanguage === lang.code
                      ? "bg-primary/20 text-primary"
                      : "text-white hover:bg-gray-700"
                  }`}
                  onClick={() => changeLanguage(lang.code)}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={toggleLanguageDropdown}
              className="text-white hover:text-primary transition-colors duration-300 p-1 rounded-full"
            >
              {languages.find((lang) => lang.code === currentLanguage)?.icon}
            </button>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`w-full px-4 py-2 text-sm text-left transition-colors duration-200 flex items-center ${
                      currentLanguage === lang.code
                        ? "bg-primary/20 text-primary"
                        : "text-white hover:bg-gray-700"
                    }`}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

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
            &times; {/* This is the close icon (X) */}
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {["home", "experience", "projects", "skills", "contact"].map(
            (section) => (
              <a
                key={section}
                href={`/#${section}`}
                className={`text-xl font-medium transition-colors duration-300 ${
                  activeLink === section
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}
                onClick={() => handleNavClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            )
          )}

          <div className="flex space-x-6 mt-8">
            {["nav-icon1", "nav-icon2", "nav-icon3"].map((icon, index) => (
              <a
                key={index}
                href="#"
                className="transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src={`/${icon}.svg`}
                  alt={`icon${index + 1}`}
                  width={28}
                  height={28}
                />
              </a>
            ))}
          </div>

          <a
            href="/#contact"
            className="mt-8 border-2 border-primary text-primary py-3 px-6 rounded-full text-lg font-medium hover:bg-primary hover:text-white transition-colors duration-300"
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

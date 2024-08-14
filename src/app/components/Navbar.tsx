"use client";
import { useEffect, useState } from "react";
import { animateScroll, scroller } from "react-scroll";
import { Spotlight } from "./ui/spotlight";
import Image from 'next/image'; 

const MyNavBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const handleNavClick = (section: string) => {
    setActiveLink(section);
    const offset = (section === "contact" && window.innerWidth < 768) ? -290 : 50;

    setTimeout(() => {
      scroller.scrollTo(section, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuad',
        offset: -offset,
      });
    }, 0);

    setIsOpen(false); // Close the dropdown on selection
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
        className={`nav w-full fixed top-0 left-0 z-50 transition-all duration-300 bg-gray-900 shadow-md py-4`}
    >
      {windowWidth > 768 ?      
       <Spotlight className="absolute top-[20%] right-[-5%] w-[1200px] h-[1300px]" fill="white" />
        : 
       <Spotlight className="absolute top-[20%] right-[-180%] w-[1100px] h-[1000px]" fill="white" />
      }
      <div className="container mx-auto flex items-center justify-between px-4">
        <div
          className="text-white font-bold text-2xl cursor-pointer"
          onClick={() => animateScroll.scrollToTop()}
        >
          Portfolio
        </div>
        {/* Large Screens: Regular Navbar */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="relative cursor-pointer text-sm sm:text-lg font-medium group"
            onClick={() => handleNavClick("home")}
          >
            <span
              className={`relative transition-colors duration-300 ${activeLink === "home" ? "text-red-500" : "text-white group-hover:text-red-500"}`}
            >
              Home
            </span>
            <span
              className={`block h-[2px] w-0 bg-red-500 absolute left-0 bottom-[-2px] transition-all duration-300 ${activeLink === "home" ? "w-full" : "group-hover:w-full"}`}
            ></span>
          </a>

          <a
            href="#projects"
            className="relative cursor-pointer text-sm sm:text-lg font-medium group"
            onClick={() => handleNavClick("projects")}
          >
            <span
              className={`relative transition-colors duration-300 ${activeLink === "projects" ? "text-red-500" : "text-white group-hover:text-red-500"}`}
            >
              Projects
            </span>
            <span
              className={`block h-[2px] w-0 bg-red-500 absolute left-0 bottom-[-2px] transition-all duration-300 ${activeLink === "projects" ? "w-full" : "group-hover:w-full"}`}
            ></span>
          </a>

          <a
            href="#skills"
            className="relative cursor-pointer text-sm sm:text-lg font-medium group"
            onClick={() => handleNavClick("skills")}
          >
            <span
              className={`relative transition-colors duration-300 ${activeLink === "skills" ? "text-red-500" : "text-white group-hover:text-red-500"}`}
            >
              Skills
            </span>
            <span
              className={`block h-[2px] w-0 bg-red-500 absolute left-0 bottom-[-2px] transition-all duration-300 ${activeLink === "skills" ? "w-full" : "group-hover:w-full"}`}
            ></span>
          </a>
        </div>
        {/* Large Screens: Social Icons and Contact Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://linkedin.com/in/ahmed-drioueche-aa02732b7">
            <Image
              src="/nav-icon1.svg"
              alt="icon1"
              width={24}
              height={24}
              className="transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </a>
          <a href="https://www.facebook.com/ahmed.69.420">
            <Image
              src="/nav-icon2.svg"
              alt="icon2"
              width={24}
              height={24}
              className="transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </a>
          <a href="https://www.instagram.com/ahmed.driouche.420">
            <Image
              src="/nav-icon3.svg"
              alt="icon3"
              width={24}
              height={24}
              className="transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </a>
          <a
            href="#"
            className="border border-red-500 text-red-500 py-2 px-4 rounded-full cursor-pointer bg-transparent hover:bg-red-500 hover:text-white transition-colors duration-300"
            onClick={() => handleNavClick("contact")}
          >
            Hire Me
          </a>
        </div>
        {/* Small Screens: Toggle Button and Dropdown Menu */}
        <div className="md:hidden flex items-center">
          <a
            href="#"
            className="border border-red-500 text-red-500 py-2 px-4 rounded-full cursor-pointer bg-transparent hover:bg-red-500 hover:text-white transition-colors duration-300"
            onClick={() => handleNavClick("contact")}
          >
            Hire Me
          </a>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none ml-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={`md:hidden w-full ${isOpen ? "block" : "hidden"} absolute top-full left-0 bg-gray-900 py-4 z-50`}
        >
          <div className="flex flex-col items-start space-y-4 px-4">
            <a
              href="#home"
              className="relative cursor-pointer text-lg font-medium group"
              onClick={() => handleNavClick("home")}
            >
              <span
                className={`relative transition-colors duration-300 ${activeLink === "home" ? "text-red-500" : "text-white group-hover:text-red-500"}`}
              >
                Home
              </span>
              <span
                className={`block h-[2px] w-0 bg-red-500 absolute left-0 bottom-[-2px] transition-all duration-300 ${activeLink === "home" ? "w-full" : "group-hover:w-full"}`}
              ></span>
            </a>

            <a
              href="#projects"
              className="relative cursor-pointer text-lg font-medium group"
              onClick={() => handleNavClick("projects")}
            >
              <span
                className={`relative transition-colors duration-300 ${activeLink === "projects" ? "text-red-500" : "text-white group-hover:text-red-500"}`}
              >
                Projects
              </span>
              <span
                className={`block h-[2px] w-0 bg-red-500 absolute left-0 bottom-[-2px] transition-all duration-300 ${activeLink === "projects" ? "w-full" : "group-hover:w-full"}`}
              ></span>
            </a>

            <a
              href="#skills"
              className="relative cursor-pointer text-lg font-medium group"
              onClick={() => handleNavClick("skills")}
            >
              <span
                className={`relative transition-colors duration-300 ${activeLink === "skills" ? "text-red-500" : "text-white group-hover:text-red-500"}`}
              >
                Skills
              </span>
              <span
                className={`block h-[2px] w-0 bg-red-500 absolute left-0 bottom-[-2px] transition-all duration-300 ${activeLink === "skills" ? "w-full" : "group-hover:w-full"}`}
              ></span>
            </a>

            <a
              href="#contact"
              className="border border-red-500 text-red-500 py-2 px-4 rounded-full cursor-pointer bg-transparent hover:bg-red-500 hover:text-white transition-colors duration-300"
              onClick={() => handleNavClick("contact")}
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MyNavBar;

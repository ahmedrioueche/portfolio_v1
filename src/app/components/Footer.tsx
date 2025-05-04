import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { contacts } from "@/constants/socials";

export default function Footer() {
  return (
    <footer className="py-6 md:pr-6 text-white ">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Ahmed Drioueche. All Rights
          Reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
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
      </div>
    </footer>
  );
}

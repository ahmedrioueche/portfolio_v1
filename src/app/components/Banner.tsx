import React, { useEffect, useState, useCallback, Suspense, lazy } from 'react';
import TrackVisibility from 'react-on-screen';
import { ArrowRightCircle } from "react-bootstrap-icons";
import "../globals.css";

const ModelCanvas = lazy(() => import('./Model')); // Lazy load the 3D model component

const titles = ["Computer Engineer", "Software Developer", "Web Developer"];

const Banner: React.FC = () => {
    const [text, setText] = useState(titles[0]);
    const [toDelete, setToDelete] = useState(false);
    const [displayString, setDisplayString] = useState("Computer Engineer");
    const [index, setIndex] = useState(0);
    const deleteSpeed = 80;
    const writeSpeed = 150;
    const [activeLink, setActiveLink] = useState<string>('home');
    const [isModelLoaded, setIsModelLoaded] = useState(false); // State to track if the model is loaded

    // Function to change the title
    const changeTitle = () => {
        setText(titles[index]);
        setIndex(prev => (prev + 1) % titles.length);
    };

    // Function to write the string
    const writeString = (text: string) => {
        setDisplayString(prev => {
            const string = prev + text.slice(prev.length, prev.length + 1);
            if (string.length === text.length) {
                setToDelete(true);
            }
            return string;
        });
    };

    // Function to delete the string
    const deleteString = useCallback((text: string) => {
        setDisplayString(prev => {
            const string = prev.slice(0, prev.length - 1);
            if (string.length <= 1) {
                setToDelete(false);
                changeTitle();
                setDisplayString("");
            }
            return string;
        });
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (toDelete) {
                deleteString(text);
            }
        }, deleteSpeed);

        return () => clearInterval(intervalId);
    }, [toDelete, text, deleteString]);

    useEffect(() => {
        if (!toDelete) {
            const intervalId = setInterval(() => {
                writeString(text);
            }, writeSpeed);

            return () => clearInterval(intervalId);
        }
    }, [text, toDelete]);

    useEffect(() => {
        // Load the 3D model after the component has mounted
        const timer = setTimeout(() => setIsModelLoaded(true), 1000); // Adjust timeout as needed
        return () => clearTimeout(timer);
    }, []);

    // Function to handle navigation click
    const handleNavClick = (section: string) => {
        const offset = 50; // Adjust this value based on your navbar height
        setTimeout(() => {
            const element = document.getElementById(section);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        }, 0);
    };

    return (
        <section className="py-16" id="home">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 xl:w-7/12 flex flex-col justify-center mb-8 md:mb-0">
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={`${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                                    <span className="text-gray-400 text-lg mb-4 block">
                                        Welcome To My Portfolio
                                    </span>
                                    <h1 className="text-4xl font-bold text-white mb-4">
                                        I&apos;m Ahmed Drioueche <br />
                                        <span className="text-red-500">{`A ${displayString}`}</span>
                                    </h1>
                                    <p className="text-gray-300 mb-6">
                                        I graduated with a Computer Engineering degree in 2024. 
                                        My passion for technology and innovation drives me to work on exciting projects, 
                                        pushing boundaries and bringing fresh ideas and dedication to every opportunity.
                                    </p>
                                    <button
                                        onClick={() => handleNavClick("contact")}
                                        className="relative overflow-hidden flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-x-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                                    >
                                        <span className="mr-2 font-medium transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                                            Let&apos;s connect
                                        </span>
                                        <ArrowRightCircle
                                            size={25}
                                            className="text-white transition-transform duration-300 ease-in-out"
                                        />
                                        <span className="absolute inset-0 bg-red-600 transition-transform duration-300 ease-in-out scale-x-0 group-hover:scale-x-100 origin-left" />
                                    </button>
                                </div>
                            )}
                        </TrackVisibility>
                    </div>
                    {isModelLoaded && window.innerWidth > 768 && (
                        <div className="md:w-1/2 xl:w-5/12 flex justify-center">
                            <Suspense fallback={<div>Loading 3D model...</div>}>
                                <ModelCanvas />
                            </Suspense>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Banner;

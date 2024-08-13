"use client";
import React, { useEffect, useState, useCallback } from 'react';
import TrackVisibility from 'react-on-screen';
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import "../globals.css";

// Define the titles array
const titles = ["Computer Engineer", "Software Developer", "Web Developer"];

const Banner: React.FC = () => {
    const [text, setText] = useState(titles[0]);
    const [toDelete, setToDelete] = useState(false);
    const [displayString, setDisplayString] = useState("");
    const [index, setIndex] = useState(0);
    const deleteSpeed = 80;
    const writeSpeed = 150;
    const [activeLink, setActiveLink] = useState<string>('home');

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


    // Function to handle navigation click
    const handleNavClick = (section: string) => {
        setActiveLink(section);
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

    // Component to load and display the 3D model
    const Model: React.FC = () => {
        const { scene } = useGLTF('/moon.glb');
        const scale = window.innerWidth < 768 ? 0.08 : 0.1;

        useFrame(({ clock }) => {
            scene.rotation.y = clock.getElapsedTime() * 0.2; // Rotate around Y-axis
            scene.rotation.x = clock.getElapsedTime() * 0.1; // Optional: rotate around X-axis
        });

        return (
            <primitive object={scene} scale={scale} position={[0, -2, 0]} />
        );
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
                    {window.innerWidth > 768 && (
                    <div className="md:w-1/2 xl:w-5/12 flex justify-center">
                        <Canvas style={{ height: '400px', width: '100%' }} camera={{ position: [0, 30, 40], fov: 50 }}>
                            <ambientLight intensity={0.5} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <Model />
                            <OrbitControls enableZoom={false} /> {/* Disable zoom */}
                        </Canvas>    
                    </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Banner;

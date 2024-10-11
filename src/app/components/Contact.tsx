import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import "../globals.css";
import { sendContactForm } from '../lib/api'; // Adjust the import path as necessary

interface FormDetails {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

const Contact: React.FC = () => {
    const formInitialDetails: FormDetails = {
        firstName: '', 
        lastName: '', 
        email: '', 
        phone: '', 
        message: '',
    };

    const [formDetails, setFormDetails] = useState<FormDetails>(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

    const onFormUpdate = (category: keyof FormDetails, value: string) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setButtonText("Sending..");
        try {
            const result = await sendContactForm(formDetails);
            setButtonText("Send");
            if (result.success) {
                setStatus({ success: true, message: 'Message sent successfully' });
            } else {
                setStatus({ success: false, message: 'Oops.. Something went wrong!' });
            }
        } catch (error) {
            setButtonText("Send");
            setStatus({ success: false, message: 'Oops.. Something went wrong!' });
        }
        setFormDetails(formInitialDetails);
    }

    return (
        <section id="contact" className="py-16 section-offset">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                    <Image
                        src="/contact-img.svg"
                        alt="contact image"
                        width={1000} 
                        height={1200} 
                        className="max-w-full h-auto" 
                    />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center px-6 md:pl-12"> 
                    <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                value={formDetails.firstName}
                                    placeholder="First Name"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => onFormUpdate('firstName', e.target.value)}
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-0"
                            />
                            <input
                                type="text"
                                value={formDetails.lastName}
                                placeholder="Last Name"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => onFormUpdate('lastName', e.target.value)}
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-0"
                            />
                            <input
                                type="email"
                                value={formDetails.email}
                                placeholder="Email"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => onFormUpdate('email', e.target.value)}
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-0"
                            />
                            <input
                                type="tel"
                                value={formDetails.phone}
                                placeholder="Phone Number"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => onFormUpdate('phone', e.target.value)}
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-0"
                            />
                        </div>
                        <textarea
                            placeholder="Message"
                            value={formDetails.message}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onFormUpdate('message', e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-6 py-4 text-white placeholder-gray-400 h-36 focus:outline-none focus:border-red-500 focus:ring-0"
                        />
                        <button
                            type="submit"
                            className="w-full text-white border border-red-500 bg-red-500 py-3 px-6 rounded-lg relative group transition-colors duration-300 hover:bg-red-600"
                        >
                            <span>{buttonText}</span>
                            <span className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                        </button>
                        {status && (
                            <p className={`mt-4 ${status.success ? 'text-green-400' : 'text-red-400'}`}>{status.message}</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;

import React, { useState, ChangeEvent, FormEvent } from 'react';
import {mailHandler} from "../lib/email"
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    
  };

  return (
    <section id="contact" className="py-12 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold relative inline-block group">
            Contact Me
            <span className="block h-[2px] bg-red-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </h2>
        </div>
        <form className="bg-gray-800 p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-red-500 focus:border-2 transition-all duration-300"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-red-500 focus:border-2 transition-all duration-300"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-2 bg-gray-900 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-red-500 focus:border-2 transition-all duration-300"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-400 transition-colors duration-300"
          >
            Send Message
          </button>
          {status && <p className="mt-4 text-center text-lg font-medium">{status}</p>}
        </form>
      </div>
    </section>
  );
}

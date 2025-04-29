import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import "../globals.css";
import { sendContactForm } from "../utils/api";
import { toast } from "react-hot-toast";

interface FormDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const formInitialDetails: FormDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] =
    useState<FormDetails>(formInitialDetails);
  const [errors, setErrors] = useState<FormErrors>({});
  const [buttonText, setButtonText] = useState("Send");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formDetails.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!formDetails.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (!formDetails.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formDetails.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (formDetails.phone && !/^[+]?[\d\s-]+$/.test(formDetails.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    if (!formDetails.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formDetails.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const onFormUpdate = (category: keyof FormDetails, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
    // Clear error when user starts typing
    if (errors[category]) {
      setErrors({
        ...errors,
        [category]: undefined,
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setButtonText("Sending...");
    try {
      const result = await sendContactForm(formDetails);
      setButtonText("Send");
      if (result.success) {
        toast.success("Message sent successfully!");
        setFormDetails(formInitialDetails);
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      setButtonText("Send");

      toast.error("Failed to send message");
    }
  };

  return (
    <section id="contact" className="py-16 section-offset">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image
            src="/contact-img.svg"
            alt="contact image"
            width={700}
            height={900}
            className="max-w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center md:px-6 md:pl-12">
          <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  value={formDetails.firstName}
                  placeholder="First Name"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onFormUpdate("firstName", e.target.value)
                  }
                  className={`w-full bg-gray-800 border rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-0 ${
                    errors.firstName
                      ? "border-red-500"
                      : "border-gray-700 focus:border-primary"
                  }`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  value={formDetails.lastName}
                  placeholder="Last Name"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onFormUpdate("lastName", e.target.value)
                  }
                  className={`w-full bg-gray-800 border rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-0 ${
                    errors.lastName
                      ? "border-red-500"
                      : "border-gray-700 focus:border-primary"
                  }`}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  value={formDetails.email}
                  placeholder="Email"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onFormUpdate("email", e.target.value)
                  }
                  className={`w-full bg-gray-800 border rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-0 ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-700 focus:border-primary"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  value={formDetails.phone}
                  placeholder="Phone Number (optional)"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onFormUpdate("phone", e.target.value)
                  }
                  className={`w-full bg-gray-800 border rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-0 ${
                    errors.phone
                      ? "border-red-500"
                      : "border-gray-700 focus:border-primary"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>
            </div>
            <div>
              <textarea
                placeholder="Message"
                value={formDetails.message}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  onFormUpdate("message", e.target.value)
                }
                className={`w-full bg-gray-800 border rounded-lg px-6 py-4 text-white placeholder-gray-400 h-36 focus:outline-none focus:ring-0 ${
                  errors.message
                    ? "border-red-500"
                    : "border-gray-700 focus:border-primary"
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>
            <div className="space-y-4">
              <button
                type="submit"
                className="w-full text-white border border-primary bg-primary py-3 px-6 rounded-lg relative group transition-colors duration-300 hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={buttonText === "Sending..."}
              >
                <span>{buttonText}</span>
                <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from "react";
import type { ChangeEvent, FormEvent, FC } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

// Form ডাটার টাইপ
interface FormData {
  name: string;
  email: string;
  phone: string;
  title: string;
  request: string;
}

const Contact: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    title: "",
    request: "",
  });

  // Input change handler
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Email validation
  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Form submit handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Empty field check
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.title.trim() ||
      !formData.request.trim()
    ) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please fill out all required fields.",
        confirmButtonColor: "#22c55e",
      });
      return;
    }

    // Email validation
    if (!validateEmail(formData.email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        confirmButtonColor: "#22c55e",
      });
      return;
    }

    // Success
    Swal.fire({
      icon: "success",
      title: "Request Submitted",
      text: "Thank you! Your request has been submitted successfully.",
      confirmButtonColor: "#22c55e",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      title: "",
      request: "",
    });
  };

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          variants={itemVariants}
        >
          Contact Us
        </motion.h2>

        <motion.div
          className="flex flex-col lg:flex-row gap-8 bg-white shadow-xl rounded-lg p-6 lg:p-8"
          variants={containerVariants}
        >
          {/* ===== Form Section ===== */}
          <motion.div className="flex-1" variants={containerVariants}>
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="block text-base font-medium text-black mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black placeholder-gray-400"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-base font-medium text-black mb-2"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black placeholder-gray-400"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                {/* Phone */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="phone"
                    className="block text-base font-medium text-black mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black placeholder-gray-400"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                {/* Title */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="title"
                    className="block text-base font-medium text-black mb-2"
                  >
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter the title"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black placeholder-gray-400"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
              </div>

              {/* Request */}
              <motion.div className="mt-6" variants={itemVariants}>
                <label
                  htmlFor="request"
                  className="block text-base font-medium text-black mb-2"
                >
                  Your Request *
                </label>
                <textarea
                  name="request"
                  id="request"
                  rows={6}
                  placeholder="Describe your request"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none text-black placeholder-gray-400"
                  value={formData.request}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div className="mt-6" variants={itemVariants}>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-medium text-sm px-4 py-3 rounded-md transition duration-300"
                >
                  Submit Request
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* ===== Contact Info Section ===== */}
          <motion.div
            className="w-full lg:w-1/3 space-y-8 bg-gray-50 p-6 rounded-lg shadow-inner"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-black mb-4">
                Our Headquarters
              </h3>
              <p className="text-base font-medium text-black">
                <span className="font-semibold">Dhaka:</span> St. Cesar Calling
                Roma
              </p>
              <p className="text-base font-medium text-black">
                <span className="font-semibold">Rajshahi:</span> St. Diamond
                Calling Brussels
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-black mb-4">
                Reach Us 24/7
              </h3>
              <p className="text-base font-medium text-black">
                <span className="font-semibold">Whatsapp:</span>{" "}
                +880-1821-023369
              </p>
              <p className="text-base font-medium text-black">
                <span className="font-semibold">Phone:</span> +880-162-2258409
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-black mb-4">Email Us</h3>
              <p className="text-base font-medium text-black">
                <span className="font-semibold">Customers:</span>{" "}
                mdmostakimhosen35@gmail.com
              </p>
              <p className="text-base font-medium text-black">
                <span className="font-semibold">Support:</span>{" "}
                posterboy520807@gmail.com
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;

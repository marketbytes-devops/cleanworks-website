import { useState } from "react";
import Button from "../Button";
import DownArrow from "../Icons/DownArrow";


const ContactForm = ({ 
  title = "Contact With Us",
  subtitle = "GET A FREE QUOTE",
  showLabels = true,
  className = "",
  onSubmit = () => {}
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    residence: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "", 
      residence: "",
      message: ""
    });
  };

  const residenceOptions = [
    "Select your residence",
    "Apartment",
    "Villa", 
    "Office",
    "Commercial Space",
    "Other"
  ];

  return (
    <div className={`bg-white rounded-3xl shadow-lg p-4 ${className}`}>
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-yellow-500 font-semibold text-xl">{subtitle}</p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          {showLabels && (
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Enter your name
            </label>
          )}
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={showLabels ? "" : "Enter your name"}
            className="w-full border border-gray-300 rounded-2xl px-6 py-4 
                       text-gray-700 placeholder-gray-400 focus:outline-none 
                       focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 
                       transition-all duration-200"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          {showLabels && (
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Enter your email
            </label>
          )}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={showLabels ? "" : "Enter your email"}
            className="w-full border border-gray-300 rounded-2xl px-6 py-4 
                       text-gray-700 placeholder-gray-400 focus:outline-none 
                       focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 
                       transition-all duration-200"
            required
          />
        </div>

        {/* Residence Dropdown */}
        <div className="relative">
          {showLabels && (
            <label htmlFor="residence" className="block text-gray-700 font-medium mb-2">
              Select your residence
            </label>
          )}
          <select
            id="residence"
            name="residence"
            value={formData.residence}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-2xl px-6 py-4 
                       text-gray-700 focus:outline-none focus:border-yellow-500 
                       focus:ring-2 focus:ring-yellow-200 appearance-none 
                       transition-all duration-200"
            required
          >
            {residenceOptions.map((option, index) => (
              <option key={index} value={option} disabled={index === 0}>
                {option}
              </option>
            ))}
          </select>
          <DownArrow className="absolute right-6 top-1/2 transform -translate-y-1/2 
                               w-4 h-4 pointer-events-none text-gray-400" />
        </div>

        {/* Message Textarea */}
        <div>
          {showLabels && (
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Your Message
            </label>
          )}
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder={showLabels ? "" : "Your Message"}
            className="w-full border border-gray-300 rounded-2xl px-6 py-4 
                       text-gray-700 placeholder-gray-400 focus:outline-none 
                       focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 
                       resize-none transition-all duration-200"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <Button
            type="submit"
            className="bg-[#272469] hover:bg-[#6EA01E] text-white w-[100%] h-12
                       rounded-full text-lg font-semibold transition-all duration-300 
                       transform hover:scale-105 shadow-lg hover:shadow-xl 
                       flex items-center justify-center mx-auto"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
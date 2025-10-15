import { useState } from "react";
import Button from "../Button";
import DownArrow from "../Icons/DownArrow";

const Popup = ({ message, onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
      <p className="mb-4 text-lg font-poppins">{message}</p>
      <Button 
        onClick={onClose}
        className="bg-[#272469] hover:bg-[#6EA01E] text-white rounded-full px-6 py-2 font-poppins"
      >
        Close
      </Button>
    </div>
  </div>
);

const ContactForm = ({ 
  title = "Contact With Us",
  subtitle = "GET A FREE QUOTE",
  className = "",
  onSubmit = () => {}
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    residence: "",
    message: ""
  });

  const [showPopup, setShowPopup] = useState(false);


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
    setShowPopup(true);
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
    <div className={`p-6 ${className}`}>
      {/* Header Section */}
      <div className="mb-5">
        <p className="text-[#F6B507] font-poppins text-lg">{title}</p>
        <p className="text-[24px] sm:text-[38px] font-bold text-[#272469] font-dolce ">{subtitle}</p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-3 font-poppins">
        {/* Name Field */}
        <div className="">
          
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-full px-6 py-3
                       placeholder-[#93949E] focus:outline-none placeholder:text-sm
                       transition-all duration-200"
            required
          />
        </div>

        {/* Email Field */}
        <div>
         
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-full px-6 py-3 
                       placeholder-[#93949E] focus:outline-none placeholder:text-sm
                       transition-all duration-200"
            required
          />
        </div>

        {/* Residence Dropdown */}
        <div className="relative">
          
          <select
            id="residence"
            name="residence"
            value={formData.residence}
            onChange={handleChange}
            placeholder="Select your residence"
            className="w-full border border-gray-300 rounded-full px-6 py-3
                       text-[#93949E] focus:outline-none appearance-none 
                       transition-all duration-200 text-sm"
            required
          >
            {residenceOptions.map((option, index) => (
              <option key={index} value={option} >
                {option}
              </option>
            ))}
          </select>
          <DownArrow className="absolute right-6 top-[55%] transform -translate-y-1/2 
                               w-4 h-4 pointer-events-none text-gray-400" />
        </div>

        {/* Message Textarea */}
        <div>
      
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder= "Your Message"
            className="w-full border border-gray-300 rounded-2xl px-6 py-2 
                       text-gray-700 placeholder-[#93949E] focus:outline-none 
                        resize-none transition-all duration-200 placeholder:text-sm"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center pt-2">
          <Button
            type="submit"
            className="bg-[#272469] hover:bg-[#6EA01E] text-white w-[100%] h-12
                       rounded-full text-[18px] transition-all duration-300 
                       transform hover:scale-105 shadow-lg hover:shadow-xl 
                       flex items-center justify-center mx-auto font-poppins"
          >
            Submit
          </Button>
        </div>
      </form>

       {showPopup && (
        <Popup 
          message="Your message has been submitted successfully!" 
          onClose={() => setShowPopup(false)} 
        />
      )}

    </div>
  );
};

export default ContactForm;
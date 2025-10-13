import { useState } from "react";
import Blog1 from "../../assets/Blog1.jpg";
import Blog2 from "../../assets/Blog2.jpg";
import Blog3 from "../../assets/Blog3.jpg";
import Blog4 from "../../assets/Blog4.jpg";
import ladyimage from "../../assets/ladyimage.jpg"; // Import the lady cleaning image
import { FiArrowUpRight } from "react-icons/fi";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const servicesData = [
    {
      id: 1,
      image: Blog1,
      title: "RESIDENTIAL CLEANING SERVICES",
    },
    {
      id: 2,
      image: Blog2,
      title: "DEEP CLEANING SERVICES",
    },
    {
      id: 3,
      image: Blog3,
      title: "MOVE IN / OUT CLEANING",
    },
    {
      id: 4,
      image: Blog4,
      title: "OUTDOOR CLEANING",
    },
    {
      id: 5,
      image: Blog1,
      title: "WATER TANK CLEANING",
    },
    {
      id: 6,
      image: Blog2,
      title: "MATTRESS CLEANING",
    },
  ];

  return (
    <>
      <section className="mt-28">
        <div className="container mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8">
          {/* Services Banner Card */}
          <div
            className="w-full max-w-[1240px] h-[413px] mx-auto rounded-3xl flex flex-col items-center justify-center"
            style={{ backgroundColor: "#FAEDC9" }}
          >
            {/* Small Heading */}
            <p className="text-[#051625] text-base sm:text-lg md:text-xl font-poppins font-normal mb-3 text-center px-4">
              Lorem Ipsum is simply dummy text
            </p>

            {/* Large Heading - Services */}
            <h1 className="text-[#051625] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-dolce font-bold text-center">
              Services
            </h1>
          </div>
        </div>
      </section>

      {/* Second Section - Where Cleanliness Heading */}
      <section className="mt-12 sm:mt-16 lg:mt-20">
        <div className="container mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#051625] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-dolce font-bold text-center max-w-[632px] mx-auto leading-tight">
            WHERE CLEANLINESS AND CARE GO HAND IN HAND.
          </h2>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="mt-12 sm:mt-16 lg:mt-20 mb-20">
        <div className="container mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1240px] mx-auto">
            {/* First Row - 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {servicesData.slice(0, 3).map((service) => (
                <div key={service.id} className="flex flex-col items-center">
                  {/* Card Container with Zoom Effect */}
                  <div
                    className="relative w-full h-[421px] rounded-3xl overflow-hidden cursor-pointer group transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
                    style={{ backgroundColor: "#E8E8E8" }}
                    onMouseEnter={() => setHoveredCard(service.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Image with rounded corners and zoom */}
                    <div className="w-full h-full p-3 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    </div>

                    {/* Arrow Button - Slides up from bottom with grow effect */}
                    <div
                      className={`absolute bottom-6 right-6 transition-all duration-500 ease-out ${
                        hoveredCard === service.id
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-16"
                      }`}
                    >
                      <div
                        className={`rounded-full bg-[#F6B507] flex items-center justify-center shadow-xl transition-all duration-500 ${
                          hoveredCard === service.id ? "w-20 h-20" : "w-16 h-16"
                        }`}
                      >
                        <FiArrowUpRight
                          className={`text-black transition-all duration-500 ${
                            hoveredCard === service.id ? "w-10 h-10" : "w-8 h-8"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Subtle overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-500 ${
                        hoveredCard === service.id ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>

                  {/* Title - Outside card, centered below */}
                  <div className="mt-6 text-center">
                    <h3 className="text-[#051625] text-lg font-dolce font-bold">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicesData.slice(3, 6).map((service) => (
                <div key={service.id} className="flex flex-col items-center">
                  {/* Card Container with Zoom Effect */}
                  <div
                    className="relative w-full h-[421px] rounded-3xl overflow-hidden cursor-pointer group transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
                    style={{ backgroundColor: "#E8E8E8" }}
                    onMouseEnter={() => setHoveredCard(service.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Image with rounded corners and zoom */}
                    <div className="w-full h-full p-3 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    </div>

                    {/* Arrow Button - Slides up from bottom with grow effect */}
                    <div
                      className={`absolute bottom-6 right-6 transition-all duration-500 ease-out ${
                        hoveredCard === service.id
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-16"
                      }`}
                    >
                      <div
                        className={`rounded-full bg-[#F6B507] flex items-center justify-center shadow-xl transition-all duration-500 ${
                          hoveredCard === service.id ? "w-20 h-20" : "w-16 h-16"
                        }`}
                      >
                        <FiArrowUpRight
                          className={`text-black transition-all duration-500 ${
                            hoveredCard === service.id ? "w-10 h-10" : "w-8 h-8"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Subtle overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-500 ${
                        hoveredCard === service.id ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>

                  {/* Title - Outside card, centered below */}
                  <div className="mt-6 text-center">
                    <h3 className="text-[#051625] text-lg font-dolce font-bold">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Request a Quote */}
      <section className="mb-20">
        <div className="container mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1240px] mx-auto">
            {/* Main Card with Background Image */}
            <div
              className="relative w-full rounded-3xl overflow-hidden"
              style={{ height: "210px" }}
            >
              {/* Background Image */}
              <img
                src={ladyimage}
                alt="Cleaning Service"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(139,195,74,0.7) 30%, rgba(139,195,74,0.95) 60%, rgba(139,195,74,1) 100%)",
                }}
              />

              {/* Content Container */}
              {/* Content Container */}
              <div className="relative h-full flex items-center px-8 lg:px-12">
                <div className="w-full flex items-center justify-between">
                  {/* Text Content - You can control position here */}
                  <div
                    className="rounded-xl p-4"
                    style={{
                      backgroundColor: "#FFFFFFAD",
                      maxWidth: "510px",
                      marginLeft: "200px", // Change this value to move text left/right
                    }}
                  >
                    <p className="text-[#1E1548] text-lg sm:text-xl md:text-2xl font-poppins font-semibold leading-relaxed">
                      LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND
                      TYPESETTING INDUSTRY.
                    </p>
                  </div>

                  {/* Button - Stays on the right */}
                  <button
                    className="rounded-full font-poppins font-semibold text-lg transition-all duration-300 shadow-lg"
                    style={{
                      width: "264px",
                      height: "48px",
                      backgroundColor: isButtonHovered ? "#000000" : "#FFFFFF",
                      color: isButtonHovered ? "#FFFFFF" : "#000000",
                    }}
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                  >
                    Request a quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

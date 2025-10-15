import { useState } from "react";
import ResidentialImage from "../../assets/ResidentialImage.jpg";
import DeepCleaningImg from "../../assets/DeepCleaningImg.jpg";
import MoveInOutImg from "../../assets/MoveInOutImg.jpg";
import OutDoorImg from "../../assets/OutDoorImg.jpg";
import ladyimage from "../../assets/ladyimage.jpg";
import WaterTankImg from "../../assets/WaterTankImg.jpg";
import MattressCleaningImg from "../../assets/MattressCleaningImg.jpg";
import { ArrowUpRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const navigate = useNavigate();

  const servicesData = [
    {
      id: 1,
      image: ResidentialImage,
      title: "RESIDENTIAL CLEANING SERVICES",
      path: "/services/residential-cleaning"
    },
    {
      id: 2,
      image: DeepCleaningImg,
      title: "DEEP CLEANING SERVICES",
      path: "/services/residential-cleaning"
    },
    {
      id: 3,
      image: MoveInOutImg,
      title: "MOVE IN / OUT CLEANING",
      path: "/services/residential-cleaning"
    },
    {
      id: 4,
      image: OutDoorImg,
      title: "OUTDOOR CLEANING",
      path: "/services/residential-cleaning"
    },
    {
      id: 5,
      image: WaterTankImg,
      title: "WATER TANK CLEANING",
      path: "/services/residential-cleaning"
    },
    {
      id: 6,
      image: MattressCleaningImg,
      title: "MATTRESS CLEANING",
      path: "/services/residential-cleaning"
    },
  ];

  const sliderSettings = {
    dots: false, // Show dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Cards per view
    slidesToScroll: 1, // Scroll 1 card at a time
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // 3 seconds per slide
  };

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* service banner section */}
      <section className="mt-28 container mx-auto max-w-[95%] px-12">
        {/* Services Banner Card */}
        <div
          className="w-full h-[413px] mx-auto rounded-3xl flex flex-col items-center justify-center"
          style={{ background: "linear-gradient(to right, #FAEDC9, #EFF9DF)" }}
        >
          {/* Small Heading */}
          <p
            className="text-[#051625] text-base sm:text-lg  font-poppins font-medium mb-2 
                          text-center"
          >
            Lorem Ipsum is simply dummy text
          </p>

          {/* Large Heading - Services */}
          <h1 className="text-[#051625] text-5xl font-poppins font-semibold text-center">
            Services
          </h1>
        </div>
      </section>

      {/* Second Section - Where Cleanliness Heading */}
      <section className="mt-12">
        <div className="px-10 md:px-0">
          <h2 className="text-[#051625] text-2xl md:text-4xl  font-dolce font-bold text-center max-w-[632px] mx-auto leading-tight">
            WHERE CLEANLINESS AND CARE GO HAND IN HAND.
          </h2>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="md:mt-14 mt-5">
        <div className="container mx-auto max-w-[95%] px-12">

          {/* Mobile Slider - Visible on mobile, hidden on md and above */}
          <div className="block md:hidden">
            <Slider {...sliderSettings}>
              {servicesData.map((service) => (
                <div key={service.id} className="px-2">
                  {/* Card Container with Zoom Effect */}
                  <div
                    className="relative shadow-2xs bg-[#FBFFEB] hover:bg-gray-50
                         w-full h-auto px-4 py-5 rounded-3xl
                         flex flex-col items-center cursor-pointer group transition-colors duration-500"
                    onMouseEnter={() => setHoveredCard(service.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onTouchStart={() => setHoveredCard(service.id)} // Support touch devices
                    onTouchEnd={() => setHoveredCard(null)}
                  >
                    {/* Image container */}
                    <div
                      className="relative w-full  h-auto overflow-hidden 
                           rounded-2xl"
                      style={{ aspectRatio: "4/3" }}     
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className={`w-full h-full object-cover rounded-2xl transition-all 
                      duration-700 ease-in-out ${
                        hoveredCard === service.id
                          ? "scale-110 -translate-x-2"
                          : "scale-100 translate-x-0"
                      }`}
                      onClick={() => handleCardClick(service.path)} // Navigate on click
                      />

                      {/* Arrow button */}
                      <div
                        className={`absolute bottom-6 right-6 transition-all duration-500 ease-out ${
                          hoveredCard === service.id
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
                        onClick={() => handleCardClick(service.path)} // Navigate on click
                      >
                        <div
                          className="rounded-full bg-[#F6B507] flex items-center justify-center 
                       shadow-xl transition-all duration-500 w-16 h-16"
                        >
                          <ArrowUpRight
                            className={`text-black transition-all duration-500 ${
                              hoveredCard === service.id ? "w-8 h-8" : "w-6 h-6"
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Title below image */}
                    <h3 className="mt-3 text-[#051625] text-sm font-dolce font-bold">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Single Grid for All 6 Cards */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {servicesData.map((service) => (
                <div key={service.id} className="flex flex-col">
                  {/* Card Container with Zoom Effect */}
                  <div
                    className="relative shadow-2xs bg-[#FBFFEB] hover:bg-gray-50
                      w-full h-auto md:h-[421px] px-4
                      flex flex-col py-5 rounded-3xl
                      items-start cursor-pointer group transition-colors duration-500"
                    onMouseEnter={() => setHoveredCard(service.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Image container */}
                    <div
                      className="relative w-full h-auto md:h-[333px] overflow-hidden 
                              rounded-2xl"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className={`w-full h-full object-cover rounded-2xl transition-all 
                          duration-700 ease-in-out ${
                            hoveredCard === service.id
                              ? "scale-110 -translate-x-2"
                              : "scale-100 translate-x-0"
                          }`}
                          onClick={() => handleCardClick(service.path)} // Navigate on click
                      />

                      {/* Arrow button */}
                      <div
                        className={`absolute bottom-6 right-6 transition-all duration-500 ease-out ${
                          hoveredCard === service.id
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
                        onClick={() => handleCardClick(service.path)} // Navigate on click
                      >
                        <div
                          className="rounded-full bg-[#F6B507] flex items-center justify-center 
                           shadow-xl transition-all duration-500 w-16 h-16"
                        >
                          <ArrowUpRight
                            className={`text-black transition-all duration-500 ${
                              hoveredCard === service.id ? "w-8 h-8" : "w-6 h-6"
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Title below image */}
                    <h3 className="mt-3 text-[#051625] text-xl font-dolce font-bold">
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
      <section className="mb-20 md:mt-28 mt-10">
        <div className="container mx-auto max-w-[95%]  px-8 md:px-12">
          <div className="mx-auto">
            {/* Main Card with Background Image */}
            <div className="relative w-full rounded-3xl overflow-hidden h-[400px] sm:h-[350px] md:h-[280px] lg:h-[210px]">
              {/* Background Image */}
              <img
                src={ladyimage}
                alt="Cleaning Service"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Content Container */}
              <div className="relative h-full flex items-center justify-center lg:justify-between px-12">
                <div
                  className="w-full flex flex-col lg:flex-row items-center justify-center 
                             lg:justify-between 
                             gap-6 lg:gap-8"
                >
                  {/* Text Content */}
                  <div
                    className="rounded-xl p-4 bg-[#FFFFFFAD] bg-opacity-70 w-full 
                                max-w-[510px] 
                               lg:ml-[200px]"
                  >
                    <p
                      className="text-[#272469] md:text-[30px] text-xl
                                font-semibold font-dolce leading-tight text-center lg:text-left"
                    >
                      LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND
                      TYPESETTING INDUSTRY.
                    </p>
                  </div>

                  {/* Button */}
                  <button
                    className="rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-lg w-full sm:w-[240px] md:w-[264px] h-12 lg:h-[48px] flex-shrink-0"
                    style={{
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

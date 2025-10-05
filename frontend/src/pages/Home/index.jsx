import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import DownArrow from "../../Components/Icons/DownArrow";
import SendIcon from "../../Components/Icons/SendIcon";
import PhoneIcon from "../../Components/Icons/PhoneIcon";
import Button from "../../Components/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useState } from "react";
import Card from "../../Components/Card";
import CardIcon1 from "../../Components/Icons/CardIcon1.png"
import CardIcon2 from "../../Components/Icons/CardIcon2.png"
import CardIcon3 from "../../Components/Icons/CardIcon3.png"
import CardIcon4 from "../../Components/Icons/CardIcon4.png"
import CardIcon5 from "../../Components/Icons/CardIcon5.png"
import CardIcon6 from "../../Components/Icons/CardIcon6.png"


const Home = () => {
  const banner = [
    {
      slider: [
        { id: 1, image: slider1 },
        { id: 2, image: slider2 },
        { id: 3, image: slider3 },
      ],
    },
  ];

   const cards = [
    { 
      icon: <img src={CardIcon1} alt="icon" className="mt-4" />, 
      title: 'Residential Cleaning Service', 
      description: 'At Clean Works Hospitality, we understand that your home is your sanctuary. Our residential cleaning services are...', 
      linkText: 'Read More', 
      linkUrl: '/residential', 
      className: 'bg-white ' 
    },
     { 
      icon: <img src={CardIcon2} alt="icon" className="mt-3" />, 
      title: 'Deep Cleaning Service', 
      description:"Sometimes,a standard cleaning just isn't enough to get your space truly clean and healthy...", 
      linkText: 'Read More', 
      linkUrl: '/residential', 
      className: 'bg-white ' 
    },
     { 
      icon: <img src={CardIcon3} alt="icon"  />, 
      title: 'Move in / Out Cleaning', 
      description: "Moving can be a stressful experience, but with Clean Works Hospitality, you can leave the cleaning to...", 
      linkText: 'Read More', 
      linkUrl: '/residential', 
      className: 'bg-white ' 
    },
     { 
      icon: <img src={CardIcon4} alt="icon" className="mt-3" />, 
      title: 'Outdoor Cleaning', 
      description: 'The exterior of your property is the first impression guests or clients have of your home or business...', 
      linkText: 'Read More', 
      linkUrl: '/residential', 
      className: 'bg-white ' 
    },
     { 
      icon: <img src={CardIcon5} alt="icon" className="mt-3" />, 
      title: 'After Party Cleaning', 
      description: 'Hosting a party or event is a joyous occasion, but the aftermath can be overwhelming...', 
      linkText: 'Read More', 
      linkUrl: '/residential', 
      className: 'bg-white ' 
    },
     { 
      icon: <img src={CardIcon6} alt="icon" className="mt-4" />, 
      title: 'Water Tank Cleaning', 
      description: 'Clean water is essential for your health and well-being, and maintaining a clean water tank is..', 
      linkText: 'Read More', 
      linkUrl: '/residential', 
      className: 'bg-white ' 
    },
  ]

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    waitForAnimate: false,
  };

  const [selectedService, setSelectedService] = useState("");

  const handleChange = (e) => {
    setSelectedService(e.target.value);
  };

  return (
    <>
      {/* BannerSection */}
      <section className="mt-5">
        <div className="container mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8">
          <div className="slider-container relative">
            <Slider {...settings}>
              {banner[0].slider.map((slide) => (
                <div
                  key={slide.id}
                  className="relative w-full h-full top-20 mb-20"
                >
                  <div>
                    <img
                      src={slide.image}
                      alt={`Slide ${slide.id}`}
                      className="w-full h-full object-cover rounded-4xl"
                    />
                    {/* Overlay content */}
                    <div className="absolute top-1/4 left-4 sm:left-8 md:left-10 text-white max-w-xl">
                      <span className="bg-[#6EA01E] px-3 py-1 rounded text-base sm:text-xl">
                        Clean Works Cleaning Services
                      </span>
                      <h1 className="text-sm sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-2">
                        BRINGING FRESHNESS TO EVERY CORNER OF QATAR
                      </h1>
                      <Button
                        className="sm:mt-4 mt-0 px-6 py-2 sm:px-8 sm:py-3 bg-yellow-500
                                 hover:bg-[#272469] rounded-full flex items-center gap-2"
                      >
                        <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        Call Us Today
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            

          </div>
        </div>
      </section>

      {/* Centered and Responsive Form */}
            <div className="relative bottom-[-2rem] sm:bottom-[2rem] md:bottom-[4rem] left-[50%] transform 
                            -translate-x-1/2 w-full max-w-[82%] bg-white shadow-2xl rounded-2xl 
                            sm:rounded-4xl p-4 sm:p-6">
              <form
                action=""
                className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center justify-center"
              >
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-400 outline-none placeholder:text-gray-400 
                               px-4 py-2 sm:py-3 rounded-full text-sm sm:text-base"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-400 outline-none placeholder:text-gray-400 px-4 py-2 sm:py-3 rounded-full text-sm sm:text-base"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full border border-gray-400 outline-none placeholder:text-gray-400 px-4 py-2 sm:py-3 rounded-full text-sm sm:text-base"
                  />
                </div>
                <div className="relative">
                  <select
                    value={selectedService}
                    onChange={handleChange}
                    className="w-full border border-gray-400 outline-none placeholder:text-gray-400 px-4 py-2 sm:py-3 rounded-full appearance-none text-sm sm:text-base"
                  >
                    <option value="">Select Service</option>
                    {/* Add more options as needed */}
                  </select>
                  {/* Custom dropdown arrow */}
                  <DownArrow className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
                </div>
                <div className="flex justify-center">
                  <Button
                    className="w-full sm:w-auto bg-[#272469] hover:bg-[#6EA01E] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full flex items-center justify-center"
                  >
                    <SendIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Button>
                </div>
              </form>
            </div>

      {/* ServiceSection */}
      <section>
        <div className="container max-w-[95%] mx-auto mt-10 px-12 pr-16 xl:pr-16 2xl:pr-8 ">

          <div className="mb-10">
            <p className="text-center text-yellow-500 font-semibold text-xl">Our Services</p>
            <h2 className="text-black text-4xl font-bold text-center">CLEAN WORK SERVICES</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 sm:gap-10 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            linkText={card.linkText}
            linkUrl={card.linkUrl}
            className={card.className}
          />
        ))}
      </div>

        </div>
      </section>

      {/* AboutSection */}
      <section>
        <div className="container max-w-[95%] mx-auto mt-12 px-12">About</div>
      </section>

      {/* WorkSection */}
      <section className="w-full  mt-12">
        <div className="">Work</div>
      </section>

      {/* TestimonialsSection */}
      <section>
        <div className="container max-w-[95%] mx-auto mt-12 px-12">Testimonials</div>
      </section>
    </>
  );
};

export default Home;
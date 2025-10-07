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
import CardIcon1 from "../../Components/Icons/CardIcon1.png";
import CardIcon2 from "../../Components/Icons/CardIcon2.png";
import CardIcon3 from "../../Components/Icons/CardIcon3.png";
import CardIcon4 from "../../Components/Icons/CardIcon4.png";
import CardIcon5 from "../../Components/Icons/CardIcon5.png";
import CardIcon6 from "../../Components/Icons/CardIcon6.png";

import about from "../../assets/about.jpg";
import Location from "../../Components/Icons/Location.png";
import Marquee from "react-fast-marquee";
import CalendarIcon from "../../Components/Icons/CalendarIcon";
import HandshakeIcon from "../../Components/Icons/HandshakeIcon";
import ProfessionIcon from "../../Components/Icons/ProfessionIcon";
import JanitorialIcon from "../../Components/Icons/JanitorialIcon";
import TestimonialsImg1 from "../../Components/Icons/TestimonialsImg1.jpg";
import TestimonialsImg2 from "../../assets/TestimonialsImg2.jpg";
import TestimonialsImg3 from "../../assets/TestimonialsImg3.jpg";
import { GrPrevious, GrNext } from "react-icons/gr";
import { FaStar, FaQuoteRight } from "react-icons/fa";

import Form from "../../Components/Form";

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
      title: "Residential Cleaning Service",
      description:
        "At Clean Works Hospitality, we understand that your home is your sanctuary. Our residential cleaning services are...",
      linkText: "Read More",
      linkUrl: "/residential",
      className: "bg-white ",
    },
    {
      icon: <img src={CardIcon2} alt="icon" className="mt-3" />,
      title: "Deep Cleaning Service",
      description:
        "Sometimes,a standard cleaning just isn't enough to get your space truly clean and healthy...",
      linkText: "Read More",
      linkUrl: "/residential",
      className: "bg-white ",
    },
    {
      icon: <img src={CardIcon3} alt="icon" />,
      title: "Move in / Out Cleaning",
      description:
        "Moving can be a stressful experience, but with Clean Works Hospitality, you can leave the cleaning to...",
      linkText: "Read More",
      linkUrl: "/residential",
      className: "bg-white ",
    },
    {
      icon: <img src={CardIcon4} alt="icon" className="mt-3" />,
      title: "Outdoor Cleaning",
      description:
        "The exterior of your property is the first impression guests or clients have of your home or business...",
      linkText: "Read More",
      linkUrl: "/residential",
      className: "bg-white ",
    },
    {
      icon: <img src={CardIcon5} alt="icon" className="mt-3" />,
      title: "After Party Cleaning",
      description:
        "Hosting a party or event is a joyous occasion, but the aftermath can be overwhelming...",
      linkText: "Read More",
      linkUrl: "/residential",
      className: "bg-white ",
    },
    {
      icon: <img src={CardIcon6} alt="icon" className="mt-4" />,
      title: "Water Tank Cleaning",
      description:
        "Clean water is essential for your health and well-being, and maintaining a clean water tank is..",
      linkText: "Read More",
      linkUrl: "/residential",
      className: "bg-white ",
    },
  ];

  const Step = ({ icon: Icon, text }) => (
    <div className="flex items-center mx-4">
      <div className="flex flex-col items-center">
        <div className="bg-white w-24 h-24 p-6 rounded-full flex-shrink-0">
          <Icon />
        </div>
        <div className="mt-4 text-center">
          <p className="text-xl font-semibold">{text}</p>
        </div>
      </div>
      <div className="w-36 h-2 rounded-2xl border-t-4 border-white ml-4"></div>
    </div>
  );

  const testimonials = [
    {
      id: 1,
      name: "Alexa Bliss",
      image: TestimonialsImg1,
      text: "Training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classes Awesome site, on the top advertising a Courses available available business having..",
      rating: 4,
    },
    {
      id: 2,
      name: "John Doe",
      image: TestimonialsImg2,
      text: "Excellent service! The cleaning team was professional and thorough. My home has never been cleaner. Highly recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "Sarah Smith",
      image: TestimonialsImg3,
      text: "Outstanding quality and attention to detail. They transformed my office space completely. Will definitely use again!",
      rating: 5,
    },
    {
      id: 4,
      name: "Mike Johnson",
      image: TestimonialsImg1,
      text: "Amazing experience! Very professional and reliable cleaning service. Would definitely recommend to friends and family.",
      rating: 5,
    },
    {
      id: 5,
      name: "Emma Wilson",
      image: TestimonialsImg2,
      text: "Great attention to detail and very friendly staff. My office has never looked better. Thank you Clean Works!",
      rating: 4,
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

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
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 1
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentTestimonialIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();
  const centerTestimonial = visibleTestimonials[1] || visibleTestimonials[0];

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
      <div
        className="relative bottom-[-2rem] sm:bottom-[2rem] md:bottom-[4rem] left-[50%] transform 
                            -translate-x-1/2 w-full max-w-[82%] bg-white shadow-2xl rounded-2xl 
                            sm:rounded-4xl p-4 sm:p-6"
      >
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
            <Button className="w-full sm:w-auto bg-[#272469] hover:bg-[#6EA01E] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full flex items-center justify-center">
              <SendIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>
        </form>
      </div>

      {/* ServiceSection */}
      <section>
        <div className="container max-w-[95%] mx-auto px-12 mt-10">
          <div className="mb-10">
            <p className="text-center text-yellow-500 font-semibold text-xl">
              Our Services
            </p>
            <h2 className="text-black text-4xl font-bold text-center">
              CLEAN WORK SERVICES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 ">
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
      <section className="container max-w-[95%] mx-auto mt-12 px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <p className=" text-yellow-500 font-semibold text-xl">
              Clean Works Hospitality
            </p>
            <h3 className="text-3xl font-bold mt-2">
              DISCOVER THE ART OF CLEANLINESS
            </h3>
            <p className="mt-5 text-[#838B95] text-[18px] ">
              At Clean Works Hospitality, our journey is guided by a passion for
              cleanliness and a dedication to our clients. We're not just
              another cleaning service – we're your partners in creating
              healthier, happier spaces. Our team of skilled professionals is
              committed to delivering meticulous cleaning, whether it's a
              routine home cleaning or an extensive deep cleaning project. We
              adhere to eco-friendly practices, using safe cleaning solutions
              that protect your health and the environment.
            </p>
            <ul className="mt-4 space-y-3 font-medium">
              <div className="flex flex-wrap gap-x-8">
                <li className="flex items-center before:content-['-'] ">
                  Specialized Expertise
                </li>
                <li className="flex items-center before:content-['-'] ">
                  Environmental Responsibility
                </li>
              </div>
              <div className="flex flex-wrap gap-x-8">
                <li className="flex items-center before:content-['-'] ">
                  Quality Assurance
                </li>
                <li className="flex items-center before:content-['-'] ml-5">
                  Customer Satisfaction
                </li>
              </div>
            </ul>
            <Button
              className="bg-[#6EA01E] text-white lg:w-36 w-56 h-12 rounded-3xl mt-5
                              hover:bg-amber-300"
            >
              Learn More
            </Button>
          </div>

          <div className="relative">
            <img
              src={about}
              className="relative rounded-3xl w-[446px] h-[460px] xl:mx-36 mx-auto mt-10"
            />
            <div
              className="absolute bottom-16 left-28 bg-white opacity-86 px-8 py-3 rounded-xl 
                            shadow-md flex items-center border border-gray-400"
            >
              <img src={Location} />
              <div className="flex flex-col ml-2">
                <span>Location</span>
                <span className="text-[#838B95] text-xs">Doha, Qatar</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WorkSection */}
      <section className="w-full mx-auto mt-20">
        <div className="relative max-w-[100%] h-96 mx-auto bg-[#272469] text-white -z-30">
          <div className="mx-20 py-10">
            <p className="text-xl">How It Works</p>
            <h4 className="text-4xl">FOLLOW 4 EASY STEPS</h4>
          </div>

          <Marquee
            pauseOnHover={true}
            speed={50}
            direction="left"
            gradient={false}
            style={{ overflow: "hidden" }}
            className="z-10"
          >
            <div className="flex items-center space-x-4">
              <Step icon={CalendarIcon} text="Schedule Your Requirements" />
              <Step icon={ProfessionIcon} text="Schedule Your Requirements" />
              <Step icon={HandshakeIcon} text="Meet Your Cleaning Expert" />
              <Step icon={JanitorialIcon} text="Get a Best Cleaning Service" />
            </div>
          </Marquee>
        </div>
      </section>

      {/* TestimonialsSection */}
      <section className="container max-w-[95%] mx-auto mt-12 px-12 mb-12">
        
      </section>

      {/* contactSection */}
      <section className="container mx-auto px-12 max-w-[95%] mt-1">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-3 items-center rounded-3xl shadow-xl ">

          {/* Left Column — Contact Form */}
          <div className="w-full max-w-2xl">
            <Form />
          </div>

          {/* Right Column — Video */}
          <div className="w-[430px] h-[440px] mt-6 mx-24 flex justify-center">
            <video
              className="rounded-xl shadow-lg w-full h-auto"
              controls
              src="/path-to-your-video.mp4"
            />
          </div>

        </div>

      </section>

      {/* blogSection */}
      <section className="container mx-auto px-12 max-w-[95%] mt-12">
        blog section
      </section>
    </>
  );
};

export default Home;
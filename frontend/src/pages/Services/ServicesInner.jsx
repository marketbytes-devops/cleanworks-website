import { useParams } from "react-router-dom";
import servicesData from "../../Data/ServicesData";
import { ArrowRight } from "lucide-react";
import contact from "../../assets/contact.jpg";
import ServicePhone from "../../Components/Icons/ServicePhone";
import ladyimage from "../../assets/ladyimage.jpg";
import { useState } from "react";
import Form from "../../Components/Form";
import Button from "../../Components/Button"
import { Link } from "react-router";

const ServicesInner = () => {
  const { id } = useParams(); // e.g., /services/residential-cleaning → id = "residential-cleaning"

  // Find the service based on the slug (id)
  const service = servicesData.find((s) => s.slug === id);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fallback if service is not found
  if (!service) {
    return (
      <section className="mt-28 container mx-auto max-w-[95%] px-12">
        <h4 className="text-3xl font-poppins font-semibold text-center text-[#051625]">
          Service Not Found
        </h4>
      </section>
    );
  }

  return (
    <>
      {/* Banner Section */}
      <section className="mt-28 container mx-auto max-w-[95%] px-12">
        <div
          className="w-full h-[250px] md:h-[413px] mx-auto rounded-3xl flex flex-col items-center 
                    justify-center"
          style={{ background: "linear-gradient(to right, #FAEDC9, #EFF9DF)" }}
        >
          <p className="text-[#051625] text-[16px] sm:text-lg font-poppins font-medium mb-2 text-center">
            Services
          </p>
          <h1 className="text-[#051625] text-xl sm:text-5xl font-poppins font-semibold text-center">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Service Navigation and Image Section */}
      <section className="container mx-auto max-w-[95%] px-12 mt-12 md:mt-24">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 bg-white">
          <div className="w-full md:w-[30%] mb-6 md:mb-0">
            <div className="space-y-2">
              {servicesData.map((s) => (
                <button
                  key={s.id}
                  className={`w-full text-left px-5 py-5 rounded-3xl flex justify-between items-center 
                              transition-colors duration-500 font-poppins font-semibold ${
                                s.slug === id
                                  ? "bg-[#272469] text-white"
                                  : "bg-gray-100 text-[#555555] hover:text-white hover:bg-[#272469]"
                              }`}
                  onClick={() => (window.location.href = s.path)}
                >
                  {s.title} <ArrowRight className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div className="w-full md:w-[65%]">
            <img
              src={service.image}
              alt={service.title}
              className="rounded-3xl w-full h-auto md:h-[450px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="container mx-auto max-w-[95%] px-12 mb-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 bg-white mt-4">
          <div className="w-full lg:w-1/3 mb-6 md:mb-0 relative">
            <img
              src={contact}
              alt={service.title}
              className="rounded-3xl w-full h-auto"
            />
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full  px-4 sm:px-6 md:px-6
             pt-20 sm:pt-24 md:pt-32 pb-6 rounded-b-3xl bg-white "
              style={{
                clipPath: "polygon(0 0, 100% 45%, 100% 100%, 0 100%)",
                borderRadius: "0 0 24px 24px",
              }}
            >
              <h3 className="text-[15px] md:text-[20px] font-bold text-black font-dolce
                             leading-tight mb-3">
                BRINGING FRESHNESS TO EVERY <br /> CORNER OF QATAR
              </h3>
              <div className="flex items-center gap-2">
                <ServicePhone />
                <Link to='/contacts'>
                 <p className="text-[#6EA01E] font-semibold">Call Us Today</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h2 className="text-2xl sm:text-4xl font-bold font-dolce text-black mb-4 mt-5">
              {service.title}
            </h2>
            <p className="text-[#222222] text-[17px] font-normal mb-4 font-poppins leading-relaxed">
              {service.description}
            </p>

            <div className="lg:mt-18 mt-8 md:max-w-[821px] w-full">
              {service.services.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center mb-4  md:max-w-[821px] w-full h-12 border-b border-[#EBEBEB]"
                >
                  {/* Green Rectangle */}
                  <div className="w-[7px] h-12 bg-[#6EA01E] opacity-90" />

                  {/* Text */}
                  <p
                    className="font-poppins text-[#555555] text-[12px] sm:text-[16px] leading-[100%] 
                                  font-normal flex-1 ml-3"
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* request a quote section */}
      <section className="mb-20  md:mt-20 mt-12">
        <div className="container mx-auto max-w-[95%]  px-10 md:px-12">
          <div className="mx-auto">
            {/* Main Card with Background Image */}
            <div
              className="relative w-full rounded-3xl overflow-hidden h-[400px] sm:h-[350px]
                           md:h-[280px] lg:h-[210px]"
            >
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
                  <Button
                    className="rounded-full font-medium text-sm  lg:text-[20px] transition-all font-poppins
                              duration-300 shadow-lg w-full sm:w-[240px] md:w-[264px] h-12 lg:h-[48px] 
                             flex-shrink-0 bg-white hover:bg-black text-black hover:text-white"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Request a quote
                  </Button>

                  {/* Modal */}
                  {isModalOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                      <div className="bg-white rounded-xl p-6 w-[90%] max-w-md relative">
                        {/* Close button */}
                        <Button
                          className="absolute top-3 right-3 text-gray-500 text-xl font-bold"
                          onClick={() => setIsModalOpen(false)}
                        >
                          &times;
                        </Button>

                        {/* Reuse your form component */}
                        <Form />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ServicesInner;

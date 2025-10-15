import { useParams } from "react-router-dom";
import servicesData from "../../Data/ServicesData"; 
import { ArrowRight } from "lucide-react"; 
import contact from "../../assets/contact.jpg"
const ServicesInner = () => {
  const { id } = useParams(); // e.g., /services/residential-cleaning → id = "residential-cleaning"

  // Find the service based on the slug (id)
  const service = servicesData.find((s) => s.slug === id);

  // Fallback if service is not found
  if (!service) {
    return (
      <section className="mt-28 container mx-auto max-w-[95%] px-12">
        <h1 className="text-3xl font-poppins font-semibold text-center text-[#051625]">
          Service Not Found
        </h1>
      </section>
    );
  }

  return (
    <>
      {/* Banner Section */}
      <section className="mt-28 container mx-auto max-w-[95%] px-12">
        <div
          className="w-full h-[250px] md:h-[413px] mx-auto rounded-3xl flex flex-col items-center justify-center"
          style={{ background: "linear-gradient(to right, #FAEDC9, #EFF9DF)" }}
        >
          <p className="text-[#051625] text-[16px] sm:text-lg font-poppins font-medium mb-2 text-center">
            Services
          </p>
          <h1 className="text-[#051625] text-3xl sm:text-5xl font-poppins font-semibold text-center">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Service Navigation and Image Section */}
      <section className="container mx-auto max-w-[95%] px-12 mt-18">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8  bg-white">
        <div className="w-full md:w-1/2  mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h2>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-lg mb-4">
            <ArrowRight className="w-5 h-5" />
          </button>
          <div className="space-y-2">
            {servicesData.map((s) => (
              <button
                key={s.id}
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-lg flex justify-between items-center"
                onClick={() => window.location.href = s.path}
              >
                {s.title} <ArrowRight className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src={service.image} alt={service.title} className="rounded-lg w-full h-auto" />
        </div>
      </div>
      </section>

      {/* Service Details Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-white mt-6">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <img src={contact} alt={service.title} className="rounded-lg w-full h-auto" />
          <div className="bg-green-100 p-4 rounded-lg mt-4">
            <h3 className="text-lg font-bold text-green-700">BRINGING FRESHNESS TO EVERY CORNER OF QATAR</h3>
            <p className="text-green-700 mt-2">Call Us Today</p>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h2>
          <p className="text-gray-700 mb-4">{service.description}</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {service.services.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ServicesInner;
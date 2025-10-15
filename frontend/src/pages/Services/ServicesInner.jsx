import { useParams } from "react-router-dom";

const ServicesInner = () => {
  const { id } = useParams();  // e.g., /services/cleaning → id = "cleaning"

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Service: {id}</h1>
      <p>Details for service {id} here...</p>
      {/* Add your service inner UI */}
    </div>
  );
};

export default ServicesInner;
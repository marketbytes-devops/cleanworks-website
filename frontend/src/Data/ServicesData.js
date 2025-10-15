import ResidentialImage from "../assets/ResidentialImage.jpg";
import DeepCleaningImg from "../assets/DeepCleaningImg.jpg";
import MoveInOutImg from "../assets/MoveInOutImg.jpg";
import OutDoorImg from "../assets/OutDoorImg.jpg";
import WaterTankImg from "../assets/WaterTankImg.jpg";
import MattressCleaningImg from "../assets/MattressCleaningImg.jpg";

const servicesData = [
  {
    id: 1,
    slug: "residential-cleaning",
    image: ResidentialImage,
    title: "Residential Cleaning Services",
    path: "/services/residential-cleaning",
    description:
      "We believe in a holistic approach to cleaning that goes beyond surface cleanliness. Our team of experienced technicians utilizes cutting-edge equipment, eco-friendly cleaning solutions, and proven techniques to deliver thorough and effective results. From mattresses and upholstery to carpets and beyond, we tailor our services to meet the unique needs of each client, ensuring a welcoming and hygienic environment for their guests.",
    services: [
      "Kitchen cleaning (countertops, appliances, sinks)",
      "Bathroom cleaning (toilets, sinks, showers, tubs)",
      "Bedroom cleaning (dusting, vacuuming, making beds)",
      "Living room and common area cleaning",
    ],
  },
  {
    id: 2,
    slug: "deep-cleaning",
    image: DeepCleaningImg,
    title: "Deep Cleaning Services",
    path: "/services/deep-cleaning",
    description:
      "Our deep cleaning services provide a thorough and comprehensive cleaning experience, targeting hard-to-reach areas and built-up grime. Perfect for seasonal cleaning or preparing your home for special occasions.",
    services: [
      "Detailed dusting of all surfaces",
      "Deep cleaning of appliances",
      "Floor scrubbing and polishing",
      "Window and blind cleaning",
    ],
  },
  {
    id: 3,
    slug: "move-in-out-cleaning",
    image: MoveInOutImg,
    title: "Move In / Out Cleaning",
    path: "/services/move-in-out-cleaning",
    description:
      "Our move-in/move-out cleaning services ensure your home is spotless for the next occupants or ready for you to settle in. We cover every detail to make your transition smooth and stress-free.",
    services: [
      "Full kitchen and bathroom sanitization",
      "Carpet and floor deep cleaning",
      "Window cleaning",
      "Cabinet and drawer cleaning",
    ],
  },
  {
    id: 4,
    slug: "outdoor-cleaning",
    image: OutDoorImg,
    title: "Outdoor Cleaning",
    path: "/services/outdoor-cleaning",
    description:
      "Keep your outdoor spaces pristine with our professional outdoor cleaning services. From patios to driveways, we ensure your exterior areas are clean and inviting.",
    services: [
      "Pressure washing for driveways and patios",
      "Deck and fence cleaning",
      "Outdoor furniture cleaning",
      "Gutter cleaning",
    ],
  },
  {
    id: 5,
    slug: "water-tank-cleaning",
    image: WaterTankImg,
    title: "Water Tank Cleaning",
    path: "/services/water-tank-cleaning",
    description:
      "Ensure your water supply is clean and safe with our professional water tank cleaning services. We use safe and effective methods to remove sediment and contaminants.",
    services: [
      "Sediment and algae removal",
      "Tank sanitization",
      "Water quality testing",
      "Regular maintenance checks",
    ],
  },
  {
    id: 6,
    slug: "mattress-cleaning",
    image: MattressCleaningImg,
    title: "Mattress Cleaning",
    path: "/services/mattress-cleaning",
    description:
      "Our mattress cleaning services remove dust mites, allergens, and stains, ensuring a healthier sleep environment. We use eco-friendly solutions for a deep, refreshing clean.",
    services: [
      "Stain and odor removal",
      "Allergen and dust mite treatment",
      "Deep vacuuming",
      "Eco-friendly cleaning solutions",
    ],
  },
];

export default servicesData;
// pages/Blog/BlogInner.jsx
import { useParams, Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Blog1 from "../../assets/Blogpic2.jpg";
import Blog2 from "../../assets/Blogpic1.jpg";
import RightArrowIcon from "../../Components/Icons/RightArrowIcon";

const BlogInner = () => {
  const { id } = useParams();

  // Static data based on ID
  const getBlogData = (blogId) => {
    const data = {
      1: {
        title: "RESIDENTIAL CLEANING SERVICES",
        date: "Aug 8, 2025",
        image: Blog1,
        content:
          "Deep cleaning services in Qatar are designed to provide comprehensive and detailed cleaning for residential and commercial spaces. These services go beyond regular cleaning routines to ensure every nook and cranny is thoroughly cleaned, often involving specialized equipment and cleaning agents. Here's an overview of what to expect from deep cleaning services in Qatar:",
      },
      2: {
        title: "DEEP CLEANING SERVICES IN QATAR",
        date: "Aug 8, 2025",
        image: Blog2,
        content:
          "Deep cleaning services in Qatar are designed to provide comprehensive and detailed cleaning for residential and commercial spaces. These services go beyond regular cleaning routines to ensure every nook and cranny is thoroughly cleaned, often involving specialized equipment and cleaning agents. Here's an overview of what to expect from deep cleaning services in Qatar:",
      },
    };
    return data[blogId] || null;
  };

  const blog = getBlogData(id);

  // Recent posts data
  const recentPosts = [
    {
      id: 1,
      title: "Benefits of frequent Deep Cleaning Services- Clean Works Hospitality",
      image: Blog1,
      linkText: "Learn More",
    },
    {
      id: 2,
      title: "Benefits of frequent Deep Cleaning Services- Clean Works Hospitality",
      image: Blog2,
      linkText: "Learn More",
    },
  ];

  // Residential Deep Cleaning section data (for blog 1)
  const residentialDeepCleaningSections = id === "1" ? {
    title: "Residential Deep Cleaning",
    kitchens: [
      "Cleaning inside and outside of all cabinets and drawers.",
      "Deep cleaning of all appliances, including ovens, refrigerators, and microwaves.",
      "Scrubbing and sanitizing countertops, sinks, and backsplash.",
      "Cleaning of floors and walls."
    ],
    bathrooms: [
      "Scrubbing and disinfecting all surfaces, including tiles, bathtubs, showers, and toilets.",
      "Cleaning and polishing mirrors and fixtures.",
      "Cleaning of limescale and soap scum buildup.",
      "Cleaning bathroom cabinets and vanities."
    ],
    livingBedrooms: [
      "Dusting and wiping down all surfaces, including furniture, shelves, and decorations.",
      "Vacuuming and shampooing carpets and rugs.",
      "Cleaning under and behind furniture.",
      "Washing windows, window sills, and frames."
    ],
    generalAreas: [
      "Cleaning all doors, door frames, and light switches.",
      "Detailed cleaning of baseboards, moldings, and vents.",
      "Vacuuming and mopping all floors.",
      "Removing cobwebs and dust from high and hard-to-reach areas."
    ]
  } : null;

  // Commercial Deep Cleaning section data (for blog 2 or always; adjust as needed)
  const commercialDeepCleaningSections = {
    title: "Commercial Deep Cleaning",
    offices: [
      "Deep cleaning of desks, chairs, and office equipment.",
      "Sanitizing high-touch areas like keyboards, phones, and doorknobs.",
      "Cleaning common areas, including kitchens and restrooms.",
      "Vacuuming and deep cleaning carpets and floors."
    ],
    retailSpaces: [
      "Detailed cleaning of display units, shelves, and products.",
      "Sanitizing fitting rooms, restrooms, and checkout areas.",
      "Cleaning windows and mirrors.",
      "Polishing floors and cleaning storage areas."
    ],
    healthcareFacilities: [
      "Comprehensive sanitization of patient rooms, waiting areas, and medical equipment.",
      "Disinfection of high-touch surfaces to reduce infection risks.",
      "Detailed cleaning of restrooms and staff areas.",
      "Ensuring compliance with health and safety standards."
    ]
  };

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <>
      {/* Blog Inner Page Banner Section */}
      <section className="mt-28">
        <div className="container mx-auto max-w-[95%] px-10">
          <div
            className="w-full max-w-[1240px] h-[413px] mx-auto rounded-3xl flex flex-col items-center justify-center px-4"
            style={{
              background:
                "linear-gradient(91.36deg, #FAEDC9 1.16%, #EFF9DF 99.34%)",
            }}
          >
            <p className="text-[#051625] text-lg sm:text-xl md:text-2xl font-poppins font-normal mb-4 text-center">
              Lorem Ipsum is simply dummy
            </p>
            <h1
              className="text-center font-poppins font-semibold leading-[100%]"
              style={{ color: "#222222", fontSize: "48px", letterSpacing: "0%" }}
            >
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="container mx-auto max-w-[95%] px-12 mt-12 mb-20">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Side - Main Content */}
            <div className="lg:col-span-8">
              {/* Blog Title */}
              <h1
                className="font-dolce font-bold mb-4"
                style={{
                  fontSize: "40px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#222222",
                }}
              >
                {blog.title}
              </h1>

              {/* Date Badge */}
              <div className="mb-6">
                <div
                  className="inline-flex items-center justify-center text-white text-sm font-medium font-poppins rounded-full"
                  style={{
                    backgroundColor: "#6EA01E",
                    width: "93px",
                    height: "36px",
                    borderRadius: "50px",
                  }}
                >
                  {blog.date}
                </div>
              </div>

              {/* Blog Image */}
              <div
                className="w-full rounded-3xl overflow-hidden mb-8"
                style={{ maxWidth: "820px", height: "487px" }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Blog Content */}
              <div
                className="text-[#051625] font-poppins text-base leading-relaxed"
                style={{ maxWidth: "821px" }}
              >
                <p>{blog.content}</p>
              </div>

              {/* Additional content paragraphs */}
              <div
                className="mt-6 text-[#051625] font-poppins text-base leading-relaxed space-y-4"
                style={{ maxWidth: "821px" }}
              >
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo.
                </p>
              </div>

              {/* Residential Deep Cleaning Section */}
              {residentialDeepCleaningSections && (
                <div
                  className="mt-8"
                  style={{ maxWidth: "821px" }}
                >
                  {/* Section Header Row */}
                  <div
                    className="flex items-center mb-6"
                    style={{
                      width: "820px",
                      height: "48px",
                      borderBottom: "1px solid #EBEBEB",
                    }}
                  >
                    {/* Green Rectangle */}
                    <div
                      style={{
                        width: "7px",
                        height: "48px",
                        backgroundColor: "#6EA01E",
                        opacity: 1,
                      }}
                    />
                    {/* Heading */}
                    <h2
                      className="font-poppins font-semibold text-center flex-1"
                      style={{
                        fontSize: "18px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#222222",
                        margin: "0 0 0 10px", // Small gap after green bar
                      }}
                    >
                      {residentialDeepCleaningSections.title}
                    </h2>
                  </div>

                  {/* Kitchens Subsection */}
                  <div className="mb-6">
                    <h3
                      className="font-poppins mb-4"
                      style={{
                        fontSize: "18px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#555555",
                        borderBottom: "1px solid #EBEBEB",
                        paddingBottom: "4px",
                      }}
                    >
                      Kitchens:
                    </h3>
                    <ul className="space-y-2">
                      {residentialDeepCleaningSections.kitchens.map((item, index) => (
                        <li
                          key={index}
                          className="font-poppins"
                          style={{
                            fontSize: "18px",
                            lineHeight: "100%",
                            letterSpacing: "0%",
                            color: "#555555",
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bathrooms Subsection */}
                  <div className="mb-6">
                    <h3
                      className="font-poppins mb-4"
                      style={{
                        fontSize: "18px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#555555",
                        borderBottom: "1px solid #EBEBEB",
                        paddingBottom: "4px",
                      }}
                    >
                      Bathrooms:
                    </h3>
                    <ul className="space-y-2">
                      {residentialDeepCleaningSections.bathrooms.map((item, index) => (
                        <li
                          key={index}
                          className="font-poppins"
                          style={{
                            fontSize: "18px",
                            lineHeight: "100%",
                            letterSpacing: "0%",
                            color: "#555555",
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Living and Bedrooms Subsection */}
                  <div className="mb-6">
                    <h3
                      className="font-poppins mb-4"
                      style={{
                        fontSize: "18px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#555555",
                        borderBottom: "1px solid #EBEBEB",
                        paddingBottom: "4px",
                      }}
                    >
                      Living and Bedrooms:
                    </h3>
                    <ul className="space-y-2">
                      {residentialDeepCleaningSections.livingBedrooms.map((item, index) => (
                        <li
                          key={index}
                          className="font-poppins"
                          style={{
                            fontSize: "18px",
                            lineHeight: "100%",
                            letterSpacing: "0%",
                            color: "#555555",
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* General Areas Subsection */}
                  <div>
                    <h3
                      className="font-poppins mb-4"
                      style={{
                        fontSize: "18px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#555555",
                        borderBottom: "1px solid #EBEBEB",
                        paddingBottom: "4px",
                      }}
                    >
                      General Areas:
                    </h3>
                    <ul className="space-y-2">
                      {residentialDeepCleaningSections.generalAreas.map((item, index) => (
                        <li
                          key={index}
                          className="font-poppins"
                          style={{
                            fontSize: "18px",
                            lineHeight: "100%",
                            letterSpacing: "0%",
                            color: "#555555",
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Commercial Deep Cleaning Section */}
              <div
                className="mt-8"
                style={{ maxWidth: "821px" }}
              >
                {/* Section Header Row */}
                <div
                  className="flex items-center mb-6"
                  style={{
                    width: "820px",
                    height: "48px",
                    borderBottom: "1px solid #EBEBEB",
                  }}
                >
                  {/* Green Rectangle */}
                  <div
                    style={{
                      width: "7px",
                      height: "48px",
                      backgroundColor: "#6EA01E",
                      opacity: 1,
                    }}
                  />
                  {/* Heading */}
                  <h2
                    className="font-poppins font-semibold text-center flex-1"
                    style={{
                      fontSize: "18px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#222222",
                      margin: "0 0 0 10px", // Small gap after green bar
                    }}
                  >
                    {commercialDeepCleaningSections.title}
                  </h2>
                </div>

                {/* Offices Subsection */}
                <div className="mb-6">
                  <h3
                    className="font-poppins mb-4"
                    style={{
                      fontSize: "18px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#555555",
                      borderBottom: "1px solid #EBEBEB",
                      paddingBottom: "4px",
                    }}
                  >
                    Offices:
                  </h3>
                  <ul className="space-y-2">
                    {commercialDeepCleaningSections.offices.map((item, index) => (
                      <li
                        key={index}
                        className="font-poppins"
                        style={{
                          fontSize: "18px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#555555",
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Retail Spaces Subsection */}
                <div className="mb-6">
                  <h3
                    className="font-poppins mb-4"
                    style={{
                      fontSize: "18px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#555555",
                      borderBottom: "1px solid #EBEBEB",
                      paddingBottom: "4px",
                    }}
                  >
                    Retail Spaces:
                  </h3>
                  <ul className="space-y-2">
                    {commercialDeepCleaningSections.retailSpaces.map((item, index) => (
                      <li
                        key={index}
                        className="font-poppins"
                        style={{
                          fontSize: "18px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#555555",
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Healthcare Facilities Subsection */}
                <div>
                  <h3
                    className="font-poppins mb-4"
                    style={{
                      fontSize: "18px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#555555",
                      borderBottom: "1px solid #EBEBEB",
                      paddingBottom: "4px",
                    }}
                  >
                    Healthcare Facilities:
                  </h3>
                  <ul className="space-y-2">
                    {commercialDeepCleaningSections.healthcareFacilities.map((item, index) => (
                      <li
                        key={index}
                        className="font-poppins"
                        style={{
                          fontSize: "18px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#555555",
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Back to Blog Button */}
              <div className="mt-12">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-[#4977E5] text-lg font-semibold border-2 border-[#4977E5] px-6 py-3 rounded-full hover:bg-[#4977E5] hover:text-white transition-all"
                >
                  ← Back to Blog
                </Link>
              </div>
            </div>

            {/* Right Side - Search and Recent Posts */}
            <div className="lg:col-span-4">
              {/* Search Box */}
              <div className="mb-8">
                <div
                  className="relative bg-white rounded-full flex items-center px-6"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "60px",
                    border: "1px solid #A7A7A7",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Search"
                    className="flex-1 outline-none bg-transparent text-[#051625] font-poppins"
                  />
                  <button className="w-10 h-10 rounded-full bg-[#6EA01E] flex items-center justify-center">
                    <FiSearch className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Recent Posts */}
              <div>
                <h3 className="text-[#051625] text-2xl font-dolce font-bold mb-6">
                  Recent Posts
                </h3>

                <div className="space-y-6">
                  {recentPosts.map((post) => (
                    <div
                      key={post.id}
                      className="flex gap-4 items-start"
                    >
                      {/* Post Image */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Post Content */}
                      <div className="flex-1">
                        <h4 className="text-[#051625] text-sm font-poppins font-semibold mb-2 line-clamp-2">
                          {post.title}
                        </h4>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-[#4977E5] text-sm font-semibold flex items-center gap-1"
                        >
                          {post.linkText}
                          <RightArrowIcon className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogInner;
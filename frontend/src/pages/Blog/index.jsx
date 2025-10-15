// pages/Blog/index.jsx
import { Outlet, useParams } from "react-router-dom";
import Blog1 from "../../assets/Blogpic2.jpg";
import Blog2 from "../../assets/Blogpic1.jpg";
import RightArrowIcon from "../../Components/Icons/RightArrowIcon";
import { Link } from "react-router-dom";

const BlogBanner = () => {
  const blogData = [
    {
      id: 1,
      image: Blog1,
      date: "Aug 8,2025",
      title: "DEEP CLEANING SERVICES IN<br />QATAR",
      linkText: "Learn More",
    },
    {
      id: 2,
      image: Blog2,
      date: "Aug 8,2025",
      title: "DEEP CLEANING SERVICES IN<br />QATAR",
      linkText: "Learn More",
    },
  ];
  
  return (
    <>
      {/* Blog Banner Section */}
      <section className="mt-28">
        <div className="container mx-auto max-w-[95%] px-12">
          {/* Blog Banner Card */}
          <div
            className="w-full  h-[413px] mx-auto rounded-3xl flex flex-col items-center justify-center"
            style={{
              background:
                "linear-gradient(91.36deg, #FAEDC9 1.16%, #EFF9DF 99.34%)",
            }}
          >
            <p className="text-[#051625] text-lg sm:text-xl md:text-2xl font-poppins font-normal mb-4 text-center px-4">
              Lorem Ipsum is simply dummy
            </p>
            <h1 className="text-[#051625] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-dolce font-bold text-center">
              Blog
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="container max-w-[95%] mx-auto mt-20 px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-[850px] ">
          {blogData
            .slice(1)
            .concat(blogData.slice(0, 1))
            .map((blog, index) => (
              <div
                key={index}
                className="w-full max-w-[400px] h-[509px] bg-white rounded-3xl overflow-hidden shadow-md flex flex-col"
              >
                {/* Image - 3/4 of the card */}
                <div className="h-3/4 overflow-hidden rounded-3xl">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section - 1/4 of the card */}
                <div className="h-1/4 px-4 py-3 flex flex-col justify-between">
                  {/* Date Badge */}
                  <div className="mb-2 -mt-2">
                    <div
                      className="inline-flex items-center justify-center text-white text-xs font-medium rounded-full"
                      style={{
                        backgroundColor: "#6EA01E",
                        width: "93px",
                        height: "36px",
                      }}
                    >
                      {blog.date}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mb-2">
                    <h3
                      className="text-[#051625] text-lg font-bold font-dolce uppercase tracking-wide leading-tight"
                      dangerouslySetInnerHTML={{ __html: blog.title }}
                    />
                  </div>

                  {/* Learn More Link - Arrow separated in div for vertical centering */}
                  <div className="flex items-center gap-2 -mt-4">
                    <Link
                      to={`/blog/${blog.id}`}
                      className="text-[#4977E5] text-sm font-semibold"
                    >
                      {blog.linkText}
                    </Link>
                    <div className="flex items-center self-center translate-y-[2px]">
                      <RightArrowIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4 mt-8 mb-20">
          {/* Button 1 (Light outline - inactive) */}
          <button
            className="rounded-full flex items-center justify-center text-[#6EA01E] font-bold text-base border-2 border-[#6EA01E] shadow-lg"
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "white",
            }}
          >
            1
          </button>
          {/* Button 2 (Active - filled green) */}
          <button
            className="rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg"
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "#6EA01E",
            }}
          >
            2
          </button>
          {/* Arrow (no circle, ash color) */}
          <RightArrowIcon className="w-5 h-5 text-gray-500 ml-2" />
        </div>
      </section>
    </>
  );
};

// Main Blog component wrapper for routing
const Blog = () => {
  const { id } = useParams(); // Detect if we're on a detail route (e.g., /blog/1)

  // Render list if no ID, or Outlet for child route (BlogInner)
  return id ? <Outlet /> : <BlogBanner />;
};

export default Blog;
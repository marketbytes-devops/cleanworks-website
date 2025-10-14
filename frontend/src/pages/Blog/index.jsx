import Blog1 from "../../assets/Blog1.jpg";
import Blog2 from "../../assets/Blog2.jpg";
import RightArrowIcon from "../../Components/Icons/RightArrowIcon";
import { Link } from "react-router";

const BlogBanner = () => {
  const blogData = [
    {
      image: Blog1,
      date: "Aug 2025",
      title: "DEEP CLEANING SERVICES IN QATAR",
      description: "Deep cleaning services in Qatar are designed to provide comprehensive and detailed cleaning for residential and commercial spaces, ensuring a thorough and hygienic environment.",
      linkText: "Learn More",
    },
    {
      image: Blog2,
      date: "Aug 2025",
      title: "DEEP CLEANING SERVICES IN QATAR",
      description: "Deep cleaning services in Qatar are designed to provide comprehensive and detailed cleaning for residential and commercial spaces, ensuring a thorough and hygienic environment.",
      linkText: "Learn More",
    },
  ];

  return (
    <>
      {/* Blog Banner Section */}
      <section className="container max-w-[95%] mx-auto mt-20 px-12">
        {/* Blog Banner Card */}
        <div 
          className="w-full max-w-[1240px] h-[413px] mx-auto rounded-3xl flex flex-col items-center justify-center"
          style={{
            background: 'linear-gradient(91.36deg, #FAEDC9 1.16%, #EFF9DF 99.34%)'
          }}
        >
          {/* Small Heading */}
          <p className="text-[#051625] text-base sm:text-lg md:text-xl font-poppins font-normal mb-3 text-center px-4">
            Lorem Ipsum is simply dummy text
          </p>
          
          {/* Large Heading - Blog */}
          <h1 className="text-[#051625] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-dolce font-bold text-center">
            Blog
          </h1>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="container max-w-[95%] mx-auto mt-20 px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
          {blogData.slice(1).concat(blogData.slice(0,1)).map((blog, index) => (
            <div key={index} className="w-full max-w-[400px] h-[509px] bg-white rounded-3xl overflow-hidden shadow-md flex flex-col">
              {/* Image */}
              <div className="flex-1 overflow-hidden rounded-t-3xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Date Badge */}
              <div className="px-4 pt-4 pb-2">
                <div
                  className="inline-flex items-center justify-center text-white text-xs font-medium rounded-full"
                  style={{ 
                    backgroundColor: "#6EA01E", 
                    width: "93px", 
                    height: "36px" 
                  }}
                >
                  {blog.date}
                </div>
              </div>

              {/* Content */}
              <div className="px-4 pb-4 flex-1 flex flex-col justify-between">
                <div className="mt-2 mb-4">
                  <h3 className="text-[#051625] text-lg font-bold font-poppins uppercase tracking-wide leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-[#051625] text-sm font-normal leading-relaxed mt-2 line-clamp-3 opacity-80">
                    {blog.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="flex items-center">
                  <Link
                    to="#"
                    className="text-[#4977E5] text-sm font-semibold border-2 border-[#4977E5] px-4 py-2 rounded-full flex items-center gap-2 bg-white"
                  >
                    {blog.linkText}
                    <RightArrowIcon className="w-4 h-4" />
                  </Link>
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
              backgroundColor: "white" 
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
              backgroundColor: "#6EA01E" 
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

export default BlogBanner;
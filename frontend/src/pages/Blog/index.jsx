const Blog = () => {
  return (
     <>
       <section className="mt-28 mb-12">
        <div className="container mx-auto max-w-[90%] px-[10px] ">
          <div
            className="w-full max-w-[1240px] h-[413px] mx-auto rounded-3xl flex flex-col items-center justify-center"
            style={{ backgroundColor: '#FAEDC9' }}
          >
            <p className="text-[#051625] text-lg sm:text-xl md:text-2xl font-poppins font-normal mb-4">
              We'd love to hear from you!
            </p>
            <h1 className="text-[#051625] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-dolce font-bold">
              Blog
            </h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
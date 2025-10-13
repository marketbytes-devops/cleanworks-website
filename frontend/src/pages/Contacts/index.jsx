import { MapPin, Phone, Mail } from 'lucide-react';

const Contacts = () => {
  return (
    <>
      <section className="mt-28">
        <div className="container mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8">
          {/* Contact Banner Card */}
          <div 
            className="w-full max-w-[1240px] h-[413px] mx-auto rounded-3xl flex flex-col items-center justify-center"
            style={{ backgroundColor: '#FAEDC9' }}
          >
            <p className="text-[#051625] text-lg sm:text-xl md:text-2xl font-poppins font-normal mb-4">
              We'd love to hear from you!
            </p>
            <h1 className="text-[#051625] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-dolce font-bold">
              Contact us
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="mt-12 mb-16">
        <div className="container mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
            
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center text-center h-[250px] justify-center">
              <div className="mb-4">
                <MapPin className="w-12 h-12 text-pink-500" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-[#051625] mb-3 font-poppins">Address</h3>
              <p className="text-gray-600 leading-relaxed font-poppins text-sm">
                Near Hilal Government Complex,<br />
                Building No: 242, Zone 25, Office # 09,<br />
                C-Ring Road, Doha - Qatar
              </p>
            </div>

            {/* Phone Number Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center text-center h-[250px] justify-center">
              <div className="mb-4">
                <Phone className="w-12 h-12 text-cyan-500" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-[#051625] mb-3 font-poppins">Phone Number</h3>
              <p className="text-gray-600 leading-relaxed font-poppins">
                +974 4444 0737<br />
                +974 5122 6999
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center text-center h-[250px] justify-center">
              <div className="mb-4">
                <Mail className="w-12 h-12 text-blue-500" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-[#051625] mb-3 font-poppins">Email Us</h3>
              <p className="text-gray-600 leading-relaxed font-poppins text-sm">
                mashood@cleanworksqatar.com<br />
                sales@cleanworksqatar.com
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="mb-20">
        <div className="container mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8">
          {/* Main Card - White Background with Shadow */}
          <div 
            className="w-full max-w-[1240px] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
            style={{ minHeight: '577px' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Contact Form - Left Side */}
              <div className="p-8 lg:pl-12 lg:pr-8 lg:py-12">
                <p className="text-yellow-500 text-sm font-semibold mb-2 font-poppins">Contact With Us</p>
                <h2 className="text-[#051625] text-3xl lg:text-4xl font-bold mb-8 font-poppins">
                  WRITE US A MESSAGE
                </h2>

                <form className="space-y-4">
                  {/* Name Input */}
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 h-[47px] font-poppins"
                  />

                  {/* Email Input */}
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 h-[47px] font-poppins"
                  />

                  {/* Residence Dropdown */}
                  <div className="relative">
                    <select
                      className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-500 appearance-none bg-white h-[47px] font-poppins"
                    >
                      <option value="">Select your residence</option>
                      <option value="doha">Doha</option>
                      <option value="al-rayyan">Al Rayyan</option>
                      <option value="al-wakrah">Al Wakrah</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <textarea
                    placeholder="Your Message"
                    rows="6"
                    className="w-full px-6 py-4 rounded-3xl border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 resize-none font-poppins"
                  ></textarea>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full rounded-full text-white font-semibold text-lg transition-colors font-poppins"
                    style={{ 
                      backgroundColor: '#1E1548',
                      height: '47px'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#2d1f66'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#1E1548'}
                  >
                    Submit
                  </button>
                </form>
              </div>

              {/* Map - Right Side */}
              <div className="relative bg-gray-100 lg:rounded-r-2xl overflow-hidden" style={{ minHeight: '434px' }}>
                {/* Replace this div with your actual map image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
                  <MapPin className="w-16 h-16 text-red-500" />
                </div>
                {/* When you have the image, replace the above div with: */}
                {/* <img 
                  src="/path-to-your-map-image.jpg" 
                  alt="Location Map" 
                  className="w-full h-full object-cover"
                /> */}
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
import FbIcon from "../../Components/Icons/FbIcon";
import TwitterIcon from "../../Components/Icons/TwitterIcon";
import InstaIcon from "../../Components/Icons/InstaIcon";
import LinkedInIcon from "../../Components/Icons/LinkedInIcon";
import GoogleIcon from "../../Components/Icons/GoogleIcon";
import cleanworksLogo from "../../assets/cleanworks-logo 1.png";
import PhoneIcon from "../../Components/Icons/PhoneIcon";
import MailIcon from "../../Components/Icons/MailIcon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#051625] text-white py-6 w-full">
      <div className="container max-w-[97%] mx-auto px-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 text-center lg:text-left">
          {/* Column 1: Logo and Description */}
          <div className="flex flex-col lg:items-start items-center space-y-4 lg:max-w-[280px]">
            <img
              src={cleanworksLogo}
              alt="Clean Works Logo"
              className="h-12 w-auto max-w-[150px]"
            />
            <p className="text-[14px] font-lato leading-relaxed">
              Clean Works Hospitality is more than just a cleaning service; we're
              your trusted cleaning companion in Qatar.
            </p>
            <div className="flex space-x-4">
              <Link><FbIcon className="w-4 h-4" /></Link>
              <Link><TwitterIcon className="w-4 h-4" /></Link>
              <Link><InstaIcon className="w-4 h-4" /></Link>
              <Link><LinkedInIcon className="w-4 h-4" /></Link>
              <Link><GoogleIcon className="w-4 h-4" /></Link>
            </div>
          </div>

          {/* Columns 2-5: Navigation Links */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Column 2: Company */}
            <div>
              <h3 className="font-medium text-[18px] mb-3 font-dm-sans">Company</h3>
              <ul className="text-sm space-y-2 font-lato font-normal">
                <li><Link>About Us</Link></li>
                <li><Link>Services</Link></li>
                <li><Link>Blog</Link></li>
                <li><Link>Testimonial</Link></li>
              </ul>
            </div>

            {/* Column 3: Support */}
            <div>
              <h3 className="font-medium text-[18px] mb-3 font-dm-sans">Support</h3>
              <ul className="text-sm space-y-2 font-lato font-normal">
                <li><Link>Help Center</Link></li>
                <li><Link>Contact Us</Link></li>
                <li><Link>Book a Service</Link></li>
                <li><Link>Feedback</Link></li>
              </ul>
            </div>

            {/* Column 4: Services */}
            <div>
              <h3 className="font-medium text-[18px] mb-3 font-dm-sans">Services</h3>
              <ul className="text-sm space-y-2 font-lato font-normal">
                <li><Link>Residential Cleaning</Link></li>
                <li><Link>Deep Cleaning Services</Link></li>
                <li><Link>Outdoor Cleaning</Link></li>
                <li><Link>Water Tank Cleaning</Link></li>
              </ul>
            </div>

            {/* Column 5: Contact Us */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="font-medium text-[17px] font-dm-sans mb-3">Contact Us</h3>
              <ul className="text-sm space-y-2 font-lato font-normal">
                <li className="flex items-center gap-2 justify-center lg:justify-start">
                  <PhoneIcon className="w-5 h-5" /> 0000000000
                </li>
                <li className="flex items-center gap-2 justify-center lg:justify-start">
                  <MailIcon className="w-5 h-5" /> mashood@cleanworksqatar.com
                </li>
                <li className="flex items-center gap-2 justify-center lg:justify-start">
                  <MailIcon className="w-5 h-5" /> sales@cleanworksqatar.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between px-10 mt-8 border-t border-gray-700 pt-4 text-sm text-center lg:text-left">
        <p className="font-dm-sans">
          © Copyright by Marketbytes. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-6 font-dm-sans mt-3 lg:mt-0">
          <Link>Privacy Policy</Link>
          <Link>Terms of Use</Link>
          <Link>Legal</Link>
          <Link>Site Map</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
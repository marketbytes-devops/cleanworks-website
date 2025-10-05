import FbIcon from '../../Components/Icons/FbIcon';
import TwitterIcon from '../../Components/Icons/TwitterIcon';
import InstaIcon from '../../Components/Icons/InstaIcon';
import LinkedInIcon from '../../Components/Icons/LinkedInIcon';
import GoogleIcon from '../../Components/Icons/GoogleIcon';
import cleanworksLogo from '../../assets/cleanworks-logo 1.png';
import PhoneIcon from '../../Components/Icons/PhoneIcon';
import MailIcon from '../../Components/Icons/MailIcon';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900  text-white py-6">
      <div className="container max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 sm:text-left text-center xl:grid-cols-5 gap-6">
        {/* Column 1: Logo and Description */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <img
              src={cleanworksLogo}
              alt="Clean Works Logo"
              className="h-10 md:h-12 lg:h-14 w-auto max-w-[150px]"
            />
          </div>
          <p className="text-sm max-w-sm">
            Clean Works Hospitality is more than just a  cleaning service;
            we're your trusted  cleaning companion in Qatar.
          </p>
          <div className="flex space-x-4 mt-8">
            <Link>
              <FbIcon className="w-4 h-4" alt="Facebook" />
            </Link>
            <Link>
              <TwitterIcon className="w-4 h-4" alt="Twitter" />
            </Link>
            <Link>
              <InstaIcon className="w-4 h-4" alt="Instagram" />
            </Link>
            <Link>
              <LinkedInIcon className="w-4 h-4" alt="LinkedIn" />
            </Link>
            <Link>
              <GoogleIcon className="w-4 h-4" alt="Google" />
            </Link>
          </div>
        </div>

        {/* Column 2: Company */}
        <div>
          <h3 className="font-bold text-[18px]  mb-3">Company</h3>
          <ul className="text-sm space-y-4">
            <li><Link>About Us</Link></li>
            <li><Link>Services</Link></li>
            <li><Link>Blog</Link></li>
            <li><Link>Testimonial</Link></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h3 className="font-bold text-[18px] mb-3">Support</h3>
          <ul className="text-sm space-y-4">
            <li><Link>Help Center</Link></li>
            <li><Link>Contact Us</Link></li>
            <li><Link>Book a Service</Link></li>
            <li><Link>Feedback</Link></li>
          </ul>
        </div>

        {/* Column 4: Services */}
        <div>
          <h3 className="font-bold text-[18px]  mb-3">Services</h3>
          <ul className="text-sm space-y-4">
            <li><Link>Residential Cleaning</Link></li>
            <li><Link>Deep Cleaning Services</Link></li>
            <li><Link>Outdoor Cleaning</Link></li>
            <li><Link>Water Tank Cleaning</Link></li>
          </ul>
        </div>

        {/* Column 5: Contact Us */}
        <div>
          <h3 className="font-bold  text-[18px] mb-3">Contact Us</h3>
          <ul className="text-sm space-y-4">
            <li>
              <Link className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5" alt="Phone" />
                <span>0000000000</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2">
                <MailIcon className="w-5 h-5"/>
                <span className=" max-w-[200px]">
                  mashhood@cleanworksqatar.com
                </span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2">
                <MailIcon className="w-5 h-5"/>
                <span className="truncate max-w-[200px]">
                  sales@cleanworksqatar.com
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 items-center mx-auto px-4 mt-10 text-center 
                      text-[15px] border-t border-gray-700 pt-4">
        <p className="flex-1 text-left mx-4 sm:mx-8 -mb-3">
          © Copyright by Marketbytes. All rights reserved.
        </p>
        <div className="flex-1 flex flex-wrap justify-center -mx-28 space-x-4 sm:space-x-16 -mb-3">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Legal</a>
          <a href="#">Site Map</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
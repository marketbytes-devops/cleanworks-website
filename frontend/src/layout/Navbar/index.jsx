import { Link } from 'react-router-dom';
import cleanworksLogo from '../../assets/cleanworks-logo 1.png';
import HomeIcon from '../../Components/Icons/HomeIcon';
import almasLogo from '../../assets/subsidiary-of-almas-movers 1.png';
import Button from '../../Components/Button';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Form from '../../Components/Form';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsOpen(false); // Close mobile menu if open
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="w-full bg-white fixed top-0 z-50">
        <div className="container max-w-[95%] mx-auto px-12 py-4 flex items-center justify-between h-18">
          <img src={cleanworksLogo} alt="Clean Works Logo" className="h-10 md:h-12 lg:h-14 w-auto" />

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              onClick={() => {
                console.log("Toggling menu, isOpen:", !isOpen);
                setIsOpen(!isOpen);
              }}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </Button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center">
            <ul className="flex items-center gap-4 xl:gap-9 font-medium xl:text-lg md:text-[16px]">
              <li>
                <Link to="/">
                  <HomeIcon className="h-6 w-auto" />
                </Link>
              </li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/services">Service</Link></li>
              <li><Link to="/service-fee">Service Fee</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
              <li>
                <Button 
                  onClick={openModal}
                  className="bg-[#6EA01E] text-white w-32 xl:w-40 h-12 rounded-4xl text-center hover:bg-amber-300"
                >
                  Get a quote
                </Button>
              </li>
              <li>
                <img src={almasLogo} alt="Almas Logo" className="hidden lg:block h-14 w-auto" />
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-blue-950 shadow-md z-60">
            <div className="flex justify-end p-4">
              <Button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <FaTimes size={24} />
              </Button>
            </div>
            <ul className="flex flex-col items-center gap-6 py-6 font-medium text-lg">
              <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
              <li><Link to="/service" onClick={() => setIsOpen(false)}>Service</Link></li>
              <li><Link to="/service-fee" onClick={() => setIsOpen(false)}>Service Fee</Link></li>
              <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
              <li><Link to="/contacts" onClick={() => setIsOpen(false)}>Contacts</Link></li>
              <li>
                <Button 
                  onClick={openModal}
                  className="bg-[#6EA01E] text-white w-xl h-12 rounded-4xl text-center hover:bg-amber-300"
                >
                  Get a quote
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center ">
          <div className="relative bg-white rounded-lg shadow-xl w-[90%] max-w-2xl max-h-[90vh] 
                         overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <FaTimes size={24} />
            </button>

            {/* Modal Content - Your Form Component */}
            <div className="p-6 md:p-8">
              <Form onClose={closeModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
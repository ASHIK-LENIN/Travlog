import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Facebook, Instagram, Logo, Twitter } from '../assets/icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
          {/* Travlog Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src={Logo} alt="logo" />
              <span className="text-2xl font-bold">Travlog</span>
            </div>
            <p className="text-gray-600 mb-4">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-purple-600 hover:text-purple-800">
                <img src={Instagram} width={30} alt="icons" />
              </Link>
              <Link to="#" className="text-purple-600 hover:text-purple-800">
                <img src={Twitter} width={30} alt="icons" />
              </Link>
              <Link to="#" className="text-purple-600 hover:text-purple-800">
                <img src={Facebook} width={30} alt="icons" />
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 flex justify-between items-center">
              Company
              <button onClick={() => toggleSection('company')} className="md:hidden">
                <MdKeyboardArrowDown className={`w-6 h-6 transition-transform ${openSection === 'company' ? 'transform rotate-180' : ''}`} />
              </button>
            </h3>
            <ul className={`space-y-2 ${openSection === 'company' ? 'block' : 'hidden md:block'}`}>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">Career</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">Mobile</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 flex justify-between items-center">
              Contact
              <button onClick={() => toggleSection('contact')} className="md:hidden">
                <MdKeyboardArrowDown className={`w-6 h-6 transition-transform ${openSection === 'contact' ? 'transform rotate-180' : ''}`} />
              </button>
            </h3>
            <ul className={`space-y-2 ${openSection === 'contact' ? 'block' : 'hidden md:block'}`}>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">Why Travlog?</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">Partner with us</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">FAQ's</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
            </ul>
          </div>

          {/* Meet Us Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 flex justify-between items-center">
              Meet Us
              <button onClick={() => toggleSection('meetUs')} className="md:hidden">
                <MdKeyboardArrowDown className={`w-6 h-6 transition-transform ${openSection === 'meetUs' ? 'transform rotate-180' : ''}`} />
              </button>
            </h3>
            <ul className={`space-y-2 ${openSection === 'meetUs' ? 'block' : 'hidden md:block'}`}>
              <li className="text-gray-600">+00 92 1234 56789</li>
              <li className="text-gray-600">info@travlog.com</li>
              <li className="text-gray-600">205. R Street, New York BD23200</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

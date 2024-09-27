import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Facebook, Instagram, Logo, Twitter } from '../assets/icons';
import { Link } from 'react-router-dom';

const footerSections = [
  {
    title: 'Company',
    items: [
      { text: 'About', link: '#' },
      { text: 'Career', link: '#' },
      { text: 'Mobile', link: '#' },
    ]
  },
  {
    title: 'Contact',
    items: [
      { text: 'Why Travlog?', link: '#' },
      { text: 'Partner with us', link: '#' },
      { text: 'FAQ\'s', link: '#' },
      { text: 'Blog', link: '#' },
    ]
  },
  {
    title: 'Meet Us',
    items: [
      { text: '+00 92 1234 56789', link: null },
      { text: 'info@travlog.com', link: null },
      { text: '205. R Street, New York BD23200', link: null },
    ]
  }
];

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Travlog Logo and Description */}
          <div className="flex flex-col w-full lg:w-[560px] mb-8 lg:mb-0">
            <div className="flex flex-col gap-8">
              <div className="flex items-center mb-4 justify-start">
                <img src={Logo} alt="logo" className="h-8 w-auto" />
                <span className="ml-2 text-2xl font-bold">Travlog</span>
              </div>
              <p className="text-gray-600 mb-4 lg:mr-12 text-base leading-8">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
              </p>
            </div>

            <div className="flex space-x-4 flex-row mt-7">
              {[Instagram, Twitter, Facebook].map((Icon, index) => (
                <Link key={index} to="#" className="text-purple-600 hover:text-purple-800">
                  <img src={Icon} width={30} alt={`social-icon-${index}`} />
                </Link>
              ))}
            </div>
          </div>

          {/* right side */}
          <div className="grid grid-cols-1 md:grid-cols-3 w-full lg:w-[560px] lg:mx-16 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="col-span-1">
                <h3 className="text-lg font-semibold mb-4 flex justify-between items-center">
                  {section.title}
                  <button onClick={() => toggleSection(section.title)} className="md:hidden">
                    <MdKeyboardArrowDown className={`w-6 h-6 transition-transform ${openSection === section.title ? 'transform rotate-180' : ''}`} />
                  </button>
                </h3>
                <ul className={`space-y-2 ${openSection === section.title ? 'block' : 'hidden md:block'}`}>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.link ? (
                        <Link to={item.link} className="text-gray-600 hover:text-gray-900">{item.text}</Link>
                      ) : (
                        <span className="text-gray-600">{item.text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
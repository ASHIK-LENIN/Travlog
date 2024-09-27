import React, { useState, useEffect, useRef } from 'react';
import { FaGlobeAmericas, FaCalendarCheck, FaCloudSun } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center flex-shrink-0 max-w-[350px] h-[350px] justify-center">
    <div className="text-4xl mb-4 text-blue-500">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const Services = () => {
  const [screenSize, setScreenSize] = useState('large');
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize('large');
      } else if (window.innerWidth >= 768) {
        setScreenSize('medium');
      } else {
        setScreenSize('small');
      }
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleMouseMove = (e) => {
    if (screenSize !== 'large' || !scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const mouseX = e.clientX - containerRect.left;
    const scrollPercentage = mouseX / containerWidth;
    const maxScroll = container.scrollWidth - containerWidth;
    
    container.scrollLeft = maxScroll * scrollPercentage;
  };

  const services = [
    {
      icon: <FaGlobeAmericas />,
      title: "Best Tour Guide",
      description: "What looked like a small patch of purple grass, above five feet."
    },
    {
      icon: <FaCalendarCheck />,
      title: "Easy Booking",
      description: "Square, was moving across the sand in their direction."
    },
    {
      icon: <FaCloudSun />,
      title: "Weather Forecast",
      description: "What looked like a small patch of purple grass, above five feet."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className={`flex ${screenSize === 'large' ? 'flex-row items-center' : 'flex-col'}`}>
        <div className={`${screenSize === 'large' ? 'w-1/3 pr-8' : 'w-full mb-8 flex flex-col items-center justify-center'}`}>
          <h2 className="text-pink-500 font-bold mb-2">SERVICES</h2>
          <h1 className="text-3xl font-bold">Our top value categories for you</h1>
        </div>
        
        <div className={`${screenSize === 'large' ? 'w-2/3' : 'w-full'}`}>
          <div 
            ref={scrollContainerRef}
            className={`
              ${screenSize === 'small' ? 'flex flex-col space-y-4 items-center justify-center' : 
                screenSize === 'medium' ? 'grid grid-cols-3 gap-4' : 
                'flex overflow-x-auto space-x-4 pb-4'}
            `}
            style={{ 
              cursor: screenSize === 'large' ? 'pointer' : 'default',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            onMouseMove={handleMouseMove}
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
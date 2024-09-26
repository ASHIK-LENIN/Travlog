import React, { useState, useRef, useEffect } from 'react';

import { booking, cloudy, destination } from '../assets/icons';

const ServiceCard = ({ icon, title, description }) => (
  <div className="w-full lg:w-[350px] h-auto lg:h-[443px] p-8 lg:p-16 lg:pt-64 border-t border-gray-200 rounded-tl-3xl shadow-lg bg-white flex flex-col items-center flex-shrink-0">
    <div className="text-4xl lg:text-5xl mb-4 lg:mb-6 text-blue-500">{icon}</div>
    <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const Services = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleMouseMove = (e) => {
    if (!isLargeScreen || !scrollRef.current) return;
    const container = scrollRef.current;
    const containerWidth = container.clientWidth;
    const mouseX = e.clientX - container.getBoundingClientRect().left;
    const scrollPercentage = mouseX / containerWidth;
    const maxScroll = container.scrollWidth - containerWidth;
    container.scrollLeft = maxScroll * scrollPercentage;
  };

  const services = [
    {
      icon: destination,
      title: "Best Tour Guide",
      description: "What looked like a small patch of purple grass, above five feet."
    },
    {
      icon: booking,
      title: "Easy Booking",
      description: "Square, was moving across the sand in their direction."
    },
    {
      icon: cloudy,
      title: "Weather Forecast",
      description: "What looked like a small patch of purple grass, above five feet."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
        <div className="w-full lg:w-[444px] mb-12 lg:mb-0">
          <h2 className="text-pink-500 font-semibold mb-4">SERVICES</h2>
          <h1 className="text-4xl font-bold mb-4">Our top value categories for you</h1>
        </div>
        
        <div 
          className="w-full lg:w-[750px] overflow-hidden"
          onMouseMove={handleMouseMove}
          style={{ cursor: isLargeScreen ? 'pointer' : 'default' }}
        >
          <div
            ref={scrollRef}
            className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 lg:space-x-6 overflow-x-auto lg:overflow-x-hidden"
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
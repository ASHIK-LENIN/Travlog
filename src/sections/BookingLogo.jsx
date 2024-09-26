import React from 'react';
import { BLogo1, BLogo2, BLogo3, BLogo4, BLogo5 } from '../assets/icons';

const BookingLogo = () => {
  return (
    <div className="w-full px-4 py-8 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center items-center">
          <div className="flex items-center justify-center w-full h-full">
            <img src={BLogo1} alt="Booking Logo 1" className="w-full max-w-[120px] sm:max-w-[150px] lg:max-w-[180px]" />
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <img src={BLogo3} alt="Booking Logo 3" className="w-full max-w-[120px] sm:max-w-[150px] lg:max-w-[180px]" />
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <img src={BLogo2} alt="Booking Logo 2" className="w-full max-w-[120px] sm:max-w-[150px] lg:max-w-[180px]" />
          </div>
          <div className="flex items-center justify-center w-full h-full md:col-start-1 lg:col-start-auto">
            <img src={BLogo5} alt="Booking Logo 5" className="w-full max-w-[120px] sm:max-w-[150px] lg:max-w-[180px]" />
          </div>
          <div className="flex items-center justify-center w-full h-full md:col-start-2 lg:col-start-auto">
            <img src={BLogo4} alt="Booking Logo 4" className="w-full max-w-[120px] sm:max-w-[150px] lg:max-w-[180px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingLogo;
import React, { useState } from 'react'
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io"
import { FaStar } from 'react-icons/fa'
import { Img1, Img2, Img3 } from '../assets/images'

const destinations = [
  {
    id: 1,
    title: 'Paradise Beach, Bantayan Island',
    price: 550.16,
    location: 'Rome, Italy',
    image: Img1,
    rating: 4.8,
  },
  {
    id: 2,
    title: 'The Ocean with full of Colors',
    price: 20.99,
    location: 'Maldives',
    image: Img2,
    rating: 4.5,
  },
  {
    id: 3,
    title: 'Mountain View, Above the cloud',
    price: 150.99,
    location: 'United Arab Emirates',
    image: Img3,
    rating: 5.0,
  },
  {
    id: 4,
    title: 'Serene Lake Retreat',
    price: 299.99,
    location: 'Switzerland',
    image: Img3,
    rating: 4.9,
  },
  {
    id: 5,
    title: 'Ancient City Wonders',
    price: 180.50,
    location: 'Greece',
    image: Img2,
    rating: 4.7,
  },
  {
    id: 6,
    title: 'Tropical Rainforest',
    price: 210.75,
    location: 'Costa Rica',
    image: Img1,
    rating: 4.6,
  },
]

export default function Component() {
  const [currentPage, setCurrentPage] = useState(0)
  const destinationsPerPage = 3
  const totalPages = Math.ceil(destinations.length / destinationsPerPage)

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))
  }

  const currentDestinations = destinations.slice(
    currentPage * destinationsPerPage,
    (currentPage + 1) * destinationsPerPage
  )

  return (
    <div className="w-full max-w-[1184px] mx-auto p-4 sm:p-6 md:p-8 lg:p-[67px]">
      {/* top section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        {/* heading section */}
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h1 className="font-mono text-pink-600 font-bold text-lg sm:text-xl mb-2 sm:mb-4">TOP DESTINATION</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Explore top destination</h2>
        </div>

        {/* arrow section */}
        <div className="flex gap-4">
          {/* Back Arrow */}
          <button 
            onClick={handlePrevious}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px] rounded-full bg-gray-200 flex justify-center items-center transition-colors hover:bg-gray-300" 
            aria-label="Previous destination"
          >
            <IoIosArrowRoundBack className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-600" />
          </button>

          {/* Forward Arrow */}
          <button 
            onClick={handleNext}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px] rounded-full bg-indigo-600 flex justify-center items-center transition-colors hover:bg-indigo-700" 
            aria-label="Next destination"
          >
            <IoIosArrowRoundForward className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
          </button>
        </div>
      </div>

      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentDestinations.map((destination) => (
          <div key={destination.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            {/* card img section */}
            <div className="w-full h-48 sm:h-64 md:h-[350px]">
              <img src={destination.image} alt={destination.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <div className="flex flex-col gap-4 px-2 ">
                <div className="flex justify-between items-start mb-2">
                <div className="w-[223px]">
                <h3 className="text-lg font-bold">{destination.title}</h3>
                </div>
                <span className="text-pink-500 font-bold">${destination.price.toFixed(2)}</span>
              </div>
              <p className="text-gray-600 mb-2">{destination.location}</p>
                </div>
             

              <div className="flex items-center gap-2 px-2">
              <span className="ml-1 text-orange-500 font-bold text-xl">{destination.rating} </span>
                <FaStar className="w-5 h-5 text-orange-500" aria-hidden="true" />
                
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
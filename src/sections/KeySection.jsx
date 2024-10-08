import React from 'react'
import { Calcon, DisIcon, LocIcon } from "../assets/icons"
import { key } from "../assets/images"

const KeySection = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row lg:gap-[70px]">
        {/* Image section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 order-1 lg:order-2">
          <img src={key} alt="keyImage" className="w-full" />
        </div>

        {/* Content section */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col items-center text-center md:items-center md:text-center lg:items-start lg:text-left">
          <div className="flex flex-col gap-6 mb-8">
            <h1 className='font-mono text-pink-600 font-bold text-xl'>KEY FEATURES</h1>
            <h3 className="text-3xl md:text-4xl font-bold">We Offer Best Service</h3>
            <p className="text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi distinctio aspernatur aperiam voluptatem veniam reiciendis consectetuo</p>
          </div>

          {/* Icon section */}
          <div className="flex flex-col gap-4 mt-16 w-full">
            {[
              { icon: LocIcon, title: "We Offer Best Service", description: "Lorem ipsum dolor sit amet consectetur." },
              { icon: Calcon, title: "Schedule Your Trip", description: "Lorem ipsum dolor sit amet consectetur." },
              { icon: DisIcon, title: "Get Discount Coupon", description: "Lorem ipsum dolor sit amet consectetur." },
            ].map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center p-4  rounded-xl md:p-6 gap-4  hover:shadow-lg transition-all duration-300">
                <img src={item.icon} width={50} height={50} alt="icon" className="w-12 h-12 md:w-16 md:h-16 mb-2 sm:mb-0" />
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <h2 className="text-xl md:text-2xl font-bold">{item.title}</h2>
                  <p className="text-sm md:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeySection
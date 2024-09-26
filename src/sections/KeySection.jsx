import React from 'react'
import { Calcon, DisIcon, LocIcon } from "../assets/icons"
import { keysection } from "../assets/images"

const KeySection = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row lg:gap-[70px]">
        {/* Image section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 order-1 lg:order-2">
          <img src={keysection} alt="keyImage" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        {/* Content section */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="flex flex-col gap-6 mb-8">
            <h1 className=' font-mono text-pink-600 font-bold text-xl'>KEY FEATURES</h1>
            <h3 className="text-3xl md:text-4xl font-bold">We Offer Best Service</h3>
            <p className="text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi distinctio aspernatur aperiam voluptatem veniam reiciendis consectetuo</p>
          </div>

          {/* Icon section */}
          <div className="flex flex-col gap-4">
            {[
              { icon: LocIcon, title: "We Offer Best Service", description: "Lorem ipsum dolor sit amet consectetur." },
              { icon: Calcon, title: "Schedule Your Trip", description: "Lorem ipsum dolor sit amet consectetur." },
              { icon: DisIcon, title: "Get Discount Coupon", description: "Lorem ipsum dolor sit amet consectetur." },
            ].map((item, index) => (
              <div key={index} className="flex flex-row items-center bg-slate-100 rounded-xl p-4 md:p-6 gap-4 hover:border-2 transition-all duration-300">
                <img src={item.icon} width={50} height={50} alt="icon" className="w-12 h-12 md:w-16 md:h-16" />
                <div className="flex flex-col">
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
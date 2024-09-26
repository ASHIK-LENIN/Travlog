import React from 'react'
import { travelSection } from '../assets/images'

const TravelPoint = () => {
    return (
        <div className='w-full max-w-[82rem] mx-auto px-4 lg:px-0 py-8 lg:py-16 ml-0'>
            <div className='flex flex-col md:flex-col lg:flex-row items-center'>
                {/* Image div */}
                <div className="w-full sm:w-[24.875rem] md:w-[54.4375rem] lg:w-auto mb-16 md:mb-16 lg:mb-0">
                    <img src={travelSection} width={871} height={697} alt="" className="w-full h-auto sm:h-[19.90625rem] md:h-[43.5625rem]" />
                </div>

                {/* main content */}
                <div className="flex flex-col gap-8 md:gap-16 lg:gap-16 w-full sm:w-[24.875rem] md:w-[52rem] lg:w-[27.5625rem] lg:h-[41.6875rem] lg:mt-7">
                    {/* content div */}
                    <div className="flex flex-col gap-8 md:gap-8 lg:gap-6 mb-8">
                        <h1 className='font-mono text-pink-600 font-bold text-xl'>TRAVEL POINT</h1>
                        <h3 className="text-3xl md:text-4xl font-bold">We helping you find your dream location</h3>
                        <p className="text-gray-400">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                    </div>

                    {/* four tiles */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-8">
                        {[
                            { number: '500+', text: 'Holiday Package' },
                            { number: '100', text: 'Luxury Hotel' },
                            { number: '7', text: 'Premium Airlines' },
                            { number: '2k+', text: 'Happy Customer' },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center border-2 rounded-xl w-full md:w-[25rem] lg:w-[12.75rem] h-[9.4375rem] justify-center">
                                <h4 className='text-[2.1875rem] text-orange-600 font-bold'>{item.number}</h4>
                                <p className='text-[1.125rem]'>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelPoint

import React from 'react';
import { HeroBag } from "../assets/icons";
import { HeroImg } from "../assets/images";
import { FaPlayCircle } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center px-4 py-8 lg:py-16">
            <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
                {/* Left content div */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-12 text-center lg:text-left">
                    {/* Explore badge */}
                    <div className="flex flex-row justify-center lg:justify-start items-center w-fit mx-auto lg:mx-0 py-2 px-4 rounded-2xl shadow-lg gap-2 bg-white">
                        <h3 className="text-pink-500 font-semibold text-sm lg:text-base">Explore the world!</h3>
                        <img src={HeroBag} alt="" className="w-5 h-5" />
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                        Travel <span className="text-pink-500">top destination </span>
                        of the world
                    </h1>

                    {/* Paragraph */}
                    <p className="text-gray-500 text-base lg:text-lg">
                        We always make our customer happy by providing
                        as many choices as possible
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="text-sm font-bold py-3 px-6 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors">
                            Get Started
                        </button>
                        <button className="flex flex-row justify-center items-center text-sm font-bold rounded-full bg-white hover:bg-gray-100 shadow-md py-3 px-6 gap-2 transition-colors">
                            <FaPlayCircle className="text-violet-700 text-lg"/>
                            Watch Demo
                        </button>
                    </div>
                </div>

                {/* Right image div */}
                <div className="w-full lg:w-1/2">
                    <img 
                        src={HeroImg} 
                        alt="heroImg" 
                        className="w-full h-auto max-w-xl mx-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
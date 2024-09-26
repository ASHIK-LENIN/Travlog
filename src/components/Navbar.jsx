import React from 'react';
import { NavLink } from "react-router-dom";
import { Logo, menuIcon } from "../assets/icons";



const Navbar = () => {
  return (
    <nav className="w-full px-4 py-4 md:py-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        {/* Logo div - always visible */}
        <div className="flex items-center order-1 md:order-2 md:flex-grow md:justify-center lg:flex-grow-0 lg:justify-start">
          <img src={Logo} alt="Logo svg" className="h-8 w-auto" />
          <h1 className="ml-2 text-2xl font-bold">Travlog</h1>
        </div>

        {/* Hamburger menu - visible on small and medium screens */}
        <div className="lg:hidden order-2 md:order-1">
          
          <img src={menuIcon} alt="menuIcon"  className="h-6 w-6"/>
        </div>

        {/* Nav links - hidden on small screens, visible from medium up */}
        <div className="hidden lg:flex items-center justify-center flex-grow order-3 mt-4 lg:mt-0">
          <div className="text-sm gap-8 text-gray-500 flex">
            <NavLink to="/" className="hover:text-gray-900">Home</NavLink>
            <NavLink to="/discover" className="hover:text-gray-900">Discover</NavLink>
            <NavLink to="/deals" className="hover:text-gray-900">Special Deals</NavLink>
            <NavLink to="/contact" className="hover:text-gray-900">Contact</NavLink>
          </div>
        </div>

        {/* Button div - hidden on small screens, visible from medium up */}
        <div className="hidden md:flex items-center gap-4 order-4">
          <button className="px-6 py-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">Log In</button>
          <button className="px-6 py-2 rounded-full text-white bg-violet-700 hover:bg-violet-800 transition-colors">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
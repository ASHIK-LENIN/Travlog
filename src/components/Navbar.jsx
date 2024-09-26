import { NavLink } from "react-router-dom"
import { Logo } from "../assets/icons"



const Navbar = () => {
  return (
    <div className='flex flex-row justify-center items-center'>
    
    <div className="flex justify-between py-8 items-center font-bold w-[1184px] h-[113px]">
      <div className="flex flex-row justify-center items-center p-2 gap-2">
      <img src={Logo} alt="Logo svg" />
      <h1 className="text-2xl  font-bold">Travlog</h1>
      </div>
      
      <div className="flex text-sm gap-16 w-[428px] h-4 text-gray-500">

        <NavLink>Home</NavLink>
        <NavLink>Discover</NavLink>
        <NavLink>Special Deals</NavLink>
        <NavLink>Contact</NavLink>
      </div>

      <div className="w-[220px] h-[49px] flex flex-row">
        <button className="px-6 py- rounded-full">Log In</button>
        <button className="px-6 py-3 rounded-full text-white bg-violet-700">Sign Up</button>
      </div>
    </div>

    </div>
  )
}

export default Navbar
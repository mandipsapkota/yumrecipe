import {FaPizzaSlice , FaHamburger} from "react-icons/fa"
import {GiNoodles , GiChopsticks} from "react-icons/gi"
import { NavLink } from "react-router-dom"

const Category = () => {
  return (
    <div className="flex w-100 justify-center gap-3 m-2">
        <NavLink to="/cuisine/italian" className="bg-gray-600 flex flex-col items-center gap-1 p-3 rounded-full text-white cursor-pointer hover:bg-gray-950 transition-all w-[83px] h-[83px] justify-center">
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </NavLink>
        <NavLink to="/cuisine/american" className="bg-gray-600 flex flex-col items-center gap-1 p-3 rounded-full text-white cursor-pointer hover:bg-gray-950 transition-all w-[83px] h-[83px] justify-center">
            <FaHamburger/>
            <h4>American</h4>
        </NavLink>
        <NavLink to="/cuisine/thai" className="bg-gray-600 flex flex-col items-center gap-1 p-3 rounded-full text-white cursor-pointer hover:bg-gray-950 transition-all w-[83px] h-[83px] justify-center">
            <GiNoodles/>
            <h4>Thai</h4>
        </NavLink>
        <NavLink to="/cuisine/chinese" className="bg-gray-600 flex flex-col items-center gap-1 p-3 rounded-full text-white cursor-pointer hover:bg-gray-950 transition-all w-[83px] h-[83px] justify-center">
            <GiChopsticks/>
            <h4>Chinese</h4>
        </NavLink>
    </div>
  )
}

export default Category
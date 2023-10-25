import { FC } from "react";
import Logo from "./Logo";
import { FaBars, FaUserCircle } from "react-icons/fa";
import Navlinks from "./Navlinks";

import { Outlet } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <div className="h-20 bg-white  md:justify-evenly lg:justify-around justify-between px-7 items-center flex ">
      <div className="lg:hidden cursor-pointer">
        <FaBars className="text-[--primary-dark-blue1] text-xl md:text-3xl hover:rotate-[90deg] transition-all duration-300" />
      </div>
      <div>
        <Logo />
      </div>
      <div className="flex justify-between items-center">
        <div className="hidden lg:block">
          <Navlinks />
        </div>
        <div className="sm:w-20 md:w-28 border bg-[--primary-dark-blue2] rounded-md py-1 border-none lg:ml-7 cursor-pointer">
          <div className="flex justify-evenly items-center mx-2">
            <FaUserCircle className="text-white bg-[--primary-dark-blue2] rounded-full md:text-lg lg:text-md mr-1 " />
            <div className="text-white md:text-lg lg:text-md">User</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import Button from "../CUSTOM_UI/Button";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [ShowMenu, setShowMenu] = useState(false); // Initially, set to false to hide menu on mobile

  const toggleItems = () => {
    const isMobile = window.innerWidth < 1024; // Only toggle on mobile screens (less than 1024px)
    if (isMobile) {
      setShowMenu(!ShowMenu); // Toggle menu on mobile
    }
  };

  return (
    <div className="  z-50 relative flex justify-around items-center">
      {/* nav logo */}
      <div
        className="hover:cursor-pointer rounded-lg bg-[#da3a3a] hover:shadow-none shadow-lg shadow-red-600 hover:bg-[#eb0f0f] hover:text-white transition-all duration-300 md:text-2xl 
                      font-semibold  hover:px-4 md:px-8 md:py-3 px-4 py-2 "
      >
        invictus⚡
      </div>

      {/* nav toggle (visible only on mobile) */}
      <div
        onClick={toggleItems}
        className="text-4xl font-bold block lg:hidden md:hidden"
      >
        {ShowMenu ? <RxCross1 /> : <CiMenuFries />}
      </div>

      {/* nav items */}

      {/* show in Laptop */}
      <div className=" hidden lg:flex md:flex gap-x-6 ">
        <div onClick={toggleItems}>
          <Button data="Home" />
        </div>
        <div onClick={toggleItems}>
          <Button data="About" />
        </div>
        <div onClick={toggleItems}>
          <Button data="Projects" />
        </div>
        <div onClick={toggleItems}>
          <Button data="Contact" />
        </div>
      </div>

      <div
        className={` w-screen h-screen bg-red-400 absolute top-full translate-y-10 pt-10 md:translate-y-0 gap-y-6 items-center md:static lg:static flex gap-x-4 
                    ${ShowMenu ? "flex" : "hidden"} md:flex-row flex-col`}
      >
        <div onClick={toggleItems}>
          <Button data="Home" />
        </div>
        <div onClick={toggleItems}>
          <Button data="About" />
        </div>
        <div onClick={toggleItems}>
          <Button data="Projects" />
        </div>
        <div onClick={toggleItems}>
          <Button data="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Header;

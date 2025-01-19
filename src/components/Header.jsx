import React, {  useState } from "react";
import { motion } from "motion/react";
import Button from "../CUSTOM_UI/Button";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { name } from "../assets/Constant";

const Header = (
  {
  scrollToFirstPage,
  scrollToSecondPage,
  scrollToThirdPage,
  scrollToFourthPage,
  scrollToFifthPage,
}

) => {

 

  const [ShowMenu, setShowMenu] = useState(false); 
  const toggleItems = () => {

      setShowMenu(!ShowMenu); 
    
  };

  return (
    <div className="w-[90%]  relative z-50  flex justify-between   items-center">
      <div
      onClick={scrollToFirstPage}
        className="md:ml-20 ml-10 rounded-lg bg-[#e21515] hover:shadow-none shadow-lg shadow-red-600 hover:bg-[#eb0f0f] hover:text-white transition-all duration-300 md:text-2xl 
          font-semibold border border-red-500 hover:px-4 md:px-8 md:py-3 px-4 py-2 "
      >
        { name }⚡
      </div>

      {/* nav toggle (visible only on mobile) */}
      <div
        onClick={toggleItems}
        className="text-4xl border-[2px] border-neutral-700 shadow-2xl shadow-neutral-950 rounded-lg p-1 md:font-extrabold font-bold "
      >
        {ShowMenu ? <RxCross1 /> : <CiMenuFries />}
      </div>

      {/* nav items */}

     

      <motion.div
      initial={{  y: 220 }} 
      whileInView={{   y: 0 }} 
      viewport={{ once: false }} 
      transition={{ duration: 1.1, ease: "easeInOut" }}
        className={`bg-neutral-400 w-screen h-screen z-50  md:absolute md:top-0  md:right-[80px]   md:w-[300px] md:h-auto md:pb-10  absolute top-[140%] translate-y-10 pt-10 md:translate-y-0 gap-y-6 items-center  flex gap-x-4 
                    ${ShowMenu ? "flex" : "hidden"}  flex-col `}
      >
        <div  onClick={() => { scrollToFirstPage(); toggleItems(); }}>
          <Button  data="Home" />
        </div>
        <div onClick={() => { scrollToSecondPage(); toggleItems(); }}>
          <Button  data="About" />
        </div>
        <div onClick={() => { scrollToThirdPage(); toggleItems(); }}>
          <Button  data="Projects" />
        </div>
        <div onClick={() => { scrollToFourthPage(); toggleItems(); }}>
          <Button  data="Service" />
        </div>
        <div onClick={() => { scrollToFifthPage(); toggleItems(); }}>
          <Button data="Contact" />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;

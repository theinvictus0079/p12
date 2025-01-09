import React from "react";

import p from "../assets/robot2.avif";
import { IoMdArrowForward } from "react-icons/io";
import { AiOutlineDownload } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";

const Home = () => {
  return (
    <div className=" mt-10 md:mt-0 md:relative md:h-screen md:px-[5%] flex flex-col md:flex-row justify-between items-start">
      {/* left  */}

      <div className=" font-serif font-bold w-[300px] flex justify-start  items-start flex-col">
        <div className="text-5xl">Hi</div>
        <div className="text-4xl mt-4">
          I'm <span className="text-red-500">INVICTUS</span>
        </div>
        <div className="font-semibold font-sans text-3xl mt-3">
          Software Engineer
        </div>
        <div className="">
            <div className="md:mt-16 mt-10 flex justify-between items-center pl-2 pr-1 py-2 bg-red-500 text-lg rounded-lg w-[160px] h-[35px]">
            <div>Hire me</div> <div className="bg-red-400 text-3xl rounded-lg text-neutral-200 "><IoMdArrowForward /></div>
            </div>
                
        </div>

        <div className="hidden md:flex lg:flex absolute top-[80%] md:top-[60%]  justify-center items-center gap-x-2 "><span className="text-red-500 text-xl"><GiWorld /></span>
        <span className=" text-zinc-600">www.behance.net.com</span></div>
      </div>

      {/* middle */}

      <div className="md:absolute -z-10 md:left-[50%] md:top-[-5%] md:translate-x-[-60%] md:w-[700px] w-[300px]">
        <img className="w-full h-full object-contain ob" src={p} alt="" />
      </div>
      

      {/* right */}

     <div className="md:mt-0 mt-10 md:pl-20 flex flex-wrap justify-start text-start items-start flex-col  w-[400px] font-sans font-semibold text-2xl">

            <div className="text-red-500 text-base ">who am I</div>
            <div>web developer</div>
            <div>web designer</div>
            <div>Logo maker</div>

            <div className="mt-5 text-base w-[300px]">Hey are you looking for web developer to build your portfolio website to grow your online presence ? 
            let's shake hand with me
            </div>

            <div className="mt-32 text-xl text-red-500 px-2 py-1 flex justify-center items-center gap-x-2 w-[180px]">Download CV <AiOutlineDownload /></div>
            <div className="bg-red-500 h-[1px] w-[180px]"></div>

     </div>

    </div>
  );
};

export default Home;

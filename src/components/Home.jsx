import React from "react";
import { motion } from "motion/react";
import p from "../assets/robot2.avif";
import { IoMdArrowForward } from "react-icons/io";
import { AiOutlineDownload } from "react-icons/ai";
import { name } from "../assets/Constant";

const Home = () => {
  return (
    <div className=" mt-10 md:mt-0 md:relative md:h-screen md:px-[10%] flex flex-col md:flex-row justify-center lg:justify-between md:justify-between md:items-start lg:items-start items-center">
      {/* left  */}

      <div className="z-20 font-serif font-bold w-[300px] flex justify-start  items-start flex-col">
        
        <motion.div
          initial={{ opacity: 0, y: -120 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          className="text-5xl"
        >
          Hi
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -120 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          className="text-4xl mt-4"
        >
          I'm <span className="text-red-500">{ name }</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -120 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false }} 
          transition={{ duration: 1.3, ease: "easeInOut" }}
          className="font-semibold font-sans text-3xl mt-3"
        >
          Software Engineer
        </motion.div>

        <div className="">
          <div className="transition-all duration-300  ease-in-out shadow-lg shadow-red-600 hover:shadow-none md:mt-16 mt-10 flex justify-between items-center pl-2 pr-1 py-2 bg-red-500 text-md hover:text-white font-sans rounded-lg w-[160px] h-[35px]">
            <div 
            >get in Touch
            </div>
            <motion.div 
            initial={{ opacity: 0, x: 120 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: false }} 
            transition={{ duration: 1.3, ease: "easeInOut" }}
            className="bg-red-400 text-3xl rounded-lg text-neutral-200 ">
              <IoMdArrowForward />
            </motion.div>
          </div>
        </div>

        <motion.div 
        initial={{ opacity: 0, scale:0.3 }} 
        whileInView={{ opacity: 1 , scale:1}} 
        viewport={{ once: false }} 
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="md:mt-24 my-8 rounded-md font-mono  transition-all ease-in-out   shadow-lg shadow-red-600 hover:shadow-none bg-red-500 text-lg hover:text-white p-2">
          Creative web developer offering portfolio, landing page, and CV services.
        </motion.div>

        
      </div>

      {/* middle */}

      <div 

      className="bg-neutral-400 md:absolute  z-10 md:left-[50%] md:top-[-5%] md:translate-x-[-60%]  md:w-[600px] w-[300px]">
       <motion.img 
       initial={{ opacity: 0, scale:0.5 }} 
       whileInView={{ opacity: 1, scale:1 }} 
       viewport={{ once: false }} 
       transition={{ duration: 1.3, ease: "easeInOut" }}
        className="mix-blend-darken w-full h-auto object-contain"
       
        src={p} 
        alt="Blended Image"
    />
      </div>

      {/* right */}

      <div className="z-20 md:mt-0 mt-10 md:pl-20 flex  justify-start text-start items-start flex-col  w-[300px] md:w-[400px]  font-sans font-semibold text-2xl">
        <motion.div
        initial={{ opacity: 0, y: -120 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: false }} 
        transition={{ duration: 1.3, ease: "easeInOut" }}
        className="text-red-500 text-base ">who am I</motion.div>
        <motion.div
        initial={{ opacity: 0, x: 120 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: false }} 
        transition={{ duration: 1.3, ease: "easeInOut" }}
        >web developer
        </motion.div>
        <motion.div
         initial={{ opacity: 0, x: 120 }} 
         whileInView={{ opacity: 1, x: 0 }} 
         viewport={{ once: false }} 
         transition={{ duration: 1.3, ease: "easeInOut" }}
        >web designer</motion.div>
        <motion.div
         initial={{ opacity: 0, x: 120 }} 
         whileInView={{ opacity: 1, x: 0 }} 
         viewport={{ once: false }} 
         transition={{ duration: 1.3, ease: "easeInOut" }}
        >Logo maker</motion.div>

        <motion.div
         initial={{ opacity: 0, x: 120 }} 
         whileInView={{ opacity: 1, x: 0 }} 
         viewport={{ once: false }} 
         transition={{ duration: 1.3, ease: "easeInOut" }}
        className="mt-5 text-base w-[300px]">
          Hey are you looking for web developer to build your portfolio website
          to grow your online presence ? let's shake hand with me
        </motion.div>

        <motion.div
         initial={{ opacity: 0, y: 120 }} 
         whileInView={{ opacity: 1, y: 0 }} 
         viewport={{ once: false }} 
         transition={{ duration: 1.3, ease: "easeInOut" }}
        className="py-2 shadow-lg shadow-red-700 hover:shadow-none mt-8 md:mt-32 text-xl transition-all duration-300 ease-in-out bg-red-500 hover:text-red-100 text-black rounded-xl  px-2  flex justify-center items-center gap-x-2 w-[180px] ">
          Download CV <AiOutlineDownload />
        </motion.div>
      </div>

    </div>
  );
};

export default Home;

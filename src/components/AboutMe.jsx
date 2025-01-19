import React from "react";
import { motion } from "motion/react";
import p from "../assets/robot2.avif";
import Social from "../CUSTOM_UI/Social"
import NumberUI from "../CUSTOM_UI/NumberUI";
import { name } from "../assets/Constant";
const AboutMe = () => {

    const data = [
        {n:"26+", name:"projects"},
        {n:"20+",name: "clients" },
        {n:"10k+" , name: "followers"},
        {n:"50+", name:"CV review"}
    ]
  return (
    <div className=" z-20   pb-10 flex flex-wrap justify-center items-start gap-x-0  md:gap-x-10">
      <div className="bg-neutral-400   md:w-[450px] w-[300px]  ">
        <motion.img
          initial={{ opacity: 0, scale: 0.5, x: -200 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          className="mix-blend-darken w-full h-auto  object-contain"
          src={p}
          alt="Blended Image"
        />
      </div>

      <div className=" w-[300px] md:w-[500px] flex flex-col justify-center font-sans font-semibold pt-10 ">
        <motion.div 
        
        class="pl-2 px-8 z-30 py-4 w-[200px] rounded-md text-red-600  hover:text-white   font-extrabold relative  after:-z-20 after:absolute after:h-1 after:w-1 after:bg-red-500 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#4d4747;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl">
        About me
        
        </motion.div>
        <div className="ml-2 my-2 w-[80%] h-[1px] bg-red-500"></div>

        <motion.div
        initial={{ opacity: 0,  x: 200 }}
        whileInView={{ opacity: 1,  x: 0 }}
        viewport={{ once: false }}        
        transition={{ duration: 1.3, ease: "easeInOut" }}
        
        className="p-3 text-center md:text-start leading-loose">
          { name } is a passionate software engineer specializing in web
          development and design. With expertise in React and Tailwind CSS, she
          creates stunning portfolio websites, landing pages, and offers CV
          review services. Dedicated to helping others grow their online
          presence, Alisha blends creativity and functionality to deliver
          impactful digital solutions.
        </motion.div>
        <div className="">
          <div className="">
            
            <Social />
          </div>
        </div>
      </div>

      <div className="w-[80%]  flex flex-wrap justify-center gap-10 mt-10">
        {data.map((d, index) => (
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          
          key={index}>
           <NumberUI data={d}/>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;

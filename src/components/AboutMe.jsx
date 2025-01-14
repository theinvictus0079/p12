import React from "react";
import { motion } from "motion/react";
import p from "../assets/robot2.avif";
import Social from "./Social";
import NumberUI from "../CUSTOM_UI/NumberUI";

const AboutMe = () => {

    const data = [
        {n:"26+", name:"project"},
        {n:"20+",name: "satisfied clients" },
        {n:"10k+" , name: "followers"},
        {n:"50+", name:"CV review"}
    ]
  return (
    <div className=" z-20 mt-14  pb-10 flex flex-wrap justify-center items-start  md:gap-x-10">
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

      <div className="md:w-[500px] flex flex-col justify-center font-sans font-semibold pt-10 ">
        <div className="p-3 text-red-600 font-semibold text-2xl">About me</div>
        <div className="p-3 text-center md:text-start leading-loose">
          Alisha is a passionate software engineer specializing in web
          development and design. With expertise in React and Tailwind CSS, she
          creates stunning portfolio websites, landing pages, and offers CV
          review services. Dedicated to helping others grow their online
          presence, Alisha blends creativity and functionality to deliver
          impactful digital solutions.
        </div>
        <div className="p-3 ">
          <div className="">
            
            <Social />
          </div>
        </div>
      </div>

      <div className="w-[80%] flex flex-wrap justify-center gap-10 mt-10">
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

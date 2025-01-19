import React from "react";
import ServiceCard from "../CUSTOM_UI/ServiceCard";
import { motion } from "motion/react";
const Service = () => {

  const data = [
    {
      title: "Web development",
      desc: "I am a fullstack web developer with expertise in modern development framework.",
      num: "01",
    },
    {
      title: "Resume/CV writing",
      desc: "Professional CV Review & Writing: Stand out with impactful resume crafted to showcase your skills.",
      num: "02",
    },
    {
      title: "Thumbnail design",
      desc: "Professional thubnail desing: Stand out with our creative thumbnail design, using professional tool.",
      num: "03",
    },
    {
      title: "Programing language",
      desc: "I will teach you Programming languag like Python, Java and C++ from scartch and guide you. ",
      num: "04",
    },
    {
      title: "Personal Mentor",
      desc: "I will be your personal mentor thoughout your entire coding journey , like a genie from the bottle.",
      num: "05",
    },
  ];

  return (
    <div className="mt-20   pb-20 flex flex-col justify-center items-center">
      <div className="ml-[4%] md:ml-[13%] self-start w-[340px] bg-red-500 shadow-red-600 shadow-lg  px-8 z-30 py-4 border-[3px] border-t-0 border-l-0 border-r-0 border-b-red-600 rounded-md text-zinc-900 hover:text-white   font-extrabold relative  after:-z-20 after:absolute after:h-1 after:w-1 after:bg-red-600 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl">
        Services
      </div>

      <div className="mt-20 px-12 flex flex-wrap justify-center items-center gap-x-14 gap-y-10">
        {data.map((services, index) => (
          <motion.div 
          
          initial={{  }} 
          animate={{
            
            scale: [1, 1.02, 1], // Pulsing effect (slightly enlarges and returns to normal)
            boxShadow: [
              "0px 0px 0px red", // No shadow
              "0px 10px 30px red", // Soft shadow
              "0px 0px 0px red", // Back to no shadow
            ],
          }}
          transition={{
            duration: 2, // Duration of the full animation cycle
            ease: "easeInOut",
            repeat: Infinity, // Loop the animation
          }}
          whileHover={{
            scale: 1, // Stops pulsing by fixing the scale
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", // Keeps the shadow static
            transition: { duration: 0.3, ease: "easeInOut" }, // Smooth hover transition
          }}

          className=""
          key={index}>
            <ServiceCard  service={services} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;

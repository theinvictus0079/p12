import React from "react";
import { motion } from "motion/react";

const ServiceCard = ({ service }) => {
  return (
    <div>
      <style>
        {`
        html {
  cursor: none; 
}`}
      </style>

      <div className="border border-red-300 relative service-card w-[340px] h-[250px] shadow-xl snap-start shrink-0 py-8 px-6 hover:bg-white flex flex-col items-start gap-3 transition-all duration-300 group bg-[#202127]">
        <motion.p
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          className="font-bold text-2xl group-hover:text-red-500 underline underline-offset-2 text-neutral-400"
        >
          {service.title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          className="mt-4 text-gray-300 group-hover:text-gray-800 text-lg font-semibold"
        >
          {service.desc}
        </motion.p>
        <motion.p
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 4, ease: "easeInOut" }}
        className="absolute top-[75%] right-4 bg-red-500 rounded-sm p-2 text-3xl  font-bold ">{service.num}</motion.p>
      </div>
    </div>
  );
};

export default ServiceCard;

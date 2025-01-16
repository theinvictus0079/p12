import React from "react";
import { motion } from "motion/react";
import ProjectButton from "./ProjectButton";

const ProjectslideCard = ({data}) => {
  return (
    <div>
      <style>
        {`
.card3d {
  position: relative;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 16px;
  box-shadow: 0 0 20px 8px #d0d0d0;
  overflow: hidden;
}

 /*Image*/
.card-image3d {
  position: absolute;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  background: #0a3394;
  background: linear-gradient(to top, #0a3394, #4286f4);
}

/*Description */
.card-description3d {
  display: flex;
  width:100%;
  position: absolute;
  gap: .5em;
  flex-direction: column;
  height: 100%;
  bottom: 0;
  border-radius: 16px;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 1rem;
}


.card3d:hover .card-description3d {
  transform: translateY(100%);
}

`}
      </style>
      <div className="border border-red-300 card3d md:w-[500px] w-[350px] md:h-[370px] h-[320px]">
        <div className="card-image3d  flex flex-col justify-start items-centre">
          <div className=" h-[250px] md:h-[290px] md:w-[500px] w-[350px]">
            <motion.img
            initial={{ scale:2 }}
            whileInView={{ scale:1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
              className="w-full h-full  object-cover object-top"
              src={data.image}
              alt=""
            />
          </div>
          <div className="bg-red-500 h-[80px] flex justify-center items-center">
            <a href="#">
              <ProjectButton />
            </a>
          </div>
        </div>

        <div
       

        className="card-description3d bg-neutral-800 text-red-500 opacity-80">
          <motion.p 
           initial={{  x: 200 }}
           whileInView={{ x: 0 }}
           viewport={{ once: false }}
           transition={{ duration: 1.3, ease: "easeInOut" }}
          className="text-title3d font-bold text-2xl ">{data.title}. </motion.p>
          <motion.p 
           initial={{  x: -200 }}
           whileInView={{ x: 0 }}
           viewport={{ once: false }}
           transition={{ duration: 1.3, ease: "easeInOut" }}
           className="text-body3d font-semibold text-sm md:text-lg">
            {data.desc}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default ProjectslideCard;

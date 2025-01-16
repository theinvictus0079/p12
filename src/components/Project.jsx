import React from "react";
import ProjectslideCard from "../CUSTOM_UI/ProjectslideCard";
import robot from "../assets/robot3.jpg";
import lambo from "../assets/lambo.jpg"
import ship from "../assets/ship.jpg";
import drone from "../assets/drone.jpg"

const Project = () => {
  const data = [
    
    { title: "Lamborghini", desc: "A showcase of the latest Lamborghini models, featuring cutting-edge design and performance.", link: "#", image: lambo },
    { title: "Ship", desc: "A showcase of the latest ship models, featuring cutting-edge design and performance.", link: "#", image: ship },
    { title: "Drone", desc: "a tiny flying object with a battery and a radio controller , it is the future for modern world.", link: "#", image: drone },
    { title: "Robotrix", desc: "An innovative robotics project focused on creating autonomous robots for industrial applications.", link: "#", image: robot }
   
    
  ];

  return (
    <div className="pb-10 md:mt-24 flex flex-col justify-center items-center">
      <div className="w-[300px] text-center px-8 z-30 py-4 border-[3px] border-t-0 border-l-0 border-r-0 border-b-red-600 rounded-md text-zinc-900 hover:text-white   font-extrabold relative  after:-z-20 after:absolute after:h-1 after:w-1 after:bg-red-600 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl">
        My Projects
      </div>

      <div className="mt-24 flex flex-wrap justify-center items-center gap-10">
        {data.map((project, index) => (
          <ProjectslideCard key={index} data={project}/>
        ))}
      </div>
    </div>
    
  );
};

export default Project;

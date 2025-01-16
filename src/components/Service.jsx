import React from "react";
import ServiceCard from "../CUSTOM_UI/ServiceCard";

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
      desc: "Professional thubnail desing: Stand out with our creative thumbnail design",
      num: "02",
    },
  ];

  return (
    <div className="mt-20 pb-20 flex flex-col justify-center items-center">
      <div className="ml-[4%] md:ml-[14%] self-start w-[300px] bg-red-500 shadow-red-600 shadow-lg  px-8 z-30 py-4 border-[3px] border-t-0 border-l-0 border-r-0 border-b-red-600 rounded-md text-zinc-900 hover:text-white   font-extrabold relative  after:-z-20 after:absolute after:h-1 after:w-1 after:bg-red-600 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl">
        Services
      </div>

      <div className="mt-20 flex flex-wrap justify-center items-center gap-5">
        {data.map((service, index) => (
          <div key={index}>
            <ServiceCard  service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

import React from "react";

const ServiceCard = ({service}) => {
  return (
    <div>
      <div className="service-card w-[300px] h-[220px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 hover:bg-white flex flex-col items-start gap-3 transition-all duration-300 group bg-[#202127]">
        <p className="font-bold text-2xl group-hover:text-red-500 text-neutral-400">
          {service.title}
        </p>
        <p className="text-gray-300 group-hover:text-gray-800 text-sm">
          {service.desc}
        </p>
        <p className="text-5xl font-bold self-end ">{service.num}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

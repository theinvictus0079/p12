import React from "react";

const NumberUI = ({data}) => {

  console.log(data);

  return (
    <div>
      <div className="hover:border border-red-400 hover:-translate-y-2 group bg-neutral-300 duration-500 md:w-44 md:h-44 w-24 h-28 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute blur z-10 fill-red-300 duration-500 group-hover:blur-none group-hover:scale-105"
        >
          <path
            transform="translate(100 100)"
            d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
          ></path>
        </svg>

        <div className="z-20 flex flex-col justify-center items-center ">
          
          <span className="font-bold text-3xl md:text-6xl ml-2">{data.n}</span>
          <p className="font-bold text-center">{data.name}</p>
        </div>
      </div>
    </div>
  );
};

export default NumberUI;

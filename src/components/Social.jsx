import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiPinterest } from "react-icons/si";

const Social = () => {
  return (
    <div>
      <style>{`
            
.cards {
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 25px;
  
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);
}

/* for all social containers*/
.socialContainer {
  color:red;
  width: 52px;
  height: 52px;
  background-color: #464343;
  display: flex;
  border: solid red 2px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition-duration: .3s;
}
  .socialContainer:hover{
  color:black;
  }
/* instagram*/
.containerOne:hover {

  background-color: #d62976;
  transition-duration: .3s;
}
/* twitter*/
.containerTwo:hover {
  background-color: #00acee;
  transition-duration: .3s;
}
/* linkdin*/
.containerThree:hover {
  background-color: #0072b1;
  transition-duration: .3s;
}
/* Whatsapp*/
.containerFour:hover {
  background-color: #128C7E;
  transition-duration: .3s;
}
  

.socialContainer:active {
  transform: scale(0.9);
  transition-duration: .3s;
}



.socialContainer:hover .socialSvg {
  animation: slide-in-top 0.3s both;
}
  a{
  cursor:none;
  }

@keyframes slide-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}



        `}</style>


      <div className="cards gap-[24px] md:gap-[38px]">
        <a href="#" className="socialContainer containerOne">
          <div className="socialSvg instagramSvg text-4xl flex justify-center items-center" viewBox="0 0 16 16">
              <FaInstagram />
          </div>
        </a>

        <a href="#" className="socialContainer containerTwo">
          <div className="socialSvg twitterSvg flex justify-center items-center text-3xl " viewBox="0 0 16 16">
          
          <BsTwitterX />
          </div>
        </a>

        <a href="#" className="socialContainer containerThree">
          <div className="socialSvg linkdinSvg flex justify-center items-center text-3xl" viewBox="0 0 448 512">
          <FaLinkedin />
          </div>
        </a>

        <a href="#" className="socialContainer containerFour">
          <div className="socialSvg whatsappSvg flex justify-center items-center text-3xl" viewBox="0 0 16 16">
          <SiPinterest />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Social;

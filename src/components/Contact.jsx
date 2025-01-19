import React from "react";
import { motion } from "motion/react";
import ContactForm from "../CUSTOM_UI/ContactForm";

const Contact = () => {
  return (
    <div
      id="contactid"
      className="md:mt-10 flex flex-col justify-center items-center"
    >

        <div className="text-5xl text-start w-[80%] mb-20 font-semibold">Contact Me!</div>
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

  className="rounded-lg border py-6 px-4 md:px-8 border-red-400 w-[300px] md:w-fit flex-wrap flex flex-col justify-center items-center text-center bg-gradient-to-t from-red-900 to-gray-700 font-sans text-2xl font-bold text-transparent bg-clip-text "
>
  <div className="pb-4">We'd love to hear from you!</div>
  <div className="pb-2">Have a question, feedback, or just want to say hello?</div>
  <div>
    Drop us a message <span className="text-gray-300">✌🏻</span>
  </div>
</motion.div>



      <div className="md:mt-10">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { motion } from "motion/react";

const ContactForm = () => {
  return (
    <div>
      <style>
        {`
       
.orangecon {
  color: #ff7a01;
}

.form-containercon {
  max-width: 700px;
  margin: 30px;
  
  padding: 30px;
  border-left: 5px solid red;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
}

.headingcon {
  display: block;
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 20px;
}

.form-containercon .formcon .inputcon {
  color: black;
  width: 100%;
  background-color: #ca5b5b;
  border: none;
  outline: none;
  padding: 10px;
  margin-bottom: 20px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  border-left: 1px solid transparent;
}
  .inputcon::placeholder{
  color: #393333 ;
  }
.textareacon::placeholder{
color:#393333;
}
.form-containercon .formcon .inputcon:focus {
  border-left: 5px solid red;
}

.form-containercon .formcon .textareacon {
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  background-color: #ca5b5b;
  color: black;
  font-weight: bold;
  resize: none;
  max-height: 150px;
  margin-bottom: 20px;
  border-left: 1px solid transparent;
  transition: all 0.2s ease-in-out;
}

.form-containercon .formcon .textareacon:focus {
  border-left: 5px solid red;
}

.form-containercon .formcon .button-containercon {
  display: flex;
  gap: 10px;
}

.form-containercon .formcon .button-containercon .send-buttoncon {
//   flex-basis: 70%;
  background: red;
  padding: 10px;
  color: black;
  text-align: center;
  font-weight: bold;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
}

.form-containercon .formcon .button-containercon .send-buttoncon:hover {
  background: black;
  border: 1px solid white;
  color: white;
}

.form-containercon .formcon .button-containercon .reset-button-containercon {
  filter: drop-shadow(3px 2px 0px red);
//   flex-basis: 30%;
}

.form-containercon .formcon .button-containercon .reset-button-containercon .reset-buttoncon {
  position: relative;
  text-align: center;
  padding: 10px;
  color: black;
  font-weight: bold;
  background: red;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);
  transition: all 0.2s ease-in-out;
}

.form-containercon .formcon .button-containercon .reset-button-containercon .reset-buttoncon:hover {
  background: black;
  color: white;
}
        `}
      </style>

      <motion.div
        initial={{ scaleX: 0.01 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="form-containercon bg-[#202127]"
      >
        <div className="formcon">
          <span className="headingcon bg-red-500 border-[2px] border-neutral-500 w-fit px-4" >Get in touch</span>

          <input placeholder="Name" type="text" className="inputcon" />

          <input
            placeholder="Email"
            id="mailcon"
            type="email"
            className="inputcon"
          />

          <textarea
            placeholder="Say Hello"
            rows="10"
            cols="30"
            id="message"
            name="message"
            className="textareacon"
          ></textarea>

          <div className="button-containercon">
            
            <div className="reset-button-containercon w-[100%]">
              <div id="reset-btncon" className="reset-buttoncon">
                Send message
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;

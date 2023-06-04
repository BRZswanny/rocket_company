import React from 'react';
import { motion } from "framer-motion";

function Contact() {
    return (
        <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.4 }, delay: 0.5 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className='container'>
            <div className='contact'>
                <h1 className='contactTitle'>Contact  Us</h1>
            {/* <div className='button1'> */}
                <button className='submitBttn'>Submit</button>
            </div>
            {/* </div> */}
        </div>
    </motion.div>    
  );
}
export default Contact;
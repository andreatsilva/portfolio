import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { StarsCanvas } from "./";
import { EarthCanvas } from "./canvas";
import { Earth2 } from "./canvas";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsTextVisible(true);
    }, 3500);
    return () => clearTimeout(delay);
  }, []);


  return (
    <section className={`relative w-full h-screen mx-auto `}>
    
 
    
     
      <div
        className={` pointer-events-none absolute inset-0 top-[200px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 justify-center text-center`}
      >
        <div className='  flex flex-col justify-center items-center mt-5 gap-y-5'>
         
        </div>

        <div>

        {isTextVisible && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
          > 
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        ｛ Portfolio ｝ <br className='fadeInLeft sm:block hidden' />
       
          </p>
          
          <h1 className={`${styles.heroHeadText} text-white`}>
          <span className='text-[#003b00]'>André</span>Silva
          </h1>
          <div className={'inset-0 top-[200px]'}>
          <p className={`${styles.heroSubText} inset-0 top-[200px] mt-2 text-white-100`}>
        Software Engineer and Web Developer <br className='fadeInLeft sm:block hidden' />
       
          </p>
          </div>
          </motion.div>
            )}
        </div>
       
      </div>
      
    
     
     
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

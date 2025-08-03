import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Memoize ServiceCard for performance
const ServiceCard = React.memo(({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    className='xs:w-[250px] w-full opacity-50'
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-gradient-to-r from-indigo-500 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='service-icon'
          className='w-16 h-16 object-contain'
          loading="lazy"
          decoding="async"
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
));

const About = () => {
  const [typedText, setTypedText] = useState("");
  const fullText =
    "I'm a software developer who has gained valuable experience working with languages like C++, Python, and JavaScript. I also have experience with libraries such as OpenGL and Three.js, using them to craft impressive graphics and 3D visuals. In web design, I rely on Tailwind CSS to create responsive layouts and React.js to develop dynamic user interfaces. My approach to development is fueled by a relentless drive to expand my knowledge base. I thrive on learning and am constantly seeking out new technologies to master. I'm a fast learner, always eager to explore the latest tools and technologies. This hunger for knowledge fuels my ability to deliver impactful software solutions that meet users' needs effectively.";

  useEffect(() => {
    let typingInterval;
    if (typedText.length < fullText.length) {
      typingInterval = setInterval(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 20);
    }
    return () => clearInterval(typingInterval);
  }, [typedText, fullText]);

  return (
    <>
      <motion.div
        className="text-center content-center"
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-4 text-center content-center text-secondary text-[17px] leading-[30px]">
        {typedText}
      </div>
      <h2 className={styles.sectionHeadText }>Projects</h2>
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

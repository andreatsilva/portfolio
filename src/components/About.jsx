import React, { useState, useEffect } from "react";
import Typed from "typed.js"; // Import Typed.js library

const About = () => {
  useEffect(() => {
    // Initialize Typed.js instance
    const typed = new Typed("#typed", {
      strings: [
        "I'm a software developer who has gained valuable experience working with languages like C++, Python, and JavaScript. I've also delved into libraries such as OpenGL and Three.js, using them to craft impressive graphics and 3D visuals. In the realm of web design, I rely on Tailwind CSS to create responsive layouts and React.js to develop dynamic user interfaces. My approach to development is fueled by a relentless drive to expand my knowledge base. I thrive on learning and am constantly seeking out new technologies to master. I pride myself on being a fast learner, always eager to explore and delve into the latest tools and techniques. This hunger for knowledge fuels my ability to deliver impactful software solutions that meet the needs of users effectively.",
      ],
      typeSpeed: 30, // Typing speed in milliseconds
      backSpeed: 20, // Backspacing speed in milliseconds
      loop: false, // Whether to loop the animation
      showCursor: false, // Hide the typing cursor
      startDelay: 0, // Delay before typing starts (in milliseconds)
    });

    // Cleanup function to destroy Typed instance
    return () => {
      typed.destroy();
    };
  }, []); // Run effect only once after the component mounts

  return (
    <>
      {/* Text container for Typed.js */}
      <div id="typed" className="typed-text mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        {/* Initial text goes here */}
        I'm a software developer with experience in languages like C++, Python, and JavaScript. I've utilized libraries such as OpenGL and Three.js to 
        create compelling graphics and immersive 3D visuals.
        In web design, I turn to Tailwind CSS for crafting engaging and responsive layouts, while 
        leveraging React.js to build dynamic user interfaces.
        My approach to development is driven by a passion for continuous 
        learning and growth. I thrive on challenges and embrace every opportunity 
        to expand my skill set. I consider myself a quick learner, always eager to dive into new technologies and enhance my proficiency. This dedication to learning enables me to deliver impactful software solutions that captivate users and meet their evolving needs effectively.
      </div>
    </>
  );
};

export default About;

import { BrowserRouter } from "react-router-dom";
import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';



import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";



function Circle({isHovered, circleSize} ) {
  const circleRef = useRef();

  useEffect(() => {
    const circleElement = circleRef.current;
      const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      gsap.to(circleElement, { x, y, duration: 0.6 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  
  return (
    <div
    className="circle"
      ref={circleRef}
      style={{
        position: 'fixed',
        top: -15, // Adjust top and left position as needed
        left: -20,
        width: circleSize + 'px',
        height: circleSize + 'px',
        borderRadius: '50%',
        backgroundColor: 'transparent',
        border: '1px solid white',
        pointerEvents: 'none',
        zIndex: '1'
      }}
    />
  );
}

const App = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [circleSize, setCircleSize] = useState(65); 

 

  const handleLinkHover = () => {
    setIsHovered(true);
    gsap.to('.circle', {duration: 0.5, width: 100, height:100})

  };

  const handleLinkLeave = () => {
    setIsHovered(false)
    gsap.to('.circle', {duration: 0.5, width: 65, height:65})

  };
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {


    const { clientX, clientY } = event;
    setMousePosition({ x: (clientX / window.innerWidth) * 2 - 1, y: (clientY / window.innerHeight) * 2 - 1 });
  };

  return (
    
    <BrowserRouter>
    
      
      <div className='relative'>

        <div className='pattern-zigzag-3d pattern-blue-500 pattern-bg-white pattern-size-6 pattern-opacity-20'>
          <Navbar onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave} />
          <Hero />
          <Circle isHovered={isHovered} circleSize={circleSize} position={mousePosition} />
        </div>
        <About />

        <Experience />
        <Tech />
       
        <div className='relative z-0'>
          <Contact /> 
      
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

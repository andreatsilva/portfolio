import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const StarWrapper = (Component, idName) =>
  function HOC() {
    const sectionRef = useRef();

    useEffect(() => {
      const el = sectionRef.current;
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 100 },
        {
          duration: 1.2,
          autoAlpha: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, []);

    return (
      <motion.section
        ref={sectionRef}
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
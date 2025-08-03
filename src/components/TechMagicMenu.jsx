import React, { useState } from "react";
import { technologies } from "../constants";

const radius = 140; // Increased distance from center

const TechMagicMenu = () => {
  const [active, setActive] = useState(false);

  const angleStep = (2 * Math.PI) / technologies.length;

  return (
    <div id="tech" className="flex flex-col items-center justify-center mx-auto my-12">
      {/* Title */}
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-8">
        Technologies
      </h2>

      {/* Menu container */}
      <div className="relative w-[360px] h-[360px] flex items-center justify-center">
        {/* Rotating wrapper when active */}
        <div
          className={`absolute w-full h-full transition-transform duration-[1250ms] ${
            active ? "animate-slow-rotate" : ""
          }`}
        >
          {/* Tech icons */}
          {technologies.map((tech, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <button
                key={tech.name}
                className={`absolute left-1/2 top-1/2 w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shadow-lg transition-all duration-[1250ms] hover:scale-110 hover:border-2 hover:border-blue-500 ${
                  active
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
                style={{
                  transform: active
                    ? `translate(-50%, -50%) translate(${x}px, ${y}px)`
                    : "translate(-50%, -50%) scale(0.5)",
                  transitionDelay: active ? `${i * 0.06}s` : "0s",
                }}
                tabIndex={active ? 0 : -1}
                aria-label={tech.name}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            );
          })}
        </div>

        {/* Center toggle button */}
        <button
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shadow-lg text-3xl z-10 transition-transform duration-[1250ms] ${
            active ? "rotate-[360deg]" : ""
          }`}
          onClick={() => setActive((a) => !a)}
          aria-label="Show tech stack"
          style={{
            boxShadow:
              "0 6px 8px rgba(0,0,0,0.15), 0 0 2px #333, 0 0 8px #fff",
          }}
        >
          <span role="img" aria-label="tech">🛠️</span>
        </button>
      </div>
    </div>
  );
};

export default TechMagicMenu;

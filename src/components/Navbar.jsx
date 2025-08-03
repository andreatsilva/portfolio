import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setMenuVisible(false);
        setScrolled(true);
      } else {
        setMenuVisible(true);
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hamburger icon with 4 lines, each smaller than the previous
  const HamburgerIcon = ({ open, onClick }) => (
    <button
      className="flex flex-col items-end justify-center gap-1 w-8 h-8 focus:outline-none"
      aria-label="Open menu"
      onClick={onClick}
    >
      <span
        className={`block bg-white rounded transition-all duration-700 ease-in-out ${
          open ? "w-8 opacity-70" : "w-8 opacity-100"
        } h-1`}
      />
      <span
        className={`block bg-white rounded transition-all duration-700 ease-in-out ${
          open ? "w-6 opacity-60" : "w-6 opacity-100"
        } h-1`}
      />
      <span
        className={`block bg-white rounded transition-all duration-700 ease-in-out ${
          open ? "w-4 opacity-50" : "w-4 opacity-100"
        } h-1`}
      />
      <span
        className={`block bg-white rounded transition-all duration-700 ease-in-out ${
          open ? "w-2 opacity-40" : "w-2 opacity-100"
        } h-1`}
      />
    </button>
  );

  // When hamburger is clicked, show menu again
  const handleHamburgerClick = () => {
    setMenuVisible(true);
  };

  // When menu is visible, show menu; when not, show hamburger
  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-30 flex flex-col items-center
        transition-all duration-700
        py-4
        h-auto
      `}
      style={{ background: "transparent" }}
    >
      <div className="flex flex-col items-center w-full relative">
        {/* Menu slides in/out */}
        <ul
          className={`
            flex flex-row gap-8 items-center justify-end text-right w-full
            transition-all duration-700
            ${
              menuVisible
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-8 pointer-events-none"
            }
          `}
          style={{
            transitionProperty: "opacity, transform",
          }}
        >
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`cursor-pointer text-white text-lg font-semibold px-2 py-1 rounded transition-colors duration-200 ${
                active === nav.title ? "bg-white/20" : "hover:bg-white/10"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        {/* Hamburger fades in/out */}
        <div
          className={`
            absolute top-0 right-8 flex items-center justify-center
            transition-all duration-700
            ${
              !menuVisible
                ? "opacity-100 pointer-events-auto mt-2"
                : "opacity-0 pointer-events-none"
            }
          `}
          style={{ height: "48px" }}
        >
          <HamburgerIcon open={!menuVisible} onClick={handleHamburgerClick} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
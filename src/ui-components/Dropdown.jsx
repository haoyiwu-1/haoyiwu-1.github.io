import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function Dropdown({ options }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const isHomePage = location.pathname === "/";
  const isProjectsPage = location.pathname === "/projects";

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelection = (index) => {
    const element = document.getElementById("proj-" + index);
    if (element) {
      element.scrollIntoView({ behaviour: "smooth" });
      window.scrollBy(0, -56);
    }
    setIsOpen(false);
  };

  const handleClickOutside = (e) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="dropdown-button text-hover"
        ref={buttonRef}
      >
        {"Projects"}
      </button>
      {isOpen && isHomePage && (
        <ul className="dropdown-menu-home">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelection(index)}
              className="dropdown-item"
            >
              {option}
            </li>
          ))}
        </ul>
      )}

      {isOpen && isProjectsPage && (
        <ul className="dropdown-menu-projects">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelection(index)}
              className="dropdown-item"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;

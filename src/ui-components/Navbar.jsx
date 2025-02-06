import Dropdown from "./Dropdown";
import { useLocation } from "react-router-dom";

function Navbar({ projects }) {
  const location = useLocation();

  const handleAboutClick = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behaviour: "smooth" });
      window.scrollBy(0, -56);
    }
  };

  const handleExperience = () => {
    const element = document.getElementById("experience");
    if (element) {
      element.scrollIntoView({ behaviour: "smooth" });
      window.scrollBy(0, -56);
    }
  };

  const isHomePage = location.pathname === "/";
  const isProjectsPage = location.pathname === "/projects";

  return (
    <div className="navbar">
      {isHomePage && (
        <>
          <button onClick={handleAboutClick} className="text-hover">
            About
          </button>
          <button onClick={handleExperience} className="text-hover">
            Experience
          </button>
          <Dropdown options={projects} />
        </>
      )}

      {isProjectsPage && (
        <>
          <a href="/" className="text-hover">
            Home
          </a>
          <Dropdown options={projects} />
        </>
      )}
    </div>
  );
}

export default Navbar;

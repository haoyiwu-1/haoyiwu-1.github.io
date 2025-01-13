import Dropdown from "./Dropdown";

function Navbar({ projects }) {
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

  return (
    <div className="navbar">
      <button onClick={handleAboutClick}>About</button>
      <button onClick={handleExperience}>Experience</button>
      <Dropdown options={projects} />
    </div>
  );
}

export default Navbar;

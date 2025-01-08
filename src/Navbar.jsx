import Dropdown from "./dropdown";

function Navbar({ projects }) {
  const handleAboutClick = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behaviour: "smooth" });
      window.scrollBy(0, -56);
    }
  };

  return (
    <div className="navbar">
      <button onClick={handleAboutClick}>About</button>
      <Dropdown options={projects} />
    </div>
  );
}

export default Navbar;

import Dropdown from "./dropdown";

function Navbar({ projects }) {
  return (
    <div className="navbar">
      <p>About</p>
      <Dropdown options={projects} />
    </div>
  )
}

export default Navbar;
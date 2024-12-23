import Dropdown from "./dropdown";

const projects = [
  "Data Mining Project",
  "Big Data Analytics",
  "SmartShoppers",
  "Tic-Tac-Toe",
  "Rock-Paper-Scissors",
  "Basic GPA Calculator"
]

function Navbar() {
  return (
    <>
      <div class="navbar">
        <p>About</p>
        <Dropdown options={projects} />
      </div>

    </>
  )
}

export default Navbar;
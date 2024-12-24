import './index.css'
import Navbar from './Navbar.jsx';

function App() {
  const projectsList = [
    "Data Mining Project",
    "Big Data Analytics",
    "SmartShoppers",
    "Tic-Tac-Toe",
    "Rock-Paper-Scissors",
    "Basic GPA Calculator"
  ]

  return (
    <>
      <Navbar projects={projectsList} />
    </>
  )
}

export default App

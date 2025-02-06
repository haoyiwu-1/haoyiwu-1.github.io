import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  const projectsList = [
    "React Crypto Web App",
    "Trivify",
    "Big Data Analytics Project",
    "Data Mining Project",
    "SmartShoppers",
    "Tic-Tac-Toe",
    "Basic GPA Calculator",
    "Rock-Paper-Scissors",
  ];

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home projects={projectsList.slice(0, 4)} />}
        />
        <Route
          path="/projects"
          element={<Projects projects={projectsList} />}
        />
      </Routes>
    </div>
  );
}

export default App;

import { Outlet } from "react-router-dom";

// CSS
import "./App.css";

// Components
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;

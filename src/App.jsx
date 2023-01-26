import "./css/reset.css";

import { HashRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="App" id="app">
        <HashRouter>
          <NavBar />
          <Home />
        </HashRouter>
      </div>
    </>
  );
}

export default App;

import React from "react";
// import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import History from "./components/history";
import Home from "./components/Home";
import Mountain from "./components/Mountain";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mountain2 from "./components/Mountain2";
// import MyCarousel from "./components/carousel";
const App = () => {
  return (
    <div className="AppContainer">
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/Mountain" element={<Mountain />} />
        <Route path="/Mountain2" element={<Mountain2 />} />
      </Routes>
     </div>
  );
};

export default App;

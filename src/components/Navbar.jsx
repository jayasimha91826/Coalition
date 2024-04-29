import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const [home, setHome] = useState(false);
  const [history, setHistory] = useState(false);

  useEffect(() => {
    setHome(location.pathname === "/");
    setHistory(location.pathname === "/history");
  }, [location]);

  return (
    <div className="Navbar">
      <nav className="Navbar">
        <div className="Home">
          <Link to="/">
            <img className="homeImageIcon" src="/logo.png" alt="logo" />
          </Link>
          {history && (
            <div>
              <p className="losangeles ">LOSANGELES</p>
              <p className="mountains">MOUNTAINS</p>
            </div>
          )}
        </div>
        <div className="buttons">
          <div>
            <Link
              className={home ? "history" : history ? "historyPage" : undefined}
              to="/history"
            >
              History
            </Link>
          </div>
          <div>
            <Link
              className={home ? "mountain" : history ? "historyPage" : undefined}
              to="/Mountain"
            >
              Team
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

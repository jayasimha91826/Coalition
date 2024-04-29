import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarToHome.css";
function NavbarToHome() {
  return (
    <div>
      <nav>
        <div className="footerNav">
          <div className="footerimage">
            <NavLink className="mountainToHome" to="/">
              <img src="/logo.png" alt="logo" />
            </NavLink>
          </div>
          <div className="footercontainer">
          <div className="footerpara">
            <p className="los">LOSANGELES</p>
            <p className="los">MOUNTAINS</p>
          </div>
          <p className="copyright">COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarToHome;

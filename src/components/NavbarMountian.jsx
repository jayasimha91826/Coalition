import {  NavLink} from "react-router-dom";
import React from "react";
import './NavbarMountain.css'

const NavbarMountian = () => {
  return (
    <div>
      <nav className="mountainNavbar">
        <div>
          <NavLink  className="mountain1" activeClassName="active" to="/Mountain">
            MOUNTAIN1
          </NavLink>
        </div>
        <div>
          <div>
            <NavLink  className="mountain2" activeClassName="active" to="/Mountain2">MOUNTAIN2</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMountian;

import React from "react";
import "./Mountain.css";
import climb from "./images/climb.png";
import schedule1 from "./images/mountain1schedule.png";
import NavbarMountian from "./NavbarMountian";
import NavbarToHome from "./NavbarToHome";
const Mountain = () => {
  return (
    <div>
      <div className="climbheader">
        <img className="climbnumber" src={climb} alt="climb" />
        <p className="Climbtext">
          Cras scelerisque id quam sed dignissim Pellentesque urna nunc. gravida
          quis hendrerit ac. tristique ut quam. Vivamus suscipit dignissim
          tortor nec congue.
        </p>
      </div>
      <div className="contactContainer">
        
          <NavbarMountian />
          <div className="schedulecontainer">
          <img className="schedule1" src={schedule1} alt="schedule" />
        
        <div className="navbartohome">
          <NavbarToHome />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Mountain;

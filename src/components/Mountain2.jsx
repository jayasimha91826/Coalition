import React from 'react'
import schedule2 from './images/mountain2schedule.png'
import NavbarMountian from './NavbarMountian'
import './mountain2.css'
import climb from "./images/climb.png";
import NavbarToHome from './NavbarToHome';


const Mountain2 = () => {
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
      <div className="contactContainer mountmountain2">
        
          <NavbarMountian />
          <div className="schedulecontainer">
          <img className="schedule1" src={schedule2} alt="schedule" />
        
        <div className="navbartohome">
          <NavbarToHome />
        </div>
        </div>
      </div>

    </div>
  )
}

export default Mountain2

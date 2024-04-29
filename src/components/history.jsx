import React from "react";
import "./history.css";
import MyCarousel from "./carousel";
import Navbar from "./Navbar";
const History = () => {
  return (
    <>
      <Navbar />
      <div className="historyContainer">
        <div>
          <img className="historyImage" src="/history.png" alt="history" />
          <p className="historyPara">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
            est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam.
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </p>
        </div>
        <div>
          <MyCarousel />
        </div>
      </div>
    </>
  );
};

export default History;

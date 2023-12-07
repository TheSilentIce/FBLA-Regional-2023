import React from 'react';
import "../css/RedCrossBanner.css";
import backgroundImage from "../assets/104677084-RTX3DKU6.jpg";

const RedCrossBanner = () => {
  return (
    <div className="red-cross-banner">
      <img
        src={backgroundImage}
        alt="Red Cross Background Image"
        className="full-page-image"
      />
      <div className="motto-container">
        <h1>Where Humanity Comes Together</h1>
        <p>
          The Red Cross motto reflects our core belief in the power of human
          compassion and solidarity. We are dedicated to alleviating suffering,
          protecting life and health, and promoting dignity and hope around the
          world.
        </p>
      </div>
    </div>
  );
};

export default RedCrossBanner;
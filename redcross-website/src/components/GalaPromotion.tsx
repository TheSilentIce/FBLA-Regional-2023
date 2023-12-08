import React from "react";
import galaPhoto from "../assets/pexels-nappy-2994574.jpg";
import "../css/GalaPromotion.css";
import GalaPromotionBenefits from "./GalaPromotionBenefits";
import Person from "../images/Person.png";
// Replace with your actual image URL

const GalaPromotion = () => {
  const redirect = () => {
    window.location.href = "/register";
  };

  return (
    <>
      <div className="gala-banner">
        <div>
          <img
            src={galaPhoto}
            alt="Red Cross Gala Event"
            className="gala-image"
          />
        </div>
        <div className="gala-content">
          <h2>Red Cross Gala: An Evening of Compassion and Action</h2>
          <p>
            More than just a celebration, the Red Cross Gala is a powerful
            opportunity to join forces with other compassionate individuals and
            make a real difference in the lives of those affected by disasters
            and emergencies. The Red Cross Gala will be a night of elegance and
            inspiration, featuring a red carpet arrival, cocktail reception,
            delicious dinner, and entertainment. Guests will hear from a keynote
            speaker and contribute to the Red Cross's vital work through a live
            auction, fund-a-need, and silent auction. The event will leave
            attendees feeling moved and motivated to support the Red Cross's
            mission.
          </p>
          <img src={Person} className="m-4" />
          <h1>
            "No act of kindness, no matter how small, is ever wasted." - Aesop
          </h1>
        </div>
      </div>
      <>
        <h3 className="info-carousel-title">How Your Support Makes a Difference</h3>
        <ul className="gala-promotion-benefit-container">
          <li>
            <GalaPromotionBenefits
              title="Provide immediate relief"
              text="Your contribution will help us offer
                    food, shelter, emotional support, and other essential services to
                    individuals and families impacted by disasters."
            />
          </li>
          <li>
            <GalaPromotionBenefits
              title="Ensure a safe blood supply"
              text="Funds raised at the gala will
                    support our blood collection efforts, ensuring a readily available
                    supply for hospitals and patients in need."
            />
          </li>
          <li>
            <GalaPromotionBenefits
              title="Prepare communities"
              text="Your generosity will allow us to educate
                    individuals and communities on disaster preparedness, reducing the
                    impact of future emergencies and saving lives."
            />
          </li>
          <li>
            <GalaPromotionBenefits
              title="Empower volunteers"
              text="Contributions will support our volunteer
                    recruitment and training programs, ensuring we have the resources
                    and manpower to respond effectively to disasters."
            />
          </li>
        </ul>
        <div className="d-flex justify-content-center m-5">
          <button className="btn btn-danger btn-lg" onClick={redirect}>
            Join the Cause: Sign Up Today!
          </button>
        </div>
      </>
    </>
  );
};

export default GalaPromotion;

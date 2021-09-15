import React from "react";
import CustomPopup from "./elements/CustomPopup";

const CtaSection = () => {

  return (
    <div className="cta-section">
      <div className="overlay">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2>See all This in Person</h2>
              <h4>Schedule a Meeting With Our Agent</h4>
              {/* <Buttton
                aText="REQUEST A CALL BACK"
                dataEffect="mfp-3d-unfold"
                classes="play-button embaded-popup button"
              /> */}

              <CustomPopup title="Request a Call Back" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;

import React from "react";
import Buttton from "./elements/Buttton";

const CtaSection = () => {
  return (
    <div className="cta-section">
      <div className="overlay">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2>See all This in Person</h2>
              <h4>Schedule a Meeting With Our Agent</h4>
              <Buttton aLink="/" aText="REQUEST A CALL BACK" classes="button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;

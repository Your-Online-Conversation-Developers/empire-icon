import React from "react";
import Buttton from "./elements/Buttton";

const CtaSection = () => {
  return (
    <div className="cta-section">
      <div className="overlay">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2>See all this in person</h2>
              <h4>schedule a meeting with our agent</h4>
              <Buttton 
                aLink="/"
                aText="Get an appointment"
                classes="button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;

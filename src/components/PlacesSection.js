import React from "react";

const PlacesSection = () => {
  return (
    <div className="places-section" id="location">
      <div className="container">
        <div className="section-head">
          <div className="row text-center">
            <div className="col-md-12">
              <h2>
                Nearby <span>Places.</span>
              </h2>
              <h4>Lets take a look at nipe vila’s nearby places</h4>
            </div>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md-3 col-sm-6">
            <div className="single-place">
              <i className="icofont icofont-bed-patient" />
              <h6>3 hospital</h6>
              <p>There is 2 private clinic and 1 gov hospital in 1.5k radius</p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="single-place">
              <i className="icofont icofont-train-line" />
              <h6>train station</h6>
              <p>
                You can got to the train station in less then 10 minutes by walk
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="single-place">
              <i className="icofont icofont-castle" />
              <h6>catholic church</h6>
              <p>
                You will find a catholic church in 2 minutes walking distance
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="single-place">
              <i className="icofont icofont-bus-alt-1" />
              <h6>Bus station</h6>
              <p>
                You can got to the bus station in less then 8 minutes by walk
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="single-place">
              <i className="icofont icofont-social-shopify" />
              <h6>Shopping Mall</h6>
              <p>Don’t worry, shopping mall in your front door just open it</p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="single-place">
              <i className="icofont icofont-tree-alt" />
              <h6>nature park</h6>
              <p>
                There is nature park for your mornnig walk in socity compound
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="single-place">
              <i className="icofont icofont-education" />
              <h6>School / Collage</h6>
              <p>Have child ? there is school just on other side of road</p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="single-place">
              <i className="icofont icofont-gym-alt-3" />
              <h6>Fitness gym</h6>
              <p>
                There is 4 fitness center in just 2km, you need to walk 12
                minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesSection;

import React from "react";
import Heading from "./elements/Heading";

const Floors = () => {
  return (
    <div className="floors-section" id="floorplans">
      <div className="container">
        <div className="floor-list">
          <div className="single-floor">
            <div className="row">
              <div className="col-md-6">
                <div className="floor-image">
                  <img src="images/plans/1.png" alt="plans" />
                </div>
              </div>
              {/* .col */}
              <div className="col-md-6">
                <Heading
                  h2Text="First"
                  spanText="Floor."
                  h4Text="Lets take a look at nipe vila’s first floor"
                />

                <div className="row text-center">
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-ruler-pencil" />
                      <h6>2375 Square Feet</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-bed" />
                      <h6>2 bed rooms</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-bathtub" />
                      <h6>3 bath rooms</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-fork-and-knife" />
                      <h6>1 kitchen</h6>
                    </div>
                  </div>
                  {/* .col */}
                </div>
                {/* .row */}
              </div>
              {/* .col */}
            </div>
            {/* .row */}
          </div>
          {/* .single-floor */}
          <div className="single-floor">
            <div className="row">
              <div className="col-md-6">
                <div className="floor-image">
                  <img src="images/plans/1.png" alt="plans" />
                </div>
              </div>
              {/* .col */}
              <div className="col-md-6">
                <Heading
                  h2Text="Second"
                  spanText="Floor."
                  h4Text="Lets take a look at nipe vila’s first floor"
                />
                <div className="row text-center">
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-ruler-pencil" />
                      <h6>2375 Square Feet</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-bed" />
                      <h6>2 bed rooms</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-bathtub" />
                      <h6>3 bath rooms</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-fork-and-knife" />
                      <h6>1 kitchen</h6>
                    </div>
                  </div>
                  {/* .col */}
                </div>
                {/* .row */}
              </div>
              {/* .col */}
            </div>
            {/* .row */}
          </div>
          {/* .single-floor */}
        </div>
        {/* .floor-list */}
      </div>
      {/* .container */}
    </div>
  );
};

export default Floors;

import React from "react";
import Heading from "./elements/Heading";
import Buttton from "./elements/Buttton";

const Floors = () => {
  return (
    <div className="floors-section" id="floorplans">
      <div className="container">
        <div className="floor-list">
          <div className="single-floor">
            <div className="row">
              <div className="col-md-6">
                <div className="floor-image">
                  <img src="images/plans/diamond.png" alt="plans" />
                </div>
              </div>

              <div className="col-md-6">
                <Heading
                  h2Text="Diamond."
                  h4Text="Luxury Type A | 2 Side Corner"
                />
                <Buttton
                  aLink="pdf/diamond.pdf"
                  aText="Download Plan"
                  target="_blank"
                  classes="button"
                  download
                />

                <div className="row text-center">
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-ruler-pencil" />
                      <h6>2330 Sq. Ft</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-bed" />
                      <h6>bed rooms</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-bathtub" />
                      <h6>bath rooms</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-fork-and-knife" />
                      <h6>kitchen</h6>
                    </div>
                  </div>
                  {/* .col */}
                </div>
                {/* .row */}
              </div>
            </div>
          </div>

          {/* .single-floor */}
          <div className="single-floor">
            <div className="row">
              <div className="col-md-6">
                <div className="floor-image">
                  <img src="images/plans/gold.png" alt="plans" />
                </div>
              </div>

              <div className="col-md-6">
                <Heading h2Text="Gold." h4Text="Luxury Type B | West Open" />
                <Buttton
                  aLink="pdf/gold.pdf"
                  aText="Download Plan"
                  target="_blank"
                  classes="button"
                  download
                />
                <div className="row text-center">
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-ruler-pencil" />
                      <h6>1835 Sq. Ft</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-bed" />
                      <h6>bed rooms</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-bathtub" />
                      <h6>bath rooms</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-fork-and-knife" />
                      <h6>kitchen</h6>
                    </div>
                  </div>
                  {/* .col */}
                </div>
                {/* .row */}
              </div>
            </div>
          </div>

          {/* .single-floor */}
          <div className="single-floor">
            <div className="row">
              <div className="col-md-6">
                <div className="floor-image">
                  <img src="images/plans/silver.png" alt="plans" />
                </div>
              </div>

              <div className="col-md-6">
                <Heading h2Text="Silver." h4Text="Luxury Type C | Corner" />
                <Buttton
                  aLink="pdf/silver.pdf"
                  aText="Download Plan"
                  target="_blank"
                  classes="button"
                  download
                />
                <div className="row text-center">
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-ruler-pencil" />
                      <h6>1685 Sq. Ft</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-bed" />
                      <h6>bed rooms</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-bathtub" />
                      <h6>bath rooms</h6>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-sm-6">
                    <div className="single-floor-feature">
                      <i className="icofont icofont-fork-and-knife" />
                      <h6>kitchen</h6>
                    </div>
                  </div>
                  {/* .col */}
                </div>
                {/* .row */}
              </div>
            </div>
          </div>
        </div>
        {/* .floor-list */}
      </div>
      {/* .container */}
    </div>
  );
};

export default Floors;

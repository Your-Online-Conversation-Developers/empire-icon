import React from "react";
import Buttton from "./elements/Buttton";

const HeaderSlider = () => {
  return (
    <div className="header-section header-slider" id="header">
      <div
        className="single-hSlider hSlide-two"
        style={{
          background: "url(images/bg/slider-1.jpg) center center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="overlay light">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <div className="header-texts">
                  <h3 className="appear-from-top">$760,000</h3>
                  <h1 className="appear-from-left">Nipe Vila</h1>
                  <h5 className="appear-from-right">
                    2901 S. Capital Texas Austin, TX 78746
                  </h5>
                  <Buttton
                    aText="take a details look"
                    aLink="/"
                    classes="button sm appear-from-bottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* .overlay */}
      </div>

      <div
        className="single-hSlider hSlide-two"
        style={{
          background: "url(images/bg/slider-2.jpg) center center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="overlay light">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <div className="header-texts">
                  <h3 className="appear-from-top">$760,000</h3>
                  <h1 className="appear-from-left">Nipe Vila</h1>
                  <h5 className="appear-from-right">
                    2901 S. Capital Texas Austin, TX 78746
                  </h5>
                  <Buttton
                    aText="take a details look"
                    aLink="/"
                    classes="button sm appear-from-bottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* .overlay */}
      </div>

      <div
        className="single-hSlider hSlide-two"
        style={{
          background: "url(images/bg/slider-3.jpg) center center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="overlay light">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <div className="header-texts">
                  <h3 className="appear-from-top">$760,000</h3>
                  <h1 className="appear-from-left">Nipe Vila</h1>
                  <h5 className="appear-from-right">
                    2901 S. Capital Texas Austin, TX 78746
                  </h5>
                  <Buttton
                    aText="take a details look"
                    aLink="/"
                    classes="button sm appear-from-bottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* .overlay */}
      </div>
    </div>
  );
};

export default HeaderSlider;

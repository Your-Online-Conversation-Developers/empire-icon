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
                  <h3 className="appear-from-top">2330 Sq. Ft</h3>
                  <h1 className="appear-from-left">DIAMOND</h1>
                  <h5 className="appear-from-right">
                    LUXURY TYPE A | 2 SIDE CORNER
                  </h5>
                  <Buttton
                    aText="REQUEST A CALL BACK"
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
                  <h3 className="appear-from-top">1835 Sq. Ft</h3>
                  <h1 className="appear-from-left">GOLD</h1>
                  <h5 className="appear-from-right">
                    LUXURY TYPE B | WEST OPEN
                  </h5>
                  <Buttton
                    aText="REQUEST A CALL BACK"
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
                  <h3 className="appear-from-top">1685 Sq. Ft</h3>
                  <h1 className="appear-from-left">SILVER</h1>
                  <h5 className="appear-from-right">LUXURY TYPE C | CORNER</h5>
                  <Buttton
                    aText="REQUEST A CALL BACK"
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

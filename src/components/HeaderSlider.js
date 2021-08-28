import React from "react";

const HeaderSlider = () => {
  return (
    <>
      {/* Start .header-section */}
      <div className="header-section header-slider" id="header">
        <div
          className="single-hSlider hSlide-one"
          style={{ width: "100%" }}
          data-vide-bg="mp4: video/home, webm: video/home, ogv: video/home, poster: video/home"
          data-vide-options="position: 50% 50%"
        >
          <div className="overlay light">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="header-texts">
                    <h3 className="appear-from-top">$760,000</h3>
                    <h1 className="appear-from-left">Nipe Vila</h1>
                    <h5 className="appear-from-right">
                      2901 S. Capital Texas Austin, TX 78746{" "}
                    </h5>
                    <a href="/" className="button sm appear-from-bottom">
                      take a details look
                    </a>
                  </div>
                </div>
                {/* .col */}
                <div className="col-md-6">
                  <div className="row text-center">
                    <div className="col-sm-6">
                      <div className="single-header-feature appear-from-top delayed">
                        <span className="shf-extra top-left" />
                        <span className="shf-extra top-right" />
                        <span className="shf-extra bottom-right" />
                        <span className="shf-extra bottom-left" />
                        <i className="icofont icofont-ruler-pencil" />
                        <h6>2375 Square Feet</h6>
                      </div>
                    </div>
                    {/* .col */}
                    <div className="col-sm-6">
                      <div className="single-header-feature appear-from-right delayed">
                        <span className="shf-extra top-left" />
                        <span className="shf-extra top-right" />
                        <span className="shf-extra bottom-right" />
                        <span className="shf-extra bottom-left" />
                        <i className="icofont icofont-bed" />
                        <h6>2 bed rooms</h6>
                      </div>
                    </div>
                    {/* .col */}
                    <div className="col-sm-6">
                      <div className="single-header-feature appear-from-left delayed">
                        <span className="shf-extra top-left" />
                        <span className="shf-extra top-right" />
                        <span className="shf-extra bottom-right" />
                        <span className="shf-extra bottom-left" />
                        <i className="icofont icofont-bathtub" />
                        <h6>3 bath rooms</h6>
                      </div>
                    </div>
                    {/* .col */}
                    <div className="col-sm-6">
                      <div className="single-header-feature appear-from-bottom delayed">
                        <span className="shf-extra top-left" />
                        <span className="shf-extra top-right" />
                        <span className="shf-extra bottom-right" />
                        <span className="shf-extra bottom-left" />
                        <i className="icofont icofont-bricks" />
                        <h6>2 Floors</h6>
                      </div>
                    </div>
                    {/* .col */}
                  </div>
                  {/* .row */}
                </div>
              </div>
              {/* .row */}
            </div>
            {/* .container */}
          </div>
          {/* .overlay */}
        </div>
        {/* .header-section */}
        <div
          className="single-hSlider hSlide-two"
          style={{
            background: "url(images/bg/header-1.jpg) center center no-repeat",
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
                      2901 S. Capital Texas Austin, TX 78746{" "}
                    </h5>
                    <a href="/" className="button sm appear-from-bottom">
                      take a details look
                    </a>
                  </div>
                </div>
                {/* .col */}
              </div>
              {/* .row */}
            </div>
            {/* .container */}
          </div>
          {/* .overlay */}
        </div>
        {/* .header-section */}
      </div>
      {/* .header-section */}
    </>
  );
};

export default HeaderSlider;

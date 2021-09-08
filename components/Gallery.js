import React from "react";
import Heading from "./elements/Heading";

const Gallery = () => {
  return (
    <div className="gallery-section alt-bg" id="gallery">
      <div className="container">
        <div className="section-head">
          <div className="row text-center">
            <div className="col-md-12">
              <Heading
                h2Text="Photo"
                spanText="Gallery."
                h4Text="Lets take a look at Empire Icon's photo gallery"
              />
            </div>
            {/* .col */}
          </div>
          {/* .row */}
        </div>
        {/* .section-head */}
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="single-gallery">
              <a
                href="images/gallery/1.jpg"
                data-effect="mfp-3d-unfold"
                className="large-view"
              >
                <img
                  src="images/gallery/1.jpg"
                  className="img-responsive"
                  alt="Gallery"
                />
              </a>
            </div>
          </div>
          {/* .col */}
          <div className="col-md-3 col-sm-6">
            <div className="single-gallery">
              <a
                href="images/gallery/2.jpg"
                data-effect="mfp-3d-unfold"
                className="large-view"
              >
                <img
                  src="images/gallery/2.jpg"
                  className="img-responsive"
                  alt="Gallery"
                />
              </a>
            </div>
          </div>
          {/* .col */}
          <div className="col-md-3 col-sm-6">
            <div className="single-gallery">
              <a
                href="images/gallery/3.jpg"
                data-effect="mfp-3d-unfold"
                className="large-view"
              >
                <img
                  src="images/gallery/3.jpg"
                  className="img-responsive"
                  alt="Gallery"
                />
              </a>
            </div>
          </div>
          {/* .col */}
          <div className="col-md-4 col-sm-6">
            <div className="single-gallery">
              <a
                href="images/gallery/4.jpg"
                data-effect="mfp-3d-unfold"
                className="large-view"
              >
                <img
                  src="images/gallery/4.jpg"
                  className="img-responsive"
                  alt="Gallery"
                />
              </a>
            </div>
          </div>
          {/* .col */}
          <div className="col-md-4 col-sm-6">
            <div className="single-gallery">
              <a
                href="images/gallery/5.jpg"
                data-effect="mfp-3d-unfold"
                className="large-view"
              >
                <img
                  src="images/gallery/5.jpg"
                  className="img-responsive"
                  alt="Gallery"
                />
              </a>
            </div>
          </div>
          {/* .col */}
          <div className="col-md-4 col-sm-6">
            <div className="single-gallery">
              <a
                href="images/gallery/6.jpg"
                data-effect="mfp-3d-unfold"
                className="large-view"
              >
                <img
                  src="images/gallery/6.jpg"
                  className="img-responsive"
                  alt="Gallery"
                />
              </a>
            </div>
          </div>
          {/* .col */}
        </div>
        {/* .row */}
      </div>
      {/* .container */}
    </div>
  );
};

export default Gallery;

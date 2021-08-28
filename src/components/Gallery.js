import React from "react";

const Gallery = () => {
  return (
    <div className="gallery-section alt-bg" id="gallery">
      <div className="container">
        <div className="section-head">
          <div className="row text-center">
            <div className="col-md-12">
              <h2>
                Photo <span>Gallery.</span>
              </h2>
              <h4>Lets take a look at nipe vila’s photo gallery</h4>
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

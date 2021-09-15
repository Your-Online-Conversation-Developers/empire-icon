import React from "react";
import { useHistory } from "react-router";

const IndusEmpire = () => {
  const history = useHistory();
  return (
    <div className="container project-item">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h2>Indus Empire</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            assumenda unde facere accusantium deleniti autem libero nulla
            doloremque voluptatem quidem!
          </p>
        </div>
        <div className="col-sm-12 col-md-6">
          <img src="images/projects/al-ghaffar.webp" alt="project" />
        </div>
      </div>

      <div className="row project-gallery">
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="single-gallery">
            <a
              href="images/gallery/4.webp"
              data-effect="mfp-3d-unfold"
              className="large-view"
            >
              <img
                src="images/gallery/4.webp"
                className="img-responsive"
                alt="Gallery"
              />
            </a>
          </div>
        </div>
        {/* .col */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="single-gallery">
            <a
              href="images/gallery/5.webp"
              data-effect="mfp-3d-unfold"
              className="large-view"
            >
              <img
                src="images/gallery/5.webp"
                className="img-responsive"
                alt="Gallery"
              />
            </a>
          </div>
        </div>
        {/* .col */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="single-gallery">
            <a
              href="images/gallery/6.webp"
              data-effect="mfp-3d-unfold"
              className="large-view"
            >
              <img
                src="images/gallery/6.webp"
                className="img-responsive"
                alt="Gallery"
              />
            </a>
          </div>
        </div>
        {/* .col */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="single-gallery">
            <a
              href="images/gallery/4.webp"
              data-effect="mfp-3d-unfold"
              className="large-view"
            >
              <img
                src="images/gallery/4.webp"
                className="img-responsive"
                alt="Gallery"
              />
            </a>
          </div>
        </div>
        {/* .col */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="single-gallery">
            <a
              href="images/gallery/5.webp"
              data-effect="mfp-3d-unfold"
              className="large-view"
            >
              <img
                src="images/gallery/5.webp"
                className="img-responsive"
                alt="Gallery"
              />
            </a>
          </div>
        </div>
        {/* .col */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="single-gallery">
            <a
              href="images/gallery/6.webp"
              data-effect="mfp-3d-unfold"
              className="large-view"
            >
              <img
                src="images/gallery/6.webp"
                className="img-responsive"
                alt="Gallery"
              />
            </a>
          </div>
        </div>
        {/* .col */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="single-gallery">
            <a
              href="images/gallery/5.webp"
              data-effect="mfp-3d-unfold"
              className="large-view"
            >
              <img
                src="images/gallery/5.webp"
                className="img-responsive"
                alt="Gallery"
              />
            </a>
          </div>
        </div>
        {/* .col */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="single-gallery">
            <a
              href="images/gallery/6.webp"
              data-effect="mfp-3d-unfold"
              className="large-view"
            >
              <img
                src="images/gallery/6.webp"
                className="img-responsive"
                alt="Gallery"
              />
            </a>
          </div>
        </div>
        {/* .col */}
      </div>

      <div className="row btn-center">
        <button onClick={() => history.push("/")} className="go-back-btn">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default IndusEmpire;

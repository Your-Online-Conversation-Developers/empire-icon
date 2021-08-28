import React from "react";

const Testimonial = () => {
  return (
    <div className="testimonials-section alt-bg" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="side-head">
              <h2>
                Client <span>Words.</span>
              </h2>
              <h4>Don’t take our words take a look at client words.</h4>
              <a href="/" className="button sm">
                be one of them
              </a>
            </div>
          </div>
          {/* .col */}
          <div className="col-md-8">
            <div className="testimonials-list">
              <div className="single-testimonial">
                <div className="row">
                  <div className="col-md-5 col-sm-4">
                    <div className="client-image">
                      <img src="images/testimonials/1.jpg" alt="testimonials" />
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-md-7 col-sm-8">
                    <div className="testimonial-text">
                      <blockquote>
                        One morning, when Gregor Samsa woke from troubled
                        dreams, he found himself transformed in his bed into a
                        horrible vermin. He lay on his armour-like back.
                      </blockquote>
                      <h5>
                        <small>new york , USA</small>Moshua Robinson
                      </h5>
                    </div>
                  </div>
                  {/* .col */}
                </div>
                {/* .row */}
              </div>
              {/* .single-testimonial */}
              <div className="single-testimonial">
                <div className="row">
                  <div className="col-md-5 col-sm-4">
                    <div className="client-image">
                      <img src="images/testimonials/2.jpg" alt="testimonials" />
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-md-7 col-sm-8">
                    <div className="testimonial-text">
                      <blockquote>
                        Even the all-powerful Pointing has no control about the
                        blind texts it is an almost unorthogra phic life One day
                        however a small line of blind text to leave for the far
                        World of Grammar.
                      </blockquote>
                      <h5>
                        <small>new york , USA</small>Larry Gonzales
                      </h5>
                    </div>
                  </div>
                  {/* .col */}
                </div>
                {/* .row */}
              </div>
              {/* .single-testimonial */}
            </div>
            {/* .testimonials-list */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

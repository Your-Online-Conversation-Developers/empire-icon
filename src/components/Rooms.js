import React from "react";

const Rooms = () => {
  return (
    <div className="room-features-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="room-image">
              <img
                src="images/rooms/1.jpg"
                className="img-responsive"
                alt="rooms"
              />
            </div>
          </div>
          {/* .col */}
          <div className="col-md-6">
            <div className="room-features-texts">
              <h2>
                Master <span>Bedroom.</span>
              </h2>
              <h4>
                Lets take a look at nipe vila’s master bed rooms and things they
                contains.
              </h4>
              <ul>
                <li>430 Square Feet</li>
                <li>1 King size bed</li>
                <li>2 Table lamp</li>
                <li>Console table</li>
                <li>Royel touch paint</li>
                <li>60’’ Toshiba TV</li>
                <li>Attached bathroom</li>
              </ul>
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

export default Rooms;

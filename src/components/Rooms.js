import React from "react";
import Heading from "./elements/Heading";
import LiItem from "./elements/LiItem";

const Rooms = () => {
  const liContent = [
    {
      id: 1,
      liText: "4 Square Feet",
    },
    {
      id: 2,
      liText: "1 King size bed",
    },
    {
      id: 3,
      liText: "2 Table lamp",
    },
    {
      id: 4,
      liText: "Console table",
    },
    {
      id: 5,
      liText: "Royel touch paint",
    },
    {
      id: 6,
      liText: "60’’ Toshiba TV",
    },
    {
      id: 7,
      liText: "Attached bathroom",
    },
  ];
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
              <Heading
                h2Text="Master"
                spanText="Bedroom."
                h4Text="Lets take a look at nipe vila’s master bed rooms and things they
                contains."
              />
              <ul>
                {liContent.map((item) => (
                  <LiItem key={item.id} liText={item.liText} />
                ))}
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

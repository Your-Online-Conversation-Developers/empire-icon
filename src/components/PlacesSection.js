import React from "react";
import Box from "./elements/Box";
import Heading from "./elements/Heading";

const PlacesSection = () => {
  const boxContent = [
    {
      id: 1,
      iconClass: "icofont icofont-bed-patient",
      h6Text: "3 hospital",
      pText: "There is 2 private clinic and 1 gov hospital in 1.5k radius",
    },
    {
      id: 2,
      iconClass: "icofont icofont-train-line",
      h6Text: "train station",
      pText: "You can got to the train station in less then 10 minutes by walk",
    },
    {
      id: 3,
      iconClass: "icofont icofont-castle",
      h6Text: "catholic church",
      pText: "You will find a catholic church in 2 minutes walking distance",
    },
    {
      id: 4,
      iconClass: "icofont icofont-bus-alt-1",
      h6Text: "Bus station",
      pText: "You can got to the bus station in less then 8 minutes by walk",
    },
    {
      id: 5,
      iconClass: "icofont icofont-social-shopify",
      h6Text: "Shopping Mall",
      pText: "Don’t worry, shopping mall in your front door just open it",
    },
    {
      id: 6,
      iconClass: "icofont icofont-tree-alt",
      h6Text: "nature park",
      pText: "There is nature park for your mornnig walk in socity compound",
    },
    {
      id: 7,
      iconClass: "icofont icofont-education",
      h6Text: "School / Collage",
      pText: "Have child ? there is school just on other side of road",
    },
    {
      id: 8,
      iconClass: "icofont icofont-gym-alt-3",
      h6Text: "Fitness gym",
      pText:
        "There is 4 fitness center in just 2km, you need to walk 12 minutes",
    },
  ];

  return (
    <div className="places-section" id="location">
      <div className="container">
        <div className="section-head">
          <div className="row text-center">
            <div className="col-md-12">
              <Heading
                h2Text="Nearby"
                spanText="Places."
                h4Text="Lets take a look at nipe vila’s nearby places"
              />
            </div>
          </div>
        </div>

        <div className="row text-center">
          {boxContent.map((item) => (
            <Box
            key={item.id}
              iconClass={item.iconClass}
              h6Text={item.h6Text}
              pText={item.pText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacesSection;

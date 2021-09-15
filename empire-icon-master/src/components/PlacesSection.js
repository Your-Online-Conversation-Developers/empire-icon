import React from "react";
import Box from "./elements/Box";
import Heading from "./elements/Heading";

const PlacesSection = () => {
  const boxContent = [
    {
      id: 1,
      iconClass: "icofont icofont-bed-patient",
      h6Text: "hospital",
      pText: "There are private clinics and gov hospitals nearby",
    },
    {
      id: 2,
      iconClass: "icofont icofont-train-line",
      h6Text: "fire station",
      pText: "You can got to the train station in less then 10 minutes by walk",
    },
    {
      id: 3,
      iconClass: "icofont icofont-castle",
      h6Text: "Mosque",
      pText: "You will find a mosque in 2 minutes walking distance",
    },
    {
      id: 4,
      iconClass: "icofont icofont-zigzag",
      h6Text: "Danzoo",
      pText: "You can got to the Zoo in less then 8 minutes by walk",
    },
    {
      id: 5,
      iconClass: "icofont icofont-social-shopify",
      h6Text: "Imtiaz Super Market",
      pText: "Don’t worry, super market in your front door just open it",
    },
    {
      id: 6,
      iconClass: "icofont icofont-tree-alt",
      h6Text: "Theme Park",
      pText: "There is Theme park for your mornnig walk in socity compound",
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
                h4Text="Lets take a look at Empire Icon's nearby places"
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
            />
          ))}
        </div>
        <div className="row">
          
        <embed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4015369166577!2d67.32999051432422!3d25.054376143629803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb34b525fa737f9%3A0x43624028ddb19e6!2sEmpire%20Icon!5e0!3m2!1sen!2s!4v1631116163833!5m2!1sen!2s" width="100%" height="200" style={{"border":0}} allowFullScreen="" loading="lazy"></embed>
      
        </div>
      </div>
    </div>
  );
};

export default PlacesSection;

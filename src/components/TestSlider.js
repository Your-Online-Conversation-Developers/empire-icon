import React from "react";
import Slider from "react-slick";
import SliderItem from "./elements/SliderItem";

const TestSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    draggable: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="header-section desktop-slider" id="header">
      <Slider {...settings}>
        
        <SliderItem 
          uHead="2330 Sq. Ft"
          mHead="DIAMOND LUXURY"
          lHead="TYPE A | 2 SIDE CORNER"
          imgSrc="images/bg/diamond-luxury.webp"
          toLink="about"
        />

        <SliderItem 
          uHead="1835 Sq. Ft"
          mHead="GOLD LUXURY"
          lHead="TYPE A | 2 SIDE CORNER"
          imgSrc="images/bg/gold-luxury.webp"
          toLink="about"
        />

        <SliderItem 
          uHead="1685 Sq. Ft"
          mHead="SILVER LUXURY"
          lHead="TYPE A | 2 SIDE CORNER"
          imgSrc="images/bg/sliver-luxury.webp"
          toLink="about"
        />

       
        
        <SliderItem 
          uHead="1685 Sq. Ft"
          mHead="SILVER"
          lHead="TYPE A | 2 SIDE CORNER"
          imgSrc="images/bg/slider-3.webp"
          toLink="about"
        />


      </Slider>
    </div>
  );
};

export default TestSlider;

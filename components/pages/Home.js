import React from 'react';
import About from '../About';
import CtaSection from '../CtaSection';
import Floors from '../Floors';
import Gallery from '../Gallery';
import HeaderSlider from '../HeaderSlider';
import PlacesSection from '../PlacesSection';
import Rooms from '../Rooms';
import Testimonial from '../Testimonial';
import VideoSection from '../VideoSection';

const Home = () => {
    return (
        <>
            <HeaderSlider />
            <About />
            <Floors />
            <VideoSection />
            <Rooms />
            <Gallery />
            <PlacesSection />
            <Testimonial />
            <CtaSection />
        </>
    )
}

export default Home;

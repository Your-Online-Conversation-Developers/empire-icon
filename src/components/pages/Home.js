import React from 'react'
import About from '../About'
import CtaSection from '../CtaSection'
import Floors from '../Floors'
import Footer from '../Footer'
import Gallery from '../Gallery'
import Header from '../Header'
import HeaderSlider from '../HeaderSlider'
import PlacesSection from '../PlacesSection'
import Rooms from '../Rooms'
import Testimonial from '../Testimonial'
import VideoSection from '../VideoSection'

const Home = () => {
    return (
        <>
            <Header />
            <HeaderSlider />
            <About />
            <Floors />
            <VideoSection />
            <Rooms />
            <Gallery />
            <PlacesSection />
            <Testimonial />
            <CtaSection />
            <Footer />
        </>
    )
}

export default Home;

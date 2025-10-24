import React from 'react';
import MovingText from '../Components/MovingText';
import Navbar from '../Components/Navbar';
import TextStrip from '../Components/TextStrip';
import MainView from '../Components/MainView';
import MainViewMobile from '../Components/MainViewMobile';
import SliderView from '../Components/SliderView';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
      <div className="website-content">
        <MovingText />
        <Navbar />
        <TextStrip />
        <MainView />
        <MainViewMobile />
        <SliderView />
      </div>
      <Footer />
    </>
  );
}

export default Home;

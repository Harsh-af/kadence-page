import React from 'react';
import MovingText from '../Components/MovingText';
import Navbar from '../Components/Navbar';
import TextStrip from '../Components/TextStrip';
import MainView from '../Components/MainView';
import SliderView from '../Components/SliderView';

function Home() {
  return (
    <div>
        <MovingText />
        <Navbar />
        <TextStrip />
        <MainView />
        <SliderView />
    </div>
  );
}

export default Home;

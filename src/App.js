import React from 'react';
import './App.css';
import Navbar  from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Mission from './components/mission/Mission';
import Features from './components/features/Features';
import TextBanner from './components/text-banner/TextBanner';
import Advantages from './components/advantages/Advantages';
import Questions from './components/questions/Questions';
import Footer from './components/footer/Footer';


// Schriftfarbe #50850c
// Hellgrün: #e8fcce
// Hintergrund: #f7f9f9

const App = () => {

    return (
          <>
            <Navbar/>
            <Banner/>
            <Mission/>
            <Features/>
            <TextBanner/>
            <Advantages/>
            <Questions/>
            <Footer/>
          </>
    );
}

export default App;
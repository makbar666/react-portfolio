// HomePage.js
import React from 'react';
import HeroSection from './Herosection';
import Home from './Home';
import Content from './Content';
import About from './About';

function HomePage() {
    return (
        <div>
            <HeroSection />
            <Home />
            <Content />
            <About />
        </div>
    );
}

export default HomePage;

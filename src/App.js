
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import HeroSection from './components/Herosection';
import Content from './components/Content';
import Footer from './components/Footer';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <Home />
        <Content />
        <Footer />
      </main>
    </div>
  );
}

export default App;


import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import HeroSection from './components/Herosection';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <Home />
      </main>
    </div>
  );
}

export default App;

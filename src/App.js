
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Project from './components/Project';
import HomePage from './components/HomePage';


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>


  );
}

export default App;

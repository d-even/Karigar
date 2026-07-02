import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import OurCrafts from './components/OurCrafts';
import WhyAreWe from './components/WhyAreWe';
import Capabilities from './components/Capabilities';

import Reviews from './components/Reviews';
import CraftNow from './components/CraftNow';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Marquee />
      <OurCrafts />
      <WhyAreWe />
      <Capabilities />

      <div className="section-divider" aria-hidden="true">
        <span className="section-divider-line" />
      </div>

      <Reviews />
      <Marquee single reverse />
      <CraftNow />
      <Footer />
    </div>
  );
}

export default App;

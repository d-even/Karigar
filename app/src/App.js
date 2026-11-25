import { useEffect, useState } from 'react';
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
import OurCraftPage from './pages/OurCraftPage';

const OUR_CRAFT_ROUTE = '#/our-craft';

function useHash() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return hash;
}

function Home() {
  return (
    <>
      <Hero />
      <Marquee single />
      <OurCrafts />
      {/* <WhyAreWe /> */}
      <Capabilities />

      <div className="section-divider" aria-hidden="true">
        <span className="section-divider-line" />
      </div>

      <Reviews />
      <Marquee single reverse />
      <CraftNow />
    </>
  );
}

function App() {
  const hash = useHash();
  const isOurCraft = hash === OUR_CRAFT_ROUTE;

  // After switching pages, jump to the requested section (e.g. #reviews)
  // or to the top for a page route.
  useEffect(() => {
    const id = hash.slice(1);
    const target = id && !id.startsWith('/') ? document.getElementById(id) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [isOurCraft]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <Navbar />
      {isOurCraft ? <OurCraftPage /> : <Home />}
      <Footer />
    </div>
  );
}

export default App;

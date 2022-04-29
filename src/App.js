import './css/main.css'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aside from './components/Aside';

import Placeholder from './components/Placeholder'

function App() {
  return (
    <div id="grid-container">
      {/* <Placeholder /> */}
      <Header />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
      <Aside />
    </div>
  );
}

export default App;

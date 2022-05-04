import './css/main.css';
import SplashScreen from './components/SplashScreen'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aside from './components/Aside';
import Resume from './components/Resume'
import { useRef, useEffect, useLayoutEffect, useState } from "react"

import Placeholder from './components/Placeholder'

function scrollFunction(element) {
  const elementToSelect = document.getElementById(element);
  elementToSelect.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  });
}

const appearOnScroll = (componentRef) => {
        
  const topPosition = componentRef.current.getBoundingClientRect().top;

  const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (topPosition < scrollPosition && componentRef.current.classList.contains('active') === false) {
          // console.log("triggered add")
          componentRef.current.classList.add('active')
      } else if (topPosition > scrollPosition && componentRef.current.classList.contains('active') === true ) {
          // console.log("triggered remove")
          componentRef.current.classList.remove('active')
      }
  }
  window.addEventListener('scroll', onScroll);

  return () => window.removeEventListener('scroll', onScroll)
}



function App() {

  const [ isLoading, setIsLoading ] = useState(true);

  useEffect( () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  })



  if (isLoading) {
    return (
      <SplashScreen />
    )
  } else {


    return (
      <div id="grid-container">
        {/* <Placeholder /> */}
        <Header scrollFunction={scrollFunction}/>
        <Resume />
        <Hero scrollFunction={scrollFunction}/>
        <About appearOnScroll={appearOnScroll}  />
        <Experience appearOnScroll={appearOnScroll}  />
        <Portfolio appearOnScroll={appearOnScroll}  />
        <Contact appearOnScroll={appearOnScroll} scrollFunction={scrollFunction}/>
        <Footer />
        <Aside />
      </div>
    );
  }
}

export default App;

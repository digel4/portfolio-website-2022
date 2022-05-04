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





function App() {

  const heroRef = useRef(null)

  const [ isLoading, setIsLoading ] = useState(true);

  function scrollFunction(element) {
    const elementToSelect = document.getElementById(element);
    elementToSelect.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
  }
  
  const appearOnScroll = (componentRef, componentName) => {
  
    const topPosition = componentRef.current.getBoundingClientRect().top;

  
    const onScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;

        const changeActiveLink = () => {
          let child;
            if(componentName === "about") {
              child = 1;
            } else if (componentName === "experience"){
              child = 2;
            } else if (componentName === "portfolio"){
              child = 3;
            } else if (componentName === "contact"){
              child = 4;
            }
            const allLinks = document.querySelectorAll('#ham-items-container ul li')
            const activeLink = document.querySelector(`#ham-items-container ul :nth-child(${child})`);
            // const selectedLi = document.querySelector(`nav`);
            console.log(activeLink)
            allLinks.forEach( (link) => {
                if(link.className === 'active-link') {
                    link.classList.toggle('active-link')
                }
            })
            activeLink.classList.toggle('active-link')

        }
  
        if (topPosition < scrollPosition && componentRef.current.classList.contains('active') === false) {
            // console.log("triggered add")
            componentRef.current.classList.add('active')
            changeActiveLink();


        } else if (topPosition > scrollPosition && componentRef.current.classList.contains('active') === true ) {
            // console.log("triggered remove")
            componentRef.current.classList.remove('active')

            changeActiveLink();


        }
    }
    window.addEventListener('scroll', onScroll);
  
    return () => window.removeEventListener('scroll', onScroll)
  }

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
        <Header scrollFunction={scrollFunction} locationReferences={{ heroRef }}/>
        <Resume />
        <Hero  scrollFunction={scrollFunction}/>
        <About appearOnScroll={appearOnScroll}  />
        <Experience ref={heroRef} appearOnScroll={appearOnScroll}  />
        <Portfolio appearOnScroll={appearOnScroll}  />
        <Contact appearOnScroll={appearOnScroll} scrollFunction={scrollFunction}/>
        <Footer />
        <Aside />
      </div>
    );
  }
}

export default App;

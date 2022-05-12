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
import { debounce } from './utilities/helpers';
import { useRef, useEffect, useLayoutEffect, useState } from "react"

import Placeholder from './components/Placeholder'





function App() {

  const [ isLoading, setIsLoading ] = useState(true);

  const swapBurgerMenuIcon = () => {
    const label = document.querySelector('nav label');
    const input = document.querySelector('nav input')
    if (input.checked === false) {
        label.innerHTML = "&#9776";
        label.classList.toggle("active")
    } else {
        label.innerHTML = "&#88";
        label.classList.toggle("active")
    } 
}

  function scrollFunction(element) {
    const elementToSelect = document.getElementById(element);
    elementToSelect.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
    const input = document.querySelector('nav input')
    if(element !== "root" && window.innerWidth < 600) {
      input.checked = false;
      swapBurgerMenuIcon();
    }

  }
  
  const appearOnScroll = (componentRef, componentName) => {
  
    const topPosition = componentRef.current.getBoundingClientRect().top;
    const midPosition = topPosition + componentRef.current.getBoundingClientRect().height;
  
    const onScroll =  debounce( () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        console.log("triggered OnSrcoll")

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
            // console.log(activeLink)
            allLinks.forEach( (link) => {
                if(link.className === 'active-link') {
                    link.classList.toggle('active-link')
                }
            })
            activeLink.classList.toggle('active-link')

        }
        // console.log(`${componentName}: ${topPosition}`)
        // console.log(`${scrollPosition}`)
        if (midPosition < scrollPosition) {
          //console.log("started changeActiveLink()")
          changeActiveLink();
        }
        if (topPosition < scrollPosition && componentRef.current.classList.contains('active') === false) {
            // console.log("triggered add")
            componentRef.current.classList.add('active')
        } else if (topPosition > scrollPosition && componentRef.current.classList.contains('active') === true ) {
            // console.log("triggered remove")
            componentRef.current.classList.remove('active')
            //console.log("started changeActiveLink()")
            //changeActiveLink();


        }
    }, 100);
    window.addEventListener('scroll', onScroll);
  
    return () => window.removeEventListener('scroll', onScroll)
  }

  useEffect( () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  })



  if (isLoading) {
    return (
      <SplashScreen />
    )
  } else {


    return (
      <div id="grid-container">
        {/* <Placeholder /> */}
        <Header scrollFunction={scrollFunction} swapBurgerMenuIcon={swapBurgerMenuIcon}/>
        <Resume swapBurgerMenuIcon={swapBurgerMenuIcon} />
        <Hero  scrollFunction={scrollFunction}/>
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

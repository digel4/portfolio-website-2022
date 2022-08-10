import React, { useState, useEffect } from 'react';
import { debounce } from '../utilities/helpers';
import myResume from "../assets/Oliver-Fox-CV-online.pdf";
const Header = (props) => {
    const { scrollFunction, swapBurgerMenuIcon } = props;

    const swapIcon = () => {
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

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const header = document.querySelector('#header');

        const handleScroll = debounce( () => {
            const label = document.querySelector('nav label');
            if (label.classList.value !== "active"){ 
                const currentScrollPos = window.pageYOffset;
                setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
                setPrevScrollPos(currentScrollPos);
            }
            
        }, 100)

        if (visible) {
            header.classList.remove("hidden")
        } else {
            header.classList.add("hidden")
        }

        
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    
      }, [prevScrollPos, visible]);

        const displayResume = () => {
            if(window.innerWidth < 600) {
                const input = document.querySelector('nav input')
                input.checked = false;
                swapBurgerMenuIcon();
              }
        }
    return (
        <div id="header" className="hidden">
            <div className="icon">
                <a href="/">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        width="64" 
                        height="56.5" 
                        viewBox="0 0 512.001 452.024">
                            
                        <g transform="translate(0 -29.989)"><path d="M493.352,274.138c-21.6-14.215-36.29-38.338-51.847-63.876q-2.738-4.5-5.51-9.013c29.609-83.63-10.549-150.865-12.323-153.764l-10.7-17.5-69.42,80.685C318.524,99.745,289.559,94.381,256,94.381s-62.524,5.365-87.551,16.294L99.028,29.989l-10.7,17.5C86.555,50.383,46.4,117.62,76,201.248q-2.778,4.515-5.51,9.013c-15.556,25.539-30.25,49.661-51.847,63.876L0,286.412l18.454,12.562c1.268.864,127.147,86.651,155.859,115.362,9.083,9.084,16.313,18.508,23.307,27.622,15.8,20.6,30.732,40.055,58.38,40.055s42.576-19.457,58.38-40.055c6.993-9.114,14.223-18.538,23.307-27.622,28.711-28.711,154.59-114.5,155.859-115.362L512,286.412ZM407.028,82.722c6.81,18.818,13.961,49.63,7.011,85.664a195.734,195.734,0,0,0-34.3-35.921q-4.621-3.688-9.479-7.011ZM99.048,103.156a166.269,166.269,0,0,1,5.942-20.413l36.749,42.713q-4.855,3.326-9.478,7.01a195.79,195.79,0,0,0-34.34,35.974A158.4,158.4,0,0,1,99.048,103.156ZM209.857,409.187c-4.328-5.253-9.07-10.645-14.411-15.986-22.781-22.781-97.111-75.309-136.052-102.33,22.472-6.78,57.442-14.753,97.637-14.753,11.866,0,21.27,3.778,28.75,11.549C209.174,311.972,210.824,368.327,209.857,409.187ZM256,452.125c-6.48,0-11.774-2.688-17.411-7.938.1-3.785.263-8.18.448-13.013.044-1.136.088-2.294.132-3.466h33.663c.044,1.172.089,2.33.132,3.466.184,4.833.352,9.228.448,13.013C267.774,449.436,262.48,452.125,256,452.125Zm16.043-54.3H239.958c.4-45.309-3.781-100.892-32.643-130.88-13.227-13.743-30.144-20.711-50.283-20.711a366.851,366.851,0,0,0-79.741,9.033C83.908,245.677,90,235.686,96.02,225.81c15.262-25.056,31.044-50.964,54.881-69.982,26.62-21.237,61-31.561,105.1-31.561s78.48,10.323,105.1,31.561c23.837,19.018,39.619,44.927,54.881,69.982,6.015,9.875,12.112,19.867,18.729,29.454a366.852,366.852,0,0,0-79.741-9.033c-20.138,0-37.056,6.968-50.283,20.711C275.823,296.929,271.638,352.512,272.043,397.822Zm44.511-4.62c-5.341,5.341-10.082,10.733-14.412,15.986-.967-40.86.683-97.216,24.076-121.52,7.48-7.772,16.883-11.549,28.75-11.549,40.032,0,75.067,7.99,97.6,14.776C413.621,317.923,339.328,370.427,316.554,393.2Z"/><path d="M362.024,292.285A17.32,17.32,0,1,0,379.117,309.6,17.215,17.215,0,0,0,362.024,292.285Z"/><path d="M149.987,292.285A17.32,17.32,0,1,0,167.08,309.6,17.215,17.215,0,0,0,149.987,292.285Z"/></g>
                    </svg>
                </a>
            </div>
            <nav>
                <label htmlFor="hamburger">&#9776;</label>
                <input onClick={() => {swapIcon()}} type="checkbox" id="hamburger" />
                <div id="ham-items-container">
                    <ul id="ham-items">
                        <li onClick={ () => { 
                            scrollFunction("about"); 
                            // activateLi(1) 
                            }}>About</li>
                        {/* <li onClick={ () => { 
                            scrollFunction("experience"); 
                            // activateLi(2) 
                            } }>Experience</li> */}
                        <li onClick={ () => { 
                            scrollFunction("portfolio"); 
                            // activateLi(3) 
                            } }>Projects</li>
                        <li onClick={ () => { 
                            scrollFunction("contact"); 
                            // activateLi(4) 
                            } }>Contact</li>
                        <li><a href={myResume} onClick={ () => { displayResume(); } } target="_blank" rel="noreferrer">CV</a></li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;
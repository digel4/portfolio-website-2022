import { useRef, useLayoutEffect, useEffect } from "react"



const About = (props) => {
    const { appearOnScroll } = props;

    const componentRef = useRef(null);



    
    useLayoutEffect( () => {
        appearOnScroll(componentRef)
    }, []);




    return (
        <div ref={componentRef}  className="reveal" id="about">
            <div>
                <h1>About Me</h1>
                <p>My name is Oliver and I am an aspiring frontend developer with a passion for all things digital. My passion for web development started when I was tasked with refreshing the website at Real Creative Futures. Always up for a challenge I decided to learn some basic web design. Learning basic web design led to learning HTML, CSS & JavaScript. Which then led to learning node.js. which then led to learning MongoDB which then led to learning React.js</p>
                <p>All this learning snow balled into a calling and has led me down a never-ending rabbit hole of discovery around web development.</p>
                <p>Here are a few technologies I’ve been working with recently:</p>
                <ul>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>Node.js</li>
                </ul>
            </div>
            <div>
                
                <div id="head-shot" >
                    <div className="img-overlay">
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default About;
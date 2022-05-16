import { useRef, useLayoutEffect, useEffect } from "react"



const About = (props) => {
    const { appearOnScroll } = props;

    const componentRef = useRef(null);



    
    useLayoutEffect( () => {
        appearOnScroll(componentRef, "about")
    }, []);




    return (
        <div ref={componentRef}  className="reveal" id="about">
            <div className="about-me-info">
                <h1>About Me</h1>
                <p>My name is Oliver and I am a full-stack developer with a passion for all things digital. My passion for web development started when I was tasked with refreshing the website at Real Creative Futures. Always up for a challenge I decided to learn some web design. I ended up learning HTML, CSS & JavaScript and eventually dived into learning node.js, MongoDB and React.js</p>
                <p>I am currently working on some C# & .net projects.</p>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <div className="skills-logos">
                    <ul>
                        <li>
                            <img src="assets/JS.png" alt="JavaScript logo"/>
                            <h4>JavaScript (ES6+)</h4>
                        </li>
                        <li>
                            <img src="assets/React.png" alt="React logo"/>
                            <h4>React.js</h4>
                    </li>
                        <li>
                            <img src="assets/Nodejs.png" alt="Node js logo"/>
                            <h4>Node.js</h4>

                        </li>
                        <li>
                            <img src="assets/CSS3.png" alt="CSS logo"/>
                            <h4>CSS</h4>
                        </li>
                        <li>
                            <img src="assets/sass.png" alt="SASS logo"/>
                            <h4>SASS</h4>
                        </li>
                        <li>
                            <img src="assets/MongoDB.png" alt="MongoDB logo"/>
                            <h4>MongoDB</h4>
                        </li>
                        <li>
                            <img src="assets/redux.png" alt="Redux logo"/>
                            <h4>Redux</h4>
                        </li>
                        <li>
                            <img src="assets/Expressjs.png" alt="Express js logo"/>
                            <h4>Express.js</h4>
                        </li>
                        <li>
                            <img src="assets/html5.png" alt="HTML5 logo"/>
                            <h4>HTML5</h4>
                        </li>
                        <li>
                            <img src="assets/Git.png" alt="Git logo"/>
                            <h4>Git</h4>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="head-shot" >
                <div className="img-overlay">
                </div>
            </div>
        </div>
    )
}

export default About;
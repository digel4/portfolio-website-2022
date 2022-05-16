import { useRef, useLayoutEffect } from 'react';

const Hero = (props) => {
    const { scrollFunction, appearOnScroll } = props;

    const componentRef = useRef(null);

    useLayoutEffect( () => {
        appearOnScroll(componentRef, "Hero")
    }, []);





    return (
        <div id="hero" ref={componentRef} >
            <h3 className=".reveal">Hi, my name is</h3>
            <h1>Oliver Fox</h1>
            <h1>I build things for the web</h1>
            <p>Full-stack developer with a passion for building user friendly websites with a robust backend.</p>
            <div id="hero-buttons">
                <div onClick={() => scrollFunction("about")} className="button">About Me</div>
                <div onClick={() => scrollFunction("contact")} className="button">Contact Me</div>
            </div>
        </div>
    )
}

export default Hero;
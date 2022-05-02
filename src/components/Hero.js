

const Hero = (props) => {
    const { scrollFunction } = props;





    return (
        <div id="hero">
            <h3 className=".reveal">Hi, my name is</h3>
            <h1>Oliver Fox</h1>
            <h1>I build things for the web</h1>
            <p>I am a frontend developer with a passion for building and designing user friendly websites </p>
            <div id="hero-buttons">
                <div onClick={() => scrollFunction("about")} className="button">About Me</div>
                <div onClick={() => scrollFunction("contact")} className="button">Contact Me</div>
            </div>
        </div>
    )
}

export default Hero;
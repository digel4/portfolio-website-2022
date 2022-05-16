import React, { useRef, useLayoutEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = (props) => {
    const { scrollFunction, appearOnScroll } = props;

    const form = useRef();
    const componentRef = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();
        // const messageError = document.querySelector(".message-success")
        // messageError.classList.toggle("hide-message");

        emailjs.sendForm('service_uhiq51a', 'template_hf7qgns', form.current, '0ANbtcaZxjr4bt4LZ')
        .then((result) => {
            console.log(result.text);
            const messageSuccess = document.querySelector(".message-success")
            messageSuccess.classList.toggle("hide-message");

            setTimeout(() => {
                messageSuccess.classList.toggle("hide-message");
              }, 6000);

            const formInputs = document.querySelectorAll(".input-field")
            //console.log(formInputs)

            formInputs.forEach( (input) => {
                input.value = "";
            })
        }, (error) => {
            console.log(error.text);
            const messageError = document.querySelector(".message-fail")
            messageError.classList.toggle("hide-message");
            setTimeout(() => {
                messageError.classList.toggle("hide-message");
              }, 6000);
        });
    };


    useLayoutEffect( () => {
        appearOnScroll(componentRef, 'contact')
    }, []);




    return (
        <div ref={componentRef} className="reveal" id="contact" >
            <h1>Get in Touch</h1>
            
            <p>I am currently looking for opportunities as a junior frontend developer. My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you.</p>
            <form ref={form} onSubmit={sendEmail}>
                <div id="contact-details">
                    <div>
                        <input className="input-field" placeholder="name" type="text" name="userName" required/>
                        <label className="label" htmlFor="userName">Name</label>
                    </div>
                    <div>
                        <input className="input-field" placeholder="email"type="userEmail" name="userEmail" required/>
                        <label className="label" htmlFor="email">Email</label>
                    </div>
                    <div>
                        <input className="input-field" placeholder="subject"type="text" name="subject" required/>
                        <label className="label" htmlFor="subject">Subject</label>
                    </div>
                </div>  
                
                <div id="message">
                
                <textarea className="input-field" placeholder="message" name="message" rows="2" required/>
                <label className="label" htmlFor="message">Message</label>
                </div>

                
                <div id="submit">
                    <div className="button">
                        <input type="submit" value="Send"/>
                    </div>
                    <div>
                        <p className="message-success hide-message">Message sent!</p>
                        <p className="message-fail hide-message">Message failed</p>
                    </div>
                </div>
            </form>
        


            <div onClick={() => scrollFunction("root")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM382.6 254.6c-12.5 12.5-32.75 12.5-45.25 0L288 205.3V384c0 17.69-14.33 32-32 32s-32-14.31-32-32V205.3L174.6 254.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l103.1-103.1C241.3 97.4 251.1 96 256 96c4.881 0 14.65 1.391 22.65 9.398l103.1 103.1C395.1 221.9 395.1 242.1 382.6 254.6z"/></svg>
            </div>

            
        </div>
    )
}

export default Contact;

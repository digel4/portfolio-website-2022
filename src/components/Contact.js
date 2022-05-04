import React, { useRef, useLayoutEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = (props) => {
    const { scrollFunction, appearOnScroll } = props;

    const form = useRef();
    const componentRef = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mpde1ed', 'template_hf7qgns', form.current, '0ANbtcaZxjr4bt4LZ')
        .then((result) => {
            console.log(result.text);
            const messageSuccess = document.querySelector(".message-success")
            messageSuccess.classList.toggle("hide-message");

            setTimeout(() => {
                messageSuccess.classList.toggle("hide-message");
              }, 6000);

            const formInputs = document.querySelectorAll(".input-field")
            console.log(formInputs)

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
        appearOnScroll(componentRef)
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
                
                <textarea className="input-field" placeholder="message" name="message" rows="5" required/>
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
        



            <div onClick={() => scrollFunction("header")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 64 74.526"><path d="M62.442,67.748a5.321,5.321,0,0,1-7.537,0L37.34,50.2v51.12a5.172,5.172,0,0,1-5.184,5.184,5.432,5.432,0,0,1-5.484-5.184V50.2L9.11,67.748a5.333,5.333,0,0,1-7.542-7.542L28.236,33.538a5.332,5.332,0,0,1,7.542,0L62.447,60.206A5.336,5.336,0,0,1,62.442,67.748Z" transform="translate(-0.005 -31.975)"/>
                </svg>
            </div>


            
        </div>
    )
}

export default Contact;

import { useRef, useLayoutEffect } from 'react';

const Experience = (props) => {
    const { appearOnScroll } = props;

    const componentRef = useRef(null);

    useLayoutEffect( () => {
        appearOnScroll(componentRef, "experience")
    }, []);


    return (
        <div ref={componentRef}  className="reveal" id="experience">
            <h1>Where I've Worked</h1>
            <div>
                <h2>Assistant Project Manager <span>@ New Art Exchange / Real Creative Futures</span></h2>
                <h4>March 2019 - present</h4>
                <ul>
                    <li>Built the entire Real Creative Futures Digital website from scratch.</li>
	                <li>Incorporated NoSQL database with MongoDB to generate and display events hosted by the organisation.</li>
	                <li>Utilised React and Redux to create a seamless single-page application  </li>
	                <li>Used JSON web tokens for authentication to allow seamless transitions from the user side to the admin side. Incorporated a silent refresh to overcome the issue of short expiration of JWT</li>
	                <li>Developed a modern and responsive user interface using CSS/Sass Grid, Flexbox, JavaScript</li>
	                <li>Built a working protype of an online application form that sends form data to the Salesforce API</li>
	                <li>Liaised with the marketing team in the future rebuild of the New Arts Exchange Website</li>
	                <li>Co-led the running of the business support programme</li>
	                <li>Organised a series of live-coding workshops</li>
                </ul>
            </div>
        </div>
    )
}

export default Experience;
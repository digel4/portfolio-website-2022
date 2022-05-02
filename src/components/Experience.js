import { useRef, useLayoutEffect } from 'react';

const Experience = (props) => {
    const { appearOnScroll } = props;

    const componentRef = useRef(null);

    useLayoutEffect( () => {
        appearOnScroll(componentRef)
    }, []);


    return (
        <div ref={componentRef}  className="reveal" id="experience">
            <h1>Where I've Worked</h1>
            <div>
                <h2>Assistant Project Manager <span>@ New Art Exchange / Real Creative Futures</span></h2>
                <h3>dates</h3>
                <h4>March 2019 - present</h4>
                <ul>
                    <li>Built the Real Creative Futures portal website from scratch</li>
                    <li>Liaised with the marketing team in the future rebuild of the New Arts Exchange Website</li>
                    <li>Co-led the running of the business support programme</li>
                    <li>Organised a series of live-coding workshops</li>            
                </ul>
            </div>
        </div>
    )
}

export default Experience;
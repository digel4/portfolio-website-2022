import { useRef, useLayoutEffect } from 'react';

const Portfolio = (props) => {
    const componentRef = useRef(null);
    const { appearOnScroll } = props;

    useLayoutEffect( () => {
        appearOnScroll(componentRef)
    }, []);


    return (
        <div ref={componentRef}  className="reveal" id="portfolio">
            <h1>Some Things That I Have Built</h1>
            <div>
                <a title="External Link" href="https://www.realcreativefutures.co.uk/" target="_blank" rel="noreferrer">
                    <div className="portfolio-website-img">
                            <div className="img-overlay" />
                    </div>
                </a>
            </div>
            <div>
                <h3>Featured Project</h3>
                <h2>Real Creative Futures Website</h2>
                <p>A website that acts as a portal for Real Creative Futures participants. The portal allows people to see past and future events. The events are stored on MongoDB and called through the API on the backend.</p> 
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                </ul>
                <div className="portfolio-outside-links">
                    <a title="GitHub" href="https://github.com/digel4/RCFD-Website-with-React" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 94.347 90.601"><path d="M31.557,80.951c0,.375-.437.674-.989.674-.628.056-1.065-.244-1.065-.674,0-.375.437-.674.989-.674C31.062,80.221,31.557,80.521,31.557,80.951Zm-5.916-.843c-.133.375.247.806.818.918a.9.9,0,0,0,1.179-.375c.114-.375-.247-.806-.818-.974A.983.983,0,0,0,25.641,80.108Zm8.408-.318c-.552.131-.932.487-.875.918.057.375.552.618,1.122.487.552-.131.932-.487.875-.862C35.114,79.977,34.6,79.734,34.049,79.79ZM46.565,8C20.182,8,0,27.727,0,53.712A47.026,47.026,0,0,0,32.242,98.524c2.435.431,3.291-1.049,3.291-2.267,0-1.162-.057-7.569-.057-11.5,0,0-13.315,2.81-16.111-5.583,0,0-2.168-5.452-5.288-6.857,0,0-4.356-2.941.3-2.885a10.069,10.069,0,0,1,7.342,4.833c4.166,7.231,11.147,5.152,13.867,3.915a10.354,10.354,0,0,1,3.043-6.313C28,70.7,17.272,69.186,17.272,51.164c0-5.152,1.446-7.737,4.489-11.035a17.452,17.452,0,0,1,.495-12.721c3.976-1.218,13.125,5.058,13.125,5.058a45.6,45.6,0,0,1,23.891,0s9.149-6.295,13.125-5.058a17.444,17.444,0,0,1,.495,12.721c3.043,3.316,4.908,5.9,4.908,11.035,0,18.079-11.2,19.521-21.837,20.7,1.75,1.48,3.234,4.29,3.234,8.693,0,6.313-.057,14.126-.057,15.662,0,1.218.875,2.7,3.291,2.267,19.022-6.22,31.918-24,31.918-44.775C94.347,27.727,72.948,8,46.565,8ZM18.489,72.615c-.247.187-.19.618.133.974.3.3.742.431.989.187.247-.187.19-.618-.133-.974C19.174,72.5,18.736,72.371,18.489,72.615ZM16.435,71.1c-.133.244.057.543.437.731a.571.571,0,0,0,.818-.131c.133-.244-.057-.543-.437-.731C16.872,70.854,16.568,70.91,16.435,71.1ZM22.6,77.767c-.3.244-.19.806.247,1.162.437.431.989.487,1.236.187.247-.244.133-.806-.247-1.162C23.416,77.523,22.845,77.467,22.6,77.767Zm-2.168-2.754c-.3.187-.3.674,0,1.105s.818.618,1.065.431a.845.845,0,0,0,0-1.162C21.228,74.956,20.734,74.769,20.429,75.013Z" transform="translate(0 -8)" fill="#e2e2e2"/></svg></a>
                    <a title="External Link" href="https://www.realcreativefutures.co.uk/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512"> <path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z" fill="#e2e2e2"/></svg></a>
                </div> 
            </div>
        </div>
    )
}

export default Portfolio;
import React from "react";
import Launch from '../Media/astronaut-space-4k-k7.jpg'
import Fade from 'react-reveal/Fade';

function Home() {
    return (
        <div className="homeComponent">
          <Fade>
              <img src={Launch} className="launchPic"/>
            <div className="Introduction">
                <h1 className="introText">Our Mission</h1>
                <p className="mission">Our Mission is to take muh fuckaz to da moon you feel me ?
                </p>
            </div>
          </Fade>  
        </div>
      
  );
}
export default Home;

// https://grabify.link/track/BBUD5J

import React, { useEffect } from 'react';
import './Banner.css';
import Button  from '../button/Button';
import Zoom from 'react-reveal/Zoom';


const Banner = () => {

    return (  
          
            <div className="banner">
                <Zoom>
                  <div className="banner-text">
                      <h1 className="fade-in">The Green Cloud <br/> Computing Company</h1>
                      <Button button="Unsere Mission"/>
                  </div>
                </Zoom>
            </div>
            
    );
}

export default Banner;
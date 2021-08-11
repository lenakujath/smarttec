import React from 'react';
import './Banner.css';
import Button  from '../button/Button';


const Banner = () => {

    return (
          <>
            <div className="banner">
                    <div className="banner-text">
                        <h1>The Green Cloud <br/> Computing Company</h1>
                        <Button button="Unsere Mission"/>
                    </div>
            </div>
          </>
    );
}

export default Banner;
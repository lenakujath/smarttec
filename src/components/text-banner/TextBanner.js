import React from 'react';
import './TextBanner.css';
import InfoText from '../infotext/InfoText';
import Bird from './Icon_Bird.svg';


const TextBanner = () => {

    return (
          <>
            <div className="text-banner">
                <InfoText 
                    src={Bird} 
                    alt="Bird_Symbol"
                    title="Get notified when we start our journey"
                    text="Es lässt sich nicht eindeutig feststellen wann dieser Text zum ersten Mal verwendet wurde und von wem.
                          Die englische Firma Letraset in Ashford, Kent, benutzt diesen Text seit über siebzig Jahren um ihre 
                          Schrifttypen und Schriftschnitte vorzustellen. Der Text liegt in vielen,"
                    buttonText="Zum Newsletter eintragen"
                    buttonDisplay=""
                />
            </div>
          </>
    );
}

export default TextBanner;
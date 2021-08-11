import React from 'react';
import './InfoText.css';


const InfoText = ({src, alt, title, text, buttonDisplay = 'none', buttonText }) => {

    return (
        <>
            <section >
                <div className="container-info">
                    <img src={src} style={{width: '5em'}} alt={alt}/>
                    <h2>{title}</h2>
                    <p>{text}</p>
                     <button className="main-button" style={{display: buttonDisplay}}>{buttonText}</button>
                </div>
            </section>
          </>
    );
}

export default InfoText;
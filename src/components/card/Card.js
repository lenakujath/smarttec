import React from 'react';
import './Card.css';
import Fade from 'react-reveal/Fade';

const Card = ({ cardSymbol, cardAlt, cardTitle, cardText}) => {
    return (
            <Fade top>
            <div className="card">
                <img src={cardSymbol} alt={cardAlt}/>
                <div className="card-content">
                    <h3>{cardTitle}</h3>
                    <p>{cardText}</p>
                </div>
            </div>
            </Fade>
    );
}

export default Card;
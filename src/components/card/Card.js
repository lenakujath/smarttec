import React from 'react';
import './Card.css';


const Card = ({ cardSymbol, cardAlt, cardTitle, cardText}) => {
    return (
        <>
            <div className="card">
                <img src={cardSymbol} alt={cardAlt}/>
                <div className="card-content">
                    <h3>{cardTitle}</h3>
                    <p>{cardText}</p>
                </div>
            </div>
          </>
    );
}

export default Card;
import React from 'react';
import './Button.css';


const Button = ({ button = "My Button" }) => {
    return (
        <>
            <button  className="main-button">{button}</button>
        </>
    );
}

export default Button;
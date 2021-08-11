import React from 'react';
import './Questions.css'
import InfoText from '../infotext/InfoText';
import Bird from './Icon_Bird.svg';



const Questions = () => {

    return (
        <div className="question-container">
           <InfoText
                src={Bird}
                alt="Bird_Symbol"
                title="Sie haben Fragen oder benötigen Support?
                        Wir sind für sie da!"
                text="Dieser Text liegt in verschiedenen Variationen vor, auf dieser Website finden sie Transliterationen
                des Textes für Kyrillisch (also russisches Lorem Ipsum), Griechisch und Armenisch, da sich die 
                Alphabete dieser Sprachen für eine"
                buttonDisplay=""
                buttonText="Contact Us"
           /> 
           
        </div>
    );
}

export default Questions;
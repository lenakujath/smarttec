import React  from 'react';
import './Mission.css';
import InfoText from '../infotext/InfoText';
import Card from '../card/Card';
import CO2 from './Icon_CO2.svg';
import Map from './Icon_Germany_Map.svg';
import Earth from './Icon_EarthLeaves.svg';
import Button from '../button/Button';


const Mission = () => {
  
    return (
        <>
            <div className="container">        
                <InfoText title="Unsere Mission" 
                          text="Dieser Text liegt in verschiedenen Variationen vor, auf dieser Website finden sie Transliterationen
                          des Textes für Kyrillisch (also russisches Lorem Ipsum), Griechisch und Armenisch, da sich die 
                          Alphabete dieser Sprachen für eine Ersetzung Buchstaben für Buchstaben eignen."
                />
                {/* <Fade top> */}
                <div className="card-container">
                  <Card 
                    cardSymbol={CO2}
                    cardAlt="CO2_Icon"
                    cardTitle="Bis 2023 25% weniger CO2 verbrauchen"
                    cardText="Der Text liegt in vielen Variationen vor auf dieser Website"
                  />
                  <Card 
                    cardSymbol={Map}
                    cardAlt="Germany_map_Icon"
                    cardTitle="Ganz Deutschland miteinander vernetzen"
                    cardText="Der Text liegt in vielen Variationen vor auf dieser Website"
                  />
                  <Card
                    cardSymbol={Earth}
                    cardAlt="Earth_and_Plant_Icon"
                    cardTitle="Nachhaltigkeit in jedem Bereich steigern"
                    cardText="Der Text liegt in vielen Variationen vor auf dieser Website"
                  />
                </div>
                {/* </Fade> */}
                <Button button="Mehr erfahren"/>
            </div>
          </>
    );
}

export default Mission;
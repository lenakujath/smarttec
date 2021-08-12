import React, { useState } from 'react';
import './Advantages.css';
import Card from '../card/Card';
import Resilient from './Icon_Resilient.svg';
import Dezentral from './Icon_Dezentral.svg';
import Nachhaltig from './Icon_Nachhaltigkeit.svg';
import Fade from 'react-reveal/Fade';


const Advantages = () => {

    return (
        
            <div className="container">
              {/* <Fade top> */}
                <h2>Vorteile</h2>
                <div className="card-container">
                  <Card 
                        cardSymbol={Resilient}
                        cardAlt="Resilient_Icon"
                        cardTitle="Resilient"
                        cardText="Georedundantes Spiegeln der verschlüsselten Datenbestände im Schwarm, automatisiert, ausfallsicher und robust"
                  />
                  <Card
                    cardSymbol={Dezentral}
                    cardAlt="Dezentral_Icon"
                    cardTitle="Dezentral"
                    cardText="Kundennahe Standorte für sicherheitskritishe und latenzsensible Workloads. 
                              Die Edge-Cloud für Unternehmen im Wandel der 
                              Digitalisierung."
                  />
                  <Card
                      cardSymbol={Nachhaltig}
                      cardAlt="Nachaltig_Icon"
                      cardTitle="Nachhaltig"
                      cardText="Synergie mit den Standorten und der Infrastruktur von Solar- und Windanlagen. 
                                Günstiger Direktbezug von Grundstrom vor Ort."
                  />
                </div>
              {/* </Fade> */}
            </div>
    );
}

export default Advantages;
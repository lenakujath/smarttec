import React from 'react';
import './Features.css';
import InfoText from '../infotext/InfoText';
import Kubernetes from './Icon_KubernetesCluster.svg';
import Chip from './Icon_Chip.svg';
import Cloud from './Icon_Cloud.svg';


const Features = () => {
  
    return (
        <>
            <div className="container">
                <InfoText 
                    title="Unsere Leistungen" 
                    text="Dieser Text liegt in verschiedenen Variationen vor, auf dieser Website finden sie Transliterationen
                            des Textes für Kyrillisch (also russisches Lorem Ipsum), Griechisch und Armenisch, da sich die 
                            Alphabete dieser Sprachen für eine"
                />
                <div className="feature-container">
                    <div className="text-left">
                        <h2>Virtuelle Maschinen</h2>
                        <p>Text zum ersten Mal verwendet wurde und von wem.
                          Die englische Firma Letraset in Ashford, Kent, benutzt diesen Text seit über siebzig Jahren um ihre 
                          Schrifttypen. 
                        </p>
                        <button className="learn-button">Learn More</button>
                    </div>
                    <img src={Chip}/>
                </div>
                <div className="feature-container">
                <img src={Kubernetes} />
                    <div className="text-right">
                        <h2>Managed Kubernetes Cluster</h2>
                        <p>Es lässt sich nicht eindeutig feststellen wann dieser Text zum ersten Mal verwendet wurde und von wem.
                          Die englische Firma Letraset in Ashford, Kent, benutzt diesen Text seit über siebzig.
                        </p>
                        <button className="learn-button">Learn More</button>
                    </div>
                </div>
                <div className="feature-container">
                    <div className="text-left">
                        <h2>Edge Cloud</h2>
                        <p>Es lässt sich nicht eindeutig feststellen wann dieser Text zum ersten Mal verwendet wurde und von wem.
                          Die englische Firma Letraset in Ashford, Kent, benutzt diesen Text seit über siebzig Jahren.
                        </p>
                        <button className="learn-button">Learn More</button>
                    </div>
                    <img src={Cloud}/>
                </div>
            </div>
          </>
    );
}

export default Features;
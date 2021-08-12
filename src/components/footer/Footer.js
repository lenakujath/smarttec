import React from 'react';
import './Footer.css';
import Bird from './Icon_Bird.svg';
import Fade from 'react-reveal/Fade';


const Footer = () => {

    return (    
            <footer>
                <div className="container">
                    <div className="container-footer">
                        <div className="col-left">
                        <Fade left>
                            <div className="logo-title">
                            <img src={Bird} style={{width: '5em'}} alt="LIMEBIRD_Logo"/>
                            <h1>LIME<span>BIRD</span></h1>                          
                            </div>
                        </Fade>
                            <p>Angaben gemäß §5 TMG <br/>LIMEBIRD Gmbh</p>
                            <p>Dossenheimer Str.32 <br/> 68775 Ketsch</p>   
                        </div>
                        <div className="footer-right">
                            <div className="col-middle">
                                <h4>Company</h4>
                                <p>Unsere Mission</p>
                                <p>Leistungen</p>
                                <p>Blog</p>
                            </div>
                            <div className="col-right">
                                <h4>Kontakt</h4>
                                <p>Telefon: +49 (0) 173 792 8330</p>
                                <p>Telefax: +49 (0) 32 223357964</p>
                                <p>Email: <span className="email">info@limebird.io</span></p>
                            </div>
                        </div>
                    </div> 
                    <div className="bottom-line">
                        <p>&copy; 2020 LIMEBIRD</p>
                        <div className="bottom-right">
                            <p>Datenschutz</p>
                            <p>Impressum</p>
                        </div>
                    </div>
                    </div>  
            </footer>
    );
}

export default Footer;
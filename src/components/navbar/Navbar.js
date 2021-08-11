import React from 'react';
import './Navbar.css';
import Bird from './Icon_Bird.svg';


const Navbar = () => {

    return (
        <>
            <header>
                <div className="container container-nav"> 
                    <div className="logo-title">
                        <img src={Bird} style={{width: '5em'}} alt="LIMEBIRD_Logo"/>
                        <h1>LIME<span>BIRD</span></h1>
                    </div>
                    <nav>
                        <ul>
                            <li>Unsere Mission</li>
                            <li>Leistungen</li>
                            <li>Blog</li>
                            <li>Kontakt</li>
                        </ul>
                    </nav>
                </div>
            </header>
          </>
    );
}

export default Navbar;
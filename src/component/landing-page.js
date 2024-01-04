import React from "react";
import './landing-page.css'
import imageone from './asset/Something_of_a_Scientist.jpg'

function Lp() {
    return(
        <div className="lp">

            <h1 className="landing-tagline"> "I'm Something of a Developer Myself." <br/>-Farhan Nafis</h1>
    
            <div className="lp-inside">
                <img className="image-1" src={imageone} alt="im something scientist myself" />

                <p className="tagline-landing-page"> Click here to see about me  <br/> furthermore: </p>

                <div className="lp-inside2">
                    <a href="https://bobbyhadz.com" target="_blank" rel="noopener noreferrer">
                        <button className="button">CV Farhan</button>
                    </a>

                </div>
            </div>

        </div>
    )
};

export default Lp;
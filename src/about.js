import React from "react";
import './about.css'
import Policy from "./component/policy";
import imagetwo from './component/asset/download (1).jpg'

function About() {
    return(
        <div className="about">

        <div className="isi-about">

        <img className="image-2" src={imagetwo} alt="cat meme" />

             <h4 className="about-me-text">Hi, im Farhan Nafis. Birth and growing up as ordinary and generalist person make me realize that i have a lot potential to growth. 

Since i was kids i love to draw and develop my self into a creative person, in exchange i am bad at some subject like math, physic, and any other similiar type (except in languages). As much as i love drawing, i love to do some creative stuff like writting, making website, videos, interactive/communicative design and so much more as you can name it.

Im a person who upholding a friendly approach, since i love to talking and being part of social about anything from silly to serious. and im not a pushover person and like to hangout even im an introvert (im not a pasive-speaker).</h4>
        </div>
           
            <Policy/>
        </div>
    )
};

export default About;
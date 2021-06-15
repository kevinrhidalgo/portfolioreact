import React from 'react';
import "./HomePage.css"
import Ig from "./ig.png"
import Github from "./ghub.png"
import Phone from "./cellphone.jpeg"
import Email from "./Email.png"
import Linkedin from "./in.png"

const footerImg ={
    width: 40,
    height: 50,
    borderRadius:'100%',
    margin: '12px',
    opacity:'85%'
    }

export default function HomePage() {
    return (
        <div className="Home">
    <h2>
       Kevin R. Hidalgo
        </h2>
        <p>FULL-STACK WEB DEVELOPER</p>
        <div className="contactList">
       <a href="https://www.instagram.com/"><img style={footerImg} src={Ig}/></a> 
       <a href="https://github.com//kevinrhidalgo"><img style={footerImg} src={Github}/></a> 
        <a href="tel:555-555-5555"><img style={footerImg} src={Phone}/></a>
        <a href="mailto:EmailAddress@.XYZ.com"><img style={footerImg} src={Email}/></a>
        <a href="https://www.linkedin.com/in/kevinrhidalgo/"><img style={footerImg} src={Linkedin}/></a>
        </div>
        </div>
        
    );
  }
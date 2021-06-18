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
    boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
    }

export default function HomePage() {
    return (
        <div className="Home">
    <h2>Kevin R. Hidalgo</h2>
        <h3>“It’s not how good you are, it’s how good you want to be”
</h3>
<br/>
<br/>

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
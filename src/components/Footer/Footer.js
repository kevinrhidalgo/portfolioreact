import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import "./Footer.css";
import { Link } from "react-router-dom";
import Ig from "./instagram.png"
import Github from "./gitH.png"
import Phone from "./phone.png"
import Email from "./mailE.png"
import Linkedin from "./linkedIn.png"
import Twitter from "./twittwe.png"
import proResume from './professionalResume.pdf'

const footerBg={
  backgroundColor:'white',
  height:'200px',
  display:'flex',
  justifyContent:'center',
  flexDirection:'column'
}
const footerInfo={
 color:'#222222',
 margin:'30px',
 fontSize:'15px',
 fontWeight:'bold',
 fontFamily: 'Encode Sans SC, sans-serif',
 textDecoration:'none'
}
const letsTalk={
  textDecoration:'none',
  color:'red',
  fontSize:'50px',
  color:'#222222'
}
const footerImg ={
  width: 20,
  height: 30,
  borderRadius:'100%',
  margin: '12px',
  }

function Footer() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
  
  return (
    <div className='myFooter'>

      
    <nav style={footerBg} className="navbar navbar-expand  ">

    <div class='questionAsk'> 
      <h1>Looking for a Front-End Developer? 
        <br/>
        <br/>
       & a Back-End Developer?</h1>
      <a style={letsTalk}  href="mailto:kevinrhidalgo@yahoo.com"><h3 >Let's talk</h3> </a> 
      </div>

      
      <div className="footerInfo">
      <p style={footerInfo}><a style={footerInfo} href="mailto:kevinrhidalgo@yahoo.com">Collaborate with Me</a></p>

      <p style={footerInfo}> © 2021. Kevin Hidalgo Portfolio</p>

      <a onClick={openModal}><p style={footerInfo}>Contacts</p></a>
        <Modal showModal={showModal} setShowModal={setShowModal} />

        <a href={proResume}><h1 style={footerInfo} >Resume</h1></a>

   </div>

   <div className="contactList">
       <a href="https://www.instagram.com/"><img style={footerImg} src={Ig}/></a> 
       <a href="https://github.com//kevinrhidalgo"><img style={footerImg} src={Github}/></a> 
        <a href="tel:646-285-5696"><img style={footerImg} src={Phone}/></a>
        <a href="mailto:kevinrhidalgo@yahoo.com"><img style={footerImg} src={Email}/></a>
        <a href="https://www.linkedin.com/in/kevinrhidalgo/"><img style={footerImg} src={Linkedin}/></a>
        <a href="twitter.com"><img style={footerImg} src={Twitter}/></a>
        </div>   
    </nav>
    </div>
  );
}

export default Footer;

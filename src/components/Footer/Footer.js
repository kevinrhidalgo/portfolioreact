import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import "./Footer.css";
import { Link } from "react-router-dom";
import Ig from "../Modal/ig.png"
import Github from "../Modal/ghub.png"
import Phone from "../Modal/cellphone.jpeg"
import Email from "../Modal/Email.png"
import Linkedin from "../Modal/in.png"

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
  filter: 'grayscale(50%)',
  boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
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

   </div>

   <div className="contactList">
       <a href="https://www.instagram.com/"><img style={footerImg} src={Ig}/></a> 
       <a href="https://github.com//kevinrhidalgo"><img style={footerImg} src={Github}/></a> 
        <a href="tel:555-555-5555"><img style={footerImg} src={Phone}/></a>
        <a href="mailto:EmailAddress@.XYZ.com"><img style={footerImg} src={Email}/></a>
        <a href="https://www.linkedin.com/in/kevinrhidalgo/"><img style={footerImg} src={Linkedin}/></a>
        </div>   
    </nav>
    </div>
  );
}

export default Footer;

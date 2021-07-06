import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import "./Footer.css";
import { Link } from "react-router-dom";

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
 fontFamily: 'Old Standard TT, serif',
 textDecoration:'none'
}
const letsTalk={
  textDecoration:'none',
  color:'red',
  fontSize:'50px',
  color:'gray'
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
      <h1>Looking for a Front-end Developer? 
        <br/>
        <br/>
       & a Back-end Developer?</h1>
      <a style={letsTalk}  href="mailto:kevinrhidalgo@yahoo.com"><h3 >Let's talk</h3> </a> 
      </div>

      
      <div className="footerInfo">
      <p style={footerInfo}><a style={footerInfo} href="mailto:kevinrhidalgo@yahoo.com">Collaborate with Me</a></p>

      <p style={footerInfo}> © 2021. Kevin Hidalgo Portfolio</p>

      <a onClick={openModal}><p style={footerInfo}>Contacts</p></a>
        <Modal showModal={showModal} setShowModal={setShowModal} />

        

    
    
  
   </div>
    </nav>
    </div>
  );
}

export default Footer;

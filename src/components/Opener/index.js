import React from 'react';
import './Opener.css'
import { Link } from "react-router-dom";
import salud from './salud.png'
import shelfi from './shelfi.png'
import underC from './underC.jpg'

const underScore={
  color:'tomato',
  animation: 'blinker 1s linear infinite',
}
const pStyler={
  display:'flex',
  justifyContent:'center',
  fontWeight:'bold'
}

export default function Opener() {
 
  return (
    <>
      <div className='opener' id='opener'>
      <div className='openerBody'>
            <div className='openerBody'>
<h2>Kevin R. Hidalgo</h2>
        <h3>“It’s not how good you are, it’s how good you want to be”
</h3>

</div>
</div>
          
      </div>
{ /* <div className='midBorder'>Hello</div> */}


<div className='projSec'>
     <h1>Work <span style={underScore} className='underScore'>_</span></h1>
     <div className='pStyler'>
       <div className='pStylerTwo'>
<p style={pStyler}>As a fullstack web developer, my passion is creating different projects to enhance user experiences.
 To create applications that start from an idea in the head. 
It's a balance of applying various technology, designs, and research with non-stop
  experimentation.</p>
  </div>
  </div>



</div> 
    </>
  );
}
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
<p>As a fullstack web developer, my passion is creating different projects <br/> to enhance user experiences, and creating
  an application that comes from an idea.<br/> It's a balance of applying various technology, designs, and research and 
  experimentation.
</p>



</div> 
    </>
  );
}
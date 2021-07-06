import React from 'react';
import './Opener.css'
import { Link } from "react-router-dom";
import salud from './salud.png'
import shelfi from './shelfi.png'
import underC from './underC.jpg'

const projImg={
  width:'240px',
  height:'200px'
}
const linkBtn={
  textDecoration:'none',
  marginLeft:'90px',
  backgroundColor:'#fffaf1',
  color:'black',
  padding:'5px',
  textWeight:'800px',
  borderRadius:'10%',
  boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
}

export default function Opener() {
  return (
    <>
      <div className='opener'>
      <div className='openerBody'>
            <div className='openerBody'>
<h2>Kevin R. Hidalgo</h2>
        <h3>“It’s not how good you are, it’s how good you want to be”
</h3>

</div>
</div>
          
      </div>
<div className='midBorder'>Hello</div>


<div className='projSec'>
     <h1>Projects</h1>
<div className='firstSection'>
 <div className='aSection'>
 <a href="https://github.com/mascarelloa/shelfi"><img style={projImg} src={shelfi}/> </a> 
 <div className='descSec'>
 <h2>Shelfi.</h2>
       <p> A library application where you can search for your books of choice in which you want to read and plan to read.</p>
       <a style={linkBtn} href="https://github.com/mascarelloa/shelfi" class="card-link">Repo</a>
       
</div> 
</div>    



<div className='aSection'>
<a href="https://myshelfi.herokuapp.com/"><img style={projImg} src={salud}/> </a>
<div className='descSec'>
<h2>Salud.</h2>
<p>Salud is an application with the purpose of showing users that one can enjoy and have fun eating, all while eating clean.</p>
  <a style={linkBtn} href="https://github.com/mascarelloa/shelfi" class="card-link">Repo</a>
       
</div>

</div> 
</div>

<div className='firstSection'>
<div className='aSection'>
<a href="https://github.com/kevinrhidalgo"> <img style={projImg} src={underC}/>  </a>
<div className='descSec'>
<h2>Coming Soon.</h2>
<p>Project currently in coding development.</p>
       <a style={linkBtn} href="https://github.com/kevinrhidalgo" class="card-link">Repo</a>
</div>

</div>
<div className='aSection'>
<a href="https://github.com/kevinrhidalgo"> <img style={projImg} src={underC}/>  </a> 
<div className='descSec'>
<h2>Coming Soon.</h2>
<p>Project currently in coding development.</p>
       <a style={linkBtn} href="https://github.com/kevinrhidalgo" class="card-link">Repo/</a>
</div>

</div>



</div>

</div> 
    </>
  );
}
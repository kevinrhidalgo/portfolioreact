import React from 'react';
import Photo from './nycc.jpg'
import './About.css'

const famPhoto={
    width:'300px',
    height:'300px', 
    transform:'translate(175%,-110%)',
    filter:'blur(.7px)'
}
const hello={
    fontFamily: 'Dancing Script, cursive'
}


export default function About() {
    return (
   <div className='aboutSection'>
   <div className='emptyBox'>
       <h4>About</h4>
   <p>FULL-STACK WEB DEVELOPER</p>
   </div> 
   <div className='famPhoto'><img style={famPhoto} src={Photo}/></div>   
   <div className='aboutMe'>
       <h2 style={hello}>Hello</h2>

       <p>This is my paragraph section</p>
       </div> 
   </div>
    );
  }
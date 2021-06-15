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

       <p>If you are reading this than that means you are either grading my work or here to get to know me a little. My name is Kevin Hidalgo and I am a web developer in the making and a current full-time student 
        at the UCF coding bootcamp. I was born and raised in the Bronx, New York until August of 2019, in which I moved to Orlando, Florida. </p>
        <p>Growing up I always had two career paths I wanted to pursue, coder or cardiologist. Prior to deciding between the two, I chose to pursue a career in medicine. I got as far as my junior year in which it was than I made the difficult decision to 
        change career paths due to some unfortunate events. Thanks to a friend, it was he who introduced me to the concept of a coding bootcamp to jumpstart my career in web development.</p>
          <p> Though i am inexperienced, I have alot of aspirations to continue learning various languages while also building my own applications from my pocket of ideas that i believe has potential; Hey! it doesn't hurt to dream big.  </p>
          <h1>Resume Link</h1>
       </div> 

   </div>
    );
  }
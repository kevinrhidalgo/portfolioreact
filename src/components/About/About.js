import React from 'react';
import './About.css'
import proResume from './proResume.pdf'
import { Link } from "react-router-dom";
import Github from "../Modal/ghub.png"
import Phone from "../Modal/cellphone.jpeg"
import Email from "../Modal/Email.png"
import Linkedin from "../Modal/in.png"

const hello={
    fontFamily: 'Dancing Script, cursive'
}
const resumePro={
    display:'flex',
    justifyContent:'center',
    backgroundColor:'#123456',
    borderRadius:'5%',
    color:'white',
    height:'30px',
    width:'150px',
    padding:'4px',
    fontSize:'17px',
    fontFamily: 'Mulish, sans-serif',
    boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
    textDecoration:'none'
}
const underScoreTwo={
    color:'white',
    animation: 'blinker 1s linear infinite',
    fontSize:'50px',
    transform:'translate(20%,-10%',
}
const underScore={
    color:'white',
    animation: 'blinker 1s linear infinite',
    fontSize:'50px',
    transform:'translate(20%,-35%',
}
const footerImg ={
    width: 30,
    height: 40,
    borderRadius:'100%',
    display:'flex',
    flexDirection:'column',
    filter: 'grayscale(70%)',
    backgroundColor:'white',
    marginLeft:'-111px',
    position:'fixed',
    boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
    }

export default function About() {
    return (

        <>
      <div className='aboutPage'>
      <div className='aboutSection'> 
      <div className='sideContacts'> 
<a href="https://github.com//kevinrhidalgo"><img style={footerImg} src={Github}/></a> 
        <a href="tel:555-555-5555"><img style={footerImg} src={Phone}/></a>
        <a href="mailto:EmailAddress@.XYZ.com"><img style={footerImg} src={Email}/></a>
        <a href="https://www.linkedin.com/in/kevinrhidalgo/"><img style={footerImg} src={Linkedin}/></a>
    </div>
   <div className="blogContainer">


<div id="col-1">
    <h2>about.</h2>
    <br/>
   <p>FULL-STACK WEB DEVELOPER</p>
   <p>Orlando,FL</p>
   <br/>
   <br/>
   <a href={proResume}><h1 style={resumePro}>resume.</h1></a>
</div>

<div id="col-2">
<h2 style={hello}>Hello</h2>

       <p>If you are reading this than that means you are either grading my work or here to get to know me a little. My name is Kevin Hidalgo and I am a web developer in the making and a current full-time student 
        at the UCF coding bootcamp. I was born and raised in the Bronx, New York until August of 2019, in which I moved to Orlando, Florida. </p>
        <p>Growing up I always had two career paths I wanted to pursue, coder or cardiologist. Prior to deciding between the two, I chose to pursue a career in medicine. I got as far as my junior year in which it was than I made the difficult decision to 
        change career paths due to some unfortunate events. Thanks to a friend, it was he who introduced me to the concept of a coding bootcamp to jumpstart my career in web development.</p>
          <p> Though i am inexperienced, I have alot of aspirations to continue learning various languages while also building my own applications from my pocket of ideas that i believe has potential; Hey! it doesn't hurt to dream big.  </p>
</div>


</div>
   </div>


   <div className='mySkillsSection'>
   <h1>skills<span style={underScoreTwo} className='underScore'>.</span></h1>
   <h3>languages<span style={underScore} className='underScore'>.</span></h3>

<div className='languagesType'>
    <div className='secOne'>
<p>HTML</p>
    <div class="container">
        <div class="skill html">90%</div>
    </div>
</div>
<div className='secOne'>
<p>CSS</p>
    <div class="container">
        <div class="skill css">83%</div>
    </div>
    </div>
<div className='secOne'>
<p>Javascript</p>
    <div class="container">
        <div class="skill javascript">60%</div>
    </div>
</div>
<div className='secOne'>
<p>NoSQL</p>
    <div class="container">
        <div class="skill nosql">35%</div>
    </div>
</div>
<div className='secOne'>
<p>Spanish</p>
    <div class="container">
        <div class="skill spanish">100%</div>
    </div>
</div>
</div>




<h3>applications<span style={underScore} className='underScore'>.</span></h3>
<div className='applicationType'>
<div className='secOne'>
<p>Github</p>
    <div class="container">
        <div class="skill github">95%</div>
    </div>
</div>
<div className='secOne'>
<p>MongoDB</p>
    <div class="container">
        <div class="skill mongodb">51%</div>
    </div>
</div>
<div className='secOne'>
<p>MySQL</p>
    <div class="container">
        <div class="skill mysql">55%</div>
    </div>
</div>
<div className='secOne'>
<p>VS Code</p>
    <div class="container">
        <div class="skill vscode">99%</div>
    </div>
</div> 
</div>

<div className='applicationType'>
<div className='secOne'>
<p>Robo 3T</p>
    <div class="container">
        <div class="skill robo3t">33%</div>
    </div>
</div>
<div className='secOne'>
<p>Insomnia</p>
    <div class="container">
        <div class="skill insomnia">75%</div>
    </div>
</div>
</div>



<h3>tools<span style={underScore} className='underScore'>.</span></h3>
<div className='toolType'>
<div className='secOne'>
    <p>Express</p>
    <div class="container">
        <div class="skill express">51%</div>
    </div>
</div>   
<div className='secOne'>
<p>React</p>
    <div class="container">
        <div class="skill react">68%</div>
    </div>
</div>
<div className='secOne'>
<p>Node</p>
    <div class="container">
        <div class="skill node">58%</div>
    </div>  
</div>
<div className='secOne'>
<p>Handlebars</p>
    <div class="container">
        <div class="skill handlebars">65%</div>
    </div>
</div>
</div>

<div className='toolType'>
<div className='secOne'>
<p>JQuery</p>
    <div class="container">
        <div class="skill jquery">50%</div>
    </div>
</div>
<div className='secOne'>
<p>Bootstrap</p>
    <div class="container">
        <div class="skill bootstrap">90%</div>
    </div>
</div>  
<div className='secOne'>
<p>Api(server-side/3rd Party</p>
    <div class="container">
        <div class="skill api">60%</div>
    </div>
</div>  
</div>

<br/>
<br/>
<br/>

<div className='hobbiesInterestOne'>
<div className='hobbiesInterest'>
<h3>Hobbies & Interests</h3>
<p>Besides my passion for coding, I love to play and watch sports, specfically baseball, 
    basketball and football. Any of the New York teams, you name it, im a huge fan of minus the Mets and Brooklyn Nets.
     I also love to cook, travel and draw. My favorite foods to cook is lasagana and chicken sandwiches.
    Places I hope to visit one day are Greece and the great wall of China. And I dont do much drawing today as I 
    did before but now I have the chance to implement that hobbie into my coding passion.
</p>
</div>
</div>

</div>

</div>
      



    </>

    );
  }

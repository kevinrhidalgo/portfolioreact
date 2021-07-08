import React from 'react';
import './About.css'
import proResume from './proResume.pdf'

const famPhoto={
    width:'300px',
    height:'300px', 
    transform:'translate(175%,-110%)',
    filter:'blur(.7px)',
    backgroundColor:'#d3d3d3'
    
}
const hello={
    fontFamily: 'Dancing Script, cursive'
}
const resumePro={
    display:'flex',
    justifyContent:'center',
    backgroundColor:'#dddddd',
    borderRadius:'10%',
    color:'blue',
    height:'25px',
    width:'80px',
    paddingTop:'4px',
    fontSize:'18px',
    fontFamily: 'Dancing Script, cursive',
    boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
    marginLeft:'150px',
    fontWeight:'900px'
}
const underScore={
    color:'#6c5b7b',
    animation: 'blinker 1s linear infinite',
  }


export default function About() {
    return (

        <>
      <div className='aboutPage'>
      <div className='aboutSection'>
   <div className='emptyBox'>
       <h4>About</h4>
   <p>FULL-STACK WEB DEVELOPER</p>
   </div> 
   <div className='famPhoto'><img style={famPhoto}/></div>  

   <div className='aboutMe'>
       <h2 style={hello}>Hello</h2>

       <p>If you are reading this than that means you are either grading my work or here to get to know me a little. My name is Kevin Hidalgo and I am a web developer in the making and a current full-time student 
        at the UCF coding bootcamp. I was born and raised in the Bronx, New York until August of 2019, in which I moved to Orlando, Florida. </p>
        <p>Growing up I always had two career paths I wanted to pursue, coder or cardiologist. Prior to deciding between the two, I chose to pursue a career in medicine. I got as far as my junior year in which it was than I made the difficult decision to 
        change career paths due to some unfortunate events. Thanks to a friend, it was he who introduced me to the concept of a coding bootcamp to jumpstart my career in web development.</p>
          <p> Though i am inexperienced, I have alot of aspirations to continue learning various languages while also building my own applications from my pocket of ideas that i believe has potential; Hey! it doesn't hurt to dream big.  </p>
          <a href={proResume}><h1 style={resumePro}>Resume</h1></a>
       </div> 


   </div>

      </div>



<div className='aboutSec'>
<h1>Skills<span style={underScore} className='underScore'>_</span></h1>
   <h1>Languages<span style={underScore} className='underScore'>_</span></h1>

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
</div>
<div className='secOne'>
<p>Spanish</p>
    <div class="container">
        <div class="skill spanish">100%</div>
    </div>
</div>


<h1>Applications<span style={underScore} className='underScore'>_</span></h1>
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



<h1>Tools<span style={underScore} className='underScore'>_</span></h1>
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




</div> 
    </>

    );
  }

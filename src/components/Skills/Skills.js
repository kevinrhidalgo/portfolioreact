import React from 'react';
import'./Skills.css'
import myphoto from './myphoto.jpg'
 
const myfoto={
    borderRadius:'100%',
    transform:'translate(400%,-120%)',
    width:'130px',
    height:'130px',
    border:'beige solid 6px',
}
const skillWord={
    display:'flex',
    justifyContent:'center',
    fontFamily: 'Anton, sans-serif',
    paddingTop: '30px',
    color:'white'
}


export default function Skills() {
    return (
        <>
            <div className='emptySpace'>     
       <h2>Personal Details</h2>
    </div>  
    <img style={myfoto} src={myphoto}/> 
    <div className='skillsSec'>
        <h1 style={skillWord}>Skills</h1>
    <div>
<div className='skillsType'>
<h1 style={skillWord}>Languages</h1>
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
</div>


<div className='secOne'>
<p>NoSQL</p>
    <div class="container">
        <div class="skill nosql">35%</div>
    </div>
</div>
</div>


<h1 style={skillWord}>Applications</h1>
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
</div>

<div className='applicationType'>
<div className='secOne'>
<p>VS Code</p>
    <div class="container">
        <div class="skill vscode">99%</div>
    </div>
</div> 
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

<h1 style={skillWord}>Tools</h1>
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
</div>
<div className='toolType'>
<div className='secOne'>
<p>Handlebars</p>
    <div class="container">
        <div class="skill handlebars">65%</div>
    </div>
</div>
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
</div>
<div className='toolType'>
<div className='secOne'>
<p>Api(server-side/3rd Party</p>
    <div class="container">
        <div class="skill api">60%</div>
    </div>
</div>
</div>
    </div>
    </div>
   





    </>   
    );
  }
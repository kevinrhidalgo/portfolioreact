import React from 'react';
import './Work.css'
import underC from './underC.jpg'
import salud from './salud.png'
import shelfi from './shelfi.png'

const projectsImg1={
   width:270,
   height:220,
   margin:20
}
const projectsImg2={
    width:250,
    height:270,
    marginRight:20,
    borderRight:'#FF7F4F solid 2px'
 }
const projLinks={
    backgroundColor:'#FF7F4F',
    color:'black',
    margin:'10px',
    marginTop:'20px',
    padding:'10px',
    textDecoration:'none'
}
const projLinks2={
    border:'#FF7F4F solid 2px',
    color:'black',
    margin:'10px',
    marginTop:'20px',
    padding:'10px',
    textDecoration:'none'
}

export default function Projects() {
    return (
       <>
       <div className="workSection">
          <h1>Skills</h1>

<div className="skillsSection">
     <h1>Languages</h1>
     <div class="vl"></div>
    <p>HTML</p>
    <div class="container">
        <div class="skill html">90%</div>
    </div>
    <div class="vl"></div>
  <p>CSS</p>
    <div class="container">
        <div class="skill css">83%</div>
    </div>
    <div class="vl"></div>
    <p>Javascript</p>
    <div class="container">
        <div class="skill javascript">60%</div>
    </div>
    <div class="vl"></div>
    <p>NoSQL</p>
    <div class="container">
        <div class="skill nosql">35%</div>
    </div>
</div>   

<div className="skillsSection">
     <h1>Applications</h1>
     <div class="vl"></div>
    <p>Github</p>
    <div class="container">
        <div class="skill github">95%</div>
    </div>
    <div class="vl"></div>
  <p>MongoDB</p>
    <div class="container">
        <div class="skill mongodb">51%</div>
    </div>
    <div class="vl"></div>
    <p>MySQL</p>
    <div class="container">
        <div class="skill mysql">55%</div>
    </div>
    <div class="vl"></div>
    <p>VS Code</p>
    <div class="container">
        <div class="skill vscode">99%</div>
    </div>
    <div class="vl"></div>
    <p>Robo 3T</p>
    <div class="container">
        <div class="skill robo3t">33%</div>
    </div>
    <div class="vl"></div>
    <p>Insomnia</p>
    <div class="container">
        <div class="skill insomnia">75%</div>
    </div>
</div> 

<div className="skillsSection">
     <h1>Tools</h1>
     <div class="vl"></div>
    <p>Express</p>
    <div class="container">
        <div class="skill express">51%</div>
    </div>
    <div class="vl"></div>
  <p>React</p>
    <div class="container">
        <div class="skill react">68%</div>
    </div>
    <div class="vl"></div>
    <p>Node</p>
    <div class="container">
        <div class="skill node">58%</div>
    </div>
    <div class="vl"></div>
    <p>Handlebars</p>
    <div class="container">
        <div class="skill handlebars">65%</div>
    </div>
    <div class="vl"></div>
    <p>JQuery</p>
    <div class="container">
        <div class="skill jquery">50%</div>
    </div>
    <div class="vl"></div>
    <p>Bootstrap</p>
    <div class="container">
        <div class="skill bootstrap">90%</div>
    </div>
    <div class="vl"></div>
    <p>Api(server-side/3rd Party</p>
    <div class="container">
        <div class="skill api">60%</div>
    </div>
</div> 
</div>

<div class="projectSection">
<div className='shelfi'>
   <div className='shelfiOne'>
       <h2>Shelfi.</h2>
       <p> A library application where you can search for your books of choice in which you want to read and plan to read.</p>
       <a style={projLinks} href="https://github.com/mascarelloa/shelfi" class="card-link">Repo</a>
       <a style={projLinks} href="https://myshelfi.herokuapp.com/" class="card-link">App</a>
        </div>
        <div className='shelfiOne'>
      <img style={projectsImg1} src={shelfi}/>
    </div>
</div>

<div className='shelfi'>
<div className='shelfiOne'>
      <img style={projectsImg2} src={salud}/>
</div>
<div className='shelfiOne'>
        <h2>Salud.</h2>
       <p>Salud is an application with the purpose of showing users that one can enjoy and have fun eating, all while eating clean.</p>
       <a style={projLinks2} href="https://github.com/mascarelloa/shelfi" class="card-link">Repo</a>
       <a style={projLinks2} href="https://myshelfi.herokuapp.com/" class="card-link">App</a>
</div>
</div>
</div>


</>
    );
  }
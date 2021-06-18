import React from 'react';
import'./Skills.css'
import myphoto from './myphoto.jpg'
import salud from './salud.png'
import shelfi from './shelfi.png'
import underC from './underC.jpg'
 
const myfoto={
    borderRadius:'100%',
    transform:'translate(400%,-120%)',
    width:'130px',
    height:'130px',
    border:'#f0f0f0 solid 6px',
    boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
}
const skillWord={
    display:'flex',
    justifyContent:'center',
    fontFamily: 'Anton, sans-serif',
    paddingTop: '30px',
    marginRight:'20px',
    color:'white',
    boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
}
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
       <a style={linkBtn} href="https://github.com/kevinrhidalgo" class="card-link">App</a>
</div>

</div>



</div>

</div>  





    </>   
    );
  }
import React from 'react';
import './About.css'
import proResume from './proResume.pdf'
import { Link } from "react-router-dom";
import Github from "./github.PNG"
import Phone from "./cellphone.PNG"
import Email from "./email.PNG"
import Linkedin from "./linkedin.PNG"

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

const footerImg1 ={
    width: 40,
    height: 45,
    backgroundColor:'#222222',
    marginBottom:'-4px',
    boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
    }
const footerImg2 ={
    width: 40,
    height: 45,
        backgroundColor:'#ff8822',
        marginBottom:'-4px',
        boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
        }
const footerImg3 ={
    width: 40,
    height: 45,
        background:'#0e76a8',
        marginBottom:'-4px',
        boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
            }
const footerImg4 ={
    width: 40,
    height: 45,
        backgroundColor:'#0e76a8',
        marginBottom:'-4px',
        boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
                }
const wdSkill={
    textDecoration: 'line-through',
    color:'black'
}

export default function About() {
    return (

        <>
      <div className='aboutPage'>

<div className='folderData'>
    <div className='folders'>
           
<div id="tab0">
<div class='tabZero'>
   <h1>Thank You for reading,</h1>
   <h1>Hope to hear from you soon.</h1>
</div>
</div>

<div id="tab1">
<div className='blankHobInt'><h1>Hobbies & <br/> Interests.</h1></div>
<div className='hobbiesInterestOne'>
<div className='hobbiesInterest img1-tape'>

<div className='hobInt'><h3>Hobbies & Interests</h3></div>
<div className='intHob'>
<p>Besides my passion for coding, I love to play and watch sports, specifically baseball, 
    basketball and football. Any of the New York teams, you name it, im a huge fan of, minus the Mets and Brooklyn Nets.
    I also love to cook, travel and draw. My favorite foods to cook is lasagana and chicken sandwiches.
    Places I hope to visit one day are Greece and the great wall of China. And I dont do much drawing today as I 
    did before but now I have the chance to implement that hobbie into my coding passion.
</p>
</div>
</div>
</div>
</div>



<div id="tab2">
<div className='blankTool'><p>tools.</p></div>    
<div className='tools'>
<div className='toolstypeOne img15-tape'>
   <h3>tools.</h3>
   </div>
    <div className='toolstypeTwo img8-tape'>
        <h2>Web Developer Skills.</h2>
        <p style={wdSkill}>languages</p>
        <p style={wdSkill}>applications</p>
        <p>tools</p>
    </div>
   <div className='myToolSection'>
<div className='toolsType img14-tape'>
    <div className='langPartOne'>
    <div className='secOne'>
    <p>Express</p>
    <div class="container">
        <div class="skillThree express">51%</div>
    </div>
</div> 
<div className='secOne'>
<p>React</p>
    <div class="container">
        <div class="skillThree react">68%</div>
    </div>
</div> 
<div className='secOne'>
<p>Node</p>
    <div class="container">
        <div class="skillThree node">58%</div>
    </div>  
</div>
<div className='secOne'>
<p>Handlebars</p>
    <div class="container">
        <div class="skillThree handlebars">65%</div>
    </div>
</div>
</div>
<div className='langPartOne'>
<div className='secOne'>
<p>JQuery</p>
    <div class="container">
        <div class="skillThree jquery">50%</div>
    </div>
</div>
<div className='secOne'>
<p>Bootstrap</p>
    <div class="container">
        <div class="skillThree bootstrap">90%</div>
    </div>
</div> 
<div className='secOne'>
<p>Api(server-side/3rd Party</p>
    <div class="container">
        <div class="skillThree api">60%</div>
    </div>
</div> 
</div>
</div>
</div>
</div>
</div>




<div id="tab3">
<div className='blankAppl'><p>applications.</p></div>
<div className='applications'>

   <div className='myApplicationSection'>
<div className='applicationsTypeTwo'></div>
<div className='applicationsType img4-tape'>
    <div className='langPartOne'>
    <div className='secThree'>  
<p>Github</p>
    <div class="container">
        <div class="skillTwo github">95%</div>
    </div>
</div>
<div className='secThree'>
<p>MongoDB</p>
    <div class="container">
        <div class="skillTwo mongodb">51%</div>
    </div>
</div>
<div className='secThree'>
<p>MySQL</p>
    <div class="container">
        <div class="skillTwo mysql">55%</div>
    </div>
</div>
</div>

<div className='langPartOne'>
<div className='secThree'>
<p>Robo 3T</p>
    <div class="container">
        <div class="skillTwo robo3t">33%</div>
    </div>
</div>
<div className='secThree'>
<p>Insomnia</p>
<div class="container">
        <div class="skillTwo insomnia">75%</div>
    </div>
</div>
<div className='secThree'>
<p>VS Code</p>
    <div class="container">
        <div class="skillTwo vscode">99%</div>
    </div>
</div> 
</div>
</div>
<div className='applicationstypeOne img5-tape'>
   <h3>applications.</h3>
   </div>
</div>
</div>
</div>



<div id="tab4">
<div className='languages'>
    <div className='blankLang '><h1>Languages.</h1></div>
   <div className='myLanguageSection'>
<div className='languagestypeTwo img7-tape'></div>
<div className='languagestypeOne img2-tape'>
   <h3>languages.</h3>
   </div> 
<div className='languagesType img3-tape'>
    <div className='langPartOne'>
    <div className='secTwo'>
<p>HTML</p>
    <div class="container">
        <div class="skillOne html">90%</div>
    </div>
</div>
<div className='secTwo'>
<p>CSS</p>
    <div class="container">
        <div class="skillOne css">83%</div>
    </div>
    </div>
<div className='secTwo'>
<p>Javascript</p>
    <div class="container">
        <div class="skillOne javascript">60%</div>
    </div>
</div>
</div>

<div className='langPartOne'>
<div className='secTwo'>
<p>NoSQL</p>
    <div class="container">
        <div class="skillOne nosql">35%</div>
    </div>
</div>
<div className='secTwo'>
<p>Spanish</p>
    <div class="container">
        <div class="skillOne spanish">100%</div>
    </div>
</div>
</div>
</div>
</div>
</div>
</div>



<div id="tab5">
    <div className='blankAbout'><h1>About Me.</h1></div>
 <div className="blogContainer img-tape1">
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
<h2 style={hello}>Hello,</h2>
<p>
If you are reading this than hopefully this means you may be interested in bringing me in to be apart of your team. 
I'm Kevin, and I am full-stack web developer from the Bronx,NY (living in Orlando,FL). Growing up I knew I wanted to be either a cardiologist or a web developer.
Due to a rollercoaster of a ride they call life I lost my love for a career in medicine and knew what I wanted to do was build stuff. I accredit my passion and love 
for web developing to two key factors, legos and my dad. Growing up whatever store we went to, he would always go to the tech section of any store and I would be right
behind him following his every foot step or he would collect a thrown out piece of tech and fix it and it was always amazing what he could do. And as a kid I collected 
loads of legos building new stuff everyday from soccer stadiums to skyscrapers. It was always fascinting to me the ability to have an idea and bring it to life. 
When it comes to web developing I am ambitious, passionate and self driven, never giving up and always looking at the silver lining, I believe we can go as far as we want to.
Three years ago I was a waiter at an olive garden, confused and lost on how I can become a web developer and make something of myself, today i've coded out mulitple 
projects from javascript to handlebars, to react with a certificate at the University of Central Florida and the continous ambition to continue learning and
bringing my own ideas to life. 
</p>
</div>
</div>
</div>



<div id="tab6">
    <h3>Kevin Hidalgo</h3>
    <p>CASE FILE #22693</p>
    <h1>CLASSIFIED</h1>
    <h2>DECLASSIFIED</h2>
    <span class="paper-clip"></span>


</div>

</div> 
</div>

      
      <div className='sideContacts'> 
<a href="https://github.com//kevinrhidalgo"><img style={footerImg1} src={Github}/></a> 
<a href="tel:646-285-5696"><img style={footerImg2} src={Phone}/></a>
<a href="mailto:kevinrhidalgo@yahoo.com"><img style={footerImg3} src={Email}/></a>
<a href="https://www.linkedin.com/in/kevinrhidalgo/"><img style={footerImg4} src={Linkedin}/></a>
    </div>  



</div>
    </>

    );
  }

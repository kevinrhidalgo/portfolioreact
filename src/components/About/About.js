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
    width: 45,
    height: 50,
    backgroundColor:'#222222',
    marginBottom:'-4px',
    boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
    }
const footerImg2 ={
    width: 45,
    height: 50,
        backgroundColor:'#ff8822',
        marginBottom:'-4px',
        boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
        }
const footerImg3 ={
    width: 45,
    height: 50,
        background:'#0e76a8',
        marginBottom:'-4px',
        boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
            }
const footerImg4 ={
    width: 45,
    height: 50,
        backgroundColor:'#0e76a8',
        marginBottom:'-4px',
        boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
                }

export default function About() {
    return (

        <>
      <div className='aboutPage'>

<div className='folderData'>
    <div className='folders'>
           
<div id="tab0"></div>

<div id="tab1">
<div className='hobbiesInterestOne'>
<div className='hobbiesInterest img-tape'>
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



<div id="tab2">
    
<div className='tools'>
   <div className='toolstypeOne img5-tape'>
   <h3>tools.</h3>
   </div>
   <div className='myToolSection'>
<div className='toolsType img4-tape'>
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
<div className='applications'>
   <div className='myApplicationSection'>
<div className='applicationsTypeTwo'></div>
<div className='applicationsType img4-tape'>
    <div className='langPartOne'>
    <div className='secOne'>  
<p>Github</p>
    <div class="container">
        <div class="skillTwo github">95%</div>
    </div>
</div>
<div className='secOne'>
<p>MongoDB</p>
    <div class="container">
        <div class="skillTwo mongodb">51%</div>
    </div>
</div>
<div className='secOne'>
<p>MySQL</p>
    <div class="container">
        <div class="skillTwo mysql">55%</div>
    </div>
</div>
</div>

<div className='langPartOne'>
<div className='secOne'>
<p>Robo 3T</p>
    <div class="container">
        <div class="skillTwo robo3t">33%</div>
    </div>
</div>
<div className='secOne'>
<p>Insomnia</p>
<div class="container">
        <div class="skillTwo insomnia">75%</div>
    </div>
</div>
<div className='secOne'>
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
   <div className='myLanguageSection'>
<div className='languagestypeTwo img7-tape'></div>
<div className='languagestypeOne img2-tape'>
   <h3>languages.</h3>
   </div> 
<div className='languagesType img3-tape'>
    <div className='langPartOne'>
    <div className='secOne'>
<p>HTML</p>
    <div class="container">
        <div class="skillOne html">90%</div>
    </div>
</div>
<div className='secOne'>
<p>CSS</p>
    <div class="container">
        <div class="skillOne css">83%</div>
    </div>
    </div>
<div className='secOne'>
<p>Javascript</p>
    <div class="container">
        <div class="skillOne javascript">60%</div>
    </div>
</div>
</div>

<div className='langPartOne'>
<div className='secOne'>
<p>NoSQL</p>
    <div class="container">
        <div class="skillOne nosql">35%</div>
    </div>
</div>
<div className='secOne'>
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
<h2 style={hello}>Hello</h2>

       <p>If you are reading this than that means you are either grading my work or here to get to know me a little. My name is Kevin Hidalgo and I am a web developer in the making and a current full-time student 
        at the UCF coding bootcamp. I was born and raised in the Bronx, New York until August of 2019, in which I moved to Orlando, Florida. </p>
        <p>Growing up I always had two career paths I wanted to pursue, coder or cardiologist. Prior to deciding between the two, I chose to pursue a career in medicine. I got as far as my junior year in which it was than I made the difficult decision to 
        change career paths due to some unfortunate events. Thanks to a friend, it was he who introduced me to the concept of a coding bootcamp to jumpstart my career in web development.</p>
          <p> Though i am inexperienced, I have alot of aspirations to continue learning various languages while also building my own applications from my pocket of ideas that i believe has potential; Hey! it doesn't hurt to dream big.  </p>
</div>
</div>
</div>



<div id="tab6">
    <h3>Kevin Hidalgo</h3>
    <p>CASE FILE #226</p>
    <h1>CLASSIFIED</h1>
    <h2>DECLASSIFIED</h2>
    <span class="paper-clip"></span>
<div className='frontAbout'>ABOUT</div>
<div className='frontLanguages'>LANGUAGES</div>
<div className='frontApps'>APPLICATIONS</div>
<div className='frontTools'>TOOLS</div>
<div className='frontHobs'>HOBBIES/INTERESTS</div>
</div>

</div> 
</div>

      
      <div className='sideContacts'> 
<a href="https://github.com//kevinrhidalgo"><img style={footerImg1} src={Github}/></a> 
<a href="tel:555-555-5555"><img style={footerImg2} src={Phone}/></a>
<a href="mailto:EmailAddress@.XYZ.com"><img style={footerImg3} src={Email}/></a>
<a href="https://www.linkedin.com/in/kevinrhidalgo/"><img style={footerImg4} src={Linkedin}/></a>
    </div>  



</div>
    </>

    );
  }

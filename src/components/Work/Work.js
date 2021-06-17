import React from 'react';
import './Work.css'
import underC from './underC.jpg'


const projectsImg1={
   width:270,
   height:220,
   margin:20,
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
const projLinks3={
    border:'#FF7F4F solid 2px',
    borderRadius:'50%',
    color:'black',
    margin:'10px',
    marginTop:'20px',
    padding:'10px',
    textDecoration:'none'
}
const projLinks4={
    backgroundColor:'#FF7F4F',
    borderRadius:'100%',
    color:'black',
    margin:'10px',
    marginTop:'20px',
    padding:'10px',
    textDecoration:'none'
}


export default function Projects() {
    return (
       <>
<div class="projectSection">
<div className='projTitle'><h1>Projects</h1></div>
<div class="projectSection2">
<div className='shelfi'>
   <div className='shelfiOne'>
       <h2>Shelfi.</h2>
       <p> A library application where you can search for your books of choice in which you want to read and plan to read.</p>
       <a href="https://github.com/mascarelloa/shelfi" class="card-link">Repo</a>
       <a href="https://myshelfi.herokuapp.com/" class="card-link">App</a>
        </div>
        <div className='shelfiOne'>
      
    </div>
</div>

</div>


<div className="projectSection2">
<div className='underC'>
   <div className='shelfiTwo'>
       <h2>Coming Soon.</h2>
       <p>Project currently in coding development.</p>
       <br/>
       <br/>
       <a style={projLinks3} href="https://github.com/kevinrhidalgo" class="card-link">Repo</a>
       <a style={projLinks3} href="https://github.com/kevinrhidalgo" class="card-link">App</a>
        </div>
        <div className='shelfiOne'>
      <img style={projectsImg1} src={underC}/>
    </div>
</div>
<div className='underC'>
   <div className='shelfiTwo'>
       <h2>Coming Soon.</h2>
       <p>Project currently in coding development.</p>
       <br/>
       <br/>
       <a style={projLinks4} href="https://github.com/kevinrhidalgo" class="card-link">Repo</a>
       <a style={projLinks4} href="https://github.com/kevinrhidalgo">App</a>
        </div>
        <div className='shelfiOne'>
      <img style={projectsImg1} src={underC}/>
    </div>
</div>
</div>
</div>

</>
    );
  }
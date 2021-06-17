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
    paddingTop: '30px'
}

export default function Skills() {
    return (
        <div>
            <div className='emptySpace'>     
       <h2>Personal Details</h2>
    </div>  
    <img style={myfoto} src={myphoto}/> 
    <div className='skillsSec'>
        <h1 style={skillWord}>Skills</h1>
    </div>
   
    </div>   
    );
  }
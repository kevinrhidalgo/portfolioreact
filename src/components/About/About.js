import React from 'react';
import Photo from './photo.jpg'
import './About.css'

const famPhoto={
    width:'500px',
    height:'500px',
}


export default function About() {
    return (
   <div>
   <div className='famPhoto'><img style={famPhoto} src={Photo}/></div>   
   <div className='emptyBox'><h4>About</h4></div>  
   </div>
    );
  }
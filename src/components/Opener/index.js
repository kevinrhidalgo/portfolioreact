import React from 'react';
import './Opener.css'
import { Link } from "react-router-dom";

const enterBtn={
textDecoration:'none',
backgroundColor:'#007fff',
color:'white',
width:'90px',
height:'70px',
display:'flex',
justifyContent:'center',
alignContent:'center',

}


export default function Opener() {
  return (
    <>
      <div className='opener'>
      <div className='openerBody'>
            <div className='openerBody'>
<h2>Kevin R. Hidalgo</h2>
        <h3>“It’s not how good you are, it’s how good you want to be”
</h3>
<div className='enterBtn'>
<Link style={enterBtn} to="/home"><h1> Enter </h1></Link>
</div>
</div>
</div>
          
      </div>
    </>
  );
}
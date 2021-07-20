import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Nav() {

  return (
<nav>
<div className='navigation'>
    <div className='navOne'>
        <Link style={{ textDecoration: 'none', color:'#629ac9' }} className="btn" to="/">
            <div id="loading-btn">
            <div className='btnStyle'> portfolio.</div>
  </div></Link> 
  </div>

  <div className='navOne'>
            <Link style={{ textDecoration: 'none', color:'#629ac9' }} className="btn" to="/about">
            <div id="loading-btn">
            <div className='btnStyle'>about.</div>
</div></Link>
</div>
</div>
</nav>
  );
}

export default Nav;
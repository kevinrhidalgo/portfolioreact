import React from 'react';
import './Opener.css'
import { Link } from "react-router-dom";

function Opener() {


    return(
        <div className='opener'>
            <div className='openerBody'>
<h2>Kevin R. Hidalgo</h2>
        <h3>“It’s not how good you are, it’s how good you want to be”
</h3>
<Link className="btn" to="/home"><h1> Enter </h1></Link>
</div>
</div>
    )
}
export default Opener;
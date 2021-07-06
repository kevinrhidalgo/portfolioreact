import React from "react"
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Home from './components/Opener'


const pageChange={
  fontSize:17,
  display:"flex",
  justifyContent:"space-between",
  fontFamily: 'Roboto, sans-serif',
  fontWeight:250,
  transform: 'translateY(-70%)',
  marginRight:'15px',
  marginTop:'40px',
  marginBottom:'-256px'
  

}
const headerRoute={
  marginTop:85,
  listStyleType:"none", 
}
const leftLinks={
  textDecoration:'none',
}
const appLinks={
  color:'#fffaf1',
  textDecoration:'none',
  fontFamily: 'Mulish, sans-serif',
  fontSize:'30px',
  padding:"50px"
}
const appLinksTwo={
  color:'#203354',
  textDecoration:'none',
  fontWeight:'bold',
  fontFamily: 'Lato, sans-serif',
  padding:"50px",
  fontSize:'22px'
}

function App() {
  return (
    <div className="wrapper">

      <BrowserRouter>

      <nav>
        <ul style={pageChange}>
        
<li style={headerRoute}><Link to="/" style={leftLinks}><span style={appLinks}>Kevin Hidalgo</span>
<br/><span style={appLinksTwo}>Portfolio</span></Link></li>
<li style={headerRoute}><Link to="/about" style={appLinksTwo}>About</Link></li>

{ /* <li style={headerRoute}><Link to="/skills-work" style={{ textDecoration: 'none', color:'red',margin:40 }}>Skills/Work</Link></li> */ }

        </ul>
        </nav>

        <Route path='/' exact={true} component={Home}/>   

        <Switch> 
    
        <Route path="/about" component={About} />
        <Route path="/skills-work" component={Skills}/>     
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

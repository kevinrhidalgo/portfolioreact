import React from "react"
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer/Footer'
import Home from './components/HomePage/HomePage'
import About from './components/About/About'
import Projects from './components/MyProjects/MyProjects'
import Skills from './components/Skills/Skills'

const pageChange={
  fontSize:30,
  display:"flex",
  justifyContent:"center",
  fontFamily: 'Yanone Kaffeesatz, sans-serif',
  fontWeight:850,
  transform: 'translateY(-70%)',

}
const headerRoute={
  marginTop:15,
  listStyleType:"none",
}


function App() {
  return (
    <div className="wrapper">

      <BrowserRouter>
      <nav>
        <ul style={pageChange}>
        
<li style={headerRoute}><Link to="/home" style={{ textDecoration: 'none', color:'white',margin:40 }}>Home</Link></li>
<li style={headerRoute}><Link to="/about" style={{ textDecoration: 'none', color:'white',margin:40 }}>About</Link></li>
<li style={headerRoute}><Link to="/projects" style={{ textDecoration: 'none', color:'white',margin:40 }}>Projects</Link></li>
<li style={headerRoute}><Link to="/projects" style={{ textDecoration: 'none', color:'white',margin:40 }}>Skills</Link></li>
        </ul>
        </nav>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

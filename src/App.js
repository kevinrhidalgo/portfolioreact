import React from "react"
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer/Footer'
import Home from './components/HomePage/HomePage'
import About from './components/About/About'
import Projects from './components/MyProjects/MyProjects'

const pageChange={
  fontSize:17,
  display:"flex",
  justifyContent:"center",
  fontFamily: 'Noto Sans JP, sans-serif',
  fontWeight:850
}
const headerRoute={
  margin:15,
  listStyleType:"none",
}


function App() {
  return (
    <div className="wrapper">

      <BrowserRouter>
      <nav>
        <ul style={pageChange}>
        
<li style={headerRoute}><Link to="/home" style={{ textDecoration: 'none', color:'navy'}}>Home</Link></li>
<li style={headerRoute}><Link to="/about" style={{ textDecoration: 'none', color:'navy' }}>About</Link></li>
<li style={headerRoute}><Link to="/projects" style={{ textDecoration: 'none', color:'navy' }}>Projects</Link></li>
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
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

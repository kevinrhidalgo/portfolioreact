import React from "react"
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer/Footer'
import Home from './components/HomePage/HomePage'
import Navtabs from './components/Navtabs'
import About from './components/About/About'
import Projects from './components/MyProjects/MyProjects'

const pageChange={
  backgroundColor:"red"
}


function App() {
  return (
    <div className="wrapper">
      <Navtabs/>
      <BrowserRouter>
      <nav>
        <ul style={pageChange}>
<li><Link to="/home">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/projects">Projects</Link></li>
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

import React from "react"
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer'
import Home from './components/Home'
import Opening from './components/Opening'
import Navtabs from './components/Navtabs'
import About from './components/About'



function App() {
  return (
    <div className="wrapper">
      <h1>This is the routes page</h1>
      <Navtabs/>
      <BrowserRouter>
      <nav>
        <ul>
<li><Link to="/home">Home</Link></li>
<li><Link to="/about">About</Link></li>
        </ul>
        </nav>
      
        <Switch>
          <Route path="/open">
            <Opening />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

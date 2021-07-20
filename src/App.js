import React from "react"
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Home from './components/Opener'
import Nav from './components/Nav'



function App() {
  return (
    <div className="wrapper">

      <BrowserRouter>
<Nav/>
        <Route path='/' exact={true} component={Home}/>   
        <Switch> 
        <Route path="/about" component={About} />    
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

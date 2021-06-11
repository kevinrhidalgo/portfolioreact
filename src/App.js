import React from "react"
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer'
import Main from './components/Main'
import Opening from './components/Opening'
import Navtabs from './components/Navtabs'



function App() {
  return (
    <div>
      <h1>My react portfolio</h1>
      <Navtabs/>

      <BrowserRouter>
      <Switch>
        <Route path="/">
          <Opening/>
        </Route>
        <Route path="/main">
          <Main/>
        </Route>
          </Switch>
      </BrowserRouter>
    
    <Footer/>
    </div>
  );
}

export default App;

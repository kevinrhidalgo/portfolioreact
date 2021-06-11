import React from "react"
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer'
import Main from './components/Main'
import Opening from './components/Opening'
import Navtabs from './components/Navtabs'



function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/open">
            <Opening />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

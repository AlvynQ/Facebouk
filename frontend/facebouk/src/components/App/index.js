import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from '../WelcomePage';
import Inscription from '../InscriptionPage';

function App() {
    return (
      <Router> 
        <Switch>

        <Route exact path="/" component={WelcomePage} />
        <Route path="/Inscription" component={Inscription} />

        </Switch>  
      </Router>
  
    );
  }
  
  export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from '../WelcomePage';
import Inscription from '../InscriptionPage';
import Connexion from '../ConnexionPage';
import Profil from '../ProfilPage';

function App() {
    return (
      <Router> 
        <Switch>

        <Route exact path="/" component={WelcomePage} />
        <Route path="/Inscription" component={Inscription} />
        <Route path="/Connexion" component={Connexion} />
        <Route path="/Profil" component={Profil} />

        </Switch>  
      </Router>
  
    );
  }
  
  export default App;
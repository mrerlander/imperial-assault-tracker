import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home';
import Groups from './pages/groups';
import Sessions from './pages/sessions';
import './App.css';

const App = () => (

  <Router>
    <div>
      <Route
        exact path='/'
        component={Home}
      />
      <Route
        exact path='/groups'
        component={Groups}
      />
      <Route
        exact path='/sessions'
        component={Sessions}
      />
    </div>
  </Router>

)
  

export default App;

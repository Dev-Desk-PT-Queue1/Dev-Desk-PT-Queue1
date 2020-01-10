import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import TicketQueue from './components/TicketQueue';
import Register from './components/Register';
import Ticket from './components/Ticket';
import NewTicketFormClass from './components/NewTicketForm';


function App() {
  
    return (
      <Router>
        {/* <Route path="/" exact component={HomePage} /> */}
        <Route 
          exact path="/" 
          component={HomePage} />
        <PrivateRoute
          exact
          path="/tickets/:id"
          component={props => <Ticket {...props} />}
        />
        <PrivateRoute
          path="/new-ticket"
          component={
            props => 
              <NewTicketFormClass {...props} />
          }
        />
        <PrivateRoute 
          path="/dashboard" 
          component={Dashboard}
        />
        <PrivateRoute 
          exact path="/tickets" 
          component={TicketQueue} 
        />
        <Route 
          exact path="/sign-up" 
          component={Register} 
        />
        </Router>

  );
}

export default App;

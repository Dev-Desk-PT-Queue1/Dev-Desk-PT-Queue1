import React from 'react';
import './App.css';
import Header from './components/Header';
import NewTicketForm from './components/NewTicketForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <NewTicketForm />
      <Dashboard />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import NewTicketForm from './components/NewTicketForm';

function App() {
  return (
    <div className="App">
      <Header />
      <NewTicketForm />
    </div>
  );
}

export default App;

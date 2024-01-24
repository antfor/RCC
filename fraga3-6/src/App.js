import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from "react";

import DiagnosForm from './components/diagnos.jsx';
import TillståndForm from './components/tillstånd.jsx';
import BehandlingForm from './components/behandling.jsx';
import OprationsKod from './components/kirurgi.jsx';
import PatientForm from './components/patientForm.jsx';

function App() {
 // 
 return (
  //DiagnosForm()
  //TillståndForm()
  //BehandlingForm()
  //OprationsKod(codes, setCodes, false)
  PatientForm()
);
  /*
  onClick={(e) => handleNyPatient(nyPatient,setPatienter)}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  //*/
}

export default App;

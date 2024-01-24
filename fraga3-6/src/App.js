import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from 'react-bootstrap/Card';
import React, { useState } from "react";
import PatientForm from './components/patientForm.jsx';

function App() {
 
 return (

  <div id="card" data-bs-theme="dark">
  <Card style={{ width: '50rem' }}>
    <Card.Header>RCC</Card.Header>
    <Card.Body>{PatientForm()}</Card.Body>
  </Card>
  </div>
);
  
}

export default App;

import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';

import DiagnosForm from './diagnos.jsx';
import TillståndForm from './tillstånd.jsx';
import BehandlingForm from './behandling.jsx';
import FormTabs from './tabs.jsx';
import * as inca from './fråga3.mjs';

function LoadPatient(){

}
function handleNyPatient(personnummer, setPatienter){
  // todo validation
  let nyPatient = inca.createPatient(personnummer);
  inca.tryAddPatient(nyPatient, setPatienter);

}


function getPatientOptions(patienter){
  return patienter.map(
      (p,i) => <option key={i}  value={i}> {p.personNr} </option>);

}

function isEmpty (array){
  return array === undefined || array.length == 0;
}

function getContent(patient, patienter, setPatienter){

  let tabs = FormTabs(patient, patienter, setPatienter);

  if(noPationsExist){
    return <h1>Lägg till en patient först</h1>
  }else{
    return tabs;
  }

}

let noPationsExist = true;

function PatientForm() {

  const [patienter, setPatienter] = useState([]); 
  const [patientIndex, setPatientIndex] = useState(0); 
  const [validated, setValidated] = useState(false);
  

  const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();

      if (form.checkValidity() === false) {
        event.stopPropagation();
      }else{
        handleNyPatient(form.inputPersonnummer.value, setPatienter);
      }
      
      setValidated(true);
    };

  noPationsExist = isEmpty(patienter);
 

  return(
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>

        <Form.Label>Lägg till ny Patient:</Form.Label>
        <InputGroup hasValidation className="mb-3">

          
          <Form.Control required pattern = "[0-9]{6}[\-]?[0-9]{4}" maxLength={11}  
                        type="input" placeholder="ååååmmdd-xxxx" 
                        id="inputPersonnummer"
                        onChange={(e) => {setValidated(false)}}/>
       
          <Button type="submit" variant="outline-success" id="button-addon">
            Lägg till
          </Button>
        </InputGroup>
      </Form>
      <Form>

        <Form.Label>Välj Patient:</Form.Label>
        <Form.Select disabled={noPationsExist} 
          onChange={e => {setPatientIndex(e.currentTarget.value);}}>
                    {getPatientOptions(patienter)}
        </Form.Select>
      </Form>
   
      {getContent(patientIndex, patienter, setPatienter)}
      
    </div>
  );
}

export default PatientForm;
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
import OprationsKod from './kirurgi.jsx';
import {Behandling,DiagnosGrund,createPatient, createDiagnos, createTillsånd, createBehandling} from './fråga3.js';

function LoadPatient(){

}
function addPatient(personnummer){

  createPatient(personnummer);

}

function patientForm() {
  return (


    <div>
      <Form>

        <Form.Label>Skapa ny Patient:</Form.Label>
        <InputGroup hasValidation className="mb-3">

          
          <Form.Control required pattern = "[0-9]{6}[-]?[0-9]{4}" maxLength={11}  type="input" placeholder="ååmmdd-xxxx" />
       
          <Button variant="outline-success" id="button-addon" 
                onClick={(e) => addPatient(1)}>
            Lägg till
          </Button>
        </InputGroup>

        <Form.Label>Välj Patient:</Form.Label>
        <Form.Select value="hej" onChange={e => e.currentTarget.value}>
                    {<option value="hej">hej</option>}
        </Form.Select>
      </Form>

      <Tabs
        defaultActiveKey="diagnos"
        id="tab-example"
        className="mb-3"
      >
        <Tab eventKey="diagnos" title="Diagnoser">
          {DiagnosForm()}
        </Tab>
        <Tab eventKey="behandling" title="Behandlingar">
          {TillståndForm()}
        </Tab>
        <Tab eventKey="tillstånd" title="Tillstånd">
          {BehandlingForm()}
        </Tab>
        <Tab eventKey="canceranmälan" title="Canceranmälan" disable>
          TODO
        </Tab>
      </Tabs>
    </div>
  );
}

export default patientForm;
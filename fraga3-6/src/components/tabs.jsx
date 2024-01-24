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
import Canceranmälan from './canceranmälan.jsx';
import * as inca from './fråga3.mjs';



function FormTabs(patient, patienter, setPatienter){
    return(

        <Tabs
        defaultActiveKey="diagnos"
        id="tab-example"
        className="mb-3"
      >
        <Tab eventKey="diagnos" title="Diagnoser">
        {DiagnosForm(patient, setPatienter)}
        </Tab>
        <Tab eventKey="behandling" title="Behandlingar">
          {BehandlingForm(patient, setPatienter)}
        </Tab>
        <Tab eventKey="tillstånd" title="Tillstånd">
          {TillståndForm(patient, setPatienter)}
        </Tab>
        <Tab eventKey="canceranmälan" title="Canceranmälan">
          {Canceranmälan(patient, patienter)}
        </Tab>
      </Tabs>
    );
}

export default FormTabs;
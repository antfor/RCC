import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import FormSelect from 'react-bootstrap/FormSelect';
import OprationsKod from './kirurgi.jsx';

import "react-datepicker/dist/react-datepicker.css";


const Behandling = {
    CYTO: 'cytostatikabehandling',
    STRÅL: 'strålbehandling',
    KIRURGI: 'kirurgi'
};

function getBehandlingOptions(){

    return Object.values(Behandling).map(
        (behandling) => <option value={behandling}>{behandling}</option>);

}

function save(behandling, date, codes, diableCodes){

    alert('behandling: ' + behandling + ' date: '+ date.toDateString() + ' codes: ' + codes + ' diableCodes: ' + diableCodes);
}


function BehandlingForm(startDate = new Date(), oldBehandling = Behandling.CYTO) {

    const [date, setDate] = useState(startDate);
    const [behandling, setBehandling] = useState(oldBehandling);

    const [diableCodes, setDisableCodes] = useState(behandling !== Behandling.KIRURGI);
    const [codes, setCodes] = useState([]);
            
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBehandlingTyp">
                
            <Form.Group className="mb-3" controlId="formBehandlingDate">
                <Form.Label>Datum för behandling:</Form.Label>
                <br/>
                <DatePicker selected={date} onChange={(newdate) => {setDate(newdate);}} />
            </Form.Group>

            <Form.Label>Typ av behandling:</Form.Label>
                <Form.Select value={behandling} onChange={e => {
                        setBehandling(e.currentTarget.value);
                        setDisableCodes(e.currentTarget.value !== Behandling.KIRURGI);
                        }}>
                    {getBehandlingOptions()}
                </Form.Select>
            </Form.Group>

            {OprationsKod(codes, setCodes, diableCodes)}

            <Form.Group className="mb-3" controlId="formBehandlingSave">
                <Button type="submit" variant="outline-success" onClick={() => save(behandling, date, codes,diableCodes)}>Save</Button>
            </Form.Group>
        </Form>
    );
           
}

export default BehandlingForm;

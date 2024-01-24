import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import FormSelect from 'react-bootstrap/FormSelect'
import {createDiagnos, DiagnosGrund} from './fråga3.mjs';
import update from 'immutability-helper';

import "react-datepicker/dist/react-datepicker.css";


function getGrundOptions(){

    return Object.values(DiagnosGrund).map(
        (grund, index) => <option key={index} value={grund}>{grund}</option>);

}


function save(patient, setPatienter, grund, date, index = -1){

    let updateAndSave = (upp) => {
        window.inca.patienter = upp();
        return(upp());
    };

    let diagnos = createDiagnos(date.toDateString(), grund);
    
    if(index === -1){
        setPatienter(prev => updateAndSave(() => update(prev, {[patient]: {diagnoser: {$push: [diagnos]}}})));
    }else{
        setPatienter(prev => updateAndSave(() => update(prev, {[patient]: {diagnoser: {[index]: {$set: diagnos}}}})));
    }

    //alert('grund: ' + grund + ' date: '+ date.toDateString());
}

let oldPatient = -1;


function DiagnosForm(patient, setPatienter, startDate = new Date(), diagnosGrund = DiagnosGrund.PAD, index=-1) {

    const [date, setDate] = useState(startDate);
    const [grund, setGrund] = useState(diagnosGrund);
    const [validated, setValidated] = useState(false);
    const [disableSave, setSave] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
  
        if (form.checkValidity() === false) {
          event.stopPropagation();
        }else{
            save(patient, setPatienter, grund, date, index);
            setSave(true);
        }
    
        setValidated(true);
      };

    const toggleSave = (save) => {setValidated(false);setSave(false);};
    
    // reset form when patient changes
    useEffect(() => {
        toggleSave(false);
    },[patient]);
   

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formDiagnosDate">
                <Form.Label>Datum för diagnos:</Form.Label>
                <br/>
                <DatePicker selected={date} onChange={(newdate) => {setDate(newdate); toggleSave(false);}} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDiagnosGrund">
                
                <Form.Label>Grund för diagnos:</Form.Label>
                <Form.Select value={grund} onChange={e => {setGrund(e.currentTarget.value); toggleSave(false);}}>
                    {getGrundOptions()}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDiagnosSave">
                <Button disabled={disableSave} type="submit" variant="outline-success">Save</Button>
            </Form.Group>
        </Form>
    );
           
}

export default DiagnosForm;

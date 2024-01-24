import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import FormSelect from 'react-bootstrap/FormSelect'

import "react-datepicker/dist/react-datepicker.css";


const DiagnosGrund = {
    PAD: 'PAD',
    CYTOLOGI: 'cytologi',
    RÖNTGEN: 'röntgen',
    KLINISK: 'klinisk'
};

function getGrundOptions(){

    return Object.values(DiagnosGrund).map(
        (grund) => <option value={grund}>{grund}</option>);

}

function save(grund, date){

    alert('grund: ' + grund + ' date: '+ date.toDateString());
}

function DiagnosForm(startDate = new Date(), diagnosGrund = DiagnosGrund.PAD) {

    const [date, setDate] = useState(startDate);
    const [grund, setGrund] = useState(diagnosGrund);
            
   
    return (
        <Form>

            <Form.Group className="mb-3" controlId="formDiagnosDate">
                <Form.Label>Datum för diagnos:</Form.Label>
                <br/>
                <DatePicker selected={date} onChange={(newdate) => {setDate(newdate);}} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDiagnosGrund">
                
                <Form.Label>Grund för diagnos:</Form.Label>
                <Form.Select value={grund} onChange={e => setGrund(e.currentTarget.value)}>
                    {getGrundOptions()}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDiagnosSave">
                <Button variant="outline-success" onClick={() => save(grund, date)}>Save</Button>
            </Form.Group>
        </Form>
    );
           
}

export default DiagnosForm;

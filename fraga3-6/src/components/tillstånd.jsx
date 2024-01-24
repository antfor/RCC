import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import FormSelect from 'react-bootstrap/FormSelect'

import "react-datepicker/dist/react-datepicker.css";



function radioRange(start, end, setRadioValue, selected){
    let buttons = []
    
    for(let i = start; i <= end; i++){
        buttons.push(<Form.Check inline label={i} 
            name="group1" type="radio" id={`inline-radio-${i}`}
            value={i}
            defaultChecked={i === selected}
            onChange={e => setRadioValue(e.currentTarget.value)} />)
    }

    return buttons;
}

function save(ecog, date){

    alert('ecog: ' + ecog + ' date: '+ date.toDateString());
}

function TillståndForm(startDate = new Date(), Oldecog = 0) {

    const [date, setDate] = useState(startDate);
    const [ecog, setECOG] = useState(Oldecog);
            
   
    return (
        <Form>
            
            <Form.Group className="mb-3" controlId="formTillståndDate">
                <Form.Label>Datum för ECOG:</Form.Label>
                <br/>
                <DatePicker selected={date} onChange={(newdate) => {setDate(newdate);}} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTillståndRadio">
                
                <Form.Label>ECOG:</Form.Label>
                <br/>
                {radioRange(0,5,setECOG,ecog)}
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTillståndSave">
                <Button variant="outline-success" onClick={() => save(ecog, date)}>Save</Button>
            </Form.Group>
        </Form>
    );
           
}

export default TillståndForm;

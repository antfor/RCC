import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import DatePicker from "react-datepicker";
import FormSelect from 'react-bootstrap/FormSelect'

import "react-datepicker/dist/react-datepicker.css";



function updateList(index, value, setState){

    setState(prev => prev.map((code, i) => {
        if(i === index){
            return value;
        }else{
            return code;
        }
    }));
}

function removeList(index, setState){
 
    setState(prev => prev.filter((code, i) => i !== index));

}


function codeForm(code, index, setState, disable){
    return(
    <InputGroup hasValidation className="mb-3" key={index}>

        <FloatingLabel controlId="floatingInput" label="Oprations kod">
            <Form.Control required pattern = "[a-zA-zåäöÅÄÖ]{2}[0-9]{4}"  
                          disabled={disable} type="input" maxLength={6} 
                          value={disable ? '' : code} onChange={(e) => updateList(index, e.target.value, setState)} />
            
            <Form.Control.Feedback type="invalid">
                Please provide a valid code(two letter followed by 4 digits).
            </Form.Control.Feedback>
        </FloatingLabel>


        <Button variant="outline-danger" id="button-addon" 
                onClick={(e) => removeList(index, setState)}>
          Remove
        </Button>
        
      </InputGroup>
    );
}

    
function OprationsKod(codes, setCodes, disable=true) {

    return (
      
        <Form.Group className="mb-3" controlId="formOprationKod" >
            <Form.Group controlId="formOprationKoder">
                
            <Form.Label>Codes (only for Kirugi):</Form.Label>
                {
                    codes.map((code, index) => {
                        return codeForm(code, index, setCodes, disable);
                    })
                }
            </Form.Group>

            
            <Form.Group  controlId="formOprationKodNy">
                <Button variant="primary"  disabled={disable} onClick={() => setCodes(prev => [...prev,''])}>Add Code</Button>
            </Form.Group>
        </Form.Group>
    );     
}




export default OprationsKod;
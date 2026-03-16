
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [remainingattmpt, setRemainingattmpt] = useState<number>(3)
    const [requestedattmpt, setRequestedattmpt] = useState<string>("")

    function updateRequestedAttempts(event: React.ChangeEvent<HTMLInputElement>){
        setRequestedattmpt(event.target.value)
    }
    function gainAttempt(){
        let amount = parseInt(requestedattmpt)
        if(!isNaN(amount)){
            setRemainingattmpt(remainingattmpt + amount)
        }
    }
    return (
        <div>
            <div>
                Remaining Attempts: <span>{remainingattmpt}</span>
            </div>
            <Form.Group controlId = "attemptRequest">
                <Form.Label>Request attempts</Form.Label>
                <Form.Control  
                    type ="number"
                    value = {requestedattmpt}
                    onChange ={updateRequestedAttempts}       
                    />
            </Form.Group>
            
                <Button onClick={()=>{setRemainingattmpt(remainingattmpt - 1)}} disabled = {remainingattmpt === 0}>Use</Button>
                <Button onClick={()=>{gainAttempt()}}>gain</Button>

        </div>
    );
}

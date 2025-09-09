import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequest, setAttemptsRequest] = useState<number>(0);

    function updateAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        if (parseInt(event.target.value)) {
            setAttemptsRequest(parseInt(event.target.value));
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formRequestBox">
                <Form.Label>Request:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequest}
                    onChange={updateAttempts}
                ></Form.Control>
            </Form.Group>
            <span>Number of Attempts: {attemptsLeft}</span>
            <Button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft - 1);
                }}
                disabled={!attemptsLeft}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft + attemptsRequest);
                }}
            >
                Gain
            </Button>
        </div>
    );
}

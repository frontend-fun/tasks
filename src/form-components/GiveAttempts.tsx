import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const requestToNum = parseInt(requestedAttempts) || 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group>
                <Form.Label>Attempts: </Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(e) => {
                        {
                            setRequestedAttempts(e.target.value);
                        }
                    }}
                />
            </Form.Group>
            <Button
                disabled={attemptsLeft <= 0 ? true : false}
                onClick={() => {
                    setAttemptsLeft(attemptsLeft - 1);
                }}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft + requestToNum);
                }}
            >
                gain
            </Button>
            {<div>You have {attemptsLeft} attempts left</div>}
            {<div>You requested {requestedAttempts} attempts </div>}
        </div>
    );
}

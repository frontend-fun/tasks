import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsleft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);
    function decreaseAttempts() {
        setAttemptsleft(attemptsLeft - 1);
    }
    function addRequestedAttempts() {
        if (attemptsRequested > 0) {
            setAttemptsleft(attemptsLeft + attemptsRequested);
        } else {
            setAttemptsleft(attemptsLeft);
        }
    }
    return (
        <div>
            <div>Attempts remaining: {attemptsLeft}</div>
            <Form.Group controlId="attemptsRequestedComponent">
                <Form.Label>Requested Number of Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setAttemptsRequested(parseInt(event.target.value));
                    }}
                />
            </Form.Group>
            <Button onClick={decreaseAttempts} disabled={attemptsLeft === 0}>
                use
            </Button>
            <Button onClick={addRequestedAttempts}>gain</Button>
        </div>
    );
}

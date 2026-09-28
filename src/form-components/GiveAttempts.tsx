import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function use() {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function gain() {
        const amount = parseInt(requestedAttempts);
        if (!isNaN(amount)) {
            setAttemptsLeft(attemptsLeft + amount);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attemptsLeft}</div>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Request attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        { setRequestedAttempts(event.target.value); }
                    }
                />
            </Form.Group>
            <Button onClick={use} disabled={attemptsLeft <= 0}>
                use
            </Button>
            <Button onClick={gain}>gain</Button>
        </div>
    );
}

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsMore, setAttemptsMore] = useState<string>("");
    const addedInt = parseInt(attemptsMore) || 0;

    function updateMore(event: React.ChangeEvent<HTMLInputElement>) {
        setAttemptsMore(event.target.value);
    }

    function updateLeft(): void {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function addMore(): void {
        setAttemptsLeft(addedInt + attemptsLeft);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="add-box">
                <Form.Label>Add Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsMore}
                    onChange={updateMore}
                ></Form.Control>
            </Form.Group>
            <div>Attempts Left: {attemptsLeft}</div>
            <Button onClick={updateLeft} disabled={attemptsLeft === 0}>
                use
            </Button>
            <Button onClick={addMore}>gain</Button>
        </div>
    );
}

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestAmount, setRequestAmount] = useState<number>(0);

    function handleUse() {
        if (attemptsLeft > 0) setAttemptsLeft(attemptsLeft - 1);
    }

    function handleGain() {
        if (!isNaN(requestAmount) && requestAmount > 0) {
            setAttemptsLeft(attemptsLeft + requestAmount);
        }
    }

    return (
        <Form.Group controlId="giveAttempts">
            <Form.Label>Attempts Left: {attemptsLeft}</Form.Label>
            <Form.Control
                type="number"
                placeholder="Request Attempts"
                onChange={(e) => {
                    setRequestAmount(parseInt(e.target.value) || 0);
                }}
            />
            <Button onClick={handleUse} disabled={attemptsLeft === 0}>
                Use Attempt
            </Button>
            <Button onClick={handleGain}>Gain Attempts</Button>
        </Form.Group>
    );
}

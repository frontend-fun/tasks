import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("0");

    function useAttempt(): void {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function gainAttempts(): void {
        const parsed = parseInt(requestedAttempts);
        if (!isNaN(parsed)) {
            setAttemptsLeft(attemptsLeft + parsed);
        }
    }

    function updateRequestedAttempts(
        event: React.ChangeEvent<HTMLInputElement>,
    ): void {
        setRequestedAttempts(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="give-attempts-input">
                <Form.Label>Give Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={updateRequestedAttempts}
                />
            </Form.Group>
            <div>Attempts: {attemptsLeft}</div>
            <Button onClick={useAttempt} disabled={attemptsLeft <= 0}>
                use
            </Button>{" "}
            <Button onClick={gainAttempts}>gain</Button>
        </div>
    );
}

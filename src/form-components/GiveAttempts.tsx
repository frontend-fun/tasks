import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function useAttempt(): void {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    }

    function gainAttempts(): void {
        const amount = parseInt(requestedAttempts);
        if (!isNaN(amount)) {
            setAttemptsLeft(attemptsLeft + amount);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>{attemptsLeft}</div>
            <Form.Group controlId="give-attempts-input">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequestedAttempts(event.target.value);
                    }}
                />
            </Form.Group>
            <Button onClick={useAttempt} disabled={attemptsLeft === 0}>
                use
            </Button>{" "}
            <Button onClick={gainAttempts}>gain</Button>
        </div>
    );
}

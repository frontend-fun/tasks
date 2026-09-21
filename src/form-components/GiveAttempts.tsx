import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("");

    function useAttempt() {
        setAttempts(attempts - 1);
    }

    function gainAttempts() {
        const amount = parseInt(requested);
        if (!isNaN(amount)) {
            setAttempts(attempts + amount);
        }
        setRequested("");
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts: {attempts}</div>
            <Button onClick={useAttempt} disabled={attempts === 0}>
                use
            </Button>
            <Button onClick={gainAttempts}>gain</Button>
            <Form.Group controlId="requestedAttempts">
                <Form.Label>Amount to Gain:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequested(event.target.value);
                    }}
                />
            </Form.Group>
        </div>
    );
}

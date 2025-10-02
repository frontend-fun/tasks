import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");
    
    // Handle using an attempt
    const handleUse = (): void => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    // Handle gaining attempts
    const handleGain = (): void => {
        const gain = parseInt(requestedAttempts, 10);
        if (!isNaN(gain)) {
            setAttemptsLeft(attemptsLeft + gain);
            setRequestedAttempts("");
        }
    };
    return (
        <div>Attempts left: {attemptsLeft}

            <Form.Group controlId="requestedAttempts" className="mb-3">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setRequestedAttempts(e.target.value); }}
                    placeholder="Enter number of attempts"
                />
            </Form.Group>

            <Button onClick={handleUse} disabled={attemptsLeft === 0} className="me-2">
                Use
            </Button>
            <Button onClick={handleGain}>
                Gain
            </Button>
        </div>
    );
}

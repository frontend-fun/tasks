import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [attemptRequested, setAttemptRequested] = useState<number>(0);

    function handleAttemptRequested(
        event: React.ChangeEvent<HTMLInputElement>,
    ) {
        const value = parseInt(event.target.value);
        // only update if it's a valid number
        setAttemptRequested(isNaN(value) ? 0 : value);
    }

    function useAttempt() {
        setAttempts(attempts - 1);
    }

    function gainAttempts() {
        if (!isNaN(attemptRequested) && attemptRequested > 0) {
            setAttempts(attempts + attemptRequested);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attempts}</p>
            <Form.Group controlId="formAttempt" className="mb-2">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptRequested}
                    onChange={handleAttemptRequested}
                    placeholder="Enter number of attempts"
                />
            </Form.Group>
            <Button
                onClick={useAttempt}
                disabled={attempts <= 0}
                className="me-2"
            >
                Use
            </Button>
            <Button onClick={gainAttempts} disabled={attemptRequested <= 0}>
                Gain
            </Button>
        </div>
    );
}

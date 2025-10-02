import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [userAnswer, setUserAnswer] = useState<string>("");
    const parsed = parseInt(userAnswer, 10) || 0;

    function updateChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setUserAnswer(event.target.value);
    }
    return (
        <div>
            <p>Attempts left: {attempts}</p>
            <Button
                onClick={() => {
                    if (!isNaN(parsed)) {
                        setAttempts(attempts + parsed);
                    }
                }}
            >
                gain attempt
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts <= 0}
            >
                use attempt
            </Button>
            <Form.Group controlId="attempts-input">
                <Form.Label>Enter number of desired attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={userAnswer}
                    onChange={updateChange}
                />
            </Form.Group>
        </div>
    );
}

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [inputattempts, setinputattempts] = useState<number>(0);

    return (
        <div>
            <Form.Group controlId="set-attempts">
                <Form.Label>Set Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={inputattempts}
                    placeholder="Enter number of attempts here"
                    onChange={(e) => {
                        setinputattempts(Number(e.target.value));
                    }}
                />
                <Button
                    onClick={() => {
                        setAttempts(attempts - 1);
                    }}
                    disabled={attempts <= 0}
                >
                    use
                </Button>
                <Button
                    onClick={() => {
                        setAttempts(inputattempts);
                    }}
                >
                    gain
                </Button>
                <p>Remaining Attempts: {attempts}</p>
            </Form.Group>
        </div>
    );
}

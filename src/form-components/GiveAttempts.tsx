import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("0");

    function updateRequestedAttempts(
        event: React.ChangeEvent<HTMLInputElement>,
    ) {
        setAttemptsRequested(event.target.value);
    }

    return (
        <div>
            <div>
                <Button
                    disabled={attemptsLeft === 0}
                    onClick={() => {
                        setAttemptsLeft(attemptsLeft - 1);
                    }}
                >
                    use
                </Button>
                {attemptsLeft}
            </div>
            <div>
                <Button
                    onClick={() => {
                        const num = parseInt(attemptsRequested);
                        if (!isNaN(num)) {
                            setAttemptsLeft(num + attemptsLeft);
                        }
                    }}
                >
                    gain
                </Button>
                <Form.Group controlId="requestedAttempts">
                    <Form.Control
                        type="number"
                        value={attemptsRequested}
                        onChange={updateRequestedAttempts}
                    />
                </Form.Group>
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");
    const newAttempts = parseInt(attemptsRequested) || 0;
    function addAttempts() {
        setAttempts(attempts + newAttempts);
    }
    function subtractAttempts() {
        setAttempts(attempts - 1);
    }
    return (
        <div>
            <div>
                <Form.Group controlId="formMovieReleased">
                    <Form.Label>Released:</Form.Label>
                    <Form.Control
                        type="number"
                        value={newAttempts}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setAttemptsRequested(event.target.value);
                        }}
                    />
                </Form.Group>
            </div>
            <div>
                <Button onClick={subtractAttempts} disabled={attempts == 0}>
                    use
                </Button>
                <Button onClick={addAttempts}>gain</Button>
            </div>
            <div>
                <p>Number of Attempts: {attempts}</p>
            </div>
        </div>
    );
}

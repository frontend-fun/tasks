import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [request, setRequest] = useState<number>(0);

    const [attempts, setAttempts] = useState<number>(3);

    function requestedAttempts(e: React.ChangeEvent<HTMLInputElement>) {
        e.target.value === "" ? "" : setRequest(Number(e.target.value));
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="attemptsRequest">
                <Form.Label>request:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={requestedAttempts}
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
                        setAttempts(attempts + request);
                    }}
                >
                    gain
                </Button>
                <div>{attempts}</div>
            </Form.Group>
        </div>
    );
}

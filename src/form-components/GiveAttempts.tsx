import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attsLeft, setAttsLeft] = useState<number>(3);
    const [attsRequested, setAttsRequested] = useState<string>("");

    function updateAttsRequested(event: React.ChangeEvent<HTMLInputElement>) {
        setAttsRequested(event.target.value);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group>
                <Form.Label>Request more attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={attsRequested}
                    onChange={updateAttsRequested}
                />
            </Form.Group>

            <Button
                onClick={() => {
                    setAttsLeft(attsLeft - 1);
                }}
                disabled={attsLeft === 0}
            >
                use
            </Button>

            <Button
                onClick={() => {
                    setAttsLeft(attsLeft + +attsRequested);
                }}
            >
                gain
            </Button>
            <p>Attempts left: {attsLeft}</p>
        </div>
    );
}

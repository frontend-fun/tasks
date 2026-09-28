import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function gainAttempts() {
        const amount = parseInt(requestedAttempts);

        if (!isNaN(amount)) {
            setAttempts(attempts + amount);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>

            <div>Attempts left: {attempts}</div>

            <Form.Control
                type="number"
                value={requestedAttempts}
                onChange={(event) => {
                    setRequestedAttempts(event.target.value);
                }}
            />

            <Button
                disabled={attempts === 0}
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
            >
                use
            </Button>

            <Button
                onClick={() => {
                    gainAttempts();
                }}
            >
                gain
            </Button>
        </div>
    );
}

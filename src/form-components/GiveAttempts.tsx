import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attempts}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={(e) => setRequestedAttempts(e.target.value)}
            />
            <Button
                onClick={() => {
                    setAttempts(attempts - 1); // Added braces here
                }}
                disabled={attempts <= 0}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    const requested = parseInt(requestedAttempts);
                    if (!isNaN(requested)) {
                        setAttempts(attempts + requested); // Added braces here
                    }
                }}
            >
                Gain
            </Button>
        </div>
    );
}

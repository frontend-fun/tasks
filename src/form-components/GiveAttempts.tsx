import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("");

    return (
        <div>
            <div className="h3">Give Attempts</div>
            <p>Attempts: {attempts}</p>
            <Form.Control
                type="number"
                value={requested}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setRequested(e.target.value);
                }}
            />
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + (parseInt(requested) || 0));
                }}
            >
                gain
            </Button>
        </div>
    );
}
  
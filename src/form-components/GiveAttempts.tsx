import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, giveAttempts] = useState<string>("");
    function setNewAttempts() {
        if (requestedAttempts.length > 0) {
            setAttempts(attempts + Number(requestedAttempts));
        }
    }
    function updateRequestedAttempts(
        event: React.ChangeEvent<HTMLInputElement>,
    ) {
        giveAttempts(event.target.value);
    }
    function useAttempt() {
        setAttempts(attempts - 1);
    }
    return (
        <div>
            <div>{attempts} attempts left</div>
            <Form.Group controlId="giveAttempts">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={updateRequestedAttempts}
                />
            </Form.Group>
            <Button onClick={useAttempt} disabled={attempts == 0}>
                use
            </Button>
            <Button onClick={setNewAttempts}>gain</Button>
        </div>
    );
}

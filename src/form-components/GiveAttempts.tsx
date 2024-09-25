import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [livesLeft, setLivesLeft] = useState<number>(3);
    const [lifeRequest, setLifeRequest] = useState<number>(0);

    function updateLifeRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setLifeRequest(Number(event.target.value));
    }

    function subtractLives() {
        setLivesLeft(livesLeft - 1);
    }

    function addLives() {
        setLivesLeft(livesLeft + lifeRequest);
    }

    return (
        <div>
            <Form.Group controlId="basic">
                <Form.Control
                    type="number"
                    placeholder="Enter # of wanted lives"
                    value={lifeRequest}
                    onChange={updateLifeRequest}
                />
            </Form.Group>

            <Button onClick={addLives}>Gain</Button>
            <Button onClick={subtractLives} disabled={livesLeft <= 0}>
                Use
            </Button>
            <div>Lives left: {livesLeft}</div>
        </div>
    );
}

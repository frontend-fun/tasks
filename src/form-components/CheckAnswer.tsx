import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setGivenAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Your answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={givenAnswer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            <div>{givenAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

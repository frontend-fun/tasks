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
            <div>
                <Form.Group controlId="formGivenAnswer">
                    <Form.Label>Answer:</Form.Label>
                    <Form.Control value={givenAnswer} onChange={updateAnswer} />
                </Form.Group>
            </div>
            <div>
                <h3>Check Answer</h3>
                <p>{givenAnswer === expectedAnswer ? "✔️" : "❌"}</p>
            </div>
        </div>
    );
}

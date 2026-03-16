import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface checkAnswerProps {
    expectedAnswer: string;
}

export function CheckAnswer({
    expectedAnswer,
}: checkAnswerProps): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setGivenAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group>
                <Form.Label>Enter Answer</Form.Label>
                <Form.Control value={givenAnswer} onChange={updateAnswer} />
            </Form.Group>
            <div>{givenAnswer === expectedAnswer && "✔️"}</div>
            <div>{givenAnswer !== expectedAnswer && "❌"}</div>
        </div>
    );
}

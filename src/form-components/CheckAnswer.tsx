import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>): void {
        setGivenAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="check-answer-input">
                <Form.Label>Check Answer</Form.Label>
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

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function checkAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <div>
                <Form.Group controlId="formAnswer">
                    <Form.Label>User Answer:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={answer}
                        onChange={checkAnswer}
                    />
                </Form.Group>
            </div>
            <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <Form.Group controlId="checkAnswer">
            <Form.Label>Enter your answer:</Form.Label>
            <Form.Control type="text" value={answer} onChange={handleChange} />
            <div>
                {answer === expectedAnswer ? "✔️ Correct" : "❌ Incorrect"}
            </div>
        </Form.Group>
    );
}

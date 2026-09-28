import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    return (
        <div>
            <h3>Check Answer</h3>

            <Form.Control
                type="text"
                value={answer}
                onChange={(event) => {
                    setAnswer(event.target.value);
                }}
            />

            <span>{answer === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}

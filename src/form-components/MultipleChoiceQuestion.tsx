import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Label>Pick an answer:</Form.Label>
                <Form.Select
                    value={answer}
                    onChange={(e) => {
                        setAnswer(e.target.value);
                    }}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
                <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
            </Form.Group>
        </div>
    );
}

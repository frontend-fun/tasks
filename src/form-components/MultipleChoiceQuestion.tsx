import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>(options[0]);
    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setUserAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="userAnswer">
                <Form.Label>What is the answer?</Form.Label>
                <Form.Select value={userAnswer} onChange={updateAnswer}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {userAnswer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

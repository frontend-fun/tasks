import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");
    function updateGivenAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setGivenAnswer(event.target.value);
    }
    return (
        <div>
            <div>
                <Form.Group controlId="multipleChoiceAnswer">
                    <Form.Label>Choose an Answer:</Form.Label>
                    <Form.Select
                        value={givenAnswer}
                        onChange={updateGivenAnswer}
                    >
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            <p>{givenAnswer === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}

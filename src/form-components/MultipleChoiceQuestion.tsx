import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState<string>(options[0]);

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedAnswer(event.target.value);
    }

    return (
        <Form.Group controlId="multipleChoiceQuestion">
            <Form.Label>Select an answer:</Form.Label>
            <Form.Select value={selectedAnswer} onChange={handleChange}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Select>
            <div>
                {selectedAnswer === expectedAnswer ?
                    "✔️ Correct"
                :   "❌ Incorrect"}
            </div>
        </Form.Group>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    // This is the State (Model)
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    // This is the Control
    function handleChanges(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedOption(event.target.value);
    }
    // check if user answer matches the expected answer
    const isCorrect =
        selectedOption.trim().toLowerCase() ===
        expectedAnswer.trim().toLowerCase();
    return (
        <div>
            <Form.Group controlId="option">
                <Form.Label>What is the correct option?</Form.Label>
                <Form.Select value={selectedOption} onChange={handleChanges}>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{selectedOption && (isCorrect ? "✔️" : "❌")}</div>
        </div>
    );
}

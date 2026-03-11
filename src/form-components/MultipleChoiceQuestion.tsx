import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>): void {
        setSelectedChoice(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="multiple-choice-question">
                <Form.Label>Multiple Choice Question</Form.Label>
                <Form.Select value={selectedChoice} onChange={updateChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{selectedChoice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

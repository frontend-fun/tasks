import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <Form.Select
                value={selectedChoice}
                onChange={(event) => {
                    setSelectedChoice(event.target.value);
                }}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Select>

            <span>{selectedChoice === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}

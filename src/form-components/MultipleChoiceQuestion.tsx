import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState<string>(options[0]);

    return (
        <div>
            <div className="h3">Multiple Choice Question</div>

            <Form.Group controlId="multipleChoiceOptions">
                <Form.Label>Select an Answer</Form.Label>
                <Form.Select
                    value={selectedAnswer}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setSelectedAnswer(e.target.value);
                    }}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <div>
                {selectedAnswer === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
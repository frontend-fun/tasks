import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    const isCorrect = selectedOption === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoice">
                <Form.Label>Select your answer:</Form.Label>
                <Form.Select
                    value={selectedOption}
                    onChange={(e) => {
                        setSelectedOption(e.target.value);
                    }}
                >
                    {options.map((o: string) => (
                        <option key={o} value={o}>
                            {o}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <p data-testid="mcq-feedback">{isCorrect ? "✔️" : "❌"}</p>
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface MultipleChoiceQuestionProps {
    expectedAnswer: string;
    options: string[];
}

export function MultipleChoiceQuestion({
    expectedAnswer,
    options,
}: MultipleChoiceQuestionProps): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    const isCorrect = choice === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoice">
                <Form.Label>Select your answer:</Form.Label>
                <Form.Select
                    value={choice}
                    onChange={(e) => {
                        setChoice(e.target.value);
                    }}
                >
                    {options.map((option) => {
                        return (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        );
                    })}
                </Form.Select>
            </Form.Group>
            <div style={{ marginTop: "10px", fontSize: "20px" }}>
                {isCorrect ? "✔️" : "❌"}
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [currAnswer, setCurrAnswer] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            {currAnswer === expectedAnswer && <p>Your answer: ✔️</p>}
            {currAnswer !== expectedAnswer && <p>Your answer: ❌</p>}

            <Form.Group>
                <Form.Label>Select Answer</Form.Label>
                <Form.Select
                    value={currAnswer}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        setCurrAnswer(event.target.value);
                    }}
                >
                    <option value={options[0]}>{options[0]}</option>
                    <option value={options[1]}>{options[1]}</option>
                    <option value={options[2]}>{options[2]}</option>
                </Form.Select>
            </Form.Group>
        </div>
    );
}

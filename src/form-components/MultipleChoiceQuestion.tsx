import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    const [correctness, switchCorrectness] = useState<string>("❌");
    function changeAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
        if (event.target.value == expectedAnswer) {
            switchCorrectness("✔️");
        } else {
            switchCorrectness("❌");
        }
    }
    return (
        <div>
            <Form.Group controlId="favoriteColors">
                <Form.Label>What is your favorite color?</Form.Label>
                <Form.Select value={answer} onChange={changeAnswer}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {correctness}
        </div>
    );
}

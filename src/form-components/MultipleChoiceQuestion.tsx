import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [userChoice, setUserChoice] = useState<string>(options[0]);
    const [show, setShow] = useState<string>("❌");

    function updateUserChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setUserChoice(event.target.value);
        if (event.target.value === expectedAnswer) {
            setShow("✔️");
        } else {
            setShow("❌");
        }
    }

    return (
        <div>
            <Form.Group controlId="multi">
                <Form.Label>Select an answer</Form.Label>
                <Form.Select value={userChoice} onChange={updateUserChoice}>
                    {options.map((element) => (
                        <option key={element} value={element}>
                            {element}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{show}</div>
        </div>
    );
}

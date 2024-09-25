import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [show, setShow] = useState<string>("❌");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
        if (event.target.value === expectedAnswer) {
            setShow("✔️");
        } else {
            setShow("❌");
        }
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="basicQuestion">
                <Form.Label>Who won the 2023 NBA MVP?</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter answer"
                    value={answer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            <div>{show}</div>
        </div>
    );
}

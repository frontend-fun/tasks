/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [name, setName] = useState<string>("");
    //const confirmation = ["✔️", "❌"];
    const [currCon, newCurrCon] = useState<string>("❌");
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
        if (event.target.value == expectedAnswer) {
            newCurrCon("✔️");
        } else {
            newCurrCon("❌");
        }
    }
    return (
        <div>
            <Form.Group controlId="checkAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={name} onChange={updateName} />
            </Form.Group>
            <div>"{name}"</div>
            <div>"{currCon}"</div>
            <div>"{expectedAnswer}"</div>
        </div>
    );
}

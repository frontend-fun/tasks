import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({expectedAnswer,}: {expectedAnswer: string;}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    return (
        <div>
            <Form.Group controlId="expected_answer">
            <Form.Label>Question Here</Form.Label>
            <Form.Control
                type="text"
                value={answer}
                placeholder="Enter your answer here"
                onChange={(e) => {setAnswer(e.target.value);}}
            />
            </Form.Group>
            {answer === expectedAnswer && <h3>✔️</h3>}
        </div>
    );
}

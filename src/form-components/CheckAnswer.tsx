import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    let isCorrect = userAnswer === expectedAnswer;

    return (
        <div>
            <Form>
                <Form.Group controlId="userAnswer">
                    <Form.Label>Enter answer:</Form.Label>
                    <Form.Control
                        type="text"
                        value={userAnswer}
                        placeholder="answer"
                        onChange={(e) => {
                            setUserAnswer(e.target.value);
                        }}
                    />
                </Form.Group>
            </Form>
            {isCorrect ? "✔️" : "❌"}
        </div>
    );
}

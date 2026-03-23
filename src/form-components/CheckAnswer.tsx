import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group>
                <Form.Label> Answer: </Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    onChange={(event) => {
                        setAnswer(event.target.value);
                    }}
                />
            </Form.Group>

            {answer === expectedAnswer ?
                <div>✔️</div>
            :   <div>❌</div>}
        </div>
    );
}

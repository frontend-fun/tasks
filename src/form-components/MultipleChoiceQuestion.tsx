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

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="options" />
            <Form.Label />
            Select answer
            <Form.Label />
            <Form.Select value={answer} onChange={updateAnswer}>
                {options.map((answer: string) => (
                    <option key={answer} value={answer}>
                        {answer}
                    </option>
                ))}
            </Form.Select>
            <Form.Group />
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

// MultipleChoiceQuestions
// The MultipleChoiceQuestions component allows a user to select an answer from a list in a dropdown,
// and then displays whether they got it correct or incorrect. The component takes in a parameter
// representing the expectedAnswer and also a parameter representing the list of options.

// You will need a state to represent the user’s currently selected choice.
// The initial state of the selected choice is the first element of the options list.
// When the user’s given answer matches the expectedAnswer, display ; otherwise display

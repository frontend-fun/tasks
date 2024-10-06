import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    // This is the State (Model)
    const [userAnswer, setUserAnswer] = useState<string>(" ");

    // This is the Control
    function handleChanges(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }
    // check if user answer matches the expected answer
    const isCorrect =
        userAnswer.trim().toLowerCase() === expectedAnswer.trim().toLowerCase();
    return (
        <div>
            <input
                type="text"
                value={userAnswer}
                onChange={handleChanges}
                placeholder="Enter your answer"
            />
            <div>{userAnswer && (isCorrect ? "✔️" : "❌")}</div>
        </div>
    );
}

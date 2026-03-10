import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    const ifCorrect = answer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                value={answer}
                onChange={(e) => {
                    setAnswer(e.target.value);
                }}
            />
            <div>{ifCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}

import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    return (
        <div>
            Check Answer
            <input
                type="text"
                value={answer}
                onChange={(event) => {
                    setAnswer(event.target.value);
                }}
            />
            <p>{answer === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}

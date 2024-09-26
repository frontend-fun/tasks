import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    const isCorrect = userAnswer.trim() === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={handleInputChange}
                placeholder="Type your answer"
            />
            {/* Show ❌ if no input is given */}
            <p>
                {userAnswer === "" ?
                    "❌"
                : isCorrect ?
                    "✔️"
                :   "❌"}
            </p>
        </div>
    );
}

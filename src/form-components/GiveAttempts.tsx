import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempt, setRequestedAttempt] = useState<number | "">("");

    const handleRequestChanges = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const value = event.target.value;
        if (value === "" || /^\d+$/.test(value)) {
            setRequestedAttempt(value === "" ? "" : parseInt(value, 10));
        }
    };

    const handleUseAttempts = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft((prev) => prev - 1);
        }
    };

    const handleGainAttempts = () => {
        if (typeof requestedAttempt === "number" && requestedAttempt > 0) {
            setAttemptsLeft((prev) => prev + requestedAttempt);
            setRequestedAttempt("");
        }
    };
    return (
        <div>
            <h3>Quiz Attempts</h3>
            <p> Attempts Left: {attemptsLeft}</p>
            <div>
                <input
                    type="number"
                    value={requestedAttempt}
                    onChange={handleRequestChanges}
                    placeholder="Enter number of attempts to gain"
                />
                <button onClick={handleGainAttempts}>Gain</button>
            </div>
            <button onClick={handleUseAttempts} disabled={attemptsLeft <= 0}>
                Use
            </button>
            {attemptsLeft <= 0 && <p> you are out of attempts!</p>}
        </div>
    );
}

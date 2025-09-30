import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const handleUse = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGain = () => {
        const parsedAttempts = parseInt(requestedAttempts);
        if (!isNaN(parsedAttempts) && requestedAttempts !== "") {
            setAttemptsLeft(attemptsLeft + parsedAttempts);
            setRequestedAttempts("");
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attemptsLeft}</div>
            <div>
                <input
                    type="number"
                    value={requestedAttempts}
                    onChange={(e) => {
                        setRequestedAttempts(e.target.value);
                    }}
                    placeholder="Enter number of attempts to gain"
                />
            </div>
            <div>
                <button onClick={handleUse} disabled={attemptsLeft === 0}>
                    use
                </button>
                <button onClick={handleGain}>gain</button>
            </div>
        </div>
    );
}

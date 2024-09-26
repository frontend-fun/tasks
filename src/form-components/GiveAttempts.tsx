import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequestedAttempts(event.target.value);
    };

    const useAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const gainAttempts = () => {
        const gainAmount = parseInt(requestedAttempts, 10);
        if (!isNaN(gainAmount)) {
            setAttemptsLeft(attemptsLeft + gainAmount);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>

            {/* Input box for specifying the number of attempts to gain */}
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleInputChange}
                placeholder="Enter attempts to gain"
            />

            <div>
                {/* Button to use an attempt (disabled if no attempts are left) */}
                <button onClick={useAttempt} disabled={attemptsLeft === 0}>
                    Use
                </button>

                {/* Button to gain the requested number of attempts */}
                <button onClick={gainAttempts}>Gain</button>
            </div>
        </div>
    );
}

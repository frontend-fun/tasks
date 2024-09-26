import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>(""); // Number of attempts requested

    // Handle numeric input change
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequestedAttempts(event.target.value); // Update the input value as the user types
    };

    // Decrease attempts by 1 when using an attempt
    const useAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1); // Decrease attempts left by one
        }
    };

    // Increase attempts by the amount specified in the input
    const gainAttempts = () => {
        const gainAmount = parseInt(requestedAttempts, 10); // Parse the input value as an integer

        if (!isNaN(gainAmount)) {
            setAttemptsLeft(attemptsLeft + gainAmount); // Increase attempts left by the parsed value
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

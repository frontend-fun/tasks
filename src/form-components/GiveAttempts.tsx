import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0); // Explicitly setting the type

    const handleUse = (): void => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGain = (): void => {
        const parsedAttempts = parseInt(requestedAttempts.toString(), 10);
        if (!isNaN(parsedAttempts) && parsedAttempts > 0) {
            setAttemptsLeft(attemptsLeft + parsedAttempts);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        if (value === "") {
            setRequestedAttempts(0); // Reset to 0 if input is empty
        } else {
            const parsedValue = parseInt(value, 10);
            if (!isNaN(parsedValue)) {
                setRequestedAttempts(parsedValue);
            }
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                <p>Attempts left: {attemptsLeft}</p>
                <input
                    type="number"
                    value={requestedAttempts}
                    onChange={handleChange} // Use the new handleChange function
                />
                <button onClick={handleGain}>Gain</button>
                <button onClick={handleUse} disabled={attemptsLeft <= 0}>
                    Use
                </button>
            </div>
        </div>
    );
}

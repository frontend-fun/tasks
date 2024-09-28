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

            <input
                type="number"
                value={requestedAttempts}
                onChange={handleInputChange}
                placeholder="Enter attempts to gain"
            />

            <div>
                <button onClick={useAttempt} disabled={attemptsLeft === 0}>
                    Use
                </button>

                <button onClick={gainAttempts}>Gain</button>
            </div>
        </div>
    );
}

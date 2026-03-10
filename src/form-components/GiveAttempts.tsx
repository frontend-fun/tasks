import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts remaining: {attempts}</div>
            <input
                type="number"
                value={request}
                onChange={(e) => {
                    setRequest(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                use
            </button>
            <button
                onClick={() => {
                    const amount = parseInt(request);
                    if (!isNaN(amount)) {
                        setAttempts(attempts + amount);
                    }
                }}
            >
                gain
            </button>
        </div>
    );
}

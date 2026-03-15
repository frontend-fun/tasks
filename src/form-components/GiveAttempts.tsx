import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function useAttempts() {
        setAttempts(attempts - 1);
    }

    function gainAttempts() {
        const num = parseInt(requestedAttempts);
        if (!isNaN(num)) {
            setAttempts(attempts + num);
        }
    }
    return (
        <div>
            Give Attempts
            <p>Attempts remaining: {attempts}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={(event) => {
                    setRequestedAttempts(event.target.value);
                }}
            />
            <button onClick={useAttempts} disabled={attempts === 0}>
                use
            </button>
            <button onClick={gainAttempts}>gain</button>
        </div>
    );
}

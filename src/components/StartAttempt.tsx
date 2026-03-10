import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    return (
        <div>
            <div>Attempts remaining: {attempts}</div>
            <Button
                onClick={() => {
                    if (attempts > 0) {
                        setInProgress(true);
                        setAttempts(attempts - 1);
                    }
                }}
                disabled={attempts === 0 || inProgress}
            >
                Start Quiz
            </Button>

            <Button
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
                disabled={inProgress}
            >
                Mulligan
            </Button>

            <Button
                onClick={() => {
                    setInProgress(false);
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
        </div>
    );
}

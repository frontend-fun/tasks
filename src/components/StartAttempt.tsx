import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    return (
        <span>
            <Button
                onClick={() => {
                    setInProgress(true);
                    setNumAttempts(numAttempts - 1);
                }}
                disabled={inProgress || numAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setInProgress(false);
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setNumAttempts(numAttempts + 1);
                }}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            Number of Attempts: {numAttempts};
        </span>
    );
}

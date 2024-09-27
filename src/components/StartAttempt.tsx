import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                    setProgress(!progress);
                }}
                disabled={progress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setProgress(!progress);
                }}
                disabled={!progress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
                disabled={progress}
            >
                Mulligan
            </Button>
            <span>Number of Attempts: {attempts}</span>
        </div>
    );
}

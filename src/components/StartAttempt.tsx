import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    function startQuiz(): void {
        setNumAttempts(numAttempts - 1);
        setInProgress(true);
    }
    function stopQuiz(): void {
        setInProgress(false);
    }
    function mulligan(): void {
        setNumAttempts(numAttempts + 1);
    }
    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={inProgress || numAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <div>Number of attempts left is {numAttempts}</div>
        </div>
    );
}

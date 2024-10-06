import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    const startQuiz = () => {
        if (attempt > 0) {
            setInProgress(true);
            setAttempt(attempt - 1);
        }
    };
    const stopQuiz = () => {
        setInProgress(false);
    };
    const mulligan = () => {
        setAttempt(attempt + 1);
    };

    return (
        <div>
            <h1>Start Attempt</h1>
            <div>Attempts left: {attempt}</div>

            <Button onClick={startQuiz} disabled={inProgress || attempt === 0}>
                Start Quiz
            </Button>

            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>

            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}

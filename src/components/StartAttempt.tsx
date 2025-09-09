import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    function startQuiz() {
        setInProgress(true);
        setAttempt(attempt - 1);
    }
    function stopQuiz() {
        setInProgress(false);
    }
    function mulligan() {
        setAttempt(attempt + 1);
    }
    return (
        <div>
            <div>Attempts: {attempt}</div>
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

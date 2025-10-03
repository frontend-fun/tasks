import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    function startQuiz(): void {
        setAttempts(attempts - 1);
        setInProgress(true);
    }
    function stopQuiz(): void {
        setInProgress(false);
    }
    function mulligan(): void {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>{" "}
            Attempts left: {attempts}
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>{" "}
            {}
        </div>
    );
}

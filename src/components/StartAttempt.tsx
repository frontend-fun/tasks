import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);
    function startQuiz(): void {
        if (!inProgress && attempts !== 0) {
            setProgress(true);
            setAttempts(attempts - 1);
        }
    }
    function stopQuiz(): void {
        setProgress(false);
    }
    function mulligan(): void {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <Button onClick={startQuiz} disabled={attempts === 0 || inProgress}>
                Start Quiz
            </Button>

            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            {<div>{`${attempts}`}</div>}
        </div>
    );
}

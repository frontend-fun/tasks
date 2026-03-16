import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const originalAttempts = 3;

    const [attempts, setAttempts] = useState<number>(originalAttempts);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        if (attempts > 0) {
            setAttempts(attempts - 1);
            setQuizInProgress(true);
        }
    }

    function stopQuiz(): void {
        setQuizInProgress(false);
    }

    function mulligan(): void {
        if (quizInProgress) {
            setAttempts(originalAttempts);
            setQuizInProgress(false);
        } else {
            setAttempts(attempts + 1);
        }
    }

    return (
        <div>
            <div>{attempts}</div>

            <Button
                onClick={startQuiz}
                disabled={quizInProgress || attempts <= 0}
            >
                Start Quiz
            </Button>

            <Button onClick={stopQuiz} disabled={!quizInProgress}>
                Stop Quiz
            </Button>

            <Button onClick={mulligan} disabled={quizInProgress}>
                Mulligan
            </Button>
        </div>
    );
}

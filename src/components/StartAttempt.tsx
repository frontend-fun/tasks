import React, { useState } from "react";
import { Button } from "react-bootstrap";

function randomAttempts(): number {
    return 1 + Math.floor(Math.random() * 9);
}

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(() => randomAttempts());
    const [quizRunning, setQuizRunning] = useState<boolean>(false);

    function startQuiz(): void {
        if (quizRunning || attempts <= 0) return;
        setAttempts(attempts - 1);
        setQuizRunning(true);
    }

    function stopQuiz(): void {
        setQuizRunning(false);
    }

    function mulligan(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <div>Attempts: {attempts}</div>

            <Button onClick={startQuiz} disabled={quizRunning || attempts <= 0}>
                Start Quiz
            </Button>

            <Button onClick={stopQuiz} disabled={!quizRunning}>
                Stop Quiz
            </Button>

            <Button onClick={mulligan} disabled={quizRunning}>
                Mulligan
            </Button>
        </div>
    );
}

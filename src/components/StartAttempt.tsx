import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [isAttemptStarted, setIsAttemptStarted] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function startQuiz() {
        setIsAttemptStarted(true);
        setAttempts(attempts - 1);
    }
    function stopQuiz() {
        setIsAttemptStarted(false);
    }
    function mulligan() {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <p>Attempts left: {attempts}</p>
            <Button
                onClick={startQuiz}
                disabled={isAttemptStarted || attempts <= 0}
            >
                Start Quiz
            </Button>

            <Button onClick={stopQuiz} disabled={!isAttemptStarted}>
                Stop Quiz
            </Button>

            <Button onClick={mulligan} disabled={isAttemptStarted}>
                Mulligan
            </Button>
            {isAttemptStarted && <p>Good luck!</p>}
        </div>
    );
}

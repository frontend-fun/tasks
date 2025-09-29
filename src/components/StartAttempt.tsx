import React, { useState } from "react";
import type { JSX } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    const startQuiz = () => {
        if (!inProgress && attempts > 0) {
            setInProgress(true);
            setAttempts(attempts - 1);
        }
    };

    const stopQuiz = () => {
        setInProgress(false);
    };

    const mulligan = () => {
        if (!inProgress) setAttempts(attempts + 1);
    };

    return (
        <div>
            <div>Attempts: {attempts}</div>
            <div className="mt-2">
                <Button
                    onClick={startQuiz}
                    disabled={inProgress || attempts === 0}
                >
                    Start Quiz
                </Button>{" "}
                <Button onClick={stopQuiz} disabled={!inProgress}>
                    Stop Quiz
                </Button>{" "}
                <Button onClick={mulligan} disabled={inProgress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}

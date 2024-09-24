import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [testing, setTesting] = useState<boolean>(false);
    function startQuiz(): void {
        setTesting(true);
        setAttempts(attempts - 1);
    }
    function mulligan(): void {
        setAttempts(attempts + 1);
    }
    function stopQuiz(): void {
        setTesting(false);
    }
    return (
        <div>
            <div>
                <p>Current Attempts: {attempts}</p>
            </div>
            <div>
                <Button onClick={startQuiz} disabled={testing || attempts == 0}>
                    Start Quiz
                </Button>
                <Button onClick={stopQuiz} disabled={!testing}>
                    Stop Quiz
                </Button>
                <Button onClick={mulligan} disabled={testing}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}

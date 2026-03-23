import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [started, setStarted] = useState<boolean>(false);
    function start_quiz(): void {
        setStarted(true);
        setAttempt(attempt - 1);
    }
    function stop_quiz(): void {
        setStarted(false);
    }
    function mulligan(): void {
        setAttempt(attempt + 1);
    }

    return (
        <div>
            <Button onClick={start_quiz} disabled={started || attempt === 0}>
                Start Quiz
            </Button>
            <Button onClick={stop_quiz} disabled={!started}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={started}>
                Mulligan
            </Button>
            Attempts Remaining: {attempt}
        </div>
    );
}

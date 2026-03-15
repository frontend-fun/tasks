import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempt] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    function start(): void {
        setAttempt(attempts - 1);
        setProgress(true);
    }

    function upAttempt(): void {
        setAttempt(attempts + 1);
    }

    function stop(): void {
        setProgress(false);
    }

    return (
        <div>
            <span>{attempts}</span>
            <div>
                <Button onClick={start} disabled={inProgress || attempts === 0}>
                    Start Quiz
                </Button>
                <Button onClick={stop} disabled={!inProgress}>
                    Stop Quiz
                </Button>
                <Button onClick={upAttempt} disabled={inProgress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}

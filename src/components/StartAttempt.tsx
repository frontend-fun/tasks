import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, editAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function start(): void {
        if (!inProgress && attempts > 0) {
            editAttempts(attempts - 1);
            setInProgress(!inProgress);
        }
    }
    function mulligan(): void {
        if (!inProgress) {
            editAttempts(attempts + 1);
        }
    }
    function stop(): void {
        if (inProgress) {
            setInProgress(!inProgress);
        }
    }
    return (
        <div>
            <div>
                Attempts Remaining: <span>{attempts}</span>
                <Button onClick={start} disabled={inProgress || attempts == 0}>
                    Start Quiz
                </Button>
                <Button onClick={stop} disabled={!inProgress}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={mulligan} disabled={inProgress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}

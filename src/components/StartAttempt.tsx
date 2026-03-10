import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    // function changeProgress() {
    //     setInProgress(inProgress ? false : true);
    // }

    return (
        <div>
            <div>Remaining Attempts: {attempts}</div>
            <div>
                {inProgress ? "Quiz in progress" : "Waiting to start quiz"}
            </div>
            <Button
                disabled={inProgress || attempts === 0}
                onClick={() => {
                    setAttempts(attempts - 1);
                    setInProgress(true);
                }}
            >
                Start Quiz
            </Button>
            <Button
                disabled={!inProgress}
                onClick={() => {
                    setInProgress(false);
                }}
            >
                Stop Quiz
            </Button>
            <Button
                disabled={inProgress}
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
            >
                Mulligan
            </Button>
        </div>
    );
}

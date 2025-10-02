import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    let [inProgress, setProgressState] = useState<boolean>(false);
    let [attempts, setValue] = useState<number>(4);

    function startQuiz(): void {
        setProgressState(true);
        setValue(attempts - 1);
    }
    function stopQuiz(): void {
        setProgressState(false);
    }
    function addOne(): void {
        setValue(attempts + 1);
    }

    return (
        <div>
            <p>Current Attempts: {attempts}</p>
            <Button onClick={startQuiz} disabled={attempts < 1 || inProgress}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={addOne} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}

import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizProg, setQuizProg] = useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                    setQuizProg(true);
                }}
                disabled={quizProg || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setQuizProg(false);
                }}
                disabled={!quizProg}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
                disabled={quizProg}
            >
                Mulligan
            </Button>
            <div>{attempts}</div>
        </div>
    );
}

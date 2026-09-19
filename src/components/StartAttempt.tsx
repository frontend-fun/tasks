import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [startAttmpts, setStartAttmpts] = useState<number>(4);
    const [inProg, setInProg] = useState<boolean>(false);
    return (
        <div>
            <div>{startAttmpts}</div>
            <Button
                disabled={inProg || startAttmpts === 0}
                onClick={() => {
                    setInProg(true);
                    setStartAttmpts(startAttmpts - 1);
                }}
            >
                Start Quiz
            </Button>
            <Button
                disabled={!inProg}
                onClick={() => {
                    setInProg(false);
                }}
            >
                Stop Quiz
            </Button>
            <Button
                disabled={inProg}
                onClick={() => {
                    setStartAttmpts(startAttmpts + 1);
                }}
            >
                Mulligan
            </Button>
        </div>
    );
}

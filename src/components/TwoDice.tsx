import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [left, setRollLeft] = useState<number>(0);
    const [right, setRollRight] = useState<number>(1);

    function rollR(): void {
        setRollRight(d6());
    }
    function rollL(): void {
        setRollLeft(d6());
    }

    let feedback: string = "";

    if (left === 1 && right === 1) {
        feedback = " You Lose :(";
    } else if (left === right) {
        feedback = "You Win!";
    }

    return (
        <div>
            <span data-testid="left-die">{left}</span>
            <span data-testid="right-die">{right}</span>

            <Button onClick={rollL}>Roll Left</Button>
            <Button onClick={rollR}>Roll Right</Button>
            {feedback && <p>{feedback}</p>}
        </div>
    );
}

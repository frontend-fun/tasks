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
    const [left, setScoreLeft] = useState<number>(1);
    const [right, setScoreRight] = useState<number>(2);
    function rollLeft(): void {
        setScoreLeft(d6());
        //console.log(count);
    }
    function rollRight(): void {
        setScoreRight(d6());
    }
    return (
        <div>
            <Button onClick={rollLeft}>Roll Left</Button>
            <span data-testid="left-die">{left}</span>
            <Button onClick={rollRight}>Roll Right</Button>
            <span data-testid="right-die">{right}</span>
            {left === 1 && right === 1 && <div>Lose</div>}
            {left === right && left !== 1 && <div>Win</div>}
        </div>
    );
}

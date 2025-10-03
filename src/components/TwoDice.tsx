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
    const [value1, setValue1] = useState<number>(0);
    const [value2, setValue2] = useState<number>(2);
    function rollLeft(): void {
        setValue1(d6());
    }
    function rollRight(): void {
        setValue2(d6());
    }
    return (
        <div>
            <span data-testid="left-die">{value1}</span>
            <span data-testid="right-die">{value2}</span>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            {value1 === value2 && value1 === 1 && <span>You lose</span>}
            {value1 === value2 && value1 !== 1 && <span>You win</span>}
        </div>
    );
}

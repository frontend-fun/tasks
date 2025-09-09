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
    const [state1, setState1] = useState<number>(2);
    const [state2, setState2] = useState<number>(4);

    function rollLeft(): void {
        setState1(d6());
    }
    function rollRight(): void {
        setState2(d6());
    }

    return (
        <div>
            <span data-testid="left-die">{state1} </span>
            <span data-testid="right-die"> {state2}</span>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            <div>
                {state1 === state2 && state1 === 1 ?
                    <span>Lose</span>
                : state1 === state2 ?
                    <span>Win</span>
                :   <span></span>}
            </div>
        </div>
    );
}
